import type { Metadata } from "next";
import { Section, SectionTitle } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner, IngenierieXpNova } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Methodology — the territorial cycle in 6 phases",
  description:
    "From diagnosis to impact measurement: the ODT territorial cycle in six phases, backed by XP-NOVA's proven method. Every phase produces a verifiable deliverable.",
  alternates: { canonical: "/en/methodologie", languages: { fr: "/methodologie", en: "/en/methodologie" } },
};

const PHASES = [
  { t: "Understand", s: "Territorial diagnosis", d: "Data-driven territory profile (Observatory), actors, constraints, potential. Deliverable: a shared, objectified diagnosis." },
  { t: "Design", s: "Vision & portfolio", d: "A development vision and a coherent project portfolio — prioritised on published criteria. Deliverable: a portfolio validated by local governance." },
  { t: "Structure", s: "Governance & financing", d: "Studies, FCFA budgets, institutional set-up, safeguards, financing round. Deliverable: bankable dossiers." },
  { t: "Deliver", s: "Steered programmes", d: "Delivery under XP-NOVA engineering: owner's engineering, works supervision, control. Deliverable: facilities and services handed over." },
  { t: "Sustain", s: "Local capacity", d: "Management models, maintenance, training of local teams. Deliverable: autonomous operating arrangements." },
  { t: "Measure", s: "Published impact", d: "Indicators tracked over time and published — the territory measures its own progress. Deliverable: verifiable impact reports." },
];

export default function MethodologyPageEn() {
  return (
    <>
      <PageHero
        eyebrow="Methodology"
        title="The territorial cycle"
        lead="Six phases inherited from the XP-NOVA method, applied at the scale of a territory. Every phase produces a verifiable deliverable."
      />
      <Breadcrumbs items={[{ label: "Methodology" }]} lang="en" />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PHASES.map((p, i) => (
            <div key={p.t} className="rounded-lg border border-line bg-paper p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold font-display text-lg font-bold text-navy">
                  {i + 1}
                </span>
                <div>
                  <h2 className="title-3 text-navy">{p.t}</h2>
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal">{p.s}</p>
                </div>
              </div>
              <p className="mt-3 text-grey">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="The toolkit"
          title="A method backed by real engineering"
          intro="ODT's territorial methodology is not an abstraction: it is equipped by the XP-NOVA disciplines, proven on major public facilities."
        />
        <div className="max-w-3xl">
          <IngenierieXpNova
            lang="en"
            liens={[
              { label: "The XP-NOVA method (6 phases)", url: "https://xp-nova.com/methode" },
              { label: "Studies & Consulting", url: "https://xp-nova.com/metiers/etudes-conseil" },
              { label: "Owner's engineering", url: "https://xp-nova.com/metiers/amo-amoa" },
              { label: "Monitoring & Evaluation", url: "https://xp-nova.com/metiers/suivi-evaluation" },
            ]}
          />
        </div>
      </Section>

      <CTABanner lang="en" />
    </>
  );
}
