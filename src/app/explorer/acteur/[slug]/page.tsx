import type { Metadata } from "next";
import ExplorerFamille from "@/components/ExplorerFamille";
import { explorer, getFamille } from "@/content/explorer";

export function generateStaticParams() {
  return explorer.fr.familles.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = getFamille("fr", slug);
  if (!f) return { title: "Famille introuvable" };
  return {
    title: `${f.title} — Explorer`,
    description: f.intermediation,
    alternates: {
      canonical: `/explorer/acteur/${slug}`,
      languages: { fr: `/explorer/acteur/${slug}`, en: `/en/explorer/acteur/${slug}` },
    },
  };
}

export default async function ActeurPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ExplorerFamille slug={slug} lang="fr" />;
}
