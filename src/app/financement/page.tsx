import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner, IngenierieXpNova } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Financement des territoires : bailleurs, PPP, fonds climat",
  description:
    "Préparer un projet territorial finançable : exigences des bailleurs, PPP, fonds climat, budgets publics — et la chaîne ODT qui rend un portefeuille bancable.",
  alternates: { canonical: "/financement", languages: { fr: "/financement", en: "/en/financement" } },
};

const GUICHETS = [
  {
    t: "Bailleurs multilatéraux & bilatéraux",
    d: "Banque mondiale, BAD, Union européenne, AFD, GIZ, KfW, BID… Ils financent des programmes structurés, portés par une gouvernance claire, avec sauvegardes et suivi-évaluation.",
    exige: "Exigent : études solides, cadre logique, passation conforme, redevabilité.",
  },
  {
    t: "Fonds climat",
    d: "Fonds vert pour le climat (FVC), FEM, guichets adaptation/atténuation des bilatéraux : un guichet majeur encore sous-mobilisé par les collectivités d'Afrique centrale.",
    exige: "Exigent : démonstration de l'additionnalité climatique, données de vulnérabilité.",
  },
  {
    t: "Partenariats public-privé",
    d: "Pour les composantes génératrices de revenus : plateformes logistiques, marchés, énergie productive, services marchands.",
    exige: "Exigent : modèle économique robuste, partage de risques documenté, cadre juridique.",
  },
  {
    t: "Budgets publics & guichets nationaux",
    d: "BIP, fonds d'équipement des collectivités (ex. FEICOM), coopération décentralisée : le socle de contrepartie qui crédibilise les autres guichets.",
    exige: "Exigent : inscription budgétaire, maturité des projets, capacité de maîtrise d'ouvrage.",
  },
];

export default function FinancementPage() {
  return (
    <>
      <PageHero
        eyebrow="Financement"
        title="Financer la transformation d'un territoire"
        lead="Les financements existent. Ce qui manque, ce sont des projets préparés pour les recevoir : structurés, gouvernés, mesurables."
      />
      <Breadcrumbs items={[{ label: "Financement" }]} />

      <Section>
        <SectionTitle
          eyebrow="Le principe"
          title="Ce que les partenaires financiers financent réellement"
          intro="Aucun guichet ne finance une intention. Tous financent la même chose : un risque maîtrisé, une gouvernance claire, un impact mesurable."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {GUICHETS.map((g) => (
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
          eyebrow="La chaîne ODT"
          title="Rendre un portefeuille bancable"
          intro="Quatre maillons, dans l'ordre — sauter une étape se paie toujours au moment de la due diligence."
        />
        <ol className="grid gap-4 md:grid-cols-4">
          {[
            { t: "Diagnostic par la donnée", d: "Profil du territoire, indicateurs de l'Observatoire, besoins objectivés." },
            { t: "Portefeuille priorisé", d: "8–12 projets cohérents, critères de sélection publiés." },
            { t: "Structuration", d: "Études, budgets FCFA, gouvernance, sauvegardes — ingénierie XP-NOVA." },
            { t: "Tour de table", d: "Alignement des guichets : bailleurs, climat, PPP, contreparties publiques." },
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
            liens={[
              { label: "Structuration & ingénierie financière", url: "https://xp-nova.com/metiers/structuration-de-projets" },
              { label: "Études de faisabilité", url: "https://xp-nova.com/metiers/etudes-conseil" },
            ]}
          />
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Pour les bailleurs"
          title="Ce que l'ODT apporte à un partenaire financier"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Un pipeline qualifié", d: "Des portefeuilles préparés selon vos standards — pas des listes de besoins." },
            { t: "De la donnée vérifiable", d: "L'Observatoire documente les situations de départ et permet de mesurer les effets." },
            { t: "De la redevabilité", d: "Jalons vérifiés, indicateurs publiés, gouvernance associant les parties prenantes." },
          ].map((c) => (
            <div key={c.t} className="rounded-lg border border-line bg-paper p-6">
              <div className="mb-3 h-1 w-8 rounded bg-gold" />
              <h3 className="font-semibold text-navy">{c.t}</h3>
              <p className="mt-1 text-sm text-grey">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Callout title="Institutionnels & partenaires" variant="gold">
            Pour une présentation de l&apos;ODT et de son pipeline :{" "}
            <Link href="/contact" className="font-semibold">
              demander un échange institutionnel →
            </Link>
          </Callout>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
