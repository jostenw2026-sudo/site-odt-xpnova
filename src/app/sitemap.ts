import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { observatoires } from "@/content/observatoires";
import { programmes } from "@/content/programmes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();
  const stat = (p: string, priority = 0.7): MetadataRoute.Sitemap[number] => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  });
  return [
    stat("", 1),
    stat("/odt", 0.9),
    stat("/programmes", 0.9),
    ...programmes.map((p) => stat(`/programmes/${p.slug}`, 0.8)),
    stat("/observatoire", 0.9),
    ...observatoires.map((o) => stat(`/observatoire/${o.slug}`, 0.8)),
    stat("/observatoire/publications", 0.6),
    stat("/observatoire/methodologie-donnees", 0.5),
    stat("/financement", 0.8),
    stat("/methodologie", 0.8),
    stat("/odt/gouvernance", 0.6),
    stat("/odt/expertise-mobilisable", 0.8),
    stat("/odt/esg-inclusion", 0.6),
    stat("/ressources", 0.5),
    stat("/contact", 0.7),
  ];
}
