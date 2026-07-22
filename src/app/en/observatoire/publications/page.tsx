import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/ui";
import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Observatory publications",
  description: "Strategic notes, territorial barometers and annotated maps from the ODT Observatory.",
  alternates: {
    canonical: "/en/observatoire/publications",
    languages: { fr: "/observatoire/publications", en: "/en/observatoire/publications" },
  },
};

const LINES = [
  {
    t: "Strategic notes",
    d: "4–8 pages on a specific territorial issue: data-driven diagnosis, options, recommendations.",
    statut: "First note forthcoming — editorial line being launched.",
  },
  {
    t: "Territorial barometers",
    d: "Quarterly thematic rankings (access to services, economic dynamics).",
    statut: "Forthcoming — after sub-national series are consolidated.",
  },
  {
    t: "Annotated maps",
    d: "Summary maps with a strategic reading.",
    statut: "Forthcoming.",
  },
];

export default function PublicationsEn() {
  return (
    <>
      <PageHero
        eyebrow="Territorial Observatory"
        title="Publications"
        lead="Three editorial lines fed by the Observatory. Every publication cites its sources and method."
      />
      <Breadcrumbs items={[{ label: "Observatory", href: "/en/observatoire" }, { label: "Publications" }]} lang="en" />
      <Section>
        <SectionTitle
          eyebrow="Editorial lines"
          title="What the Observatory publishes"
          intro="Out of honesty, publications are announced here with their real status — no inflated showcase."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {LINES.map((l) => (
            <div key={l.t} className="flex flex-col rounded-lg border border-line bg-paper p-6">
              <h2 className="title-3 text-navy">{l.t}</h2>
              <p className="mt-2 flex-1 text-grey">{l.d}</p>
              <p className="mt-4 rounded-md bg-light px-3 py-2 text-sm text-navy">{l.statut}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-grey">
          Want to be notified of the first releases, or suggest a territorial analysis topic?{" "}
          <Link href="/en/contact" className="font-semibold">
            Write to us →
          </Link>
        </p>
      </Section>
      <CTABanner lang="en" />
    </>
  );
}
