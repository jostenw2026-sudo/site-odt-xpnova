import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Publications de l'Observatoire",
  description:
    "Notes stratégiques, baromètres territoriaux et cartographies commentées de l'Observatoire ODT.",
  alternates: { canonical: "/observatoire/publications" },
};

const LIGNES = [
  {
    t: "Notes stratégiques",
    d: "4 à 8 pages sur un enjeu territorial précis : diagnostic par la donnée, options, recommandations.",
    statut: "Première note à paraître — lancement de la ligne éditoriale en cours.",
  },
  {
    t: "Baromètres territoriaux",
    d: "Classements thématiques trimestriels (accès aux services, dynamiques économiques).",
    statut: "À paraître — après consolidation des séries infranationales.",
  },
  {
    t: "Cartographies commentées",
    d: "Cartes de synthèse accompagnées d'une lecture stratégique.",
    statut: "À paraître.",
  },
];

export default function Publications() {
  return (
    <>
      <PageHero
        eyebrow="Observatoire territorial"
        title="Publications"
        lead="Trois lignes éditoriales alimentées par l'Observatoire. Chaque publication cite ses sources et sa méthode."
      />
      <Breadcrumbs items={[{ label: "Observatoire", href: "/observatoire" }, { label: "Publications" }]} />
      <Section>
        <SectionTitle
          eyebrow="Lignes éditoriales"
          title="Ce que l'Observatoire publie"
          intro="Par honnêteté, les publications sont annoncées ici avec leur statut réel — pas de vitrine gonflée."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {LIGNES.map((l) => (
            <div key={l.t} className="flex flex-col rounded-lg border border-line bg-paper p-6">
              <h2 className="title-3 text-navy">{l.t}</h2>
              <p className="mt-2 flex-1 text-grey">{l.d}</p>
              <p className="mt-4 rounded-md bg-light px-3 py-2 text-sm text-navy">{l.statut}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-grey">
          Vous souhaitez être informé des premières parutions ou proposer un sujet d&apos;analyse
          territoriale ?{" "}
          <Link href="/contact" className="font-semibold">
            Écrivez-nous →
          </Link>
        </p>
      </Section>
      <CTABanner />
    </>
  );
}
