import type { Metadata } from "next";
import { Section, SectionTitle } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Gouvernance & conformité",
  description:
    "Rattachement juridique, gouvernance et conformité de l'ODT — une initiative de XP-NOVA SARL, Yaoundé.",
  alternates: { canonical: "/odt/gouvernance", languages: { fr: "/odt/gouvernance", en: "/en/odt/gouvernance" } },
};

export default function GouvernancePage() {
  return (
    <>
      <PageHero
        eyebrow="L'ODT · Crédibilité"
        title="Gouvernance & conformité"
        lead="Une plateforme n'inspire confiance que si l'on sait qui la porte, qui décide et qui répond."
      />
      <Breadcrumbs items={[{ label: "L'ODT", href: "/odt" }, { label: "Gouvernance" }]} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="prose-x">
            <h2 className="title-3 text-navy">Rattachement juridique</h2>
            <p>
              L&apos;ODT est une initiative de <strong>{site.legalName}</strong> — Bureau
              d&apos;Ingénierie Conseil, {site.legal.forme} au capital de {site.legal.capital},
              immatriculée au RCCM de Yaoundé sous le n° {site.legal.rccm} (NIU {site.legal.niu}),
              société établie depuis 2006 (anciennement INNOVA SARL). Les engagements contractuels
              des programmes ODT sont portés par XP-NOVA SARL, avec la responsabilité et les
              assurances qui s&apos;y attachent.
            </p>
            <h2 className="title-3 mt-8 text-navy">Direction</h2>
            <p>
              La plateforme est dirigée par le gérant statutaire de XP-NOVA SARL, ingénieur
              électromécanicien (ONIGE A001703), dont la trajectoire est documentée sur la page{" "}
              <a href="/odt/expertise-mobilisable">Expertise mobilisable</a>.
            </p>
            <h2 className="title-3 mt-8 text-navy">Gouvernance des programmes</h2>
            <p>
              Chaque programme territorial est doté de sa propre gouvernance : comité de pilotage
              associant la collectivité ou l&apos;autorité de tutelle, les partenaires financiers et
              les représentants des communautés ; jalons contractuels ; revues périodiques
              documentées ; indicateurs publiés. La redevabilité n&apos;est pas un supplément —
              c&apos;est une composante du programme.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-line bg-light p-6">
              <p className="eyebrow">Conformité</p>
              <ul className="mt-3 space-y-2 text-ink/90">
                <li>· Acte uniforme OHADA (droit des sociétés)</li>
                <li>· Règles de passation des marchés des bailleurs</li>
                <li>· Politiques ESG, genre et anti-corruption du groupe (en cours de publication — voir XP-NOVA/Engagements)</li>
                <li>· Transparence des références : cadre d&apos;intervention systématique</li>
              </ul>
            </div>
            <div className="rounded-lg border border-line bg-navy p-6 text-white">
              <p className="eyebrow">Documents sur demande</p>
              <p className="mt-2 text-white/80">
                RCCM, NIU, statuts, attestations et fiches de références détaillées sont
                communiqués aux partenaires institutionnels sur demande motivée.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-block rounded-md bg-gold px-5 py-2.5 font-semibold text-navy no-underline hover:bg-gold-soft"
              >
                Demander l&apos;accès
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
