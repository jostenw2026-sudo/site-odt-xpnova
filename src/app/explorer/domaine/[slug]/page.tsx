import type { Metadata } from "next";
import ExplorerDomaine from "@/components/ExplorerDomaine";
import { explorer, getDomaine } from "@/content/explorer";

export function generateStaticParams() {
  return explorer.fr.domaines.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = getDomaine("fr", slug);
  if (!d) return { title: "Domaine introuvable" };
  return {
    title: `${d.title} — Explorer`,
    description: d.short,
    alternates: {
      canonical: `/explorer/domaine/${slug}`,
      languages: { fr: `/explorer/domaine/${slug}`, en: `/en/explorer/domaine/${slug}` },
    },
  };
}

export default async function DomainePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ExplorerDomaine slug={slug} lang="fr" />;
}
