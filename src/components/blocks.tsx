import Link from "next/link";
import Image from "next/image";
import { site, cta, nav, STATUTS, type StatutKey } from "@/content/site";
import { Button } from "./ui";
import { HeroTerritory } from "./illustrations";

export function StatsBar({ tone = "light" }: { tone?: "navy" | "light" }) {
  const dark = tone === "navy";
  return (
    <div className={dark ? "bg-navy text-white" : "border-b border-line bg-light text-ink"}>
      <div className="container-x grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
        {site.proofStats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-extrabold text-teal">{s.value}</div>
            <div className={`mt-1 text-sm ${dark ? "text-white/70" : "text-grey"}`}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Badge de statut — doctrine d'honnêteté : affiché sur tout programme. */
export function StatutBadge({ statut }: { statut: StatutKey }) {
  const s = STATUTS[statut];
  const cls =
    s.tone === "teal"
      ? "bg-teal-soft text-navy border-teal/40"
      : s.tone === "gold"
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

export function CTABanner() {
  return (
    <div className="bg-navy">
      <div className="container-x py-16 text-center">
        <h2 className="title-1 !text-white">Parlons de votre territoire</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Décrivez votre territoire et votre ambition : un premier retour sous {site.responsePromise} ouvrées.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={cta.primary.href} variant="primary">
            {cta.primary.label}
          </Button>
          <Button href={cta.secondary.href} variant="ghost">
            {cta.secondary.label}
          </Button>
        </div>
      </div>
      <div className="h-1.5 bg-gold" />
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="container-x py-4 text-sm text-grey">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="no-underline hover:text-royal">
            Accueil
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

/** Bloc « Ingénierie assurée par XP-NOVA » — frontière de marque. */
export function IngenierieXpNova({ liens }: { liens: { label: string; url: string }[] }) {
  return (
    <div className="rounded-lg border border-line bg-light p-6">
      <p className="eyebrow">Ingénierie assurée par XP-NOVA</p>
      <p className="mt-2 text-ink/90">
        Les métiers qui outillent ce programme — études, AMO, maîtrise d&apos;œuvre, structuration —
        sont portés par XP-NOVA, Bureau d&apos;Ingénierie Conseil.
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
  return (
    <footer className="bg-navy text-white/80">
      <div className="h-1.5 bg-gold" />
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Image
            src="/brand/logo_xpnova_white.png"
            alt="XP-NOVA — Bureau d'Ingénierie Conseil"
            width={350}
            height={80}
            className="h-[70px] w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-white/70">
            <strong className="text-white">ODT</strong> — {site.fullName}. {site.devise}
          </p>
          <p className="mt-2 text-xs text-white/55">{site.rattachement}.</p>
        </div>
        <div>
          <p className="mb-3 font-bold text-white">Navigation</p>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/70 no-underline hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-bold text-white">Écosystème</p>
          <ul className="space-y-2 text-sm">
            {site.ecosystem.map((e) => (
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
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-white/55 no-underline hover:text-gold">
              Confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
