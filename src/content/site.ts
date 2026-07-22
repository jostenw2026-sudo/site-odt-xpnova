// Configuration ODT — Opérateur de Développement Territorial (CDC-ODT-V2 validé 22/07/2026).
// Doctrine d'honnêteté : statuts affichés, sources citées, cadre d'intervention systématique.

export const site = {
  name: "ODT",
  fullName: "Opérateur de Développement Territorial",
  baseline: "Opérateur de Développement Territorial",
  rattachement: "Une initiative de XP-NOVA — Bureau d'Ingénierie Conseil",
  legalName: "XP-NOVA SARL",
  url: "https://odt.xp-nova.com",
  devise: "Planifier. Financer. Transformer.",
  description:
    "ODT — Opérateur de Développement Territorial : intelligence territoriale, programmes structurants et financement des territoires d'Afrique centrale. Une initiative XP-NOVA.",
  email: "contact@xp-nova.com",
  phone: "+237 6 70 04 80 00",
  address: "134, Rue 1813, Vallée Bastos — B.P. 5603, Yaoundé, Cameroun",
  responsePromise: "48 h",
  legal: {
    forme: "SARL pluripersonnelle",
    capital: "10 000 000 FCFA",
    rccm: "RC/YAO/2006/B/945",
    niu: "M01060001983W",
  },
  proofStats: [
    { value: "7", label: "observatoires territoriaux" },
    { value: "5", label: "modèles de programmes" },
    { value: "6", label: "pays d'expérience mobilisable" },
    { value: "48 h", label: "premier retour" },
  ],
  ecosystem: [
    {
      key: "xpnova",
      name: "XP-NOVA",
      tagline: "Bureau d'Ingénierie Conseil — les métiers",
      url: "https://xp-nova.com",
    },
    {
      key: "agrovita",
      name: "AGROVITA",
      tagline: "Agriculture & agro-industrie",
      url: "https://agrovita.xp-nova.com",
    },
  ],
} as const;

export const nav = [
  { label: "L'ODT", href: "/odt" },
  { label: "Territoires & Programmes", href: "/programmes" },
  { label: "Observatoire", href: "/observatoire" },
  { label: "Financement", href: "/financement" },
  { label: "Méthodologie", href: "/methodologie" },
  { label: "Ressources", href: "/ressources" },
] as const;

export const cta = {
  primary: { label: "Soumettre un projet territorial", href: "/contact" },
  secondary: { label: "Explorer l'Observatoire", href: "/observatoire" },
} as const;

/** Statuts de programmes — doctrine d'honnêteté (affichage obligatoire). */
export const STATUTS = {
  "programme-type": {
    label: "Programme-type",
    desc: "Modèle reproductible : chiffres d'hypothèse, à adapter à chaque territoire.",
    tone: "teal",
  },
  "en-structuration": {
    label: "En structuration",
    desc: "Territoire réel, partenariats en cours de constitution.",
    tone: "gold",
  },
  reference: {
    label: "Référence",
    desc: "Mission réellement exécutée — cadre d'intervention précisé.",
    tone: "navy",
  },
} as const;
export type StatutKey = keyof typeof STATUTS;
