import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { PageHero, Breadcrumbs } from "@/components/blocks";
import { WDI_SOURCE, WDI_EXTRACTION } from "@/content/wdi";

export const metadata: Metadata = {
  title: "Méthodologie des données",
  description:
    "Sources, millésimes et limites des indicateurs de l'Observatoire territorial ODT : notre doctrine — aucune donnée sans source ni date.",
  alternates: { canonical: "/observatoire/methodologie-donnees", languages: { fr: "/observatoire/methodologie-donnees", en: "/en/observatoire/methodologie-donnees" } },
};

export default function MethodologieDonnees() {
  return (
    <>
      <PageHero
        eyebrow="Observatoire territorial"
        title="Méthodologie des données"
        lead="Notre doctrine tient en une phrase : aucune donnée sans source citée ni millésime affiché."
      />
      <Breadcrumbs
        items={[{ label: "Observatoire", href: "/observatoire" }, { label: "Méthodologie des données" }]}
      />
      <Section>
        <div className="prose-x max-w-3xl">
          <h2 className="title-3 text-navy">Sources</h2>
          <p>
            Les indicateurs publiés dans cette version de l&apos;Observatoire proviennent de la base{" "}
            <strong>{WDI_SOURCE}</strong>, interrogée via l&apos;API publique officielle
            (api.worldbank.org). Extraction du {WDI_EXTRACTION}. Chaque valeur affiche son millésime
            (l&apos;année de la donnée, qui peut différer de l&apos;année d&apos;extraction) : nous
            publions la dernière valeur disponible par pays.
          </p>
          <h2 className="title-3 mt-8 text-navy">Périmètre</h2>
          <p>
            Couverture actuelle : les six pays de la CEMAC (Cameroun, Gabon, Congo, Tchad,
            République centrafricaine, Guinée équatoriale), à l&apos;échelle nationale. Les
            déclinaisons infranationales (régions, communes) seront introduites avec des sources
            officielles dédiées (instituts nationaux de statistique, données sectorielles) et la
            même exigence de citation.
          </p>
          <h2 className="title-3 mt-8 text-navy">Limites assumées</h2>
          <p>
            Certaines séries comportent des ruptures ou des années manquantes ; certains pays
            n&apos;ont pas de valeur récente pour tous les indicateurs — dans ce cas, la valeur
            n&apos;est pas affichée plutôt qu&apos;estimée. Les comparaisons entre pays doivent tenir
            compte des différences de millésimes affichées.
          </p>
          <h2 className="title-3 mt-8 text-navy">Mise à jour</h2>
          <p>
            Les données sont regénérées depuis l&apos;API à chaque mise à jour du site ; la date
            d&apos;extraction est affichée ci-dessus. Signalez toute erreur à{" "}
            <a href="mailto:contact@xp-nova.com">contact@xp-nova.com</a> — la correction est publiée
            et tracée.
          </p>
        </div>
      </Section>
    </>
  );
}
