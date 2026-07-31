// Ressources ODT — matrice téléchargement / lien interne / demande motivée.
// mode "download" : PDF public dans /public/ressources/<file>
// mode "link"     : renvoi vers une page interne (ex. Publications de l'Observatoire)
// mode "request"  : formulaire de demande -> lead Odoo, puis (si `file` défini)
//                   livraison sécurisée du PDF privé après validation du propriétaire.
//   Le PDF d'un doc "request" vit dans private/ressources/<file> (jamais public).

export type RessourceMode = "download" | "link" | "request";

export type Ressource = {
  key: string;
  title: string;
  desc: string;
  mode: RessourceMode;
  badge: string;
  file?: string;
  href?: string;
  gedName?: string; // nom exact du document dans la GED Odoo (espace « Ressources du site »)
};

// Espace GED (module Documents Odoo) où vivent les documents servis par le site.
export const GED_SPACE = "Ressources du site";

export const ressources: Ressource[] = [
  {
    key: "note-presentation",
    title: "Note de présentation ODT",
    desc: "Le modèle d'opérateur, les programmes et l'Observatoire en 4 pages — format partenaires institutionnels.",
    mode: "request",
    badge: "Sur demande",
    file: "note-presentation-odt.pdf",
    gedName: "Note de presentation ODT",
  },
  {
    key: "publications",
    title: "Publications de l'Observatoire",
    desc: "Notes stratégiques, baromètres et cartographies commentées.",
    mode: "link",
    href: "/observatoire/publications",
    badge: "Voir les publications",
  },
  {
    key: "fiches-references",
    title: "Fiche de référence INNOVA",
    desc: "Les projets réalisés par INNOVA (sous-traitant de GEQUIPS depuis 2007) : ingénierie économique & métré, CAO et GED.",
    mode: "request",
    badge: "Sur demande motivée",
    file: "fiche-reference-innova.pdf",
    gedName: "Fiche de reference INNOVA",
  },
  {
    key: "documents-institutionnels",
    title: "Documents institutionnels",
    desc: "RCCM, NIU, statuts, attestations — dossier administratif du groupe.",
    mode: "request",
    badge: "Sur demande motivée",
    file: "dossier-institutionnel.pdf",
    gedName: "Documents institutionnels (RCCM, NIU, statuts)",
  },
];

export const ressourcesEn: Ressource[] = [
  {
    key: "note-presentation",
    title: "ODT presentation note",
    desc: "The operator model, the programmes and the Observatory in 4 pages — institutional partner format.",
    mode: "request",
    badge: "On request",
    file: "note-presentation-odt.pdf",
    gedName: "Note de presentation ODT",
  },
  {
    key: "publications",
    title: "Observatory publications",
    desc: "Strategic notes, barometers and annotated maps.",
    mode: "link",
    href: "/en/observatoire/publications",
    badge: "See publications",
  },
  {
    key: "fiches-references",
    title: "INNOVA reference sheet",
    desc: "Projects delivered by INNOVA (GEQUIPS subcontractor since 2007): economic engineering & quantity surveying, CAD and EDM.",
    mode: "request",
    badge: "On justified request",
    file: "fiche-reference-innova.pdf",
    gedName: "Fiche de reference INNOVA",
  },
  {
    key: "documents-institutionnels",
    title: "Institutional documents",
    desc: "Trade registry, tax ID, articles of association, certificates — the group's administrative file.",
    mode: "request",
    badge: "On justified request",
    file: "dossier-institutionnel.pdf",
    gedName: "Documents institutionnels (RCCM, NIU, statuts)",
  },
];
