import { NextResponse } from "next/server";
import { odooConfigured, odooCreate } from "@/lib/odoo";
import { ressources } from "@/content/ressources";
import { smtpConfigured, sendValidationRequestEmail } from "@/lib/mailer";
import { signValidationToken, siteUrl } from "@/lib/ressources-tokens";

// Demande d'un document "sur demande" -> CRM Odoo (crm.lead), source-taggé.
// Pour un document `request` disposant d'un PDF privé (`file`), on envoie en
// plus une demande de validation au propriétaire : après son clic, le lien de
// téléchargement sécurisé part au demandeur. Non bloquant.

const SOURCE = "odt.xp-nova.com — ressources";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.website) return NextResponse.json({ ok: true }); // honeypot

    const required = ["nom", "email", "pays", "document"];
    for (const f of required) {
      if (!body[f] || String(body[f]).trim() === "") {
        return NextResponse.json({ error: `Champ manquant : ${f}` }, { status: 400 });
      }
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(body.email))) {
      return NextResponse.json({ error: "E-mail invalide" }, { status: 400 });
    }

    const val = (k: string) => (body[k] ? String(body[k]).trim() : "");
    const recap = [
      `Document demandé : ${val("document")}`,
      val("organisation") && `Organisation : ${val("organisation")}`,
      val("pays") && `Pays : ${val("pays")}`,
      val("motif") && `Motif : ${val("motif")}`,
    ]
      .filter(Boolean)
      .join("\n");

    // Injection CRM Odoo — non bloquante.
    if (odooConfigured()) {
      try {
        const leadId = await odooCreate("crm.lead", {
          name: `[${SOURCE}] ${val("document")} — ${val("nom")}`,
          contact_name: val("nom"),
          email_from: val("email"),
          ...(val("organisation") ? { partner_name: val("organisation") } : {}),
          description: recap,
        });
        console.log(`[ressources ODT] lead Odoo créé (id=${leadId})`);
      } catch (err) {
        console.warn(`[ressources ODT] Odoo indisponible (demande tracée) : ${(err as Error).message}`);
      }
    } else {
      console.warn("[ressources ODT] Odoo non configuré — demande en log :", {
        nom: val("nom"), email: val("email"), pays: val("pays"), document: val("document"),
      });
    }

    // Livraison sécurisée : demande de validation au propriétaire (si doc privé).
    const key = val("documentKey");
    const doc =
      (key && ressources.find((r) => r.key === key)) ||
      ressources.find((r) => r.title === val("document"));
    if (doc && doc.mode === "request" && doc.file && smtpConfigured()) {
      try {
        const token = await signValidationToken({
          key: doc.key,
          email: val("email"),
          nom: val("nom") || undefined,
          organisation: val("organisation") || undefined,
        });
        const validateUrl = `${siteUrl()}/api/ressources/validate?t=${encodeURIComponent(token)}`;
        await sendValidationRequestEmail(
          { email: val("email"), nom: val("nom") || undefined, organisation: val("organisation") || undefined, pays: val("pays") || undefined, motif: val("motif") || undefined },
          doc.title,
          validateUrl,
        );
      } catch (err) {
        console.warn(`[ressources ODT] demande de validation échouée : ${(err as Error).message}`);
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }
}
