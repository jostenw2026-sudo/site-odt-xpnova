import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, SectionTitle, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner, StatutBadge, IngenierieXpNova } from "@/components/blocks";
import { programmesEn, getProgEn, STATUTS_EN, CADRE_HYPOTHESES_EN } from "@/content/en";
import { getProgramme } from "@/content/programmes";

export function generateStaticParams() {
  return programmesEn.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgEn(slug);
  if (!p) return {};
  return {
    title: `${p.title} — ${p.type.toLowerCase()} model`,
    description: p.short,
    alternates: {
      canonical: `/en/programmes/${p.slug}`,
      languages: { fr: `/programmes/${p.slug}`, en: `/en/programmes/${p.slug}` },
    },
  };
}

export default async function ProgrammePageEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProgEn(slug);
  const pFr = getProgramme(slug);
  if (!p || !pFr) notFound();

  return (
    <>
      <PageHero eyebrow={`${p.type} · horizon ${p.horizon}`} title={p.title} lead={p.short} />
      <Breadcrumbs
        items={[{ label: "Territories & Programmes", href: "/en/programmes" }, { label: p.title }]}
        lang="en"
      />

      <Section>
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <StatutBadge statut={p.statut} lang="en" />
          <span className="text-sm text-grey">{STATUTS_EN[p.statut].desc}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <h2 className="title-2 gold-rule">The vision</h2>
            <p className="prose-x mt-4 max-w-none text-ink/90">{p.vision}</p>

            <h2 className="title-2 gold-rule mt-12">Programme components</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {p.composantes.map((c) => (
                <div key={c.titre} className="rounded-lg border border-line bg-paper p-5">
                  <div className="mb-2 h-1 w-8 rounded bg-gold" />
                  <h3 className="font-semibold text-navy">{c.titre}</h3>
                  <p className="mt-1 text-sm text-grey">{c.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="title-2 gold-rule mt-12">Expected impacts</h2>
            <ul className="mt-4 space-y-2">
              {p.impacts.map((i) => (
                <li key={i} className="flex items-start gap-3 text-ink/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {i}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Callout title="Anchor — where our legitimacy on this model comes from" variant="gold">
                {p.ancrage}
              </Callout>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-line bg-navy p-6 text-white">
              <p className="eyebrow">Sizing assumptions</p>
              <dl className="mt-4 space-y-3">
                {p.hypotheses.map((h) => (
                  <div key={h.poste}>
                    <dt className="text-sm text-white/70">{h.poste}</dt>
                    <dd className="font-semibold text-gold">{h.valeur}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-white/60">{CADRE_HYPOTHESES_EN}</p>
            </div>
            <IngenierieXpNova liens={pFr.metiersXpNova} lang="en" />
            {p.lienAgrovita && (
              <div className="rounded-lg border border-line bg-light p-5 text-sm">
                <p className="font-semibold text-navy">Agricultural component</p>
                <p className="mt-1 text-grey">
                  Value chains and support to agricultural actors are handled by{" "}
                  <a href="https://agrovita.xp-nova.com" className="font-semibold">
                    AGROVITA →
                  </a>
                </p>
              </div>
            )}
          </aside>
        </div>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="From model to programme"
          title="Adapt this model to your territory"
          intro="A model is only a starting point: yours is sized with your data, your actors and your financing windows."
        />
        <div className="flex flex-wrap gap-4">
          <Link href="/en/contact" className="rounded-md bg-gold px-6 py-3 font-semibold text-navy no-underline hover:bg-gold-soft">
            Discuss this model for your territory
          </Link>
          <Link href="/en/financement" className="rounded-md border border-line bg-paper px-6 py-3 font-semibold text-navy no-underline hover:border-gold">
            How is it financed? →
          </Link>
        </div>
      </Section>

      <CTABanner lang="en" />
    </>
  );
}
