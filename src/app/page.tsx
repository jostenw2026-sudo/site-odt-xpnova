import Link from "next/link";
import { Section, SectionTitle, Button } from "@/components/ui";
import { StatsBar, StatutBadge, CTABanner } from "@/components/blocks";
import { HeroTerritory, ObsIcon, ProgIcon } from "@/components/illustrations";
import { StatCard } from "@/components/data";
import { site, cta } from "@/content/site";
import { observatoires } from "@/content/observatoires";
import { programmes } from "@/content/programmes";
import { promoteur } from "@/content/references";

const ROLES = [
  { t: "Comprendre", d: "L'Observatoire produit la donnée — sourcée et datée — qui éclaire les décisions territoriales.", href: "/observatoire" },
  { t: "Concevoir", d: "Des portefeuilles de projets cohérents : agropoles, corridors, pôles, bassins — pas des projets isolés.", href: "/programmes" },
  { t: "Financer", d: "Bailleurs, PPP, fonds climat, budgets publics : l'ingénierie financière des territoires.", href: "/financement" },
  { t: "Transformer", d: "Mise en œuvre pilotée et impact mesuré — l'ingénierie est assurée par XP-NOVA.", href: "/methodologie" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
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
          <p className="eyebrow mb-4">{site.fullName}</p>
          <h1 className="title-hero max-w-4xl !text-white">
            Les territoires ne manquent pas de potentiel.
            <br />
            Ils manquent d&apos;<span className="text-gold">opérateurs</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-light text-white/80">
            L&apos;ODT conçoit, structure, finance et accompagne des programmes territoriaux à fort
            impact — à l&apos;interface des collectivités, des États, des bailleurs et des
            investisseurs.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={cta.primary.href} variant="primary">
              {cta.primary.label}
            </Button>
            <Button href={cta.secondary.href} variant="ghost">
              {cta.secondary.label}
            </Button>
          </div>
          <p className="mt-12 font-display text-lg tracking-wide text-gold">« {site.devise} »</p>
          <p className="mt-2 text-sm text-white/60">{site.rattachement}.</p>
        </div>
        <div className="h-1.5 bg-gold" />
      </section>

      <StatsBar />

      {/* LE MODÈLE — 4 RÔLES */}
      <Section>
        <SectionTitle
          eyebrow="Le modèle ODT"
          title="Un opérateur, quatre rôles"
          intro="Un bureau d'études vend des livrables. Un opérateur porte une transformation — de la donnée jusqu'à l'impact mesuré."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((r, i) => (
            <Link
              key={r.t}
              href={r.href}
              className="group block rounded-lg border border-line bg-paper p-6 no-underline transition-shadow hover:shadow-lg"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-teal font-display font-bold text-white">
                {i + 1}
              </span>
              <h3 className="title-3 mt-4 text-navy group-hover:text-royal">{r.t}</h3>
              <p className="mt-2 text-grey">{r.d}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* OBSERVATOIRE */}
      <Section tone="light">
        <SectionTitle
          eyebrow="Observatoire territorial"
          title="La donnée avant l'opinion"
          intro="Sept observatoires alimentés par des sources publiques citées et datées — parce qu'on ne transforme pas un territoire qu'on ne mesure pas."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {observatoires.map((o) => (
            <Link
              key={o.slug}
              href={`/observatoire/${o.slug}`}
              className="group flex items-start gap-3 rounded-lg border border-line bg-paper p-5 no-underline transition-shadow hover:shadow-lg"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy text-teal group-hover:bg-royal">
                <ObsIcon slug={o.slug} className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-semibold text-navy group-hover:text-royal">
                  {o.title.replace("Observatoire ", "").replace(/^de (la |l')?|^du |^des /, (m) => m)}
                </span>
                <span className="mt-0.5 block text-sm text-grey">{o.short}</span>
              </span>
            </Link>
          ))}
          <Link
            href="/observatoire"
            className="grid place-items-center rounded-lg border border-dashed border-teal/60 bg-teal-soft/40 p-5 text-center font-semibold text-navy no-underline hover:bg-teal-soft"
          >
            Explorer l&apos;Observatoire →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <StatCard code="EG.ELC.ACCS.ZS" />
          <StatCard code="SH.H2O.BASW.ZS" />
          <StatCard code="NY.GDP.PCAP.CD" />
        </div>
      </Section>

      {/* PROGRAMMES */}
      <Section>
        <SectionTitle
          eyebrow="Territoires & programmes"
          title="Des modèles qui structurent"
          intro="Cinq modèles de programmes transformateurs, chacun avec son statut affiché — la transparence est notre première preuve."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <Link
              key={p.slug}
              href={`/programmes/${p.slug}`}
              className="group flex flex-col rounded-lg border border-line bg-paper p-6 no-underline transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-gold">
                  <ProgIcon type={p.type} className="h-5 w-5" />
                </span>
                <StatutBadge statut={p.statut} />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-teal">{p.type}</p>
              <h3 className="title-3 mt-1 text-navy group-hover:text-royal">{p.title}</h3>
              <p className="mt-2 flex-1 text-grey">{p.short}</p>
              <span className="mt-4 font-semibold text-royal">Découvrir le modèle →</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* EXPÉRIENCE MOBILISABLE */}
      <Section tone="light">
        <SectionTitle
          eyebrow="Expérience mobilisable"
          title="Une capacité d'ingénierie éprouvée"
          intro="Derrière l'ODT : 37 ans d'ingénierie des grands équipements publics — aéroports, stades, campus, adductions d'eau, énergie — dans 6 pays."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="rounded-lg border border-line bg-paper p-6">
            <p className="text-ink/90">
              Ces capacités ont été constituées au sein de la DGTC (Direction Générale des Grands
              Travaux du Cameroun) puis de GEQUIPS SARL, associée de XP-NOVA — et sont mobilisables
              contractuellement au service des programmes territoriaux.{" "}
              <strong>Chaque référence précise son cadre d&apos;intervention.</strong>
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {["Aéroports", "Stades & équipements", "Campus universitaires", "Adductions d'eau", "Énergie & réseaux", "Audits de programmes publics"].map((d) => (
                <li key={d} className="rounded-full bg-light px-4 py-1.5 text-sm font-semibold text-navy">
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Button href="/odt/expertise-mobilisable" variant="secondary">
                Voir les références documentées
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-navy p-6 text-white">
            <p className="eyebrow">Pays d&apos;expérience</p>
            <ul className="mt-3 space-y-1.5 text-white/85">
              {promoteur.pays.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* BAILLEURS */}
      <Section>
        <SectionTitle
          eyebrow="Partenaires financiers"
          title="Conçu pour les standards des bailleurs"
          intro="Gouvernance publiée, engagements ESG, références transparentes, données sourcées : l'ODT est construit pour passer la due diligence — pas pour la contourner."
        />
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Gouvernance", href: "/odt/gouvernance" },
            { label: "ESG & inclusion", href: "/odt/esg-inclusion" },
            { label: "Méthodologie", href: "/methodologie" },
            { label: "Financement", href: "/financement" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-line bg-paper px-5 py-2 font-semibold text-navy no-underline hover:border-gold"
            >
              {l.label} →
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
