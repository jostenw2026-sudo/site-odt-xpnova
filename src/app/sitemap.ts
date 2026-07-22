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
    // Miroir anglais
    stat("/en", 0.9),
    stat("/en/odt", 0.8),
    stat("/en/programmes", 0.8),
    ...programmes.map((p) => stat(`/en/programmes/${p.slug}`, 0.7)),
    stat("/en/observatoire", 0.8),
    ...observatoires.map((o) => stat(`/en/observatoire/${o.slug}`, 0.7)),
    stat("/en/observatoire/publications", 0.5),
    stat("/en/observatoire/methodologie-donnees", 0.4),
    stat("/en/financement", 0.7),
    stat("/en/methodologie", 0.7),
    stat("/en/odt/gouvernance", 0.5),
    stat("/en/odt/expertise-mobilisable", 0.7),
    stat("/en/odt/esg-inclusion", 0.5),
    stat("/en/ressources", 0.4),
    stat("/en/contact", 0.6),
  ];
}
