"use client";

import { useState } from "react";

const orgTypes = [
  "Commune / collectivité territoriale",
  "Région / gouvernorat",
  "Ministère / agence publique",
  "Bailleur / partenaire technique et financier",
  "Investisseur d'impact",
  "ONG / programme de développement",
  "Autre",
];

const objets = [
  "Soumettre un projet territorial",
  "Structurer un portefeuille communal",
  "Étudier un modèle de programme (agropole, corridor, pôle, bassin)",
  "Partenariat bailleur / financement",
  "Observatoire : demande d'analyse territoriale",
  "Autre",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-lg border border-line bg-light p-8 text-center">
        <h3 className="title-3 text-navy">Demande reçue</h3>
        <p className="mt-2 text-grey">
          Merci. L&apos;équipe ODT vous répond sous 48 h ouvrées à l&apos;adresse indiquée.
        </p>
      </div>
    );
  }

  const field = "w-full rounded-md border border-line bg-paper px-4 py-3 text-ink focus:border-royal";
  const label = "block text-sm font-semibold text-navy mb-1";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div>
        <label className={label} htmlFor="nom">Nom *</label>
        <input id="nom" name="nom" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="organisation">Organisation / territoire *</label>
        <input id="organisation" name="organisation" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="email">E-mail *</label>
        <input id="email" name="email" type="email" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="telephone">Téléphone</label>
        <input id="telephone" name="telephone" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="pays">Pays *</label>
        <input id="pays" name="pays" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="typeOrg">Type d&apos;organisation</label>
        <select id="typeOrg" name="typeOrg" className={field} defaultValue="">
          <option value="" disabled>Sélectionner…</option>
          {orgTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="objet">Objet</label>
        <select id="objet" name="objet" className={field} defaultValue="">
          <option value="" disabled>Sélectionner…</option>
          {objets.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="budget">
          Enveloppe envisagée <span className="font-normal text-grey">(optionnel)</span>
        </label>
        <input id="budget" name="budget" className={field} placeholder="Ex. : à déterminer" />
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="message">Votre territoire et votre ambition *</label>
        <textarea id="message" name="message" required rows={5} className={field} />
      </div>

      <div className="flex items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-md bg-gold px-6 py-3 font-semibold text-navy hover:bg-gold-soft disabled:opacity-60"
        >
          {status === "sending" ? "Envoi…" : "Envoyer ma demande"}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-600">
            Une erreur est survenue. Écrivez-nous directement à contact@xp-nova.com.
          </p>
        )}
      </div>
      <p className="text-xs text-grey sm:col-span-2">
        Vos données servent uniquement à traiter votre demande. La prise de contact est libre et sans
        engagement ; l&apos;instruction du besoin précède toute proposition.
      </p>
    </form>
  );
}
