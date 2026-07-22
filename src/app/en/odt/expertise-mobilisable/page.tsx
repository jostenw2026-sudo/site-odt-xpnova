import type { Metadata } from "next";
import { Section, SectionTitle, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { fichesEn, promoteurEn, CADRE_GEQUIPS_EN } from "@/content/en";

export const metadata: Metadata = {
  title: "Mobilisable expertise — documented references",
  description:
    "37 years of engineering of major public facilities (airports, stadiums, campuses, water, energy) across 6 countries — capacities mobilisable for territorial programmes.",
  alternates: {
    canonical: "/en/odt/expertise-mobilisable",
    languages: { fr: "/odt/expertise-mobilisable", en: "/en/odt/expertise-mobilisable" },
  },
};

export default function ExpertisePageEn() {
  return (
    <>
      <PageHero
        eyebrow="About ODT · Credibility"
        title="Proven, mobilisable expertise"
        lead="ODT does not claim to have already transformed territories: it draws on real, documented engineering capacities that can be mobilised contractually."
      />
      <Breadcrumbs items={[{ label: "About ODT", href: "/en/odt" }, { label: "Mobilisable expertise" }]} lang="en" />

      <Section>
        <SectionTitle
          eyebrow="The promoter"
          title="37 years of major-project engineering"
          intro={`${promoteurEn.nom} — ${promoteurEn.titre}. ${promoteurEn.onige}.`}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {promoteurEn.reperes.map((r) => (
            <div key={r.periode} className="rounded-lg border border-line bg-paper p-5">
              <p className="font-display text-lg font-bold text-gold">{r.periode}</p>
              <p className="mt-1 text-ink/90">{r.texte}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-grey">Countries of experience: {promoteurEn.pays.join(" · ")}.</p>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="GEQUIPS references"
          title="Nine assignments documented in donor format"
          intro="Extracted from the official reference sheets of GEQUIPS SARL (a shareholder of XP-NOVA): verifiable periods, service values, staffing and clients."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {fichesEn.map((f) => (
            <article key={f.slug} className="flex flex-col rounded-lg border border-line bg-paper p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="title-3 text-navy">{f.projet}</h3>
                <span className="shrink-0 rounded bg-teal-soft px-2.5 py-1 text-xs font-bold uppercase text-navy">
                  {f.pays}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-gold">{f.mission}</p>
              <p className="mt-2 flex-1 text-sm text-grey">{f.descriptif}</p>
              <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-line pt-3 text-sm">
                <div>
                  <dt className="text-xs text-grey">Period</dt>
                  <dd className="font-semibold text-ink">{f.periode}</dd>
                </div>
                <div>
                  <dt className="text-xs text-grey">Services</dt>
                  <dd className="font-semibold text-ink">{f.valeurServices}</dd>
                </div>
                <div>
                  <dt className="text-xs text-grey">Team</dt>
                  <dd className="font-semibold text-ink">{f.effectif} experts</dd>
                </div>
              </dl>
              <p className="mt-2 text-xs text-grey">Client: {f.client}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Callout title="Engagement framework — applicable to all the sheets above" variant="gold">
            {CADRE_GEQUIPS_EN}
          </Callout>
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="Mobilisation mechanism" title="How these capacities serve your programmes" />
        <div className="prose-x max-w-3xl">
          <p>
            The articles of association of XP-NOVA SARL expressly provide for mobilising the
            technical, professional and human capacities of its shareholders — first among them
            GEQUIPS SARL — or of third parties, upon written commitment of availability, in
            accordance with procurement rules and the requirements of technical and financial
            partners. A technical support agreement binds the two structures.
          </p>
          <p>
            In practice: when an ODT territorial programme requires airport, hydraulic or
            public-facility engineering, these references and the corresponding experts are
            mobilised in the forms expected by donors (CVs, reference sheets, written commitments).
          </p>
        </div>
      </Section>

      <CTABanner lang="en" />
    </>
  );
}
