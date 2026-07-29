import { NextResponse } from "next/server";
import { smtpConfigured, notifyRecipient, verifyTransport, sendTestEmail } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/diagnostic?token=… — état SMTP au runtime (ne renvoie jamais de
 * secret). Accès protégé par la variable d'environnement DIAGNOSTIC_TOKEN :
 * l'endpoint est désactivé (401) tant qu'elle n'est pas définie, et n'accepte
 * que ?token=<sa valeur>.
 *   ?verify=1    → teste connexion + auth SMTP sans envoyer
 *   ?email=send  → envoie un e-mail de test au destinataire des notifications
 */
export async function GET(req: Request) {
  const sp = new URL(req.url).searchParams;
  const token = process.env.DIAGNOSTIC_TOKEN;
  if (!token || sp.get("token") !== token) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const env = {
    SMTP_HOST: Boolean(process.env.SMTP_HOST),
    SMTP_USER: Boolean(process.env.SMTP_USER),
    SMTP_PASSWORD: Boolean(process.env.SMTP_PASSWORD),
    SMTP_PORT: process.env.SMTP_PORT ?? "(défaut 465)",
    SMTP_FROM: process.env.SMTP_FROM ? true : "(défaut = SMTP_USER)",
    NOTIFY_EMAIL: process.env.NOTIFY_EMAIL ? true : "(non défini → SMTP_USER)",
    AUTH_SECRET: Boolean(process.env.AUTH_SECRET),
  };

  let verify: string | undefined;
  if (sp.get("verify") === "1") {
    const r = await verifyTransport();
    verify = r.ok ? "connexion + authentification SMTP OK" : `ERREUR : ${r.error}`;
  }

  let test: string | undefined;
  if (sp.get("email") === "send") {
    if (!smtpConfigured()) {
      test = "SMTP non configuré au runtime — aucun e-mail ne peut partir (vérifiez env + Available at Runtime + redéploiement).";
    } else {
      try {
        await sendTestEmail();
        test = `OK — e-mail de test envoyé à ${notifyRecipient()}. Vérifiez cette boîte (et les spams).`;
      } catch (err) {
        test = `ERREUR d'envoi : ${(err as Error).message}`;
      }
    }
  }

  return NextResponse.json({
    ok: true,
    smtp: {
      configure: smtpConfigured(),
      variables: env,
      destinataireNotifications: smtpConfigured() ? notifyRecipient() : null,
      verify: verify ?? "ajoutez ?verify=1 pour tester la connexion SMTP (sans envoi)",
      test: test ?? "ajoutez ?email=send pour envoyer un e-mail de test",
    },
  });
}
