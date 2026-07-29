import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ressources } from "@/content/ressources";
import { verifyDownloadToken } from "@/lib/ressources-tokens";

export const runtime = "nodejs";

/**
 * GET /api/ressources/download/[key] — sert le PDF privé d'un document « request »
 * (private/ressources/<file>), uniquement avec un jeton `?dl=` valide émis après
 * validation du propriétaire (lien expirant 7 jours). Jamais exposé en statique.
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
  try {
    const buf = await readFile(path.join(process.cwd(), "private", "ressources", doc.file));
    return new NextResponse(new Uint8Array(buf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${doc.file}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return NextResponse.json({ ok: false, message: "Fichier introuvable." }, { status: 404 });
  }
}
