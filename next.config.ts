import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    // Migration A.1 : l'ancien site des métiers servi sur odt.xp-nova.com vit
    // désormais sur xp-nova.com — redirections permanentes (SEO, 30 pages indexées).
    const to = (p: string) => `https://xp-nova.com${p}`;
    return [
      { source: "/metiers", destination: to("/metiers"), permanent: true },
      { source: "/metiers/:path*", destination: to("/metiers/:path*"), permanent: true },
      { source: "/references", destination: to("/references"), permanent: true },
      { source: "/references/:path*", destination: to("/references/:path*"), permanent: true },
      { source: "/cabinet", destination: to("/cabinet"), permanent: true },
      { source: "/equipe", destination: to("/equipe"), permanent: true },
      { source: "/equipe/:path*", destination: to("/equipe/:path*"), permanent: true },
      { source: "/engagements", destination: to("/engagements"), permanent: true },
      // /methode (métiers) → notre /methodologie territoriale n'est pas équivalente :
      // on renvoie vers la méthode du cabinet, qui reste la référence des métiers.
      { source: "/methode", destination: to("/methode"), permanent: true },
    ];
  },
};

export default nextConfig;
