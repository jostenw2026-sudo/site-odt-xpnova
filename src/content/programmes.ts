// Territoires & Programmes — les 5 modèles d'intervention de l'opérateur.
// DOCTRINE : statut affiché sur chaque programme. Les montants des
// programmes-types sont des HYPOTHÈSES de dimensionnement, en FCFA, à adapter
// à chaque territoire — jamais présentés comme des réalisations.

import type { StatutKey } from "./site";

export interface Programme {
  slug: string;
  type: string;
  title: string;
  statut: StatutKey;
  horizon: string;
  short: string;
  vision: string;
  composantes: { titre: string; desc: string }[];
  hypotheses: { poste: string; valeur: string }[];
  impacts: string[];
  ancrage: string;
  metiersXpNova: { label: string; url: string }[];
  lienAgrovita?: boolean;
}

const CADRE_HYPOTHESES =
  "Montants indicatifs de dimensionnement (FCFA), hypothèses explicites — à préciser par études de faisabilité (XP-NOVA).";

export const programmes: Programme[] = [
  {
    slug: "agropole-vivrier-regional",
    type: "Agropole",
    title: "Agropole vivrier régional",
    statut: "programme-type",
    horizon: "5–7 ans",
    short:
      "Concentrer production, transformation et mise en marché d'un bassin vivrier autour d'une plateforme équipée.",
    vision:
      "Un bassin de production vivrier structuré autour d'une plateforme agro-industrielle : périmètres irrigués, unités de transformation, plateforme logistique et services mutualisés (énergie, froid, qualité). L'agropole relie les producteurs aux marchés urbains et crée de la valeur sur place au lieu d'exporter des matières brutes.",
    composantes: [
      { titre: "Périmètres de production", desc: "Aménagements hydro-agricoles, pistes de collecte, organisations de producteurs." },
      { titre: "Plateforme de transformation", desc: "Unités agro-industrielles mutualisées, chaîne du froid, stockage." },
      { titre: "Énergie & eau", desc: "Centrale solaire productive, forages et adduction, traitement des effluents." },
      { titre: "Mise en marché", desc: "Plateforme logistique, contractualisation avec les acheteurs urbains et l'export." },
      { titre: "Gouvernance & services", desc: "Société de gestion, guichet de services aux producteurs, qualité et certification." },
    ],
    hypotheses: [
      { poste: "Investissement total (hypothèse)", valeur: "15 – 40 Mds FCFA selon le bassin" },
      { poste: "Phasage", valeur: "Tranche pilote 3 – 8 Mds, puis extensions" },
      { poste: "Financement type", valeur: "Bailleurs (60–70 %) · PPP (20–30 %) · budgets publics et collectivités" },
    ],
    impacts: [
      "Emplois directs et induits dans le bassin (production, transformation, logistique).",
      "Réduction des pertes post-récolte et de la dépendance aux importations.",
      "Recettes locales et ancrage économique durable pour la collectivité.",
    ],
    ancrage:
      "Ancrage mobilisable : ingénierie hydro-agricole et génie rural du promoteur (adduction d'eau de Yaoundé, réseaux de Mongomeyen), filières et taxonomie AGROVITA, méthode de structuration XP-NOVA.",
    metiersXpNova: [
      { label: "Études de faisabilité", url: "https://xp-nova.com/metiers/etudes-conseil" },
      { label: "Structuration & financement", url: "https://xp-nova.com/metiers/structuration-de-projets" },
      { label: "Maîtrise d'œuvre", url: "https://xp-nova.com/metiers/maitrise-doeuvre" },
    ],
    lienAgrovita: true,
  },
  {
    slug: "corridor-economique",
    type: "Corridor économique",
    title: "Corridor logistique et économique",
    statut: "programme-type",
    horizon: "7–10 ans",
    short:
      "Transformer un axe de transport en corridor de développement : logistique, énergie, services et pôles d'activités.",
    vision:
      "Un corridor n'est pas une route : c'est un système économique. Le programme articule l'axe de transport avec des plateformes logistiques, l'énergie, le numérique et des pôles d'activités aux nœuds stratégiques — pour que la valeur circule et s'arrête dans les territoires traversés.",
    composantes: [
      { titre: "Infrastructure d'axe", desc: "Réhabilitation/entretien de l'axe, ouvrages, sécurité routière." },
      { titre: "Plateformes logistiques", desc: "Ports secs, gares routières marchandises, entrepôts sous douane." },
      { titre: "Énergie & numérique", desc: "Électrification des nœuds, fibre et couverture mobile." },
      { titre: "Pôles d'activités", desc: "Zones d'activités aux intersections, services aux transporteurs." },
      { titre: "Facilitation", desc: "Guichets uniques, interopérabilité douanière, observatoire des flux." },
    ],
    hypotheses: [
      { poste: "Investissement total (hypothèse)", valeur: "50 – 200 Mds FCFA selon le linéaire" },
      { poste: "Structure", valeur: "Financements souverains et bailleurs + PPP sur les plateformes" },
    ],
    impacts: [
      "Réduction des coûts et délais logistiques sur l'axe.",
      "Activité et emplois aux nœuds du corridor.",
      "Recettes douanières et fiscales mieux captées.",
    ],
    ancrage:
      "Ancrage mobilisable : expérience du promoteur sur les grandes infrastructures de transport — aéroports de Ouagadougou-Donsin (80 bâtiments, 120 000 m², 34 MW), Malabo, Yaoundé-Nsimalen et Douala (fiches GEQUIPS, cadre d'intervention précisé).",
    metiersXpNova: [
      { label: "Ingénierie", url: "https://xp-nova.com/metiers/ingenierie" },
      { label: "AMO / AMOA", url: "https://xp-nova.com/metiers/amo-amoa" },
      { label: "Structuration & PPP", url: "https://xp-nova.com/metiers/structuration-de-projets" },
    ],
  },
  {
    slug: "pole-croissance-universitaire",
    type: "Pôle de croissance",
    title: "Pôle de croissance universitaire et de services",
    statut: "programme-type",
    horizon: "5–8 ans",
    short:
      "Faire d'un campus le moteur d'un pôle urbain : formation, logement, services, entrepreneuriat.",
    vision:
      "Un campus bien conçu transforme une ville moyenne : afflux d'étudiants et d'enseignants, demande de logements et de services, entrepreneuriat de proximité. Le programme organise cette dynamique au lieu de la subir — campus, quartiers, transports, énergie et incubation pensés ensemble.",
    composantes: [
      { titre: "Campus & équipements", desc: "Bâtiments d'enseignement, laboratoires, bibliothèque, équipements sportifs." },
      { titre: "Vie étudiante", desc: "Cités, restauration, santé, mobilité douce." },
      { titre: "Réseaux", desc: "Énergie (dont solaire), eau, assainissement, numérique du campus et du quartier." },
      { titre: "Économie de la connaissance", desc: "Incubateur, liens entreprises, formation continue." },
    ],
    hypotheses: [
      { poste: "Investissement total (hypothèse)", valeur: "20 – 60 Mds FCFA selon la capacité cible" },
      { poste: "Référentiel de dimensionnement", valeur: "Campus type : 20–30 bâtiments, 50–80 ha" },
    ],
    impacts: [
      "Capacité d'accueil et qualité de formation accrues.",
      "Économie résidentielle et de services autour du campus.",
      "Fixation des compétences dans les régions.",
    ],
    ancrage:
      "Ancrage documenté : maîtrise d'œuvre technique de conception du campus de l'ENS de Maroua — 25 bâtiments sur 63 ha (mission GEQUIPS pour EGIS Cameroun, 79 M FCFA de services, fiche de référence disponible).",
    metiersXpNova: [
      { label: "Ingénierie", url: "https://xp-nova.com/metiers/ingenierie" },
      { label: "Maîtrise d'œuvre", url: "https://xp-nova.com/metiers/maitrise-doeuvre" },
      { label: "Suivi-évaluation", url: "https://xp-nova.com/metiers/suivi-evaluation" },
    ],
  },
  {
    slug: "bassin-hydro-agricole",
    type: "Bassin de développement",
    title: "Bassin de développement hydro-agricole",
    statut: "programme-type",
    horizon: "4–6 ans",
    short:
      "Sécuriser l'eau d'un bassin — potable et productive — et bâtir dessus l'économie locale.",
    vision:
      "L'eau structure tout : santé, agriculture, énergie. Le programme traite un bassin versant comme une unité de développement : mobilisation de la ressource, eau potable, irrigation, pistes et électrification — avec une gouvernance de bassin qui pérennise les ouvrages.",
    composantes: [
      { titre: "Mobilisation de la ressource", desc: "Forages, captages, retenues collinaires selon l'hydrologie." },
      { titre: "Eau potable", desc: "Adductions, bornes-fontaines, gestion déléguée de proximité." },
      { titre: "Eau productive", desc: "Périmètres irrigués, abreuvement pastoral." },
      { titre: "Désenclavement & énergie", desc: "Pistes de bassin, solaire communautaire et productif." },
      { titre: "Gouvernance de bassin", desc: "Comités d'usagers, tarification, maintenance." },
    ],
    hypotheses: [
      { poste: "Investissement total (hypothèse)", valeur: "5 – 20 Mds FCFA selon le bassin" },
      { poste: "Financement type", valeur: "Bailleurs eau/climat + budgets publics + contributions usagers (fonctionnement)" },
    ],
    impacts: [
      "Taux d'accès à l'eau potable du bassin en hausse mesurable.",
      "Production agricole sécurisée en saison sèche.",
      "Charge de morbidité hydrique réduite.",
    ],
    ancrage:
      "Ancrage mobilisable : suivi technico-financier de l'adduction d'eau de la ville de Yaoundé (captage du Nyong, réseau, châteaux d'eau) conduit par le promoteur à la DGTC ; réseaux urbains de Mongomeyen (Guinée équatoriale) — cadre d'intervention précisé.",
    metiersXpNova: [
      { label: "Études & Conseil", url: "https://xp-nova.com/metiers/etudes-conseil" },
      { label: "Maîtrise d'œuvre", url: "https://xp-nova.com/metiers/maitrise-doeuvre" },
      { label: "Formation & capacités", url: "https://xp-nova.com/metiers/formation" },
    ],
    lienAgrovita: true,
  },
  {
    slug: "portefeuille-communal",
    type: "Portefeuille",
    title: "Portefeuille de projets communal",
    statut: "programme-type",
    horizon: "3–5 ans (mandat)",
    short:
      "Transformer un plan de développement communal en portefeuille de 8 à 12 projets priorisés, structurés et financés.",
    vision:
      "La plupart des plans communaux restent des listes de besoins. Le programme les transforme en portefeuilles d'investissement : priorisation par la donnée (Observatoire), structuration projet par projet, plan de financement multi-guichets et pilotage de la mise en œuvre sur la durée du mandat.",
    composantes: [
      { titre: "Diagnostic par la donnée", desc: "Profil territorial, indicateurs, cartographie des besoins et potentiels." },
      { titre: "Priorisation", desc: "8–12 projets sélectionnés sur des critères d'impact et de faisabilité publiés." },
      { titre: "Structuration", desc: "Fiches projet aux standards des guichets visés, budgets en FCFA." },
      { titre: "Plan de financement", desc: "BIP, FEICOM et fonds nationaux, bailleurs, PPP de proximité, coopération décentralisée." },
      { titre: "Pilotage & redevabilité", desc: "Tableau de bord public du portefeuille, revues semestrielles." },
    ],
    hypotheses: [
      { poste: "Portefeuille type (hypothèse)", valeur: "2 – 10 Mds FCFA sur un mandat" },
      { poste: "Coût de structuration", valeur: "1 – 3 % du portefeuille, finançable par les guichets d'appui" },
    ],
    impacts: [
      "Taux d'exécution du plan communal mesurablement accru.",
      "Capacité de maîtrise d'ouvrage communale renforcée.",
      "Confiance des citoyens et des partenaires (redevabilité publiée).",
    ],
    ancrage:
      "Ancrage mobilisable : méthode 6 phases XP-NOVA, expérience du promoteur en suivi technico-financier de projets publics (DGTC 1989–1999) et en audits de programmes d'investissement (BIP Gabon 2005).",
    metiersXpNova: [
      { label: "Études & Conseil", url: "https://xp-nova.com/metiers/etudes-conseil" },
      { label: "Structuration & financement", url: "https://xp-nova.com/metiers/structuration-de-projets" },
      { label: "Suivi-évaluation", url: "https://xp-nova.com/metiers/suivi-evaluation" },
    ],
  },
];

export const getProgramme = (slug: string) => programmes.find((p) => p.slug === slug);
export { CADRE_HYPOTHESES };
