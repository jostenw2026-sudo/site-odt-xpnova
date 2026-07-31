import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ressources, GED_SPACE } from "@/content/ressources";
import { verifyDownloadToken } from "@/lib/ressources-tokens";
import { odooConfigured, getDocumentDatas } from "@/lib/odoo";

export const runtime = "nodejs";

/**
 * GET /api/ressources/download/[key] — sert le PDF privé d'un document « request »,
 * uniquement avec un jeton `?dl=` valide (lien expirant 7 jours, émis après
 * validation du propriétaire).
 *
 * Référentiel = la GED Odoo (module Documents, espace « Ressources du site ») :
 * le fichier est d'abord lu depuis Odoo par son nom exact (doc.gedName). Repli
 * automatique sur le PDF local (private/ressources/<file>) si Odoo est
 * indisponible ou le document absent — aucune régression.
 */
export async function GET(req: Request, ctx: { params: Promise<{ key: string }> }) {
  const { key } = await ctx.params;
  const doc = ressources.find((r) => r.key === key);
  if (!doc || !doc.file) {
    return NextResponse.json({ ok: false, message: "Ressource indisponible." }, { status: 404 });
  }
  const dl = new URL(req.url).searchParams.get("dl") ?? "";
  const valid = dl ? await verifyDownloadToken(dl, key) : false;
  if (!valid) {
    return NextResponse.json(
      { ok: false, message: "Ce document nécessite un lien de téléchargement valide (envoyé par e-mail après validation)." },
      { status: 403 },
    );
  }

  const filename = doc.file;

  // 1) Référentiel Odoo (GED) — source de vérité.
  if (odooConfigured() && doc.gedName) {
    const d = await getDocumentDatas(doc.gedName, GED_SPACE);
    if (d?.datas) {
      const buf = Buffer.from(d.datas, "base64");
      return new NextResponse(new Uint8Array(buf), {
        headers: {
          "Content-Type": d.mimetype || "application/pdf",
          "Content-Disposition": `attachment; filename="${filename}"`,
          "Cache-Control": "private, no-store",
        },
      });
    }
  }

  // 2) Repli : PDF local privé (secours si Odoo indisponible).
  try {
    const buf = await readFile(path.join(process.cwd(), "private", "ressources", filename));
    return new NextResponse(new Uint8Array(buf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return NextResponse.json({ ok: false, message: "Fichier introuvable." }, { status: 404 });
  }
}
