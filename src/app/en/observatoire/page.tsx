import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { ObsIcon } from "@/components/illustrations";
import { StatCard } from "@/components/data";
import { observatoiresEn } from "@/content/en";

export const metadata: Metadata = {
  title: "Territorial Observatory — data & maps",
  description:
    "Water, energy, infrastructure, economy, agriculture, climate, governance: sourced indicators and CEMAC comparisons for the territories of Central Africa.",
  alternates: { canonical: "/en/observatoire", languages: { fr: "/observatoire", en: "/en/observatoire" } },
};

export default function ObservatoryHubEn() {
  return (
    <>
      <PageHero
        eyebrow="Territorial Observatory"
        title="Data before opinion"
        lead="Seven thematic observatories, fed by cited and dated public sources. You cannot transform a territory you do not measure."
      />
      <Breadcrumbs items={[{ label: "Observatory" }]} lang="en" />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {observatoiresEn.map((o) => (
            <Link
              key={o.slug}
              href={`/en/observatoire/${o.slug}`}
              className="group flex flex-col rounded-lg border border-line bg-paper p-6 no-underline transition-shadow hover:shadow-lg"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-teal group-hover:bg-royal">
                <ObsIcon slug={o.slug} className="h-6 w-6" />
              </span>
              <h2 className="title-3 mt-4 text-navy group-hover:text-royal">{o.title}</h2>
              <p className="mt-2 flex-1 text-grey">{o.short}</p>
              <span className="mt-4 font-semibold text-royal">View →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="Snapshot"
          title="Three indicators, three realities"
          intro="Extracts from the observatories — Cameroon values, sources and vintages displayed."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard code="EG.ELC.ACCS.RU.ZS" lang="en" />
          <StatCard code="SH.STA.BASS.ZS" lang="en" />
          <StatCard code="IT.NET.USER.ZS" lang="en" />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/en/observatoire/methodologie-donnees" className="rounded-full border border-line bg-paper px-5 py-2 font-semibold text-navy no-underline hover:border-gold">
            Data methodology →
          </Link>
          <Link href="/en/observatoire/publications" className="rounded-full border border-line bg-paper px-5 py-2 font-semibold text-navy no-underline hover:border-gold">
            Publications →
          </Link>
        </div>
      </Section>

      <CTABanner lang="en" />
    </>
  );
}
