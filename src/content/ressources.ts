// Ressources téléchargeables — CDC V1.2 §7.3 (matrice public / sur demande).
// docStatus "a-paraitre" tant que le document n'est pas produit (P0). Pas de faux lien.

export type Ressource = {
  key: string;
  title: string;
  type: "Profil" | "Brochure" | "Politique" | "Publication";
  desc: string;
  acces: "public" | "sur-demande";
  docStatus: "public" | "a-paraitre";
};

export const ressources: Ressource[] = [
  {
    key: "capability-statement",
    title: "Capability Statement",
    type: "Profil",
    desc: "Présentation synthétique (2-4 pages) : métiers, références, atouts. Pour prises de contact et préqualifications.",
    acces: "public",
    docStatus: "a-paraitre",
  },
  {
    key: "company-profile",
    title: "Company Profile",
    type: "Profil",
    desc: "Présentation institutionnelle complète : vision, histoire, métiers, méthode, équipe, références, gouvernance.",
    acces: "public",
    docStatus: "a-paraitre",
  },
  {
    key: "referentiel-methodologique",
    title: "Référentiel méthodologique",
    type: "Publication",
    desc: "La méthode XP-NOVA en 6 phases, détaillée avec ses livrables.",
    acces: "public",
    docStatus: "a-paraitre",
  },
  {
    key: "cv-experts",
    title: "CV des experts (format bailleur)",
    type: "Profil",
    desc: "CV standardisés conformes aux exigences des bailleurs, transmis sur demande motivée.",
    acces: "sur-demande",
    docStatus: "a-paraitre",
  },
  {
    key: "dossier-administratif",
    title: "Dossier administratif (RCCM, NIU, attestations)",
    type: "Publication",
    desc: "Pièces administratives et de conformité, transmises sur demande dans le cadre d'une procédure.",
    acces: "sur-demande",
    docStatus: "a-paraitre",
  },
];
