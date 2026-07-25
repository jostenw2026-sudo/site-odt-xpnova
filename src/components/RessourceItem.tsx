"use client";

import { useState } from "react";
import Link from "next/link";
import type { Ressource } from "@/content/ressources";
import RessourceRequestForm from "@/components/RessourceRequestForm";

// Carte d'une ressource ODT. Trois modes :
//  - download -> téléchargement direct du PDF (public/ressources)
//  - link     -> renvoi vers une page interne
//  - request  -> bouton qui déplie le formulaire de demande (lead Odoo)

export default function RessourceItem({ r, lang = "fr" }: { r: Ressource; lang?: "fr" | "en" }) {
  const en = lang === "en";
  const [open, setOpen] = useState(false);
  const requestLabel = en ? "Request access" : "Demander l'accès";

  return (
    <div className="flex flex-col rounded-lg border border-line bg-paper p-6">
      <h2 className="title-3 text-navy">{r.title}</h2>
      <p className="mt-2 flex-1 text-grey">{r.desc}</p>

      <div className="mt-4">
        {r.mode === "download" && r.file ? (
          <a
            href={`/ressources/${r.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy hover:bg-gold-soft"
          >
            {r.badge}
          </a>
        ) : r.mode === "link" && r.href ? (
          <Link href={r.href} className="text-sm font-semibold text-navy">
            {r.badge} →
          </Link>
        ) : !open ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-block rounded-md bg-royal px-4 py-2 text-sm font-semibold text-white hover:bg-navy"
          >
            {r.badge} — {requestLabel}
          </button>
        ) : (
          <RessourceRequestForm document={r.title} lang={lang} />
        )}
      </div>
    </div>
  );
}
