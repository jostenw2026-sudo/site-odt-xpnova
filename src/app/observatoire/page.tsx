import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { ObsIcon } from "@/components/illustrations";
import { StatCard } from "@/components/data";
import { observatoires } from "@/content/observatoires";

export const metadata: Metadata = {
  title: "Observatoire territorial — données & cartes",
  description:
    "Eau, énergie, infrastructures, économie, agriculture, climat, gouvernance : indicateurs sourcés et comparaisons CEMAC des territoires d'Afrique centrale.",
  alternates: { canonical: "/observatoire" },
};

export default function ObservatoireHub() {
  return (
    <>
      <PageHero
        eyebrow="Observatoire territorial"
        title="La donnée avant l'opinion"
        lead="Sept observatoires thématiques, alimentés par des sources publiques citées et datées. On ne transforme pas un territoire qu'on ne mesure pas."
      />
      <Breadcrumbs items={[{ label: "Observatoire" }]} />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {observatoires.map((o) => (
            <Link
              key={o.slug}
              href={`/observatoire/${o.slug}`}
              className="group flex flex-col rounded-lg border border-line bg-paper p-6 no-underline transition-shadow hover:shadow-lg"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-teal group-hover:bg-royal">
                <ObsIcon slug={o.slug} className="h-6 w-6" />
              </span>
              <h2 className="title-3 mt-4 text-navy group-hover:text-royal">{o.title}</h2>
              <p className="mt-2 flex-1 text-grey">{o.short}</p>
              <span className="mt-4 font-semibold text-royal">Consulter →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="Aperçu"
          title="Trois indicateurs, trois réalités"
          intro="Extraits des observatoires — valeurs Cameroun, sources et millésimes affichés."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard code="EG.ELC.ACCS.RU.ZS" />
          <StatCard code="SH.STA.BASS.ZS" />
          <StatCard code="IT.NET.USER.ZS" />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/observatoire/methodologie-donnees"
            className="rounded-full border border-line bg-paper px-5 py-2 font-semibold text-navy no-underline hover:border-gold"
          >
            Méthodologie des données →
          </Link>
          <Link
            href="/observatoire/publications"
            className="rounded-full border border-line bg-paper px-5 py-2 font-semibold text-navy no-underline hover:border-gold"
          >
            Publications →
          </Link>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
