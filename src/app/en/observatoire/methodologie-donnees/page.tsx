import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { PageHero, Breadcrumbs } from "@/components/blocks";
import { WDI_EXTRACTION } from "@/content/wdi";
import { WDI_SOURCE_EN } from "@/content/en";

export const metadata: Metadata = {
  title: "Data methodology",
  description:
    "Sources, vintages and limitations of the ODT Territorial Observatory indicators: our doctrine — no data without a source and a date.",
  alternates: {
    canonical: "/en/observatoire/methodologie-donnees",
    languages: { fr: "/observatoire/methodologie-donnees", en: "/en/observatoire/methodologie-donnees" },
  },
};

export default function DataMethodologyEn() {
  return (
    <>
      <PageHero
        eyebrow="Territorial Observatory"
        title="Data methodology"
        lead="Our doctrine fits in one sentence: no data without a cited source and a displayed vintage."
      />
      <Breadcrumbs
        items={[{ label: "Observatory", href: "/en/observatoire" }, { label: "Data methodology" }]}
        lang="en"
      />
      <Section>
        <div className="prose-x max-w-3xl">
          <h2 className="title-3 text-navy">Sources</h2>
          <p>
            The indicators published in this version of the Observatory come from{" "}
            <strong>{WDI_SOURCE_EN}</strong>, queried through the official public API
            (api.worldbank.org). Extraction date: {WDI_EXTRACTION}. Every value displays its vintage
            (the year of the data point, which may differ from the extraction year): we publish the
            latest available value per country.
          </p>
          <h2 className="title-3 mt-8 text-navy">Scope</h2>
          <p>
            Current coverage: the six CEMAC countries (Cameroon, Gabon, Congo, Chad, Central African
            Republic, Equatorial Guinea), at national level. Sub-national breakdowns (regions,
            municipalities) will be introduced with dedicated official sources (national statistics
            institutes, sector data) under the same citation requirement.
          </p>
          <h2 className="title-3 mt-8 text-navy">Acknowledged limitations</h2>
          <p>
            Some series have breaks or missing years; some countries lack a recent value for every
            indicator — in that case the value is not displayed rather than estimated. Cross-country
            comparisons must account for the vintages displayed.
          </p>
          <h2 className="title-3 mt-8 text-navy">Updates</h2>
          <p>
            Data is regenerated from the API at each site update; the extraction date is displayed
            above. Report any error to <a href="mailto:contact@xp-nova.com">contact@xp-nova.com</a> —
            corrections are published and tracked.
          </p>
        </div>
      </Section>
    </>
  );
}
