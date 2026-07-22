import type { Metadata } from "next";
import { Section, SectionTitle, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";

export const metadata: Metadata = {
  title: "ESG, genre & inclusion",
  description:
    "Les engagements environnementaux, sociaux et de gouvernance de l'ODT : sauvegardes, inclusion, genre, qualité — intégrés dès la conception des programmes.",
  alternates: { canonical: "/odt/esg-inclusion", languages: { fr: "/odt/esg-inclusion", en: "/en/odt/esg-inclusion" } },
};

const ENGAGEMENTS = [
  {
    t: "Environnement & sauvegardes",
    points: [
      "Évaluation environnementale et sociale dès la conception des programmes.",
      "Résilience climatique intégrée au dimensionnement des infrastructures.",
      "Hiérarchie d'atténuation : éviter, réduire, compenser — documentée.",
    ],
  },
  {
    t: "Genre & inclusion",
    points: [
      "Participation des femmes et des jeunes aux instances des programmes.",
      "Consultations inclusives des communautés avant tout engagement d'ouvrage.",
      "Indicateurs désagrégés par sexe dans le suivi-évaluation.",
    ],
  },
  {
    t: "Social & emploi local",
    points: [
      "Priorité à l'emploi et aux entreprises locales dans la mise en œuvre.",
      "Transfert de compétences : chaque programme forme des capacités locales.",
      "Santé-sécurité sur les sites, sans compromis.",
    ],
  },
  {
    t: "Gouvernance & intégrité",
    points: [
      "Tolérance zéro : corruption, fraude, conflits d'intérêts.",
      "Traçabilité des décisions et des décaissements (jalons vérifiés).",
      "Redevabilité publiée : indicateurs et revues accessibles aux parties prenantes.",
    ],
  },
];

export default function EsgPage() {
  return (
    <>
      <PageHero
        eyebrow="L'ODT · Crédibilité"
        title="ESG, genre & inclusion"
        lead="Un programme territorial qui néglige l'environnement, les femmes ou les communautés n'est pas un programme durable — c'est un passif différé."
      />
      <Breadcrumbs items={[{ label: "L'ODT", href: "/odt" }, { label: "ESG & inclusion" }]} />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {ENGAGEMENTS.map((e) => (
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
          <Callout title="Transparence sur l'état de formalisation" variant="gold">
            Les politiques formelles du groupe (ESG, genre & inclusion, anti-corruption, qualité,
            HSE) sont en cours de publication sur xp-nova.com/engagements. Les engagements
            ci-dessus s&apos;appliquent dès aujourd&apos;hui à tout programme ODT et sont opposables
            dans nos conventions.
          </Callout>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
