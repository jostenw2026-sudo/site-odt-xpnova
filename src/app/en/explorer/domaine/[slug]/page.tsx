import type { Metadata } from "next";
import ExplorerDomaine from "@/components/ExplorerDomaine";
import { explorer, getDomaine } from "@/content/explorer";

export function generateStaticParams() {
  return explorer.en.domaines.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = getDomaine("en", slug);
  if (!d) return { title: "Domain not found" };
  return {
    title: `${d.title} — Explore`,
    description: d.short,
    alternates: {
      canonical: `/en/explorer/domaine/${slug}`,
      languages: { fr: `/explorer/domaine/${slug}`, en: `/en/explorer/domaine/${slug}` },
    },
  };
}

export default async function DomainePageEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ExplorerDomaine slug={slug} lang="en" />;
}
