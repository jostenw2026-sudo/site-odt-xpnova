"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nav, site, cta } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      {/* Barre écosystème — harmonisation groupe */}
      <div className="bg-navy text-white/90 text-sm">
        <div className="container-x flex items-center justify-between py-1.5">
          <span className="hidden sm:inline text-white/70">
            Écosystème :{" "}
            {site.ecosystem.map((e, i) => (
              <span key={e.key}>
                <a href={e.url} className="text-gold hover:underline">
                  {e.name}
                </a>
                {i < site.ecosystem.length - 1 ? " · " : ""}
              </span>
            ))}
          </span>
          <a href={`mailto:${site.email}`} className="ml-auto text-white/80 hover:text-white">
            {site.email}
          </a>
        </div>
      </div>

      <div className="container-x flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="ODT — accueil">
          <Image
            src="/brand/logo_xpnova_color.png"
            alt="XP-NOVA"
            width={280}
            height={64}
            priority
            className="h-14 w-auto"
          />
          <span className="hidden border-l border-line pl-3 leading-tight md:block">
            <span className="block font-display text-lg font-extrabold text-teal">ODT</span>
            <span className="block text-[10px] uppercase tracking-wide text-grey">
              Opérateur de Développement Territorial
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-navy no-underline hover:bg-light"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href={cta.primary.href}
            className="ml-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy no-underline hover:bg-gold-soft"
          >
            Contact
          </Link>
        </nav>

        <button
          className="lg:hidden rounded-md border border-line p-2"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper lg:hidden" aria-label="Navigation mobile">
          <div className="container-x flex flex-col py-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 font-semibold text-navy no-underline"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href={cta.primary.href}
              onClick={() => setOpen(false)}
              className="my-3 rounded-md bg-gold px-4 py-2.5 text-center font-semibold text-navy no-underline"
            >
              {cta.primary.label}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
