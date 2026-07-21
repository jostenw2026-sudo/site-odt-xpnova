import { NextResponse } from "next/server";

// Réception du formulaire de contact.
// À la mise en production : brancher l'envoi e-mail (Resend/SMTP) + rate limiting + Turnstile.
// Pour l'instant (localhost) : validation + honeypot + log serveur.

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot anti-spam
    if (body.website) {
      return NextResponse.json({ ok: true }); // on ignore silencieusement
    }

    const required = ["nom", "organisation", "email", "pays", "message"];
    for (const f of required) {
      if (!body[f] || String(body[f]).trim() === "") {
        return NextResponse.json({ error: `Champ manquant : ${f}` }, { status: 400 });
      }
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(body.email))) {
      return NextResponse.json({ error: "E-mail invalide" }, { status: 400 });
    }

    // TODO production : envoi e-mail vers contact@xp-nova.com
    console.log("[contact] nouvelle demande :", {
      nom: body.nom,
      organisation: body.organisation,
      email: body.email,
      pays: body.pays,
      objet: body.objet ?? "",
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }
}
