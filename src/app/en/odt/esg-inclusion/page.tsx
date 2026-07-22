import type { Metadata } from "next";
import { Section, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";

export const metadata: Metadata = {
  title: "ESG, gender & inclusion",
  description:
    "ODT's environmental, social and governance commitments: safeguards, inclusion, gender, quality — built into programme design.",
  alternates: { canonical: "/en/odt/esg-inclusion", languages: { fr: "/odt/esg-inclusion", en: "/en/odt/esg-inclusion" } },
};

const COMMITMENTS = [
  {
    t: "Environment & safeguards",
    points: [
      "Environmental and social assessment from the programme design stage.",
      "Climate resilience built into infrastructure sizing.",
      "Mitigation hierarchy: avoid, reduce, offset — documented.",
    ],
  },
  {
    t: "Gender & inclusion",
    points: [
      "Participation of women and young people in programme bodies.",
      "Inclusive community consultations before any works commitment.",
      "Sex-disaggregated indicators in monitoring & evaluation.",
    ],
  },
  {
    t: "Social & local employment",
    points: [
      "Priority to local employment and businesses in delivery.",
      "Skills transfer: every programme builds local capacity.",
      "Health and safety on sites, without compromise.",
    ],
  },
  {
    t: "Governance & integrity",
    points: [
      "Zero tolerance: corruption, fraud, conflicts of interest.",
      "Traceability of decisions and disbursements (verified milestones).",
      "Published accountability: indicators and reviews accessible to stakeholders.",
    ],
  },
];

export default function EsgPageEn() {
  return (
    <>
      <PageHero
        eyebrow="About ODT · Credibility"
        title="ESG, gender & inclusion"
        lead="A territorial programme that neglects the environment, women or communities is not a sustainable programme — it is a deferred liability."
      />
      <Breadcrumbs items={[{ label: "About ODT", href: "/en/odt" }, { label: "ESG & inclusion" }]} lang="en" />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {COMMITMENTS.map((e) => (
            <div key={e.t} className="rounded-lg border border-line bg-paper p-6">
              <h2 className="title-3 text-navy">{e.t}</h2>
              <ul className="mt-3 space-y-2">
                {e.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-ink/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Callout title="Transparency on the state of formalisation" variant="gold">
            The group&apos;s formal policies (ESG, gender & inclusion, anti-corruption, quality,
            HSE) are being published on xp-nova.com/engagements. The commitments above apply to
            every ODT programme as of today and are enforceable in our agreements.
          </Callout>
        </div>
      </Section>

      <CTABanner lang="en" />
    </>
  );
}
