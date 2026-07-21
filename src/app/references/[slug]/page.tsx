import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { references, getReference } from "@/content/references";
import { getMetier } from "@/content/metiers";
import { Section, Button, Callout } from "@/components/ui";
import { Breadcrumbs, CTABanner } from "@/components/blocks";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { RefIllustration, refCategory } from "@/components/illustrations";

export function generateStaticParams() {
  return references.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getReference(slug);
  if (!r) return {};
  return {
    title: `${r.title} — Référence`,
    description: `${r.typeMission} · ${r.pays} · ${r.annees}. ${r.contexte}`.slice(0, 155),
    alternates: { canonical: `/references/${r.slug}` },
  };
}

export default async function ReferencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getReference(slug);
  if (!r) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <RefIllustration
          category={refCategory(r.slug)}
          className="pointer-events-none absolute right-4 top-1/2 hidden h-56 w-56 -translate-y-1/2 opacity-20 md:block"
        />
        <div className="container-x relative py-14 md:py-20">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gold font-semibold uppercase tracking-wide">
            <span>{r.pays}</span>
            <span>{r.annees}</span>
            <span>{r.typeMission}</span>
          </div>
          <h1 className="title-1 !text-white gold-rule mt-3">{r.title}</h1>
          <p className="mt-5 text-white/80">
            Donneur d&apos;ordre : <strong className="text-white">{r.client}</strong>
            {r.clientFinal && <> · Bénéficiaire : {r.clientFinal}</>}
          </p>
        </div>
        <div className="h-1 bg-gold" />
      </section>

      <Breadcrumbs items={[{ label: "Références", href: "/references" }, { label: r.title }]} />
      <JsonLd
        data={breadcrumbLd([
          { label: "Références", href: "/references" },
          { label: r.title, href: `/references/${r.slug}` },
        ])}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="prose-x max-w-none">
            <h2 className="title-3 text-navy">Contexte</h2>
            <p>{r.contexte}</p>
            <h2 className="title-3 text-navy mt-8">Mission</h2>
            <p>{r.mission}</p>
            <h2 className="title-3 text-navy mt-8">Résultats</h2>
            <p>{r.resultats}</p>

            {/* Cadre d'intervention — obligatoire (C7) */}
            <Callout title="Cadre d'intervention" variant="gold">
              {r.cadre}
            </Callout>
          </div>

          <aside className="h-fit rounded-lg border border-line bg-light p-6">
            <p className="eyebrow mb-3">Métiers mobilisés</p>
            <ul className="space-y-2">
              {r.metiers.map((slug) => {
                const m = getMetier(slug);
                return m ? (
                  <li key={slug}>
                    <Link href={`/metiers/${slug}`} className="font-semibold text-royal">
                      {m.title} →
                    </Link>
                  </li>
                ) : null;
              })}
            </ul>
            <hr className="my-5 border-line" />
            <p className="text-xs text-grey">
              Pièces justificatives et attestations disponibles sur demande.
            </p>
            <div className="mt-4">
              <Button href="/contact" variant="secondary">
                Discuter d&apos;un projet similaire
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
