/**
 * lib/ressources-tokens.ts — jetons signés (JWT/jose, clé = AUTH_SECRET) pour
 * la livraison des documents « sur demande » avec validation :
 *   1. VALIDATION — envoyé au propriétaire (clé doc + e-mail + nom + organisation).
 *   2. DOWNLOAD   — envoyé au lead après validation (clé doc uniquement, expirant).
 * Jetons signés (non chiffrés) : aucune donnée sensible autre que ci-dessus.
 */
import { SignJWT, jwtVerify } from "jose";

function secret(): Uint8Array {
  return new TextEncoder().encode(process.env.AUTH_SECRET ?? "dev-secret-change-me");
}

export interface ValidationClaims {
  key: string;
  email: string;
  nom?: string;
  organisation?: string;
}

export function siteUrl(): string {
  return (
    process.env.SITE_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://odt.xp-nova.com"
  ).replace(/\/$/, "");
}

export async function signValidationToken(c: ValidationClaims): Promise<string> {
  return new SignJWT({ purpose: "r-validate", key: c.key, email: c.email, nom: c.nom ?? "", organisation: c.organisation ?? "" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret());
}

export async function verifyValidationToken(token: string): Promise<ValidationClaims | null> {
  try {
    const { payload } = await jwtVerify(token, secret());
    if (payload.purpose !== "r-validate" || typeof payload.key !== "string" || typeof payload.email !== "string") return null;
    return {
      key: payload.key,
      email: payload.email,
      nom: typeof payload.nom === "string" && payload.nom ? payload.nom : undefined,
      organisation: typeof payload.organisation === "string" && payload.organisation ? payload.organisation : undefined,
    };
  } catch {
    return null;
  }
}

export async function signDownloadToken(key: string, jti: string, ttl = "7d"): Promise<string> {
  return new SignJWT({ purpose: "r-download", key })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setJti(jti)
    .setExpirationTime(ttl)
    .sign(secret());
}

export async function verifyDownloadToken(token: string, key: string): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(token, secret());
    return payload.purpose === "r-download" && payload.key === key;
  } catch {
    return false;
  }
}
