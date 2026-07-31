// FAQ ODT — questions fréquentes, dérivées de la charte (doctrine d'honnêteté,
// parcours contractuel canonique) et de la note stratégique. Bilingue (fr/en).

export interface QA {
  q: string;
  a: string;
}

export interface FaqContent {
  crumb: string;
  hero: { eyebrow: string; title: string; lead: string };
  items: { theme: string; qa: QA[] }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

const fr: FaqContent = {
  crumb: "FAQ",
  hero: {
    eyebrow: "Questions fréquentes",
    title: "Tout comprendre avant de soumettre un projet",
    lead: "Le fonctionnement de l'ODT, le parcours contractuel, la sécurisation des fonds et notre doctrine de transparence — en clair.",
  },
  items: [
    {
      theme: "Comprendre l'ODT",
      qa: [
        {
          q: "Qu'est-ce que l'ODT ?",
          a: "L'ODT (Opérateur de Développement Territorial) est la division de XP-NOVA SARL, bureau d'ingénierie conseil, dédiée aux territoires. Il agit comme intermédiaire technique, intégrateur et tiers de confiance entre les sept familles d'acteurs de la gouvernance territoriale : État, collectivités, bailleurs, secteur privé, communautés, société civile et cadres de concertation.",
        },
        {
          q: "Quelle différence entre XP-NOVA, l'ODT et AGROVITA ?",
          a: "XP-NOVA est le bureau d'ingénierie conseil (les métiers : études, AMO, maîtrise d'œuvre, structuration). L'ODT est sa division « développement territorial » qui structure et finance des programmes de territoires. AGROVITA porte le volet agriculture et agro-industrie. Les trois partagent la même exigence d'ingénierie et le même écosystème.",
        },
        {
          q: "Dans quels pays l'ODT intervient-il ?",
          a: "L'ancrage est camerounais et l'ambition régionale (Afrique centrale, CEMAC). L'expérience mobilisable du réseau couvre plusieurs pays, activable par mission via le mécanisme statutaire d'engagement des capacités.",
        },
      ],
    },
    {
      theme: "Soumettre un projet",
      qa: [
        {
          q: "Soumettre un projet coûte-t-il quelque chose ?",
          a: "Non. La soumission d'un projet sur odt.xp-nova.com est gratuite, et le pré-diagnostic de faisabilité et d'alignement territorial est délivré gratuitement sous 48 h ouvrées. Des frais n'interviennent qu'à l'étape suivante — l'Ouverture Officielle de Dossier (FOD) — qui autorise les études techniques de détail.",
        },
        {
          q: "Quel est le parcours, de l'idée au chantier ?",
          a: "Quatre étapes : (1) soumission gratuite ; (2) pré-diagnostic gratuit sous 48 h ; (3) Ouverture Officielle de Dossier (FOD) autorisant les études de détail ; (4) convention de mission (AMO/MOE) en FCFA, sanctuarisation des capitaux et démarrage sous contrôle d'ingénieur.",
        },
        {
          q: "Qui peut solliciter l'ODT ?",
          a: "Communes et collectivités territoriales, régions, ministères et agences publiques, bailleurs et partenaires techniques et financiers, investisseurs d'impact, ONG et programmes de développement. La prise de contact est libre et sans engagement.",
        },
        {
          q: "Quel délai pour une première réponse ?",
          a: "48 heures ouvrées pour une première analyse et un premier retour à toute demande instruite.",
        },
      ],
    },
    {
      theme: "Sécurité & transparence",
      qa: [
        {
          q: "Qu'est-ce que le visa technique ?",
          a: "C'est le document signé par les ingénieurs de XP-NOVA qui certifie la qualité et l'atteinte effective des jalons d'un chantier. Aucun décaissement des fonds sanctuarisés n'intervient sans ce visa préalable : il protège le maître d'ouvrage et le bailleur.",
        },
        {
          q: "Comment les fonds sont-ils sécurisés (escrow OHADA) ?",
          a: "Les ressources mobilisées par les bailleurs ou l'État au profit des collectivités et des entreprises sont placées sur un compte séquestre de droit OHADA. Les décaissements sont conditionnés au visa technique attestant des jalons atteints — d'où une traçabilité et une redevabilité complètes.",
        },
        {
          q: "Comment garantissez-vous la transparence ?",
          a: "Par une doctrine d'honnêteté : chaque programme affiche son statut (programme-type, en structuration, référence), les données sont sourcées et datées, et le cadre d'intervention est précisé sur chaque référence. Les missions exécutées par des associés (ex. GEQUIPS) sont désignées comme telles, jamais attribuées à l'ODT.",
        },
        {
          q: "En quelle devise travaillez-vous ?",
          a: "En francs CFA (FCFA). Les montants des programmes-types sont des hypothèses de dimensionnement, à préciser par études de faisabilité pour chaque territoire.",
        },
      ],
    },
  ],
  ctaTitle: "Une question qui n'est pas ici ?",
  ctaText: "Décrivez votre besoin : l'équipe ODT vous répond sous 48 h ouvrées, sans engagement.",
  ctaButton: "Nous écrire",
};

const en: FaqContent = {
  crumb: "FAQ",
  hero: {
    eyebrow: "Frequently asked questions",
    title: "Everything you need before submitting a project",
    lead: "How ODT works, the contractual path, how funds are secured and our transparency doctrine — in plain terms.",
  },
  items: [
    {
      theme: "Understanding ODT",
      qa: [
        {
          q: "What is ODT?",
          a: "ODT (Territorial Development Operator) is the territory-focused division of XP-NOVA SARL, an engineering and consulting firm. It acts as the technical intermediary, integrator and trusted third party between the seven families of actors in territorial governance: the State, local governments, donors, the private sector, communities, civil society and consultation frameworks.",
        },
        {
          q: "What is the difference between XP-NOVA, ODT and AGROVITA?",
          a: "XP-NOVA is the engineering and consulting firm (the disciplines: studies, delegated project management, works supervision, structuring). ODT is its territorial-development division, which structures and finances territorial programmes. AGROVITA carries the agriculture and agro-industry stream. The three share the same engineering standard and ecosystem.",
        },
        {
          q: "In which countries does ODT operate?",
          a: "The anchoring is Cameroonian and the ambition regional (Central Africa, CEMAC). The network's mobilisable experience spans several countries, deployed per assignment through the statutory capacity-engagement mechanism.",
        },
      ],
    },
    {
      theme: "Submitting a project",
      qa: [
        {
          q: "Does submitting a project cost anything?",
          a: "No. Submitting a project on odt.xp-nova.com is free, and the feasibility and territorial-alignment pre-diagnosis is delivered free of charge within 48 working hours. Fees only apply at the next step — the official File Opening (FOD) — which authorises detailed technical studies.",
        },
        {
          q: "What is the path, from idea to works?",
          a: "Four steps: (1) free submission; (2) free pre-diagnosis within 48h; (3) official File Opening (FOD) authorising detailed studies; (4) assignment agreement (AMO/MOE) in FCFA, ring-fencing of capital and start under engineering control.",
        },
        {
          q: "Who can call on ODT?",
          a: "Municipalities and local governments, regions, ministries and public agencies, donors and technical and financial partners, impact investors, NGOs and development programmes. Getting in touch is free and without commitment.",
        },
        {
          q: "How quickly do you respond?",
          a: "Within 48 working hours for a first analysis and response to any submitted request.",
        },
      ],
    },
    {
      theme: "Security & transparency",
      qa: [
        {
          q: "What is the technical sign-off?",
          a: "It is the document signed by XP-NOVA engineers certifying quality and the effective achievement of a project's milestones. No disbursement of the ring-fenced funds occurs without this prior sign-off: it protects both the contracting authority and the donor.",
        },
        {
          q: "How are funds secured (OHADA escrow)?",
          a: "Resources mobilised by donors or the State for local governments and firms are placed in an OHADA-law escrow account. Disbursements are conditioned on the technical sign-off attesting to milestones reached — ensuring full traceability and accountability.",
        },
        {
          q: "How do you guarantee transparency?",
          a: "Through an honesty doctrine: every programme states its status (programme model, under structuring, track record), data is sourced and dated, and the engagement framework is stated on each reference. Assignments delivered by associates (e.g. GEQUIPS) are labelled as such, never attributed to ODT.",
        },
        {
          q: "What currency do you work in?",
          a: "In CFA francs (FCFA). Programme-model amounts are sizing assumptions, to be refined through feasibility studies for each territory.",
        },
      ],
    },
  ],
  ctaTitle: "A question not covered here?",
  ctaText: "Describe your need: the ODT team replies within 48 working hours, without commitment.",
  ctaButton: "Write to us",
};

export const faq = { fr, en } as const;
export type FaqLang = keyof typeof faq;
export function getFaq(lang: FaqLang): FaqContent {
  return faq[lang] ?? faq.fr;
}
