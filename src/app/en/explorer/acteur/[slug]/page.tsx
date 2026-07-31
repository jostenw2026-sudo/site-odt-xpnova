import type { Metadata } from "next";
import ExplorerFamille from "@/components/ExplorerFamille";
import { explorer, getFamille } from "@/content/explorer";

export function generateStaticParams() {
  return explorer.en.familles.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = getFamille("en", slug);
  if (!f) return { title: "Family not found" };
  return {
    title: `${f.title} — Explore`,
    description: f.intermediation,
    alternates: {
      canonical: `/en/explorer/acteur/${slug}`,
      languages: { fr: `/explorer/acteur/${slug}`, en: `/en/explorer/acteur/${slug}` },
    },
  };
}

export default async function ActeurPageEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ExplorerFamille slug={slug} lang="en" />;
}
