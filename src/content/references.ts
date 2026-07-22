// Expertise mobilisable — 9 fiches de références GEQUIPS (format bailleur) +
// trajectoire du promoteur. Source : « Listes des références de GEQUIPS » (v2)
// et CV Josten Magloire Wandji (nov. 2025).
// DOCTRINE C7 : cadre d'intervention affiché sur chaque fiche — ces missions
// ont été exécutées par GEQUIPS SARL (associée de XP-NOVA), jamais par ODT.

export const CADRE_GEQUIPS =
  "Mission exécutée par GEQUIPS SARL (associée de XP-NOVA SARL), M. Wandji Josten Magloire chef de projet. Capacité mobilisable par XP-NOVA via le mécanisme statutaire d'engagement des capacités et la convention d'appui technique.";

export interface FicheGequips {
  slug: string;
  projet: string;
  pays: string;
  lieu?: string;
  mission: string;
  periode: string;
  valeurServices: string;
  effectif: number;
  client: string;
  descriptif: string;
  secteur: "aeroport" | "stade" | "batiment" | "eau" | "campus" | "energie";
}

export const fichesGequips: FicheGequips[] = [
  {
    slug: "aeroport-ouagadougou-donsin",
    projet: "Nouvel aéroport de Ouagadougou-Donsin",
    pays: "Burkina Faso",
    lieu: "Ouagadougou",
    mission: "Maîtrise d'œuvre technique de conception (lots technologiques)",
    periode: "2012 – 2013 (12 mois)",
    valeurServices: "99 M FCFA HT",
    effectif: 14,
    client: "EGIS Cameroun",
    descriptif:
      "Aérodrome complet : 80 bâtiments (120 000 m²), VRD, pistes — puissance électrique installée de 34 MW. Conception complète CFO, CFA, CVC, plomberie.",
    secteur: "aeroport",
  },
  {
    slug: "stade-omnisport-yaounde",
    projet: "Réhabilitation du stade omnisport de Yaoundé",
    pays: "Cameroun",
    lieu: "Yaoundé",
    mission: "Maîtrise d'œuvre technique de conception et contrôle d'exécution",
    periode: "2015 – 2016 (15 mois)",
    valeurServices: "160 M FCFA TTC",
    effectif: 22,
    client: "EGIS Cameroun",
    descriptif:
      "Stade de 30 000 places (mise aux normes CAF/FIFA) et bâtiments annexes R+2. Conception complète courants forts/faibles, climatisation, plomberie, sonorisation, éclairage, sécurité.",
    secteur: "stade",
  },
  {
    slug: "complexe-olympique-olembe",
    projet: "Complexe olympique et sportif d'Olembé (COSO)",
    pays: "Cameroun",
    lieu: "Yaoundé",
    mission: "Contrôle d'exécution — visa des plans (lots CFO, CFA, PLO, CVC)",
    periode: "2017 – …",
    valeurServices: "8 M FCFA TTC",
    effectif: 5,
    client: "EGIS Cameroun (EGIS International, MOE d'exécution)",
    descriptif:
      "Complexe de 60 000 places : stade principal, terrains d'entraînement, gymnase, piscines olympiques, hôtel 5* — construction clef en main (entreprise PICCINI).",
    secteur: "stade",
  },
  {
    slug: "ens-maroua",
    projet: "École Normale Supérieure de Maroua",
    pays: "Cameroun",
    lieu: "Maroua",
    mission: "Maîtrise d'œuvre technique de conception (bâtiments et VRD)",
    periode: "2008 – 2011 (12 mois de services)",
    valeurServices: "79 M FCFA HT",
    effectif: 8,
    client: "EGIS Cameroun",
    descriptif:
      "Campus universitaire de 25 bâtiments à terme sur 63 ha : conception complète CFO, CFA, CVC, plomberie des bâtiments et des VRD.",
    secteur: "campus",
  },
  {
    slug: "siege-csph",
    projet: "Immeuble siège de la CSPH",
    pays: "Cameroun",
    lieu: "Yaoundé",
    mission: "Maîtrise d'œuvre technique de conception et contrôle d'exécution",
    periode: "2001 – 2007 (36 mois)",
    valeurServices: "72 M FCFA TTC",
    effectif: 8,
    client: "EGIS Cameroun",
    descriptif:
      "Bâtiment R+6 : conception complète des installations techniques (CFO, CFA, CVC, plomberie, sonorisation, éclairage, sécurité).",
    secteur: "batiment",
  },
  {
    slug: "rehabilitation-sni",
    projet: "Réhabilitation de l'immeuble SNI (IGH R+18)",
    pays: "Cameroun",
    lieu: "Yaoundé",
    mission: "Maîtrise d'œuvre technique de conception et contrôle d'exécution",
    periode: "2002 – 2003 (15 mois)",
    valeurServices: "75 M FCFA TTC",
    effectif: 10,
    client: "EGIS Cameroun",
    descriptif:
      "Immeuble de grande hauteur R+18 : installations techniques complètes, ascenseurs, groupes électrogènes.",
    secteur: "batiment",
  },
  {
    slug: "siege-caa-conception",
    projet: "Immeuble siège de la Caisse Autonome d'Amortissement — conception",
    pays: "Cameroun",
    lieu: "Yaoundé",
    mission: "Maîtrise d'œuvre technique de conception",
    periode: "2009 – 2010 (6 mois)",
    valeurServices: "35 M FCFA TTC",
    effectif: 8,
    client: "EGIS Cameroun",
    descriptif: "Bâtiment R+8 avec 3 niveaux de sous-sol : conception complète des lots technologiques.",
    secteur: "batiment",
  },
  {
    slug: "siege-caa-controle",
    projet: "Immeuble siège de la CAA — contrôle d'exécution",
    pays: "Cameroun",
    lieu: "Yaoundé",
    mission: "Contrôle d'exécution des lots CFO, CFA, PLO, CVC — réception technique des équipements en Espagne",
    periode: "2013 – 2016 (16 mois de services)",
    valeurServices: "32 M FCFA TTC",
    effectif: 5,
    client: "EGIS Cameroun",
    descriptif: "Bâtiment R+8 avec 3 niveaux de sous-sol.",
    secteur: "batiment",
  },
  {
    slug: "siege-total-brazzaville",
    projet: "Immeuble siège de Total E&P — Brazzaville",
    pays: "Congo",
    lieu: "Brazzaville",
    mission: "Maîtrise d'œuvre technique de conception (phase APD)",
    periode: "2017 (6 mois)",
    valeurServices: "34 M FCFA TTC",
    effectif: 9,
    client: "EGIS Cameroun",
    descriptif:
      "Immeuble R+7 avec 2 sous-sols : conception complète des installations techniques.",
    secteur: "batiment",
  },
];

