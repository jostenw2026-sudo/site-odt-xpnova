import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, SectionTitle, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { StatCard, CemacCompare, TrendChart, IndicatorTable } from "@/components/data";
import { observatoires, getObservatoire } from "@/content/observatoires";
import { observatoiresEn, getObsEn } from "@/content/en";

export function generateStaticParams() {
  return observatoiresEn.map((o) => ({ obs: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ obs: string }>;
}): Promise<Metadata> {
  const { obs } = await params;
  const o = getObsEn(obs);
  if (!o) return {};
  return {
    title: `${o.title} — sourced data`,
    description: `${o.short} Sourced indicators (World Bank/WDI), CEMAC comparisons and territorial stakes.`,
    alternates: {
      canonical: `/en/observatoire/${o.slug}`,
      languages: { fr: `/observatoire/${o.slug}`, en: `/en/observatoire/${o.slug}` },
    },
  };
}

export default async function ObservatoryPageEn({ params }: { params: Promise<{ obs: string }> }) {
  const { obs } = await params;
  const o = getObsEn(obs);
  const oFr = getObservatoire(obs);
  if (!o || !oFr) notFound();

  return (
    <>
      <PageHero eyebrow="Territorial Observatory" title={o.title} lead={o.intro} />
      <Breadcrumbs items={[{ label: "Observatory", href: "/en/observatoire" }, { label: o.title }]} lang="en" />

      <Section>
        <SectionTitle eyebrow="Key indicators" title="Where do we stand?" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {oFr.statCodes.map((c) => (
            <StatCard key={c} code={c} lang="en" />
          ))}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <CemacCompare code={oFr.compareCode} lang="en" />
          {oFr.serieCode ? <TrendChart code={oFr.serieCode} lang="en" /> : <IndicatorTable codes={oFr.statCodes} lang="en" />}
        </div>
      </Section>

      <Section tone="light">
        <SectionTitle eyebrow="Stakes" title="What the data tells us to do" />
        <div className="grid gap-4 md:grid-cols-3">
          {o.enjeux.map((e, i) => (
            <div key={i} className="rounded-lg border border-line bg-paper p-6">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-teal font-display text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="mt-3 text-ink/90">{e}</p>
            </div>
          ))}
        </div>
        {o.lienEcosysteme && (
          <div className="mt-6">
            <Callout title="XP-NOVA ecosystem" variant="gold">
              <a href={o.lienEcosysteme.url} className="font-semibold">
                {o.lienEcosysteme.label} →
              </a>
            </Callout>
          </div>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/en/observatoire/methodologie-donnees" className="rounded-full border border-line bg-paper px-5 py-2 text-sm font-semibold text-navy no-underline hover:border-gold">
            Sources & methodology →
          </Link>
          <Link href="/en/programmes" className="rounded-full border border-line bg-paper px-5 py-2 text-sm font-semibold text-navy no-underline hover:border-gold">
            The programmes that answer these stakes →
          </Link>
        </div>
      </Section>

      <CTABanner lang="en" />
    </>
  );
}
