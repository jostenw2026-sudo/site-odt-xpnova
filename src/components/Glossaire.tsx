import { Section } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { getGlossaire, type GlossaireLang } from "@/content/glossaire";

// Glossaire ODT — sigles & notions, deux colonnes. Bilingue (fr/en).

export default function Glossaire({ lang = "fr" }: { lang?: GlossaireLang }) {
  const c = getGlossaire(lang);

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} lead={c.hero.lead} />
      <Breadcrumbs items={[{ label: c.crumb }]} lang={lang} />

      <Section>
        <dl className="grid gap-4 md:grid-cols-2">
          {c.terms.map((t) => (
            <div key={t.sigle} className="rounded-lg border border-line bg-paper p-5">
              <dt className="flex flex-wrap items-baseline gap-2">
                <span className="font-display text-lg font-extrabold text-teal">{t.sigle}</span>
                <span className="text-sm font-semibold text-navy">{t.intitule}</span>
              </dt>
              <dd className="mt-2 text-sm text-grey">{t.def}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CTABanner lang={lang} />
    </>
  );
}
