import type { Metadata } from "next";
import { Section, SectionTitle } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner, IngenierieXpNova } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Méthodologie — le cycle territorial en 6 phases",
  description:
    "Du diagnostic à la mesure d'impact : le cycle territorial ODT en six phases, adossé à la méthode éprouvée de XP-NOVA. Chaque phase produit un livrable vérifiable.",
  alternates: { canonical: "/methodologie", languages: { fr: "/methodologie", en: "/en/methodologie" } },
};

const PHASES = [
  { t: "Comprendre", s: "Diagnostic territorial", d: "Profil du territoire par la donnée (Observatoire), acteurs, contraintes, potentiels. Livrable : diagnostic partagé et objectivé.", },
  { t: "Concevoir", s: "Vision & portefeuille", d: "Vision de développement et portefeuille de projets cohérent — priorisé sur des critères publiés. Livrable : portefeuille validé par la gouvernance locale.", },
  { t: "Structurer", s: "Gouvernance & financement", d: "Études, budgets en FCFA, montage institutionnel, sauvegardes, tour de table des guichets. Livrable : dossiers bancables.", },
  { t: "Réaliser", s: "Programmes pilotés", d: "Mise en œuvre sous ingénierie XP-NOVA : AMO, maîtrise d'œuvre, contrôle. Livrable : ouvrages et services réceptionnés.", },
  { t: "Pérenniser", s: "Capacités locales", d: "Modèles de gestion, maintenance, formation des équipes locales. Livrable : dispositifs d'exploitation autonomes.", },
  { t: "Mesurer", s: "Impact publié", d: "Indicateurs suivis dans la durée et publiés — le territoire mesure son propre progrès. Livrable : rapports d'impact vérifiables.", },
];

export default function MethodologiePage() {
  return (
    <>
      <PageHero
        eyebrow="Méthodologie"
        title="Le cycle territorial"
        lead="Six phases héritées de la méthode XP-NOVA, appliquées à l'échelle d'un territoire. Chaque phase produit un livrable vérifiable."
      />
      <Breadcrumbs items={[{ label: "Méthodologie" }]} />

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
          eyebrow="L'outillage"
          title="Une méthode adossée à une ingénierie réelle"
          intro="La méthodologie territoriale de l'ODT n'est pas une abstraction : elle est outillée par les métiers de XP-NOVA, éprouvés sur les grands équipements publics."
        />
        <div className="max-w-3xl">
          <IngenierieXpNova
            liens={[
              { label: "La méthode XP-NOVA (6 phases)", url: "https://xp-nova.com/methode" },
              { label: "Études & Conseil", url: "https://xp-nova.com/metiers/etudes-conseil" },
              { label: "AMO / AMOA", url: "https://xp-nova.com/metiers/amo-amoa" },
              { label: "Suivi-Évaluation", url: "https://xp-nova.com/metiers/suivi-evaluation" },
            ]}
          />
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
