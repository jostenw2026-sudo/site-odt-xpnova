import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner, StatutBadge } from "@/components/blocks";
import { ProgIcon } from "@/components/illustrations";
import { programmesEn, STATUTS_EN } from "@/content/en";
import type { StatutKey } from "@/content/site";

export const metadata: Metadata = {
  title: "Territories & Programmes — agropoles, corridors, poles",
  description:
    "Five structuring, fundable, measurable territorial programme models: agropole, economic corridor, growth pole, development basin, municipal portfolio.",
  alternates: { canonical: "/en/programmes", languages: { fr: "/programmes", en: "/en/programmes" } },
};

export default function ProgrammesHubEn() {
  return (
    <>
      <PageHero
        eyebrow="Territories & programmes"
        title="Models that structure territories"
        lead="An isolated project changes a neighbourhood; a coherent portfolio transforms a territory. Five documented, adaptable intervention models."
      />
      <Breadcrumbs items={[{ label: "Territories & Programmes" }]} lang="en" />

      <Section>
        <div className="mb-8 rounded-lg border border-line bg-light p-5">
          <p className="text-sm font-semibold text-navy">Reading the statuses — our transparency rule:</p>
          <ul className="mt-2 grid gap-2 text-sm text-grey md:grid-cols-3">
            {(Object.keys(STATUTS_EN) as StatutKey[]).map((k) => (
              <li key={k} className="flex items-start gap-2">
                <StatutBadge statut={k} lang="en" />
                <span>{STATUTS_EN[k].desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {programmesEn.map((p) => (
            <Link
              key={p.slug}
              href={`/en/programmes/${p.slug}`}
              className="group flex flex-col rounded-lg border border-line bg-paper p-6 no-underline transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-gold">
                  <ProgIcon type={p.type} className="h-6 w-6" />
                </span>
                <StatutBadge statut={p.statut} lang="en" />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-teal">
                {p.type} · horizon {p.horizon}
              </p>
              <h2 className="title-3 mt-1 text-navy group-hover:text-royal">{p.title}</h2>
              <p className="mt-2 flex-1 text-grey">{p.short}</p>
              <span className="mt-4 font-semibold text-royal">Discover the model →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="Your territory"
          title="And yours?"
          intro="Every territory deserves its profile: Observatory indicators, potential, first portfolio orientations. That is the starting point of any collaboration with ODT."
        />
        <Callout title="Territory profile — on request" variant="gold">
          We prepare your territory&apos;s profile (sourced data, potential, first portfolio
          orientations) as a basis for discussion — without commitment.{" "}
          <Link href="/en/contact" className="font-semibold">
            Request your territory profile →
          </Link>
        </Callout>
      </Section>

      <CTABanner lang="en" />
    </>
  );
}
