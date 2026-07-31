import { NextResponse } from "next/server";
import { odooConfigured, odooCreate } from "@/lib/odoo";

// Réception du formulaire de contact ODT (multipart/form-data) → CRM Odoo
// (crm.lead), source-taggé. Les pièces jointes éventuelles (note, TDR, plan…)
// sont OPTIONNELLES et rattachées via ir.attachment. Secrets ODOO_* injectés
// par l'environnement (Coolify). Non bloquant : si Odoo est indisponible ou
// non configuré, la demande est tracée en log (le visiteur n'est jamais bloqué).

export const runtime = "nodejs";

const SOURCE = "odt.xp-nova.com";
const MAX_FILES = 6;
const MAX_FILE = 5 * 1024 * 1024; // 5 Mo par fichier
const MAX_TOTAL = 15 * 1024 * 1024; // 15 Mo au total
const ALLOWED = /\.(pdf|docx?|xlsx?|jpe?g|png)$/i;

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const val = (k: string) => {
      const v = form.get(k);
      return typeof v === "string" ? v.trim() : "";
    };

    // Honeypot anti-spam
    if (val("website")) return NextResponse.json({ ok: true });

    const required = ["nom", "organisation", "email", "pays", "message"];
    for (const f of required) {
      if (!val(f)) return NextResponse.json({ error: `Champ manquant : ${f}` }, { status: 400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val("email"))) {
      return NextResponse.json({ error: "E-mail invalide" }, { status: 400 });
    }

    // Pièces jointes optionnelles (note de présentation, TDR, plan, budget…).
    const files = form.getAll("documents").filter((f): f is File => f instanceof File && f.size > 0);
    if (files.length > MAX_FILES) {
      return NextResponse.json({ error: `Trop de fichiers (max ${MAX_FILES}).` }, { status: 400 });
    }
    let total = 0;
    for (const f of files) {
      if (!ALLOWED.test(f.name)) {
        return NextResponse.json({ error: `Format non autorisé : ${f.name}` }, { status: 400 });
      }
      if (f.size > MAX_FILE) {
        return NextResponse.json({ error: `Fichier trop volumineux (max 5 Mo) : ${f.name}` }, { status: 400 });
      }
      total += f.size;
    }
    if (total > MAX_TOTAL) {
      return NextResponse.json({ error: "Pièces jointes trop volumineuses (max 15 Mo au total)." }, { status: 400 });
    }

    const recap = [
      val("typeOrg") && `Type d'organisation : ${val("typeOrg")}`,
      val("objet") && `Objet : ${val("objet")}`,
      val("pays") && `Pays : ${val("pays")}`,
      val("budget") && `Budget estimatif : ${val("budget")}`,
      val("telephone") && `Téléphone : ${val("telephone")}`,
      files.length ? `Pièces jointes : ${files.map((f) => f.name).join(", ")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    // Injection CRM Odoo — non bloquante.
    if (odooConfigured()) {
      try {
        const leadId = await odooCreate("crm.lead", {
          name: `[${SOURCE}] ${val("nom")}${val("objet") ? ` — ${val("objet")}` : ""}`,
          contact_name: val("nom"),
          email_from: val("email"),
          ...(val("telephone") ? { phone: val("telephone") } : {}),
          ...(val("organisation") ? { partner_name: val("organisation") } : {}),
          description: [recap, "", val("message")].filter((l) => l !== "").join("\n"),
        });
        console.log(`[contact ODT] lead Odoo créé (id=${leadId})`);
        // Pièces jointes → ir.attachment liées au lead (best-effort, une par une).
        for (const f of files) {
          try {
            const b64 = Buffer.from(await f.arrayBuffer()).toString("base64");
            await odooCreate("ir.attachment", {
              name: f.name,
              datas: b64,
              res_model: "crm.lead",
              res_id: leadId,
              ...(f.type ? { mimetype: f.type } : {}),
            });
          } catch (err) {
            console.warn(`[contact ODT] pièce jointe échouée (${f.name}) : ${(err as Error).message}`);
          }
        }
      } catch (err) {
        console.warn(`[contact ODT] Odoo indisponible (demande tracée) : ${(err as Error).message}`);
      }
    } else {
      console.warn("[contact ODT] Odoo non configuré — demande en log :", {
        nom: val("nom"),
        email: val("email"),
        pays: val("pays"),
        objet: val("objet"),
        fichiers: files.map((f) => f.name),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }
}
