import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle, Button } from "@/components/ui";
import { StatsBar, StatutBadge, CTABanner } from "@/components/blocks";
import { HeroTerritory, ObsIcon, ProgIcon } from "@/components/illustrations";
import { StatCard } from "@/components/data";
import { siteEn, ctaEn, observatoiresEn, programmesEn, promoteurEn } from "@/content/en";

export const metadata: Metadata = {
  title: "ODT — Territorial Development Operator | Central Africa",
  description: siteEn.description,
  alternates: { canonical: "/en", languages: { fr: "/", en: "/en" } },
};

const ROLES = [
  { t: "Understand", d: "The Observatory produces the data — sourced and dated — that informs territorial decisions.", href: "/en/observatoire" },
  { t: "Design", d: "Coherent project portfolios: agropoles, corridors, poles, basins — not isolated projects.", href: "/en/programmes" },
  { t: "Finance", d: "Donors, PPPs, climate funds, public budgets: the financial engineering of territories.", href: "/en/financement" },
  { t: "Transform", d: "Steered delivery and measured impact — engineering by XP-NOVA.", href: "/en/methodologie" },
];

export default function HomeEn() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <HeroTerritory className="pointer-events-none absolute -right-20 -top-10 h-[540px] w-[540px] md:right-0" />
        <div className="container-x relative py-20 md:py-28">
          <p className="eyebrow mb-4">{siteEn.fullName}</p>
          <h1 className="title-hero max-w-4xl !text-white">
            Territories don&apos;t lack potential.
            <br />
            They lack <span className="text-gold">operators</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-light text-white/80">
            ODT designs, structures, finances and supports high-impact territorial programmes — at
            the interface of local governments, States, donors and investors.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={ctaEn.primary.href} variant="primary">
              {ctaEn.primary.label}
            </Button>
            <Button href={ctaEn.secondary.href} variant="ghost">
              {ctaEn.secondary.label}
            </Button>
          </div>
          <p className="mt-12 font-display text-lg tracking-wide text-gold">“{siteEn.devise}”</p>
          <p className="mt-2 text-sm text-white/60">{siteEn.rattachement}.</p>
        </div>
        <div className="h-1.5 bg-gold" />
      </section>

      <StatsBar lang="en" />

      <Section>
        <SectionTitle
          eyebrow="The ODT model"
          title="One operator, four roles"
          intro="A consultancy sells deliverables. An operator carries a transformation — from data to measured impact."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((r, i) => (
            <Link key={r.t} href={r.href} className="group block rounded-lg border border-line bg-paper p-6 no-underline transition-shadow hover:shadow-lg">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-teal font-display font-bold text-white">{i + 1}</span>
              <h3 className="title-3 mt-4 text-navy group-hover:text-royal">{r.t}</h3>
              <p className="mt-2 text-grey">{r.d}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="Territorial Observatory"
          title="Data before opinion"
          intro="Seven observatories fed by cited, dated public sources — because you cannot transform a territory you do not measure."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {observatoiresEn.map((o) => (
            <Link key={o.slug} href={`/en/observatoire/${o.slug}`} className="group flex items-start gap-3 rounded-lg border border-line bg-paper p-5 no-underline transition-shadow hover:shadow-lg">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy text-teal group-hover:bg-royal">
                <ObsIcon slug={o.slug} className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-semibold text-navy group-hover:text-royal">{o.title.replace(" Observatory", "")}</span>
                <span className="mt-0.5 block text-sm text-grey">{o.short}</span>
              </span>
            </Link>
          ))}
          <Link href="/en/observatoire" className="grid place-items-center rounded-lg border border-dashed border-teal/60 bg-teal-soft/40 p-5 text-center font-semibold text-navy no-underline hover:bg-teal-soft">
            Explore the Observatory →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <StatCard code="EG.ELC.ACCS.ZS" lang="en" />
          <StatCard code="SH.H2O.BASW.ZS" lang="en" />
          <StatCard code="NY.GDP.PCAP.CD" lang="en" />
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Territories & programmes"
          title="Models that structure"
          intro="Five transformative programme models, each with its status displayed — transparency is our first proof."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programmesEn.map((p) => (
            <Link key={p.slug} href={`/en/programmes/${p.slug}`} className="group flex flex-col rounded-lg border border-line bg-paper p-6 no-underline transition-shadow hover:shadow-lg">
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-gold">
                  <ProgIcon type={p.type} className="h-5 w-5" />
                </span>
                <StatutBadge statut={p.statut} lang="en" />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-teal">{p.type}</p>
              <h3 className="title-3 mt-1 text-navy group-hover:text-royal">{p.title}</h3>
              <p className="mt-2 flex-1 text-grey">{p.short}</p>
              <span className="mt-4 font-semibold text-royal">Discover the model →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="Mobilisable experience"
          title="A proven engineering capacity"
          intro="Behind ODT: 37 years of engineering of major public facilities — airports, stadiums, campuses, water supply, energy — across 6 countries."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="rounded-lg border border-line bg-paper p-6">
            <p className="text-ink/90">
              These capacities were built within the DGTC (Cameroon&apos;s Directorate-General of
              Major Works) and then GEQUIPS SARL, a shareholder of XP-NOVA — and can be mobilised
              contractually for territorial programmes.{" "}
              <strong>Every reference states its engagement framework.</strong>
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {["Airports", "Stadiums & facilities", "University campuses", "Water supply", "Energy & networks", "Public programme audits"].map((d) => (
                <li key={d} className="rounded-full bg-light px-4 py-1.5 text-sm font-semibold text-navy">{d}</li>
              ))}
            </ul>
            <div className="mt-5">
              <Button href="/en/odt/expertise-mobilisable" variant="secondary">
                See the documented references
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-navy p-6 text-white">
            <p className="eyebrow">Countries of experience</p>
            <ul className="mt-3 space-y-1.5 text-white/85">
              {promoteurEn.pays.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Financial partners"
          title="Built for donor standards"
          intro="Published governance, ESG commitments, transparent references, sourced data: ODT is built to pass due diligence — not to sidestep it."
        />
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Governance", href: "/en/odt/gouvernance" },
            { label: "ESG & inclusion", href: "/en/odt/esg-inclusion" },
            { label: "Methodology", href: "/en/methodologie" },
            { label: "Financing", href: "/en/financement" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full border border-line bg-paper px-5 py-2 font-semibold text-navy no-underline hover:border-gold">
              {l.label} →
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner lang="en" />
    </>
  );
}
