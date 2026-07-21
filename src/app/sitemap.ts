import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { metiers } from "@/content/metiers";
import { references } from "@/content/references";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticPaths = [
    "",
    "/cabinet",
    "/metiers",
    "/methode",
    "/references",
    "/equipe",
    "/ressources",
    "/engagements",
    "/contact",
  ];
  const now = new Date();
  return [
    ...staticPaths.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...metiers.map((m) => ({
      url: `${base}/metiers/${m.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...references.map((r) => ({
      url: `${base}/references/${r.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
