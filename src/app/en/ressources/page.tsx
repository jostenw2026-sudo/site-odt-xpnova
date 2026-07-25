import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { ressourcesEn } from "@/content/ressources";
import RessourceItem from "@/components/RessourceItem";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "ODT presentation note, Observatory publications and institutional documents — downloads and access on request.",
  alternates: { canonical: "/en/ressources", languages: { fr: "/ressources", en: "/en/ressources" } },
};

export default function ResourcesPageEn() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Resource centre"
        lead="Public documents and on-request access — every resource states its real availability status."
      />
      <Breadcrumbs items={[{ label: "Resources" }]} lang="en" />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {ressourcesEn.map((r) => (
            <RessourceItem key={r.key} r={r} lang="en" />
          ))}
        </div>
      </Section>
      <CTABanner lang="en" />
    </>
  );
}
