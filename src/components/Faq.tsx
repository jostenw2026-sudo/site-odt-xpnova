import Link from "next/link";
import { Section } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { getFaq, type FaqLang } from "@/content/faq";
import { cta } from "@/content/site";
import { ctaEn } from "@/content/en";

// FAQ ODT — accordéon natif (<details>), sans JavaScript. Bilingue (fr/en).

export default function Faq({ lang = "fr" }: { lang?: FaqLang }) {
  const c = getFaq(lang);
  const CTA = lang === "en" ? ctaEn : cta;

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} lead={c.hero.lead} />
      <Breadcrumbs items={[{ label: c.crumb }]} lang={lang} />

      <Section>
        <div className="space-y-10">
          {c.items.map((grp) => (
            <div key={grp.theme}>
              <h2 className="title-2 gold-rule">{grp.theme}</h2>
              <div className="mt-5 divide-y divide-line overflow-hidden rounded-lg border border-line bg-paper">
                {grp.qa.map((item) => (
                  <details key={item.q} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-navy hover:bg-light">
                      <span>{item.q}</span>
                      <span className="shrink-0 text-xl leading-none text-gold transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="px-5 pb-5 text-grey">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <div className="rounded-lg border border-line bg-paper p-8 text-center">
          <h2 className="title-2 text-navy">{c.ctaTitle}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-grey">{c.ctaText}</p>
          <Link
            href={CTA.primary.href}
            className="mt-6 inline-block rounded-md bg-gold px-6 py-3 font-semibold text-navy no-underline hover:bg-gold-soft"
          >
            {c.ctaButton}
          </Link>
        </div>
      </Section>

      <CTABanner lang={lang} />
    </>
  );
}
