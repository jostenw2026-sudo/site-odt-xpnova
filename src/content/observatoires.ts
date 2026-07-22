// Les 7 observatoires territoriaux. Chaque observatoire référence des codes
// d'indicateurs WDI (src/content/wdi.ts) — données réelles, sourcées, datées.

export interface Observatoire {
  slug: string;
  title: string;
  short: string;
  intro: string;
  /** Codes WDI affichés en StatCards (Cameroun) */
  statCodes: string[];
  /** Code WDI pour le comparateur CEMAC */
  compareCode: string;
  /** Code de série temporelle Cameroun (TrendChart), si disponible */
  serieCode?: string;
  enjeux: string[];
  lienEcosysteme?: { label: string; url: string };
}

export const observatoires: Observatoire[] = [
  {
    slug: "eau",
    title: "Observatoire de l'eau",
    short: "Accès à l'eau potable et à l'assainissement.",
    intro:
      "L'accès à l'eau potable et à l'assainissement conditionne la santé, la scolarisation et la productivité des territoires. Cet observatoire suit les taux d'accès, leurs écarts entre pays de la CEMAC et leur trajectoire dans le temps.",
    statCodes: ["SH.H2O.BASW.ZS", "SH.STA.BASS.ZS"],
    compareCode: "SH.H2O.BASW.ZS",
    serieCode: "SH.H2O.BASW.ZS",
    enjeux: [
      "Réduire les écarts d'accès entre villes et zones rurales.",
      "Pérenniser les infrastructures : maintenance et gestion déléguée.",
      "Mobiliser les financements dédiés (fonds climat, bailleurs, budgets locaux).",
    ],
  },
  {
    slug: "energie",
    title: "Observatoire de l'énergie",
    short: "Électrification nationale et rurale, transition énergétique.",
    intro:
      "Sans énergie fiable, ni industrie locale, ni services publics durables. Cet observatoire suit l'électrification — nationale et rurale — et les dynamiques de transition (solaire, mini-réseaux).",
    statCodes: ["EG.ELC.ACCS.ZS", "EG.ELC.ACCS.RU.ZS"],
    compareCode: "EG.ELC.ACCS.ZS",
    serieCode: "EG.ELC.ACCS.ZS",
    enjeux: [
      "Combler l'écart d'électrification rurale.",
      "Développer les mini-réseaux et le solaire productif.",
      "Sécuriser l'énergie des équipements publics et des pôles économiques.",
    ],
  },
  {
    slug: "infrastructures",
    title: "Observatoire des infrastructures",
    short: "Connectivité physique et numérique des territoires.",
    intro:
      "Routes, équipements publics, connectivité numérique : les infrastructures déterminent l'accès aux marchés et aux services. Cet observatoire suit la connectivité physique et numérique des territoires.",
    statCodes: ["IT.NET.USER.ZS", "SP.URB.TOTL.IN.ZS"],
    compareCode: "IT.NET.USER.ZS",
    serieCode: "IT.NET.USER.ZS",
    enjeux: [
      "Désenclaver les bassins de production (pistes, ouvrages).",
      "Étendre la connectivité numérique au-delà des métropoles.",
      "Planifier des équipements publics dimensionnés et maintenus.",
    ],
  },
  {
    slug: "economie",
    title: "Observatoire économique",
    short: "Croissance, revenus et dynamiques économiques territoriales.",
    intro:
      "Cet observatoire suit les grandes variables économiques des pays de la CEMAC — croissance, revenu par habitant, urbanisation — pour éclairer les stratégies territoriales d'investissement.",
    statCodes: ["NY.GDP.PCAP.CD", "NY.GDP.MKTP.KD.ZG", "SP.POP.TOTL"],
    compareCode: "NY.GDP.PCAP.CD",
    enjeux: [
      "Diversifier les économies locales au-delà des rentes.",
      "Structurer l'investissement vers les pôles à fort potentiel.",
      "Formaliser progressivement l'économie des territoires.",
    ],
  },
  {
    slug: "agriculture",
    title: "Observatoire agricole",
    short: "Le poids de l'agriculture dans l'économie des territoires.",
    intro:
      "L'agriculture reste le premier employeur des territoires. Cet observatoire, tenu avec AGROVITA, suit son poids économique et renvoie vers les données de filières de la plateforme agricole du groupe.",
    statCodes: ["NV.AGR.TOTL.ZS"],
    compareCode: "NV.AGR.TOTL.ZS",
    enjeux: [
      "Passer d'une agriculture de subsistance à des filières structurées.",
      "Ancrer la transformation dans les bassins de production (agropoles).",
      "Sécuriser l'accès aux marchés urbains et à l'export.",
    ],
    lienEcosysteme: {
      label: "Données de filières et accompagnement : AGROVITA",
      url: "https://agrovita.xp-nova.com",
    },
  },
  {
    slug: "climat-resilience",
    title: "Observatoire climat & résilience",
    short: "Vulnérabilités climatiques et accès aux financements verts.",
    intro:
      "Les territoires d'Afrique centrale sont exposés à des aléas croissants (inondations, sécheresses, érosion). Cet observatoire documente les vulnérabilités et l'accès aux financements climat — un guichet encore largement sous-mobilisé.",
    statCodes: ["SP.URB.TOTL.IN.ZS", "SP.POP.TOTL"],
    compareCode: "SP.URB.TOTL.IN.ZS",
    enjeux: [
      "Intégrer le risque climatique dès la planification territoriale.",
      "Rendre les infrastructures résilientes (normes, drainage, matériaux).",
      "Mobiliser les fonds climat (FVC, FEM, guichets bilatéraux).",
    ],
  },
  {
    slug: "gouvernance",
    title: "Observatoire de la gouvernance",
    short: "Décentralisation, capacités locales et redevabilité.",
    intro:
      "La décentralisation transfère des compétences ; encore faut-il des capacités et des ressources. Cet observatoire suit les dynamiques de gouvernance locale qui conditionnent la réussite des programmes territoriaux.",
    statCodes: ["SP.POP.TOTL", "SP.URB.TOTL.IN.ZS"],
    compareCode: "SP.URB.TOTL.IN.ZS",
    enjeux: [
      "Renforcer la maîtrise d'ouvrage des collectivités.",
      "Outiller la redevabilité : données, indicateurs, publication.",
      "Faire des plans de développement locaux de vrais portefeuilles de projets.",
    ],
  },
];

export const getObservatoire = (slug: string) => observatoires.find((o) => o.slug === slug);
