import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, SectionTitle, Callout } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner, StatutBadge, IngenierieXpNova } from "@/components/blocks";
import { programmes, getProgramme, CADRE_HYPOTHESES } from "@/content/programmes";
import { STATUTS } from "@/content/site";

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgramme(slug);
  if (!p) return {};
  return {
    title: `${p.title} — modèle ${p.type.toLowerCase()}`,
    description: p.short,
    alternates: { canonical: `/programmes/${p.slug}` },
  };
}

export default async function ProgrammePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProgramme(slug);
  if (!p) notFound();

  return (
    <>
      <PageHero eyebrow={`${p.type} · horizon ${p.horizon}`} title={p.title} lead={p.short} />
      <Breadcrumbs
        items={[{ label: "Territoires & Programmes", href: "/programmes" }, { label: p.title }]}
      />

      <Section>
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <StatutBadge statut={p.statut} />
          <span className="text-sm text-grey">{STATUTS[p.statut].desc}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <h2 className="title-2 gold-rule">La vision</h2>
            <p className="prose-x mt-4 max-w-none text-ink/90">{p.vision}</p>

            <h2 className="title-2 gold-rule mt-12">Composantes du programme</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {p.composantes.map((c) => (
                <div key={c.titre} className="rounded-lg border border-line bg-paper p-5">
                  <div className="mb-2 h-1 w-8 rounded bg-gold" />
                  <h3 className="font-semibold text-navy">{c.titre}</h3>
                  <p className="mt-1 text-sm text-grey">{c.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="title-2 gold-rule mt-12">Impacts attendus</h2>
            <ul className="mt-4 space-y-2">
              {p.impacts.map((i) => (
                <li key={i} className="flex items-start gap-3 text-ink/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {i}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Callout title="Ancrage — d'où vient notre légitimité sur ce modèle" variant="gold">
                {p.ancrage}
              </Callout>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-line bg-navy p-6 text-white">
              <p className="eyebrow">Hypothèses de dimensionnement</p>
              <dl className="mt-4 space-y-3">
                {p.hypotheses.map((h) => (
                  <div key={h.poste}>
                    <dt className="text-sm text-white/70">{h.poste}</dt>
                    <dd className="font-semibold text-gold">{h.valeur}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-white/60">{CADRE_HYPOTHESES}</p>
            </div>
            <IngenierieXpNova liens={p.metiersXpNova} />
            {p.lienAgrovita && (
              <div className="rounded-lg border border-line bg-light p-5 text-sm">
                <p className="font-semibold text-navy">Volet agricole</p>
                <p className="mt-1 text-grey">
                  Les filières et l&apos;accompagnement des acteurs agricoles relèvent de{" "}
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
          eyebrow="Passer du modèle au programme"
          title="Adapter ce modèle à votre territoire"
          intro="Un modèle n'est qu'un point de départ : le vôtre se dimensionne avec vos données, vos acteurs et vos guichets de financement."
        />
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-gold px-6 py-3 font-semibold text-navy no-underline hover:bg-gold-soft"
          >
            Discuter de ce modèle pour votre territoire
          </Link>
          <Link
            href="/financement"
            className="rounded-md border border-line bg-paper px-6 py-3 font-semibold text-navy no-underline hover:border-gold"
          >
            Comment se finance-t-il ? →
          </Link>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
