import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner, IngenierieXpNova } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Financing territories: donors, PPPs, climate funds",
  description:
    "Preparing a fundable territorial project: donor requirements, PPPs, climate funds, public budgets — and the ODT chain that makes a portfolio bankable.",
  alternates: { canonical: "/en/financement", languages: { fr: "/financement", en: "/en/financement" } },
};

const WINDOWS = [
  {
    t: "Multilateral & bilateral donors",
    d: "World Bank, AfDB, European Union, AFD, GIZ, KfW, IsDB… They finance structured programmes, carried by clear governance, with safeguards and monitoring & evaluation.",
    exige: "They require: sound studies, a logical framework, compliant procurement, accountability.",
  },
  {
    t: "Climate funds",
    d: "Green Climate Fund (GCF), GEF, bilateral adaptation/mitigation windows: a major window still under-mobilised by Central African local governments.",
    exige: "They require: demonstrated climate additionality, vulnerability data.",
  },
  {
    t: "Public-private partnerships",
    d: "For revenue-generating components: logistics platforms, markets, productive energy, commercial services.",
    exige: "They require: a robust business model, documented risk sharing, a legal framework.",
  },
  {
    t: "Public budgets & national windows",
    d: "Public investment budget, municipal equipment funds, decentralised cooperation: the counterpart base that makes the other windows credible.",
    exige: "They require: budget inscription, project maturity, contracting-authority capacity.",
  },
];

export default function FinancingPageEn() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="Financing a territory's transformation"
        lead="The financing exists. What is missing are projects prepared to receive it: structured, governed, measurable."
      />
      <Breadcrumbs items={[{ label: "Financing" }]} lang="en" />

      <Section>
        <SectionTitle
          eyebrow="The principle"
          title="What financial partners actually finance"
          intro="No window finances an intention. They all finance the same thing: managed risk, clear governance, measurable impact."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {WINDOWS.map((g) => (
            <div key={g.t} className="flex flex-col rounded-lg border border-line bg-paper p-6">
              <h2 className="title-3 text-navy">{g.t}</h2>
              <p className="mt-2 flex-1 text-grey">{g.d}</p>
              <p className="mt-3 rounded-md bg-light px-3 py-2 text-sm font-medium text-navy">{g.exige}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="The ODT chain"
          title="Making a portfolio bankable"
          intro="Four links, in order — skipping a step always costs you at due-diligence time."
        />
        <ol className="grid gap-4 md:grid-cols-4">
          {[
            { t: "Data-driven diagnosis", d: "Territory profile, Observatory indicators, objectified needs." },
            { t: "Prioritised portfolio", d: "8–12 coherent projects, published selection criteria." },
            { t: "Structuring", d: "Studies, FCFA budgets, governance, safeguards — XP-NOVA engineering." },
            { t: "Financing round", d: "Aligning the windows: donors, climate, PPPs, public counterparts." },
          ].map((e, i) => (
            <li key={e.t} className="rounded-lg border border-line bg-paper p-5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold font-display font-bold text-navy">
                {i + 1}
              </span>
              <h3 className="mt-3 font-semibold text-navy">{e.t}</h3>
              <p className="mt-1 text-sm text-grey">{e.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 max-w-3xl">
          <IngenierieXpNova
            lang="en"
            liens={[
              { label: "Structuring & financial engineering", url: "https://xp-nova.com/metiers/structuration-de-projets" },
              { label: "Feasibility studies", url: "https://xp-nova.com/metiers/etudes-conseil" },
            ]}
          />
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="For donors" title="What ODT brings to a financial partner" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "A qualified pipeline", d: "Portfolios prepared to your standards — not lists of needs." },
            { t: "Verifiable data", d: "The Observatory documents baselines and enables measuring effects." },
            { t: "Accountability", d: "Verified milestones, published indicators, governance involving stakeholders." },
          ].map((c) => (
            <div key={c.t} className="rounded-lg border border-line bg-paper p-6">
              <div className="mb-3 h-1 w-8 rounded bg-gold" />
              <h3 className="font-semibold text-navy">{c.t}</h3>
              <p className="mt-1 text-sm text-grey">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Callout title="Institutions & partners" variant="gold">
            For a presentation of ODT and its pipeline:{" "}
            <Link href="/en/contact" className="font-semibold">
              request an institutional exchange →
            </Link>
          </Callout>
        </div>
      </Section>

      <CTABanner lang="en" />
    </>
  );
}
