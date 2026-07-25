import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { ressources } from "@/content/ressources";
import RessourceItem from "@/components/RessourceItem";

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Note de présentation ODT, publications de l'Observatoire et documents institutionnels — téléchargements et accès sur demande.",
  alternates: { canonical: "/ressources", languages: { fr: "/ressources", en: "/en/ressources" } },
};

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
          {ressources.map((r) => (
            <RessourceItem key={r.key} r={r} />
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
