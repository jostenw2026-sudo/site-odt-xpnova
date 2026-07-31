import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { getExplorer, getDomaine, type Lang } from "@/content/explorer";
import { cta } from "@/content/site";
import { ctaEn } from "@/content/en";

// Fiche détail d'un domaine structurant (/explorer/domaine/[slug]).

export default function ExplorerDomaine({ slug, lang = "fr" }: { slug: string; lang?: Lang }) {
  const d = getDomaine(lang, slug);
  if (!d) notFound();
  const c = getExplorer(lang);
  const base = lang === "en" ? "/en/explorer" : "/explorer";
  const CTA = lang === "en" ? ctaEn : cta;

  return (
    <>
      <PageHero eyebrow={`${c.labels.domaine} ${d.num} · ${d.pilier}`} title={d.title} lead={d.short} />
      <Breadcrumbs items={[{ label: c.crumb, href: base }, { label: d.title }]} lang={lang} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="title-2 gold-rule">{c.labels.composantes}</h2>
            <ul className="mt-4 space-y-2">
              {d.composantes.map((x) => (
                <li key={x} className="flex items-start gap-3 text-ink/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {x}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Callout title={c.labels.articulation} variant="gold">
                {d.articulation}
              </Callout>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-line bg-navy p-6 text-white">
              <p className="eyebrow">{c.labels.pilier}</p>
              <p className="mt-2 font-semibold text-gold">{d.pilier}</p>
            </div>
            <Link
              href={`${base}#domaines`}
              className="block rounded-md border border-line bg-paper px-6 py-3 text-center font-semibold text-navy no-underline hover:border-gold"
            >
              {c.labels.backDomaines}
            </Link>
            <Link
              href={CTA.primary.href}
              className="block rounded-md bg-gold px-6 py-3 text-center font-semibold text-navy no-underline hover:bg-gold-soft"
            >
              {c.labels.submit}
            </Link>
          </aside>
        </div>
      </Section>

      <CTABanner lang={lang} />
    </>
  );
}
