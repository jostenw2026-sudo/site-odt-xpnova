import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Governance & compliance",
  description:
    "Legal anchoring, governance and compliance of ODT — an initiative of XP-NOVA SARL, Yaoundé.",
  alternates: { canonical: "/en/odt/gouvernance", languages: { fr: "/odt/gouvernance", en: "/en/odt/gouvernance" } },
};

export default function GovernancePageEn() {
  return (
    <>
      <PageHero
        eyebrow="About ODT · Credibility"
        title="Governance & compliance"
        lead="A platform only inspires trust if you know who carries it, who decides and who answers."
      />
      <Breadcrumbs items={[{ label: "About ODT", href: "/en/odt" }, { label: "Governance" }]} lang="en" />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="prose-x">
            <h2 className="title-3 text-navy">Legal anchoring</h2>
            <p>
              ODT is an initiative of <strong>{site.legalName}</strong> — Engineering & Consulting
              Firm, a {site.legal.forme} with a capital of {site.legal.capital}, registered with the
              Yaoundé Trade Registry under no. {site.legal.rccm} (tax ID {site.legal.niu}),
              established since 2006 (formerly INNOVA SARL). The contractual commitments of ODT
              programmes are carried by XP-NOVA SARL, with the attached liability and insurance.
            </p>
            <h2 className="title-3 mt-8 text-navy">Management</h2>
            <p>
              The platform is led by the statutory manager of XP-NOVA SARL, an electromechanical
              engineer (ONIGE A001703), whose track record is documented on the{" "}
              <a href="/en/odt/expertise-mobilisable">Mobilisable expertise</a> page.
            </p>
            <h2 className="title-3 mt-8 text-navy">Programme governance</h2>
            <p>
              Every territorial programme has its own governance: a steering committee bringing
              together the local government or supervising authority, financial partners and
              community representatives; contractual milestones; documented periodic reviews;
              published indicators. Accountability is not an add-on — it is a programme component.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-line bg-light p-6">
              <p className="eyebrow">Compliance</p>
              <ul className="mt-3 space-y-2 text-ink/90">
                <li>· OHADA Uniform Act (company law)</li>
                <li>· Donor procurement rules</li>
                <li>· Group ESG, gender and anti-corruption policies (publication in progress — see XP-NOVA/Commitments)</li>
                <li>· Reference transparency: systematic engagement framework</li>
              </ul>
            </div>
            <div className="rounded-lg border border-line bg-navy p-6 text-white">
              <p className="eyebrow">Documents on request</p>
              <p className="mt-2 text-white/80">
                Trade registry extract, tax ID, articles of association, certificates and detailed
                reference sheets are provided to institutional partners upon justified request.
              </p>
              <a href="/en/contact" className="mt-4 inline-block rounded-md bg-gold px-5 py-2.5 font-semibold text-navy no-underline hover:bg-gold-soft">
                Request access
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CTABanner lang="en" />
    </>
  );
}
