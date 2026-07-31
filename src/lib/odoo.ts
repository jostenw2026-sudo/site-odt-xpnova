/**
 * lib/odoo.ts — Client JSON-RPC minimal vers Odoo (même instance que agrovita).
 * Tous les formulaires du site transmettent leurs leads au CRM Odoo (crm.lead)
 * quand les variables ODOO_* sont configurées ; la base locale conserve
 * toujours une copie (trace + secours si Odoo est indisponible).
 *
 * Secrets injectés par l'environnement (Coolify) — jamais dans le dépôt :
 * ODOO_URL, ODOO_DB, ODOO_USER, ODOO_API_KEY.
 */

interface JsonRpcResponse<T> {
  result?: T;
  error?: { message?: string; data?: { message?: string } };
}

function config() {
  const url = process.env.ODOO_URL?.replace(/\/$/, '');
  const db = process.env.ODOO_DB;
  const user = process.env.ODOO_USER;
  const apiKey = process.env.ODOO_API_KEY;
  if (!url || !db || !user || !apiKey) return null;
  return { url, db, user, apiKey };
}

export const odooConfigured = (): boolean => config() !== null;

async function rpc<T>(url: string, service: string, method: string, args: unknown[]): Promise<T> {
  const res = await fetch(`${url}/jsonrpc`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'call',
      params: { service, method, args },
      id: Date.now(),
    }),
    signal: AbortSignal.timeout(15_000),
  });
  const data = (await res.json()) as JsonRpcResponse<T>;
  if (data.error) {
    throw new Error(data.error.data?.message ?? data.error.message ?? 'Erreur Odoo');
  }
  return data.result as T;
}

let cachedUid: number | null = null;

async function authenticate(): Promise<number> {
  const c = config();
  if (!c) throw new Error('Odoo non configuré');
  if (cachedUid) return cachedUid;
  const uid = await rpc<number | false>(c.url, 'common', 'authenticate', [c.db, c.user, c.apiKey, {}]);
  if (!uid) throw new Error('Authentification Odoo refusée');
  cachedUid = uid;
  return uid;
}

async function execute<T>(model: string, method: string, args: unknown[], kwargs: Record<string, unknown> = {}): Promise<T> {
  const c = config();
  if (!c) throw new Error('Odoo non configuré');
  try {
    const uid = await authenticate();
    return await rpc<T>(c.url, 'object', 'execute_kw', [c.db, uid, c.apiKey, model, method, args, kwargs]);
  } catch {
    // uid peut être périmé : une seule nouvelle tentative après ré-authentification.
    cachedUid = null;
    const uid = await authenticate();
    return await rpc<T>(c.url, 'object', 'execute_kw', [c.db, uid, c.apiKey, model, method, args, kwargs]);
  }
}

/** Crée un enregistrement Odoo (ex. crm.lead, hr.applicant). Retourne l'id créé. */
export async function odooCreate(model: string, values: Record<string, unknown>): Promise<number> {
  return execute<number>(model, 'create', [values]);
}

/** Recherche + lecture (ex. hr.job publiés). */
export async function odooSearchRead(
  model: string,
  domain: unknown[],
  fields: string[],
  kwargs: Record<string, unknown> = {},
): Promise<Record<string, unknown>[]> {
  return execute<Record<string, unknown>[]>(model, 'search_read', [domain], { fields, ...kwargs });
}

/**
 * Lit un document binaire de la GED (module Documents, Odoo 19) par nom exact,
 * éventuellement restreint à un espace (dossier) par son nom. Retourne le
 * contenu en base64 + mimetype, ou null si absent/indisponible. Sert à faire
 * d'Odoo le référentiel des documents servis par le site.
 */
export async function getDocumentDatas(
  name: string,
  folderName?: string,
): Promise<{ datas: string; mimetype: string; name: string } | null> {
  try {
    const domain: unknown[] = [["name", "=", name]];
    if (folderName) {
      const folders = await odooSearchRead(
        "documents.document",
        [["type", "=", "folder"], ["name", "=", folderName]],
        ["id"],
        { limit: 1 },
      );
      if (folders.length) domain.push(["folder_id", "=", folders[0].id]);
    }
    const rows = await odooSearchRead("documents.document", domain, ["datas", "mimetype", "name"], { limit: 1 });
    const r = rows[0];
    if (r && typeof r.datas === "string" && r.datas) {
      return {
        datas: r.datas,
        mimetype: typeof r.mimetype === "string" && r.mimetype ? r.mimetype : "application/pdf",
        name: String(r.name),
      };
    }
    return null;
  } catch {
    return null;
  }
}
