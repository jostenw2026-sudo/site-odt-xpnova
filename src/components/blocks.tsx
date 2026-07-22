"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site, cta, nav, STATUTS, type StatutKey } from "@/content/site";
import { siteEn, ctaEn, navEn, STATUTS_EN } from "@/content/en";
import { Button } from "./ui";
import { HeroTerritory } from "./illustrations";

type Lang = "fr" | "en";

export function StatsBar({ tone = "light", lang = "fr" }: { tone?: "navy" | "light"; lang?: Lang }) {
  const dark = tone === "navy";
  const stats = lang === "en" ? siteEn.proofStats : site.proofStats;
  return (
    <div className={dark ? "bg-navy text-white" : "border-b border-line bg-light text-ink"}>
      <div className="container-x grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-extrabold text-teal">{s.value}</div>
            <div className={`mt-1 text-sm ${dark ? "text-white/70" : "text-grey"}`}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatutBadge({ statut, lang = "fr" }: { statut: StatutKey; lang?: Lang }) {
  const s = lang === "en" ? { ...STATUTS[statut], ...STATUTS_EN[statut] } : STATUTS[statut];
  const tone = STATUTS[statut].tone;
  const cls =
    tone === "teal"
      ? "bg-teal-soft text-navy border-teal/40"
      : tone === "gold"
        ? "bg-gold/15 text-navy border-gold/50"
        : "bg-navy text-white border-navy";
  return (
    <span
      title={s.desc}
      className={`inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${cls}`}
    >
      {s.label}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <HeroTerritory className="pointer-events-none absolute -right-24 -top-16 h-[420px] w-[420px] opacity-80" />
      <div className="container-x relative flex flex-col gap-4 py-14 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="title-1 !text-white gold-rule">{title}</h1>
        {lead && <p className="max-w-2xl text-lg text-white/80">{lead}</p>}
      </div>
      <div className="h-1 bg-gold" />
    </section>
  );
}

export function CTABanner({ lang = "fr" }: { lang?: Lang }) {
  const en = lang === "en";
  const CTA = en ? ctaEn : cta;
  return (
    <div className="bg-navy">
      <div className="container-x py-16 text-center">
        <h2 className="title-1 !text-white">{en ? "Let's talk about your territory" : "Parlons de votre territoire"}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          {en
            ? "Describe your territory and your ambition: a first response within 48 working hours."
            : `Décrivez votre territoire et votre ambition : un premier retour sous ${site.responsePromise} ouvrées.`}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={CTA.primary.href} variant="primary">
            {CTA.primary.label}
          </Button>
          <Button href={CTA.secondary.href} variant="ghost">
            {CTA.secondary.label}
          </Button>
        </div>
      </div>
      <div className="h-1.5 bg-gold" />
    </div>
  );
}

export function Breadcrumbs({ items, lang = "fr" }: { items: { label: string; href?: string }[]; lang?: Lang }) {
  const en = lang === "en";
  return (
    <nav aria-label={en ? "Breadcrumb" : "Fil d'Ariane"} className="container-x py-4 text-sm text-grey">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href={en ? "/en" : "/"} className="no-underline hover:text-royal">
            {en ? "Home" : "Accueil"}
          </Link>
        </li>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            <span aria-hidden>/</span>
            {it.href ? (
              <Link href={it.href} className="no-underline hover:text-royal">
                {it.label}
              </Link>
            ) : (
              <span className="font-medium text-ink">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function IngenierieXpNova({
  liens,
  lang = "fr",
}: {
  liens: { label: string; url: string }[];
  lang?: Lang;
}) {
  const en = lang === "en";
  return (
    <div className="rounded-lg border border-line bg-light p-6">
      <p className="eyebrow">{en ? "Engineering by XP-NOVA" : "Ingénierie assurée par XP-NOVA"}</p>
      <p className="mt-2 text-ink/90">
        {en
          ? "The disciplines that equip this programme — studies, owner's engineering, works supervision, structuring — are carried by XP-NOVA, Engineering & Consulting Firm."
          : "Les métiers qui outillent ce programme — études, AMO, maîtrise d'œuvre, structuration — sont portés par XP-NOVA, Bureau d'Ingénierie Conseil."}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {liens.map((l) => (
          <li key={l.url}>
            <a
              href={l.url}
              className="inline-block rounded-full border border-line bg-paper px-4 py-1.5 text-sm font-semibold text-navy no-underline hover:border-gold"
            >
              {l.label} →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname() ?? "/";
  const en = pathname === "/en" || pathname.startsWith("/en/");
  const NAV = en ? navEn : nav;
  const S = en ? siteEn : site;
  return (
    <footer className="bg-navy text-white/80">
      <div className="h-1.5 bg-gold" />
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Image
            src="/brand/logo_xpnova_white.png"
            alt="XP-NOVA"
            width={350}
            height={80}
            className="h-[70px] w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-white/70">
            <strong className="text-white">ODT</strong> — {S.fullName}. {S.devise}
          </p>
          <p className="mt-2 text-xs text-white/55">{S.rattachement}.</p>
        </div>
        <div>
          <p className="mb-3 font-bold text-white">{en ? "Navigation" : "Navigation"}</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/70 no-underline hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-bold text-white">{en ? "Ecosystem" : "Écosystème"}</p>
          <ul className="space-y-2 text-sm">
            {S.ecosystem.map((e) => (
              <li key={e.key}>
                <a href={e.url} className="text-white/70 hover:text-gold">
                  {e.name} — {e.tagline}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-bold text-white">Contact</p>
          <address className="space-y-1 text-sm not-italic text-white/70">
            <p>{site.address}</p>
            <p>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-white/70 hover:text-gold">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="text-white/70 hover:text-gold">
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-x flex flex-col justify-between gap-2 py-5 text-xs text-white/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName} — {site.legal.forme}, capital {site.legal.capital} ·
            RCCM {site.legal.rccm} · NIU {site.legal.niu}
          </p>
          <p className="flex gap-4">
            <Link href="/mentions-legales" className="text-white/55 no-underline hover:text-gold">
              {en ? "Legal notice" : "Mentions légales"}
            </Link>
            <Link href="/confidentialite" className="text-white/55 no-underline hover:text-gold">
              {en ? "Privacy" : "Confidentialité"}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
