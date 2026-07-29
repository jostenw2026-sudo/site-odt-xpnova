import { ressources } from "@/content/ressources";
import { verifyValidationToken, signDownloadToken, siteUrl } from "@/lib/ressources-tokens";
import { smtpConfigured, sendLeadDownloadEmail } from "@/lib/mailer";

export const runtime = "nodejs";

/**
 * Validation d'une demande de document sensible.
 *  GET  ?t=<jeton> → page de confirmation (aucun envoi ; anti-préchargement).
 *  POST (champ t)  → vérifie le jeton, envoie au demandeur un lien de
 *                    téléchargement sécurisé (expirant), affiche le succès.
 */

function page(title: string, bodyHtml: string, status = 200): Response {
  const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex">
<title>${title} — ODT</title>
<style>
  body{font-family:Arial,Helvetica,sans-serif;background:#f4f5f7;color:#1d2939;margin:0;padding:32px 16px}
  .card{max-width:560px;margin:0 auto;background:#fff;border:1px solid #d0d5dd;border-radius:12px;overflow:hidden}
  .band{background:#0b2545;padding:16px 24px}.band b{color:#fff;font-size:18px;font-weight:800}.band b span{color:#c9a14a}
  .in{padding:24px}h1{font-size:19px;color:#0b2545;margin:0 0 12px}
  table{font-size:14.5px;border-collapse:collapse;margin:8px 0 20px}
  td{padding:6px 12px 6px 0;vertical-align:top}.k{color:#667085;white-space:nowrap}.v{font-weight:600}
  .btn{display:inline-block;border:0;cursor:pointer;font-weight:800;text-decoration:none;padding:12px 22px;border-radius:8px;font-size:15px;background:#c9a14a;color:#0b2545}
  .muted{color:#667085;font-size:12.5px;margin-top:16px}.ok{color:#067647;font-weight:700}.err{color:#b42318;font-weight:700}
</style></head><body><div class="card"><div class="band"><b>ODT<span> · XP-NOVA</span></b></div><div class="in">${bodyHtml}</div></div></body></html>`;
  return new Response(html, { status, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
}

export async function GET(req: Request) {
  const t = new URL(req.url).searchParams.get("t") ?? "";
  const claims = await verifyValidationToken(t);
  if (!claims) return page("Lien invalide", `<h1 class="err">Lien invalide ou expiré</h1><p>Ce lien de validation n'est plus valable (30 jours).</p>`, 400);
  const doc = ressources.find((r) => r.key === claims.key);
  if (!doc) return page("Document inconnu", `<h1 class="err">Document introuvable</h1>`, 404);
  return page(
    "Valider la demande",
    `<h1>Valider l'envoi du document</h1>
     <p>En confirmant, un lien de téléchargement sécurisé (valable 7 jours) sera envoyé par e-mail au demandeur.</p>
     <table>
       <tr><td class="k">Demandeur</td><td class="v">${claims.email.replace(/</g, "&lt;")}</td></tr>
       <tr><td class="k">Nom</td><td class="v">${(claims.nom ?? "—").replace(/</g, "&lt;")}</td></tr>
       <tr><td class="k">Organisation</td><td class="v">${(claims.organisation ?? "—").replace(/</g, "&lt;")}</td></tr>
       <tr><td class="k">Document</td><td class="v">${doc.title.replace(/</g, "&lt;")}</td></tr>
     </table>
     <form method="post"><input type="hidden" name="t" value="${t}">
       <button type="submit" class="btn">Valider &amp; envoyer le document →</button>
     </form>
     <p class="muted">Aucun document n'est envoyé tant que vous n'avez pas cliqué sur ce bouton.</p>`,
  );
}

export async function POST(req: Request) {
  const form = await req.formData().catch(() => null);
  const t = (form?.get("t") as string) ?? "";
  const claims = await verifyValidationToken(t);
  if (!claims) return page("Lien invalide", `<h1 class="err">Lien invalide ou expiré</h1>`, 400);
  const doc = ressources.find((r) => r.key === claims.key);
  if (!doc || !doc.file) return page("Document inconnu", `<h1 class="err">Document introuvable</h1>`, 404);
  if (!smtpConfigured()) {
    return page("Envoi impossible", `<h1 class="err">SMTP non configuré</h1><p>Impossible d'envoyer le lien pour l'instant.</p>`, 503);
  }
  try {
    const jti = crypto.randomUUID();
    const token = await signDownloadToken(doc.key, jti, "7d");
    const downloadUrl = `${siteUrl()}/api/ressources/download/${doc.key}?dl=${encodeURIComponent(token)}`;
    await sendLeadDownloadEmail(claims.email, doc.title, downloadUrl);
  } catch (err) {
    return page("Erreur", `<h1 class="err">Échec de l'envoi</h1><p>${(err as Error).message.replace(/</g, "&lt;")}</p>`, 500);
  }
  return page(
    "Document envoyé",
    `<h1 class="ok">✓ Document envoyé</h1>
     <p>Un lien de téléchargement sécurisé (valable 7 jours) vient d'être envoyé à <strong>${claims.email.replace(/</g, "&lt;")}</strong> pour <strong>« ${doc.title.replace(/</g, "&lt;")} »</strong>.</p>
     <p class="muted">Vous pouvez fermer cette page.</p>`,
  );
}
