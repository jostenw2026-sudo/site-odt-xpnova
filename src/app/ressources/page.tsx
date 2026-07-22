import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Note de présentation ODT, publications de l'Observatoire et documents institutionnels — téléchargements et accès sur demande.",
  alternates: { canonical: "/ressources" },
};

const RESSOURCES = [
  {
    t: "Note de présentation ODT",
    d: "Le modèle d'opérateur, les programmes et l'Observatoire en 4 pages — format partenaires institutionnels.",
    acces: "À paraître — en préparation sur le template documentaire du groupe.",
  },
  {
    t: "Publications de l'Observatoire",
    d: "Notes stratégiques, baromètres et cartographies commentées.",
    acces: "Voir la page Publications de l'Observatoire.",
    href: "/observatoire/publications",
  },
  {
    t: "Fiches de références détaillées",
    d: "Les 9 fiches GEQUIPS au format bailleur (périodes, valeurs, effectifs, clients).",
    acces: "Sur demande motivée — partenaires institutionnels.",
    href: "/contact",
  },
  {
    t: "Documents institutionnels",
    d: "RCCM, NIU, statuts, attestations — dossier administratif du groupe.",
    acces: "Sur demande motivée — partenaires institutionnels.",
    href: "/contact",
  },
];

export default function RessourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ressources"
        title="Centre de ressources"
        lead="Documents publics et accès sur demande — chaque ressource indique son statut réel de disponibilité."
      />
      <Breadcrumbs items={[{ label: "Ressources" }]} />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {RESSOURCES.map((r) => (
            <div key={r.t} className="flex flex-col rounded-lg border border-line bg-paper p-6">
              <h2 className="title-3 text-navy">{r.t}</h2>
              <p className="mt-2 flex-1 text-grey">{r.d}</p>
              <p className="mt-4 text-sm font-medium text-navy">
                {r.href ? (
                  <Link href={r.href} className="font-semibold">
                    {r.acces} →
                  </Link>
                ) : (
                  <span className="rounded-md bg-light px-3 py-1.5 inline-block">{r.acces}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
