import Link from "next/link";
import { Section, SectionTitle, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { getExplorer, type Lang } from "@/content/explorer";
import { cta } from "@/content/site";
import { ctaEn } from "@/content/en";

// Hub « Explorer » — cartographie territoriale de l'ODT : positionnement,
// 12 domaines structurants, 7 familles d'acteurs, ingénierie de convergence
// (visa technique + sécurisation des décaissements) et parcours contractuel. Bilingue (fr/en).

export default function Explorer({ lang = "fr" }: { lang?: Lang }) {
  const c = getExplorer(lang);
  const base = lang === "en" ? "/en/explorer" : "/explorer";
  const CTA = lang === "en" ? ctaEn : cta;

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} lead={c.hero.lead} />
      <Breadcrumbs items={[{ label: c.crumb }]} lang={lang} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="title-2 gold-rule">{c.positioning.title}</h2>
            <p className="prose-x mt-4 max-w-none text-ink/90">{c.positioning.body}</p>
            <p className="mt-4 text-sm text-grey">{c.positioning.snd30}</p>
          </div>
          <aside>
            <Callout title={c.manifesteLabel} variant="gold">
              « {c.manifeste} »
            </Callout>
          </aside>
        </div>
      </Section>

      <Section tone="light" id="domaines">
        <SectionTitle eyebrow={c.domainesEyebrow} title={c.domainesTitle} intro={c.domainesIntro} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.domaines.map((d) => (
            <Link
              key={d.slug}
              href={`${base}/domaine/${d.slug}`}
              className="group flex flex-col rounded-lg border border-line bg-paper p-6 no-underline transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy font-display text-lg font-extrabold text-gold">
                  {d.num}
                </span>
                <span className="rounded-full border border-line bg-light px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal">
                  {d.pilier}
                </span>
              </div>
              <h3 className="title-3 mt-3 text-navy group-hover:text-royal">{d.title}</h3>
              <p className="mt-2 flex-1 text-sm text-grey">{d.short}</p>
              <span className="mt-4 text-sm font-semibold text-royal">{c.labels.discover} →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="acteurs">
        <SectionTitle eyebrow={c.famillesEyebrow} title={c.famillesTitle} intro={c.famillesIntro} />
        <div className="grid gap-5 md:grid-cols-2">
          {c.familles.map((f) => (
            <Link
              key={f.slug}
              href={`${base}/acteur/${f.slug}`}
              className="group flex flex-col rounded-lg border border-line bg-paper p-6 no-underline transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-sm font-bold text-white">
                  F{f.num}
                </span>
                <h3 className="title-3 text-navy group-hover:text-royal">{f.title}</h3>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gold">{c.labels.intermediation}</p>
              <p className="mt-1 flex-1 text-sm text-grey">{f.intermediation}</p>
              <span className="mt-4 text-sm font-semibold text-royal">{c.labels.seeFamille} →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="light" id="convergence">
        <SectionTitle eyebrow={c.convergenceEyebrow} title={c.convergenceTitle} intro={c.convergenceIntro} />
        <div className="rounded-lg border-l-4 border-teal bg-paper p-6 shadow-sm">
          <p className="eyebrow text-teal">{c.securisationLabel}</p>
          <p className="mt-3 text-ink/90">{c.securisation}</p>
        </div>
      </Section>

      <Section id="parcours">
        <SectionTitle eyebrow={c.parcoursEyebrow} title={c.parcoursTitle} intro={c.parcoursIntro} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.parcours.map((s) => (
            <div key={s.num} className="flex flex-col rounded-lg border border-line bg-paper p-6">
              <span className="font-display text-3xl font-extrabold text-gold">{s.num}</span>
              <h3 className="title-3 mt-2 text-navy">{s.titre}</h3>
              <p className="mt-2 text-sm text-grey">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href={CTA.primary.href}
            className="inline-block rounded-md bg-gold px-6 py-3 font-semibold text-navy no-underline hover:bg-gold-soft"
          >
            {c.labels.submit}
          </Link>
        </div>
      </Section>

      <CTABanner lang={lang} />
    </>
  );
}
