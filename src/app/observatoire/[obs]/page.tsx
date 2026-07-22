import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, SectionTitle, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { StatCard, CemacCompare, TrendChart, IndicatorTable } from "@/components/data";
import { observatoires, getObservatoire } from "@/content/observatoires";

export function generateStaticParams() {
  return observatoires.map((o) => ({ obs: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ obs: string }>;
}): Promise<Metadata> {
  const { obs } = await params;
  const o = getObservatoire(obs);
  if (!o) return {};
  return {
    title: `${o.title} — données sourcées`,
    description: `${o.short} Indicateurs sourcés (Banque mondiale/WDI), comparaisons CEMAC et enjeux territoriaux.`,
    alternates: { canonical: `/observatoire/${o.slug}` },
  };
}

export default async function ObservatoirePage({ params }: { params: Promise<{ obs: string }> }) {
  const { obs } = await params;
  const o = getObservatoire(obs);
  if (!o) notFound();

  return (
    <>
      <PageHero eyebrow="Observatoire territorial" title={o.title} lead={o.intro} />
      <Breadcrumbs items={[{ label: "Observatoire", href: "/observatoire" }, { label: o.title }]} />

      <Section>
        <SectionTitle eyebrow="Indicateurs clés" title="Où en sommes-nous ?" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {o.statCodes.map((c) => (
            <StatCard key={c} code={c} />
          ))}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <CemacCompare code={o.compareCode} />
          {o.serieCode ? <TrendChart code={o.serieCode} /> : <IndicatorTable codes={o.statCodes} />}
        </div>
      </Section>

      <Section tone="light">
        <SectionTitle eyebrow="Enjeux" title="Ce que la donnée commande de faire" />
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
            <Callout title="Écosystème XP-NOVA" variant="gold">
              <a href={o.lienEcosysteme.url} className="font-semibold">
                {o.lienEcosysteme.label} →
              </a>
            </Callout>
          </div>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/observatoire/methodologie-donnees"
            className="rounded-full border border-line bg-paper px-5 py-2 text-sm font-semibold text-navy no-underline hover:border-gold"
          >
            Sources & méthodologie →
          </Link>
          <Link
            href="/programmes"
            className="rounded-full border border-line bg-paper px-5 py-2 text-sm font-semibold text-navy no-underline hover:border-gold"
          >
            Les programmes qui répondent à ces enjeux →
          </Link>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
