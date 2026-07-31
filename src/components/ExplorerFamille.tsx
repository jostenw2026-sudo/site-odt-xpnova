import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { getExplorer, getFamille, type Lang } from "@/content/explorer";
import { cta } from "@/content/site";
import { ctaEn } from "@/content/en";

// Fiche détail d'une famille d'acteurs (/explorer/acteur/[slug]).

export default function ExplorerFamille({ slug, lang = "fr" }: { slug: string; lang?: Lang }) {
  const f = getFamille(lang, slug);
  if (!f) notFound();
  const c = getExplorer(lang);
  const base = lang === "en" ? "/en/explorer" : "/explorer";
  const CTA = lang === "en" ? ctaEn : cta;

  return (
    <>
      <PageHero eyebrow={`${c.labels.famille} · F${f.num}`} title={f.title} lead={f.intermediation} />
      <Breadcrumbs items={[{ label: c.crumb, href: base }, { label: f.title }]} lang={lang} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="title-2 gold-rule">{c.labels.analyse}</h2>
            <div className="mt-5 space-y-4">
              {f.analyse.map((a) => (
                <div key={a.titre} className="rounded-lg border border-line bg-paper p-5">
                  <h3 className="font-semibold text-navy">{a.titre}</h3>
                  <p className="mt-1 text-sm text-grey">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-line bg-light p-6">
              <p className="eyebrow">{c.labels.entites}</p>
              <p className="mt-2 text-sm text-ink/90">{f.entites}</p>
            </div>
            <div className="rounded-lg border border-line bg-navy p-6 text-white">
              <p className="eyebrow">{c.labels.intermediation}</p>
              <p className="mt-2 text-white/90">{f.intermediation}</p>
            </div>
            <Link
              href={`${base}#acteurs`}
              className="block rounded-md border border-line bg-paper px-6 py-3 text-center font-semibold text-navy no-underline hover:border-gold"
            >
              {c.labels.backFamilles}
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
