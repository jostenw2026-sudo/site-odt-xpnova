import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { promoteur, refSummary, CADRE_GEQUIPS } from "@/content/references";

export const metadata: Metadata = {
  title: "Expertise mobilisable — capacités d'ingénierie",
  description:
    "37 ans d'ingénierie des grands équipements publics (aéroports, stades, campus, bâtiments) sur plusieurs pays — synthèse des capacités mobilisables. Références détaillées et CV sur demande.",
  alternates: { canonical: "/odt/expertise-mobilisable", languages: { fr: "/odt/expertise-mobilisable", en: "/en/odt/expertise-mobilisable" } },
};

const SECTEURS_FR: Record<string, string> = {
  aeroport: "Aéroports",
  stade: "Stades & complexes sportifs",
  campus: "Campus & équipements éducatifs",
  batiment: "Bâtiments & immeubles de grande hauteur",
  eau: "Eau & réseaux",
  energie: "Énergie",
};

const dossierHref =
  "/contact?objet=" +
  encodeURIComponent("Demande du dossier de références (missions & CV détaillés)") +
  "#contact-form";

export default function ExpertisePage() {
  const secteurs = Object.entries(refSummary.parSecteur);
  const tiles = [
    { num: String(refSummary.total), label: "missions documentées" },
    { num: String(refSummary.pays), label: "pays d'intervention" },
    { num: "37", label: "ans d'ingénierie" },
    { num: String(secteurs.length), label: "familles d'équipements" },
  ];

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
        <p className="mt-6 text-sm text-grey">Pays d&apos;expérience : {promoteur.pays.join(" · ")}.</p>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="Références — synthèse"
          title="Une capacité d'ingénierie documentée"
          intro="Notre crédibilité repose sur des missions réellement exécutées sur de grands équipements publics. Nous en présentons ici la synthèse : le détail (clients, valeurs de services, effectifs et CV) est communiqué sur demande, aux partenaires qualifiés."
        />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {tiles.map((t) => (
            <div key={t.label} className="rounded-lg border border-line bg-paper p-6 text-center">
              <div className="font-display text-4xl font-extrabold text-teal">{t.num}</div>
              <div className="mt-1 text-sm text-grey">{t.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {secteurs.map(([k, n]) => (
            <div key={k} className="flex items-center justify-between rounded-lg border border-line bg-paper p-5">
              <span className="font-semibold text-navy">{SECTEURS_FR[k] ?? k}</span>
              <span className="rounded-full bg-teal-soft px-3 py-1 text-sm font-bold text-navy">{n}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-grey">
          Nature des missions : maîtrise d&apos;œuvre technique de conception et contrôle d&apos;exécution
          des lots technologiques (électricité, courants faibles, CVC, plomberie, sécurité).
        </p>

        <div className="mt-8">
          <Callout title="Cadre d'intervention" variant="gold">
            {CADRE_GEQUIPS} Références détaillées et CV disponibles sur demande.
          </Callout>
        </div>
      </Section>

      <Section id="dossier">
        <div className="rounded-lg border border-line bg-navy p-8 text-white md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="eyebrow text-gold">Sur demande</p>
            <h2 className="title-2 mt-2 !text-white">Dossier de références complet &amp; CV détaillés</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Les fiches détaillées (clients, valeurs de services, effectifs), les curriculum vitae et
              les engagements écrits de mise à disposition sont transmis aux partenaires, bailleurs et
              maîtres d&apos;ouvrage qualifiés, après instruction de la demande et, le cas échéant, sous
              accord de confidentialité.
            </p>
          </div>
          <Link
            href={dossierHref}
            className="mt-6 inline-block shrink-0 rounded-md bg-gold px-6 py-3 font-semibold text-navy no-underline hover:bg-gold-soft md:mt-0"
          >
            Demander le dossier
          </Link>
        </div>
      </Section>

      <Section tone="light">
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
            aéroportuaire, hydraulique ou d&apos;équipements publics, les références et les experts
            correspondants sont mobilisés dans les formes attendues par les bailleurs (CV, fiches de
            références, engagements écrits) — communiqués sur demande.
          </p>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
