import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner, StatutBadge } from "@/components/blocks";
import { ProgIcon } from "@/components/illustrations";
import { programmes } from "@/content/programmes";
import { STATUTS } from "@/content/site";

export const metadata: Metadata = {
  title: "Territoires & Programmes — agropoles, corridors, pôles",
  description:
    "Cinq modèles de programmes territoriaux structurants, finançables et mesurables : agropole, corridor économique, pôle de croissance, bassin de développement, portefeuille communal.",
  alternates: { canonical: "/programmes" },
};

export default function ProgrammesHub() {
  return (
    <>
      <PageHero
        eyebrow="Territoires & programmes"
        title="Des modèles qui structurent les territoires"
        lead="Un projet isolé change un quartier ; un portefeuille cohérent transforme un territoire. Cinq modèles d'intervention, documentés et adaptables."
      />
      <Breadcrumbs items={[{ label: "Territoires & Programmes" }]} />

      <Section>
        <div className="mb-8 rounded-lg border border-line bg-light p-5">
          <p className="text-sm font-semibold text-navy">Lecture des statuts — notre règle de transparence :</p>
          <ul className="mt-2 grid gap-2 text-sm text-grey md:grid-cols-3">
            {(Object.keys(STATUTS) as (keyof typeof STATUTS)[]).map((k) => (
              <li key={k} className="flex items-start gap-2">
                <StatutBadge statut={k} />
                <span>{STATUTS[k].desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {programmes.map((p) => (
            <Link
              key={p.slug}
              href={`/programmes/${p.slug}`}
              className="group flex flex-col rounded-lg border border-line bg-paper p-6 no-underline transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-gold">
                  <ProgIcon type={p.type} className="h-6 w-6" />
                </span>
                <StatutBadge statut={p.statut} />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-teal">
                {p.type} · horizon {p.horizon}
              </p>
              <h2 className="title-3 mt-1 text-navy group-hover:text-royal">{p.title}</h2>
              <p className="mt-2 flex-1 text-grey">{p.short}</p>
              <span className="mt-4 font-semibold text-royal">Découvrir le modèle →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="Votre territoire"
          title="Et le vôtre ?"
          intro="Chaque territoire mérite son profil : indicateurs de l'Observatoire, potentiels, portefeuille prioritaire. C'est le point de départ de toute collaboration avec l'ODT."
        />
        <Callout title="Fiche territoire — sur demande" variant="gold">
          Nous établissons le profil de votre territoire (données sourcées, potentiels, premières
          orientations de portefeuille) comme base de discussion — sans engagement.{" "}
          <Link href="/contact" className="font-semibold">
            Demander le profil de votre territoire →
          </Link>
        </Callout>
      </Section>

      <CTABanner />
    </>
  );
}
