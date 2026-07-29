/**
 * lib/mailer.ts — e-mails transactionnels via SMTP (nodemailer) pour la
 * livraison des documents « sur demande » : demande de validation au
 * propriétaire, puis lien de téléchargement sécurisé au demandeur.
 * Variables (Coolify) : SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD,
 * SMTP_FROM (opt.), NOTIFY_EMAIL (opt.). Sans SMTP : envoi désactivé (les
 * leads Odoo continuent de fonctionner).
 */
import nodemailer from "nodemailer";

export function smtpConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD);
}

let cached: nodemailer.Transporter | null = null;

function transport(): nodemailer.Transporter {
  if (cached) return cached;
  const port = Number(process.env.SMTP_PORT ?? 465);
  cached = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    pool: true,
    maxConnections: 3,
    socketTimeout: 30_000,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
  });
  return cached;
}

export function notifyRecipient(): string {
  return process.env.NOTIFY_EMAIL ?? process.env.SMTP_USER ?? "contact@xp-nova.com";
}

function wrapHtml(bodyHtml: string): string {
  return `<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#1d2939">
  <div style="background:#0b2545;padding:18px 24px;border-radius:10px 10px 0 0">
    <span style="color:#fff;font-size:18px;font-weight:800">ODT<span style="color:#c9a14a"> · XP-NOVA</span></span>
  </div>
  <div style="border:1px solid #d0d5dd;border-top:none;border-radius:0 0 10px 10px;padding:24px">
    ${bodyHtml}
    <p style="color:#667085;font-size:13px;margin-top:24px">ODT · Opérateur de Développement Territorial — <a href="https://odt.xp-nova.com" style="color:#c9a14a">odt.xp-nova.com</a></p>
  </div>
</div>`;
}

/** Demande de validation au PROPRIÉTAIRE pour un document sensible. */
export async function sendValidationRequestEmail(
  lead: { email: string; nom?: string; organisation?: string; pays?: string; motif?: string },
  docTitre: string,
  validateUrl: string,
): Promise<void> {
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER!;
  const rows: [string, string][] = [
    ["E-mail", lead.email],
    ["Nom", lead.nom ?? "—"],
    ["Organisation", lead.organisation ?? "—"],
    ["Pays", lead.pays ?? "—"],
    ["Motif", lead.motif ?? "—"],
    ["Document demandé", docTitre],
  ];
  const table = rows
    .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#667085;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:6px 0;font-weight:600">${v.replace(/</g, "&lt;")}</td></tr>`)
    .join("");
  await transport().sendMail({
    from: `ODT · XP-NOVA <${from}>`,
    to: notifyRecipient(),
    replyTo: lead.email,
    subject: `Demande de document à valider — ${lead.email}`,
    text: `Nouvelle demande du document « ${docTitre} ».\n\n${rows.map(([k, v]) => `${k} : ${v}`).join("\n")}\n\nPour valider et envoyer le document au demandeur, ouvrez :\n${validateUrl}`,
    html: wrapHtml(`<p style="font-weight:700;color:#0b2545">Demande de document à valider</p>
    <p>Un visiteur demande le document <strong>« ${docTitre} »</strong>. Vérifiez la demande, puis validez pour lui envoyer un lien de téléchargement sécurisé (valable 7 jours).</p>
    <table style="font-size:14.5px;border-collapse:collapse;margin:8px 0 16px">${table}</table>
    <p><a href="${validateUrl}" style="display:inline-block;background:#0b2545;color:#fff;font-weight:700;text-decoration:none;padding:12px 22px;border-radius:8px">Valider &amp; envoyer le document →</a></p>
    <p style="color:#667085;font-size:12px;margin-top:14px">Si vous ne reconnaissez pas cette demande, ignorez cet e-mail : aucun document n'est envoyé tant que vous n'avez pas validé.</p>`),
  });
}

/** Lien de téléchargement envoyé au LEAD après validation (expirant 7 jours). */
export async function sendLeadDownloadEmail(to: string, docTitre: string, downloadUrl: string): Promise<void> {
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER!;
  await transport().sendMail({
    from: `ODT · XP-NOVA <${from}>`,
    to,
    subject: `Votre document est disponible — ${docTitre}`,
    text: `Bonjour,\n\nVotre demande a été validée. Vous pouvez télécharger « ${docTitre} » via ce lien sécurisé (valable 7 jours) :\n${downloadUrl}\n\nODT — odt.xp-nova.com`,
    html: wrapHtml(`<p>Bonjour,</p>
    <p>Votre demande a été validée. Vous pouvez télécharger le document <strong>« ${docTitre} »</strong> ci-dessous. Ce lien vous est personnel et reste valable <strong>7 jours</strong>.</p>
    <p style="margin:18px 0"><a href="${downloadUrl}" style="display:inline-block;background:#c9a14a;color:#0b2545;font-weight:800;text-decoration:none;padding:12px 22px;border-radius:8px">Télécharger le document (PDF) →</a></p>
    <p style="color:#667085;font-size:12px">Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :<br/>${downloadUrl}</p>`),
  });
}

/** Vérifie la connexion + l'authentification SMTP sans envoyer d'e-mail. */
export async function verifyTransport(): Promise<{ ok: boolean; error?: string }> {
  if (!smtpConfigured()) return { ok: false, error: "SMTP non configuré (SMTP_HOST / SMTP_USER / SMTP_PASSWORD)." };
  try {
    await transport().verify();
    return { ok: true };
  } catch (err) {
    cached = null;
    return { ok: false, error: (err as Error).message };
  }
}

/** Envoie un e-mail de test au destinataire des notifications (diagnostic). */
export async function sendTestEmail(): Promise<void> {
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER!;
  await transport().sendMail({
    from: `ODT · XP-NOVA <${from}>`,
    to: notifyRecipient(),
    subject: "[TEST] Diagnostic SMTP — ODT",
    text: "E-mail de test de diagnostic ODT. Si vous le recevez, le SMTP fonctionne de bout en bout.",
  });
}
