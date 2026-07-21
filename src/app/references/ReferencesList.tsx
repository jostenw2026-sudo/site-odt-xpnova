"use client";

import { useState, useMemo } from "react";
import { references, referencePays } from "@/content/references";
import { metiers } from "@/content/metiers";
import { CardReference } from "@/components/cards";

export default function ReferencesList() {
  const [pays, setPays] = useState("");
  const [metier, setMetier] = useState("");

  const filtered = useMemo(
    () =>
      references.filter(
        (r) => (!pays || r.pays === pays) && (!metier || r.metiers.includes(metier)),
      ),
    [pays, metier],
  );

  const select = "rounded-md border border-line bg-paper px-4 py-2.5 text-ink";

  return (
    <div>
      <div className="flex flex-wrap items-end gap-4 mb-8">
        <div>
          <label htmlFor="f-pays" className="block text-sm font-semibold text-navy mb-1">
            Pays
          </label>
          <select id="f-pays" className={select} value={pays} onChange={(e) => setPays(e.target.value)}>
            <option value="">Tous les pays</option>
            {referencePays.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="f-metier" className="block text-sm font-semibold text-navy mb-1">
            Métier
          </label>
          <select
            id="f-metier"
            className={select}
            value={metier}
            onChange={(e) => setMetier(e.target.value)}
          >
            <option value="">Tous les métiers</option>
            {metiers.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.title}
              </option>
            ))}
          </select>
        </div>
        <p className="ml-auto text-sm text-grey">
          {filtered.length} référence{filtered.length > 1 ? "s" : ""}
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <CardReference key={r.slug} r={r} />
          ))}
        </div>
      ) : (
        <p className="text-grey">
          Aucune référence pour ce filtre. D&apos;autres références sont disponibles sur demande.
        </p>
      )}
    </div>
  );
}
