import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { siteEn } from "@/content/en";

export const metadata: Metadata = {
  title: "What is ODT? — An operator, not a consultancy",
  description:
    "The ODT model: understand, design, finance, transform. A territorial transformation platform at the interface of territories, donors and investors.",
  alternates: { canonical: "/en/odt", languages: { fr: "/odt", en: "/en/odt" } },
};

export default function OdtPageEn() {
  return (
    <>
      <PageHero
        eyebrow="About ODT"
        title="An operator, not a consultancy"
        lead="A consultancy sells deliverables. An operator carries a transformation — and stays committed until the results."
      />
      <Breadcrumbs items={[{ label: "About ODT" }]} lang="en" />

      <Section>
        <div className="prose-x max-w-3xl">
          <p className="lead">
            ODT is a territorial transformation platform dedicated to designing, structuring,
            financing and delivering projects with strong economic, social and environmental impact.
          </p>
          <p>
            At the interface of local governments, States, donors, investors and communities, ODT
            identifies development opportunities, builds coherent project portfolios, mobilises
            partnerships and supports delivery with a logic of sustainability, inclusion and local
            value creation.
          </p>
          <p>
            ODT acts as a <strong>catalyst for territories</strong>: infrastructure, essential
            services, economic development, local governance, ecological transition and territorial
            attractiveness are integrated within a single development vision.
          </p>
          <p>
            The disciplines that equip this transformation — studies, owner&apos;s engineering,
            works supervision, structuring, monitoring & evaluation — are carried by{" "}
            <a href="https://xp-nova.com" className="font-semibold">
              XP-NOVA, Engineering & Consulting Firm
            </a>
            . ODT puts them at the service of one cause: territories.
          </p>
        </div>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="What ODT is not"
          title="Four useful clarifications"
          intro="Because a positioning is also judged by what it refuses."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { t: "Not a consultancy", d: "Studies are a means, not the purpose. They are delivered by XP-NOVA in service of the programmes." },
            { t: "Not another institutional website", d: "The Observatory publishes sourced, actionable data — not brochures." },
            { t: "Not an owner's-engineering firm", d: "Owner's engineering is an XP-NOVA discipline. ODT assembles, finances and carries portfolios." },
            { t: "Not a duplicate of XP-NOVA", d: "XP-NOVA carries the disciplines; ODT carries the territories. The boundary is editorial, commercial and contractual." },
          ].map((c) => (
            <div key={c.t} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="title-3 text-navy">{c.t}</h3>
              <p className="mt-2 text-grey">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="Learn more" title="The institution behind the platform" />
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Governance & compliance", href: "/en/odt/gouvernance" },
            { label: "Mobilisable expertise", href: "/en/odt/expertise-mobilisable" },
            { label: "ESG & inclusion", href: "/en/odt/esg-inclusion" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full border border-line bg-paper px-5 py-2 font-semibold text-navy no-underline hover:border-gold">
              {l.label} →
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-grey">{siteEn.rattachement}.</p>
      </Section>

      <CTABanner lang="en" />
    </>
  );
}
