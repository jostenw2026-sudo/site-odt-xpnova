import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "ODT presentation note, Observatory publications and institutional documents — downloads and access on request.",
  alternates: { canonical: "/en/ressources", languages: { fr: "/ressources", en: "/en/ressources" } },
};

const RESOURCES = [
  {
    t: "ODT presentation note",
    d: "The operator model, the programmes and the Observatory in 4 pages — institutional partner format.",
    acces: "Forthcoming — being prepared on the group's document template.",
  },
  {
    t: "Observatory publications",
    d: "Strategic notes, barometers and annotated maps.",
    acces: "See the Observatory's Publications page.",
    href: "/en/observatoire/publications",
  },
  {
    t: "Detailed reference sheets",
    d: "The 9 GEQUIPS sheets in donor format (periods, values, staffing, clients).",
    acces: "On justified request — institutional partners.",
    href: "/en/contact",
  },
  {
    t: "Institutional documents",
    d: "Trade registry, tax ID, articles of association, certificates — the group's administrative file.",
    acces: "On justified request — institutional partners.",
    href: "/en/contact",
  },
];

export default function ResourcesPageEn() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Resource centre"
        lead="Public documents and on-request access — every resource states its real availability status."
      />
      <Breadcrumbs items={[{ label: "Resources" }]} lang="en" />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {RESOURCES.map((r) => (
            <div key={r.t} className="flex flex-col rounded-lg border border-line bg-paper p-6">
              <h2 className="title-3 text-navy">{r.t}</h2>
              <p className="mt-2 flex-1 text-grey">{r.d}</p>
              <p className="mt-4 text-sm font-medium text-navy">
                {r.href ? (
                  <Link href={r.href} className="font-semibold">
                    {r.acces} →
                  </Link>
                ) : (
                  <span className="inline-block rounded-md bg-light px-3 py-1.5">{r.acces}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <CTABanner lang="en" />
    </>
  );
}