/** Trajectoire du promoteur — repères vérifiables (CV nov. 2025, ONIGE A001703). */
export const promoteur = {
  nom: "Josten Magloire Wandji",
  titre: "Ingénieur électromécanicien (ENSP Yaoundé), gérant statutaire de XP-NOVA SARL",
  onige: "Ordre National des Ingénieurs de Génie Électrique — matricule A001703",
  reperes: [
    { periode: "1989 – 1999", texte: "Chargé d'études à la DGTC (Direction Générale des Grands Travaux du Cameroun) : suivi technico-financier d'équipements publics — dont l'adduction d'eau de la ville de Yaoundé (captage du Nyong, réseau, châteaux d'eau) et des immeubles ministériels IGH." },
    { periode: "1999 – aujourd'hui", texte: "Directeur de projet GEQUIPS : maîtrise d'œuvre des lots technologiques de grands équipements — aéroports (Malabo, Ouagadougou-Donsin, Nsimalen, Douala, Bangui), stades, campus, sièges institutionnels, réseaux urbains (Mongomeyen, Guinée équatoriale)." },
    { periode: "2008 – aujourd'hui", texte: "Expert technique APAVE : expertise et contrôle technique MEP (bâtiment, industrie, équipements collectifs)." },
    { periode: "2010 – 2012", texte: "Expert technique auprès de la Commission Nationale de passation des Marchés Publics (conformité des DAO et des rapports d'analyse)." },
    { periode: "2005 · 2010", texte: "Audits de programmes publics au Gabon : Budget d'Investissement Public (4 provinces) et appui à l'audit du Trésor." },
  ],
  pays: ["Cameroun", "Burkina Faso", "Gabon", "Guinée équatoriale", "RCA", "Congo"],
};
