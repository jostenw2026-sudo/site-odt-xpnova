import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { refSummary } from "@/content/references";
import { promoteurEn, CADRE_GEQUIPS_EN } from "@/content/en";

export const metadata: Metadata = {
  title: "Mobilisable expertise — engineering capacities",
  description:
    "37 years of engineering of major public facilities (airports, stadiums, campuses, buildings) across several countries — a summary of mobilisable capacities. Detailed references and CVs on request.",
  alternates: {
    canonical: "/en/odt/expertise-mobilisable",
    languages: { fr: "/odt/expertise-mobilisable", en: "/en/odt/expertise-mobilisable" },
  },
};

const SECTEURS_EN: Record<string, string> = {
  aeroport: "Airports",
  stade: "Stadiums & sports complexes",
  campus: "Campuses & education facilities",
  batiment: "Buildings & high-rises",
  eau: "Water & networks",
  energie: "Energy",
};

const dossierHref =
  "/en/contact?objet=" +
  encodeURIComponent("Request the reference dossier (assignments & detailed CVs)") +
  "#contact-form";

export default function ExpertisePageEn() {
  const secteurs = Object.entries(refSummary.parSecteur);
  const tiles = [
    { num: String(refSummary.total), label: "documented assignments" },
    { num: String(refSummary.pays), label: "countries of operation" },
    { num: "37", label: "years of engineering" },
    { num: String(secteurs.length), label: "facility families" },
  ];

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
          eyebrow="References — summary"
          title="A documented engineering capacity"
          intro="Our credibility rests on assignments actually delivered on major public facilities. We present the summary here: the detail (clients, service values, staffing and CVs) is shared on request, with qualified partners."
        />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {tiles.map((t) => (
            <div key={t.label} className="rounded-lg border border-line bg-paper p-6 text-center">
              <div className="font-display text-4xl font-extrabold text-teal">{t.num}</div>
              <div className="mt-1 text-sm text-grey">{t.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {secteurs.map(([k, n]) => (
            <div key={k} className="flex items-center justify-between rounded-lg border border-line bg-paper p-5">
              <span className="font-semibold text-navy">{SECTEURS_EN[k] ?? k}</span>
              <span className="rounded-full bg-teal-soft px-3 py-1 text-sm font-bold text-navy">{n}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-grey">
          Nature of the assignments: technical design supervision and works inspection of the
          technology packages (electrical, low-current, HVAC, plumbing, safety).
        </p>

        <div className="mt-8">
          <Callout title="Engagement framework" variant="gold">
            {CADRE_GEQUIPS_EN} Detailed references and CVs available on request.
          </Callout>
        </div>
      </Section>

      <Section id="dossier">
        <div className="rounded-lg border border-line bg-navy p-8 text-white md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="eyebrow text-gold">On request</p>
            <h2 className="title-2 mt-2 !text-white">Full reference dossier &amp; detailed CVs</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Detailed reference sheets (clients, service values, staffing), curricula vitae and
              written availability commitments are shared with qualified partners, donors and
              contracting authorities, after the request has been assessed and, where relevant, under
              a confidentiality agreement.
            </p>
          </div>
          <Link
            href={dossierHref}
            className="mt-6 inline-block shrink-0 rounded-md bg-gold px-6 py-3 font-semibold text-navy no-underline hover:bg-gold-soft md:mt-0"
          >
            Request the dossier
          </Link>
        </div>
      </Section>

      <Section tone="light">
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
            public-facility engineering, the corresponding references and experts are mobilised in the
            forms expected by donors (CVs, reference sheets, written commitments) — shared on request.
          </p>
        </div>
      </Section>

      <CTABanner lang="en" />
    </>
  );
}
