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
};

export const ressources: Ressource[] = [
  {
    key: "note-presentation",
    title: "Note de présentation ODT",
    desc: "Le modèle d'opérateur, les programmes et l'Observatoire en 4 pages — format partenaires institutionnels.",
    mode: "request",
    badge: "Sur demande",
    file: "note-presentation-odt.pdf",
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
    title: "Fiches de références détaillées",
    desc: "Les 9 fiches GEQUIPS au format bailleur (périodes, valeurs, effectifs, clients).",
    mode: "request",
    badge: "Sur demande motivée",
    file: "fiches-references-gequips.pdf",
  },
  {
    key: "documents-institutionnels",
    title: "Documents institutionnels",
    desc: "RCCM, NIU, statuts, attestations — dossier administratif du groupe.",
    mode: "request",
    badge: "Sur demande motivée",
    file: "dossier-institutionnel.pdf",
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
    title: "Detailed reference sheets",
    desc: "The 9 GEQUIPS sheets in donor format (periods, values, staffing, clients).",
    mode: "request",
    badge: "On justified request",
    file: "fiches-references-gequips.pdf",
  },
  {
    key: "documents-institutionnels",
    title: "Institutional documents",
    desc: "Trade registry, tax ID, articles of association, certificates — the group's administrative file.",
    mode: "request",
    badge: "On justified request",
    file: "dossier-institutionnel.pdf",
  },
];
