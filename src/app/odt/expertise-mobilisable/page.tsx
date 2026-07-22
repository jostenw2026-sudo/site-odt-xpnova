import type { Metadata } from "next";
import { Section, SectionTitle, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { fichesGequips, promoteur, CADRE_GEQUIPS } from "@/content/references";

export const metadata: Metadata = {
  title: "Expertise mobilisable — références documentées",
  description:
    "37 ans d'ingénierie des grands équipements publics (aéroports, stades, campus, eau, énergie) dans 6 pays — capacités mobilisables au service des programmes territoriaux.",
  alternates: { canonical: "/odt/expertise-mobilisable", languages: { fr: "/odt/expertise-mobilisable", en: "/en/odt/expertise-mobilisable" } },
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="L'ODT · Crédibilité"
        title="Une expertise éprouvée, mobilisable"
        lead="L'ODT ne prétend pas avoir déjà transformé des territoires : il s'appuie sur des capacités d'ingénierie réelles, documentées et contractuellement mobilisables."
      />
      <Breadcrumbs items={[{ label: "L'ODT", href: "/odt" }, { label: "Expertise mobilisable" }]} />

      <Section>
        <SectionTitle
          eyebrow="Le promoteur"
          title="37 ans d'ingénierie des grands projets"
          intro={`${promoteur.nom} — ${promoteur.titre}. ${promoteur.onige}.`}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {promoteur.reperes.map((r) => (
            <div key={r.periode} className="rounded-lg border border-line bg-paper p-5">
              <p className="font-display text-lg font-bold text-gold">{r.periode}</p>
              <p className="mt-1 text-ink/90">{r.texte}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-grey">
          Pays d&apos;expérience : {promoteur.pays.join(" · ")}.
        </p>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="Références GEQUIPS"
          title="Neuf missions documentées au format bailleur"
          intro="Extraites des fiches de références officielles de GEQUIPS SARL (associée de XP-NOVA) : périodes, valeurs de services, effectifs et clients vérifiables."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {fichesGequips.map((f) => (
            <article key={f.slug} className="flex flex-col rounded-lg border border-line bg-paper p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="title-3 text-navy">{f.projet}</h3>
                <span className="shrink-0 rounded bg-teal-soft px-2.5 py-1 text-xs font-bold uppercase text-navy">
                  {f.pays}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-gold">{f.mission}</p>
              <p className="mt-2 flex-1 text-sm text-grey">{f.descriptif}</p>
              <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-line pt-3 text-sm">
                <div>
                  <dt className="text-xs text-grey">Période</dt>
                  <dd className="font-semibold text-ink">{f.periode}</dd>
                </div>
                <div>
                  <dt className="text-xs text-grey">Services</dt>
                  <dd className="font-semibold text-ink">{f.valeurServices}</dd>
                </div>
                <div>
                  <dt className="text-xs text-grey">Équipe</dt>
                  <dd className="font-semibold text-ink">{f.effectif} experts</dd>
                </div>
              </dl>
              <p className="mt-2 text-xs text-grey">Client : {f.client}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Callout title="Cadre d'intervention — applicable à toutes les fiches ci-dessus" variant="gold">
            {CADRE_GEQUIPS}
          </Callout>
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Mécanisme de mobilisation"
          title="Comment ces capacités servent vos programmes"
        />
        <div className="prose-x max-w-3xl">
          <p>
            Les statuts de XP-NOVA SARL prévoient expressément la mobilisation des capacités
            techniques, professionnelles et humaines de ses associés — au premier rang desquels
            GEQUIPS SARL — ou de tiers, sur engagement écrit de mise à disposition, conformément aux
            règles des procédures de passation et aux exigences des partenaires techniques et
            financiers. Une convention d&apos;appui technique lie les deux structures.
          </p>
          <p>
            Concrètement : lorsqu&apos;un programme territorial ODT requiert une ingénierie
            aéroportuaire, hydraulique ou d&apos;équipements publics, ces références et les experts
            correspondants sont mobilisés dans les formes attendues par les bailleurs (CV, fiches de
            références, engagements écrits).
          </p>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
