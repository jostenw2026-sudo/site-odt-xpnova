import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Qu'est-ce que l'ODT ? — Un opérateur, pas un bureau d'études",
  description:
    "Le modèle ODT : comprendre, concevoir, financer, transformer. Une plateforme de transformation territoriale à l'interface des territoires, des bailleurs et des investisseurs.",
  alternates: { canonical: "/odt", languages: { fr: "/odt", en: "/en/odt" } },
};

export default function OdtPage() {
  return (
    <>
      <PageHero
        eyebrow="L'ODT"
        title="Un opérateur, pas un bureau d'études"
        lead="Un bureau d'études vend des livrables. Un opérateur porte une transformation — et reste engagé jusqu'aux résultats."
      />
      <Breadcrumbs items={[{ label: "L'ODT" }]} />

      <Section>
        <div className="prose-x max-w-3xl">
          <p className="lead">
            L&apos;ODT est une plateforme de transformation territoriale dédiée à la conception, la
            structuration, le financement et la mise en œuvre de projets à fort impact économique,
            social et environnemental.
          </p>
          <p>
            À l&apos;interface des collectivités territoriales, des États, des bailleurs de fonds,
            des investisseurs et des communautés, l&apos;ODT identifie les opportunités de
            développement, construit des portefeuilles de projets cohérents, mobilise les
            partenariats et accompagne leur réalisation dans une logique de durabilité,
            d&apos;inclusion et de création de valeur locale.
          </p>
          <p>
            L&apos;ODT agit comme un <strong>catalyseur de territoires</strong> : infrastructures,
            services essentiels, développement économique, gouvernance locale, transition écologique
            et attractivité sont intégrés au sein d&apos;une même vision de développement.
          </p>
          <p>
            Les métiers qui outillent cette transformation — études, AMO/AMOA, maîtrise
            d&apos;œuvre, structuration, suivi-évaluation — sont portés par{" "}
            <a href="https://xp-nova.com" className="font-semibold">
              XP-NOVA, Bureau d&apos;Ingénierie Conseil
            </a>
            . L&apos;ODT les met au service d&apos;une seule cause : les territoires.
          </p>
        </div>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="Ce que l'ODT n'est pas"
          title="Quatre clarifications utiles"
          intro="Parce qu'un positionnement se juge aussi à ce qu'il refuse."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { t: "Pas un bureau d'études", d: "Les études sont un moyen, pas la finalité. Elles sont réalisées par XP-NOVA au service des programmes." },
            { t: "Pas un site institutionnel de plus", d: "L'Observatoire publie de la donnée sourcée et actionnable — pas des plaquettes." },
            { t: "Pas un cabinet AMO", d: "L'AMO est un métier XP-NOVA. L'ODT assemble, finance et porte des portefeuilles." },
            { t: "Pas un doublon de XP-NOVA", d: "XP-NOVA porte les métiers ; l'ODT porte les territoires. La frontière est éditoriale, commerciale et contractuelle." },
          ].map((c) => (
            <div key={c.t} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="title-3 text-navy">{c.t}</h3>
              <p className="mt-2 text-grey">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="En savoir plus" title="L'institution derrière la plateforme" />
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Gouvernance & conformité", href: "/odt/gouvernance" },
            { label: "Expertise mobilisable", href: "/odt/expertise-mobilisable" },
            { label: "ESG & inclusion", href: "/odt/esg-inclusion" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-line bg-paper px-5 py-2 font-semibold text-navy no-underline hover:border-gold"
            >
              {l.label} →
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-grey">{site.rattachement}.</p>
      </Section>

      <CTABanner />
    </>
  );
}
