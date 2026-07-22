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

const EN = {
  orgTypes: [
    "Municipality / local government",
    "Region / governorate",
    "Ministry / public agency",
    "Donor / technical and financial partner",
    "Impact investor",
    "NGO / development programme",
    "Other",
  ],
  objets: [
    "Submit a territorial project",
    "Structure a municipal portfolio",
    "Explore a programme model (agropole, corridor, pole, basin)",
    "Donor partnership / financing",
    "Observatory: request a territorial analysis",
    "Other",
  ],
};

export default function ContactForm({ lang = "fr" }: { lang?: "fr" | "en" }) {
  const en = lang === "en";
  const L = {
    nom: en ? "Name *" : "Nom *",
    org: en ? "Organisation / territory *" : "Organisation / territoire *",
    tel: en ? "Phone" : "Téléphone",
    pays: en ? "Country *" : "Pays *",
    typeOrg: en ? "Type of organisation" : "Type d'organisation",
    objet: en ? "Subject" : "Objet",
    budget: en ? "Envisaged envelope" : "Enveloppe envisagée",
    budgetOpt: en ? "(optional)" : "(optionnel)",
    budgetPh: en ? "E.g.: to be determined" : "Ex. : à déterminer",
    message: en ? "Your territory and your ambition *" : "Votre territoire et votre ambition *",
    select: en ? "Select…" : "Sélectionner…",
    send: en ? "Send my request" : "Envoyer ma demande",
    sending: en ? "Sending…" : "Envoi…",
    error: en ? "An error occurred. Write to us directly at contact@xp-nova.com." : "{L.error}",
    okTitle: en ? "Request received" : "Demande reçue",
    okText: en ? "Thank you. The ODT team will reply within 48 working hours to the address provided." : "Merci. L'équipe ODT vous répond sous 48 h ouvrées à l'adresse indiquée.",
    rgpd: en
      ? "Your data is used solely to process your request. Getting in touch is free and without commitment; the need is assessed before any proposal."
      : "Vos données servent uniquement à traiter votre demande. La prise de contact est libre et sans engagement ; l'instruction du besoin précède toute proposition.",
  };
  const OT = en ? EN.orgTypes : orgTypes;
  const OB = en ? EN.objets : objets;
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
        <h3 className="title-3 text-navy">{L.okTitle}</h3>
        <p className="mt-2 text-grey">
          {L.okText}
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
        <label className={label} htmlFor="nom">{L.nom}</label>
        <input id="nom" name="nom" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="organisation">{L.org}</label>
        <input id="organisation" name="organisation" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="email">E-mail *</label>
        <input id="email" name="email" type="email" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="telephone">{L.tel}</label>
        <input id="telephone" name="telephone" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="pays">{L.pays}</label>
        <input id="pays" name="pays" required className={field} />
      </div>
      <div>
        <label className={label} htmlFor="typeOrg">{L.typeOrg}</label>
        <select id="typeOrg" name="typeOrg" className={field} defaultValue="">
          <option value="" disabled>{L.select}</option>
          {OT.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="objet">{L.objet}</label>
        <select id="objet" name="objet" className={field} defaultValue="">
          <option value="" disabled>{L.select}</option>
          {OB.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="budget">
          {L.budget} <span className="font-normal text-grey">{L.budgetOpt}</span>
        </label>
        <input id="budget" name="budget" className={field} placeholder={L.budgetPh} />
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="message">{L.message}</label>
        <textarea id="message" name="message" required rows={5} className={field} />
      </div>

      <div className="flex items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-md bg-gold px-6 py-3 font-semibold text-navy hover:bg-gold-soft disabled:opacity-60"
        >
          {status === "sending" ? L.sending : L.send}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-600">
            {L.error}
          </p>
        )}
      </div>
      <p className="text-xs text-grey sm:col-span-2">
        {L.rgpd}
      </p>
    </form>
  );
}
