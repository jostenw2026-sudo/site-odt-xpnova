// Explorer — Cartographie institutionnelle de l'ODT (note stratégique
// XPN-NSTR-ODT-ACT-2026-003) : les 12 domaines structurants du développement
// territorial, les 7 familles d'acteurs, l'ingénierie de convergence (visa
// technique + sécurisation des décaissements) et le parcours contractuel canonique.
// Bilingue (fr/en) — mêmes slugs FR pour préserver la bascule de langue.

export interface Domaine {
  num: number;
  slug: string;
  pilier: string;
  title: string;
  short: string;
  composantes: string[];
  articulation: string;
}

export interface Famille {
  num: number;
  slug: string;
  title: string;
  entites: string;
  intermediation: string;
  analyse: { titre: string; desc: string }[];
}

export interface ParcoursStep {
  num: string;
  titre: string;
  desc: string;
}

export interface ExplorerContent {
  crumb: string;
  hero: { eyebrow: string; title: string; lead: string };
  positioning: { title: string; body: string; snd30: string };
  manifesteLabel: string;
  manifeste: string;
  domainesEyebrow: string;
  domainesTitle: string;
  domainesIntro: string;
  famillesEyebrow: string;
  famillesTitle: string;
  famillesIntro: string;
  convergenceEyebrow: string;
  convergenceTitle: string;
  convergenceIntro: string;
  securisationLabel: string;
  securisation: string;
  parcoursEyebrow: string;
  parcoursTitle: string;
  parcoursIntro: string;
  domaines: Domaine[];
  familles: Famille[];
  parcours: ParcoursStep[];
  labels: {
    pilier: string;
    domaine: string;
    famille: string;
    entites: string;
    intermediation: string;
    analyse: string;
    articulation: string;
    composantes: string;
    discover: string;
    seeFamille: string;
    backDomaines: string;
    backFamilles: string;
    submit: string;
    allDomaines: string;
    allFamilles: string;
  };
}

const domainesFr: Domaine[] = [
  {
    num: 1,
    slug: "amenagement-urbanisme",
    pilier: "Gouvernance & territoire",
    title: "Aménagement du territoire et urbanisme",
    short:
      "Planification spatiale, schémas directeurs et maîtrise de l'usage du sol, du rural au périurbain.",
    composantes: [
      "Planification spatiale et schémas directeurs (SDDR / PCD).",
      "Gestion urbaine, mobilité et assainissement.",
      "Prévention des conflits d'usage du sol (agriculture, forêt, urbanisation).",
      "Développement des zones rurales et périurbaines.",
    ],
    articulation:
      "Socle de tout portefeuille territorial : c'est le domaine qui ordonne les priorités et sécurise le foncier avant l'investissement.",
  },
  {
    num: 2,
    slug: "infrastructures",
    pilier: "Transformation économique",
    title: "Infrastructures productives et sociales",
    short:
      "Voiries, pistes, ouvrages hydrauliques et équipements marchands, sanitaires et scolaires.",
    composantes: [
      "Voiries urbaines, pistes agricoles et routes rurales.",
      "Ouvrages hydrauliques et réseaux d'eau potable.",
      "Équipements marchands : marchés, abattoirs ISO, centres de collecte.",
      "Infrastructures scolaires et sanitaires.",
    ],
    articulation:
      "L'infrastructure ne vaut que reliée : une piste agricole se conçoit avec le marché, l'énergie et la collecte qu'elle irrigue.",
  },
  {
    num: 3,
    slug: "agriculture-elevage",
    pilier: "Transformation économique",
    title: "Agriculture, élevage et systèmes alimentaires",
    short:
      "Productivité, souveraineté alimentaire et structuration des filières agro-industrielles.",
    composantes: [
      "Productivité agricole, sécurité et souveraineté alimentaires.",
      "Structuration des filières agro-industrielles (7 végétales / 5 animales & aquacoles).",
      "Gestion durable des terres et des ressources hydriques.",
    ],
    articulation:
      "Volet agricole opéré avec AGROVITA ; l'ODT en assure l'intégration territoriale, le montage et le financement.",
  },
  {
    num: 4,
    slug: "industries-transformation",
    pilier: "Transformation économique",
    title: "Industries, services et transformation économique",
    short:
      "Agro-industrie, forêt-bois, mines et dynamisation du secteur privé, marchand et non marchand.",
    composantes: [
      "Agro-industrie, filière forêt-bois, textile, mines, hydrocarbures.",
      "Dynamisation du secteur privé.",
      "Structuration des services marchands et non marchands.",
    ],
    articulation:
      "Transformer sur place plutôt qu'exporter la matière brute : la valeur reste dans le territoire.",
  },
  {
    num: 5,
    slug: "energie-ressources",
    pilier: "Transformation économique",
    title: "Énergie et ressources naturelles",
    short:
      "Énergie hybride solaire, gestion intégrée des ressources et résilience énergétique des territoires.",
    composantes: [
      "Infrastructures énergétiques (centrales hybrides solaires).",
      "Gestion intégrée des ressources naturelles (forêts, eau, sols).",
      "Transition écologique et résilience énergétique des territoires.",
    ],
    articulation:
      "L'énergie est le multiplicateur de tout programme productif : elle conditionne transformation, froid et numérique.",
  },
  {
    num: 6,
    slug: "environnement-climat",
    pilier: "Sécurité & résilience environnementale",
    title: "Environnement, climat et gestion des risques",
    short:
      "Biodiversité, lutte contre l'érosion et les risques, adaptation climatique et conformité RDUE.",
    composantes: [
      "Protection de la biodiversité ; lutte contre l'érosion et la désertification.",
      "Prévention des risques (dont volcaniques) et adaptation au changement climatique.",
      "Audits de conformité RDUE (déforestation zéro).",
    ],
    articulation:
      "La conformité environnementale (EIES/PGES, RDUE) est intégrée dès la conception : condition d'accès aux financements.",
  },
  {
    num: 7,
    slug: "education-formation",
    pilier: "Capital humain",
    title: "Éducation, formation et capital humain",
    short:
      "Infrastructures éducatives, ingénierie de formation et renforcement des compétences territoriales.",
    composantes: [
      "Infrastructures éducatives (base, secondaire, supérieure).",
      "Ingénierie de formation professionnelle et employabilité.",
      "Renforcement des compétences territoriales.",
    ],
    articulation:
      "Aucun ouvrage n'est durable sans les compétences pour l'exploiter : la formation accompagne chaque programme.",
  },
  {
    num: 8,
    slug: "sante-nutrition",
    pilier: "Capital humain",
    title: "Santé, nutrition et protection sociale",
    short:
      "Accès aux soins de proximité, nutrition et dispositifs d'inclusion sociale.",
    composantes: [
      "Accès équitable aux soins et infrastructures sanitaires de proximité.",
      "Nutrition et lutte contre la malnutrition.",
      "Dispositifs d'inclusion sociale.",
    ],
    articulation:
      "La santé de proximité conditionne la productivité et la cohésion des bassins de vie.",
  },
  {
    num: 9,
    slug: "emploi-inclusion",
    pilier: "Transformation économique",
    title: "Emploi, inclusion économique et entrepreneuriat",
    short:
      "Emplois ruraux et urbains, transition de l'informel vers le formel, appui aux PME et coopératives.",
    composantes: [
      "Création d'emplois ruraux et urbains.",
      "Transition de l'informel vers le formel.",
      "Accompagnement des PME, TPE, coopératives et initiatives locales.",
    ],
    articulation:
      "L'emploi local est la finalité mesurable de chaque programme : il en fonde l'acceptabilité et la durabilité.",
  },
  {
    num: 10,
    slug: "gouvernance-decentralisation",
    pilier: "Gouvernance & territoire",
    title: "Gouvernance locale, décentralisation et cohésion sociale",
    short:
      "Renforcement des CTD, transfert des compétences, démocratie participative et consolidation de la paix.",
    composantes: [
      "Renforcement institutionnel des Collectivités Territoriales Décentralisées (CTD).",
      "Transfert effectif des compétences et des ressources.",
      "Démocratie participative, mobilisation communautaire et consolidation de la paix.",
    ],
    articulation:
      "La collectivité reste maître d'ouvrage : l'ODT outille sa décision, jamais ne s'y substitue.",
  },
  {
    num: 11,
    slug: "integration-regionale",
    pilier: "Transformation économique",
    title: "Intégration régionale et facilitation des échanges",
    short:
      "Corridors transfrontaliers, commerce sous-régional CEMAC et opérationnalisation de la ZLECAf.",
    composantes: [
      "Aménagement des corridors logistiques transfrontaliers.",
      "Développement du commerce sous-régional (CEMAC).",
      "Opérationnalisation de la ZLECAf.",
    ],
    articulation:
      "Le territoire ne s'arrête pas à la frontière : les corridors ouvrent les débouchés régionaux.",
  },
  {
    num: 12,
    slug: "innovation-numerique",
    pilier: "Innovation & données",
    title: "Innovation, recherche et numérique",
    short:
      "R&D, transformation digitale des services publics locaux et systèmes d'information territoriale.",
    composantes: [
      "Recherche-développement (IRAD).",
      "Transformation digitale des services publics locaux.",
      "Systèmes d'information territoriale (WebGIS, IoT, cadastres numérisés).",
    ],
    articulation:
      "La donnée territoriale (SIG/IoT) est la boussole : elle fonde la priorisation et le suivi des programmes.",
  },
];

const famillesFr: Famille[] = [
  {
    num: 1,
    slug: "etat-central",
    title: "État central",
    entites: "PR, SPM (CND), MINEPAT, MINDDEVEL, MINAT, ministères sectoriels, Parlement, Cour des Comptes.",
    intermediation:
      "Alignement des projets sur la SND30, conformité aux orientations souveraines et obtention des agréments administratifs.",
    analyse: [
      { titre: "Présidence & Services du Premier Ministre (SPM)", desc: "Impulsion stratégique, arbitrages majeurs, décrets d'application et présidence du Conseil National de la Décentralisation (CND)." },
      { titre: "MINEPAT", desc: "Planification nationale, programmation des investissements publics, cadrage du CCP-SND30 et coordination des partenariats au développement." },
      { titre: "MINDDEVEL & MINAT", desc: "Tutelle technique, administrative et financière des CTD, contrôle de légalité, suivi des transferts de compétences et de ressources." },
      { titre: "Ministères sectoriels", desc: "MINADER, MINEPIA, MINTP, MINDUH, MINEPDED, MINEE… : définition des politiques sectorielles, cahiers des charges techniques et transfert des ressources aux territoires." },
      { titre: "Parlement & Cour des Comptes", desc: "Vote des lois de finances, cadre légal de la décentralisation et audit supérieur des finances publiques locales." },
    ],
  },
  {
    num: 2,
    slug: "collectivites-territoriales",
    title: "Collectivités Territoriales Décentralisées (CTD)",
    entites: "Régions, communes (urbaines, rurales, d'arrondissement), communautés urbaines.",
    intermediation:
      "Assistance à maîtrise d'ouvrage (AMO), schémas directeurs, PPI en FCFA et gestion de la maîtrise d'œuvre.",
    analyse: [
      { titre: "Communes (rurales, urbaines, d'arrondissement)", desc: "Planification locale via les Plans Communaux de Développement (PCD), gestion des services de base, voiries, marchés et foncier local." },
      { titre: "Communautés urbaines / métropoles", desc: "Aménagement urbain d'envergure, grandes infrastructures, mobilité, assainissement et équipements structurants." },
      { titre: "Régions", desc: "Coordination économique intercommunale, aménagement du territoire régional, promotion du développement économique et social." },
    ],
  },
  {
    num: 3,
    slug: "partenaires-financiers",
    title: "Partenaires techniques et financiers (PTF)",
    entites: "UE, AFD, Banque Mondiale, BAD, Système des Nations Unies, Expertise France.",
    intermediation:
      "Structuration de dossiers bancables, audits ESG/RDUE et sécurisation des décaissements conditionnés au visa technique.",
    analyse: [
      { titre: "Bailleurs multilatéraux & bilatéraux", desc: "Union Européenne (UE), Agence Française de Développement (AFD), Banque Mondiale, Banque Africaine de Développement (BAD)." },
      { titre: "Agences spécialisées & Nations Unies", desc: "Expertise France, agences du système des Nations Unies (PNUD, FAO, ONU-Habitat) apportant assistance technique et plateformes d'appui." },
      { titre: "Rôle de l'ODT", desc: "Garantir aux PTF la rigueur d'exécution, la redevabilité financière (SYSCOHADA/ESG) et le suivi rigoureux des jalons de chantier." },
    ],
  },
  {
    num: 4,
    slug: "acteurs-communautaires",
    title: "Acteurs locaux et communautaires",
    entites: "Chefferies traditionnelles, comités de développement, OCB, associations professionnelles.",
    intermediation:
      "Concertation sociale, médiation foncière, prévention des conflits et gouvernance participative.",
    analyse: [
      { titre: "Chefferies traditionnelles (1er, 2e et 3e degrés)", desc: "Gardiennes des usages coutumiers, médiation foncière et mobilisation citoyenne." },
      { titre: "Comités de développement villageois / quartiers", desc: "Gestion de proximité et expression des besoins prioritaires des populations." },
      { titre: "OCB & associations", desc: "Groupements de femmes, de jeunes et associations socioprofessionnelles locales." },
    ],
  },
  {
    num: 5,
    slug: "acteurs-prives",
    title: "Acteurs privés et économiques",
    entites: "Entreprises BTP, agro-industries, PME, bureaux d'études, coopératives, opérateurs (ex. ODT — XP-NOVA).",
    intermediation:
      "Passation de marchés (DCE/DAO), contrats d'agglomération et sécurisation sous visa technique d'ingénieur.",
    analyse: [
      { titre: "Entreprises du BTP, agro-industries & PME", desc: "Exécution des ouvrages, transformation des ressources et mise en marché." },
      { titre: "Bureaux d'études & cabinets d'ingénierie", desc: "Réalisation des diagnostics, maîtrise d'œuvre spécialisée et contrôles techniques." },
      { titre: "Opérateurs de développement territorial (ex. XP-NOVA SARL)", desc: "Ensemblier technique assurant l'AMO, le montage financier en FCFA, le suivi des chantiers et la sécurisation des flux." },
    ],
  },
  {
    num: 6,
    slug: "societe-civile-savoir",
    title: "Société civile et acteurs du savoir",
    entites: "ONG nationales et internationales, universités, centres de recherche (IRAD), think tanks, observatoires.",
    intermediation:
      "Intégration des données scientifiques (SIG/IoT) et audits d'impact environnemental (EIES/PGES).",
    analyse: [
      { titre: "ONG nationales et internationales", desc: "Plaidoyer, défense des droits des communautés, protection environnementale et suivi indépendant." },
      { titre: "Universités, instituts de recherche (ex. IRAD) & think tanks", desc: "Production de données, études d'impact, innovations AgTech, SIG et observatoires du développement." },
    ],
  },
  {
    num: 7,
    slug: "cadres-concertation",
    title: "Cadres de concertation et plateformes de gouvernance",
    entites: "CCP-SND30, ANAU, Conseil National de la Décentralisation (CND), cadres sectoriels.",
    intermediation:
      "Secrétariat technique, animation du dialogue multi-acteurs et arbitrage des différends territoriaux.",
    analyse: [
      { titre: "CCP-SND30", desc: "Cadre de Concertation Partenarial pour le suivi de la Stratégie Nationale de Développement." },
      { titre: "Conseil National de la Décentralisation (CND)", desc: "Instance de pilotage et d'évaluation du processus de décentralisation au Cameroun." },
      { titre: "ANAU", desc: "Plateforme Nationale des Acteurs de l'Urbain : espace de concertation des acteurs du développement urbain." },
      { titre: "Cadres sectoriels", desc: "Comités de suivi des bassins versants et comités d'arbitrage des conflits agriculteurs-éleveurs." },
    ],
  },
];

const parcoursFr: ParcoursStep[] = [
  { num: "01", titre: "Soumission gratuite", desc: "Enregistrement du projet sur odt.xp-nova.com via le bouton canonique « Soumettre mon projet »." },
  { num: "02", titre: "Pré-diagnostic sous 48 h", desc: "Première analyse gratuite de faisabilité et d'alignement territorial, délivrée par un ingénieur sous 48 h ouvrées." },
  { num: "03", titre: "Ouverture officielle de dossier (FOD)", desc: "Acquittement des Frais d'Ouverture de Dossier autorisant les études techniques de détail." },
  { num: "04", titre: "Convention de mission & Escrow", desc: "Signature du contrat d'AMO/MOE formulé en FCFA, sanctuarisation des capitaux et démarrage sous contrôle d'ingénieur." },
];

const fr: ExplorerContent = {
  crumb: "Explorer",
  hero: {
    eyebrow: "Explorer · Cartographie territoriale",
    title: "Comprendre le territoire avant de le transformer",
    lead: "Douze domaines structurants, sept familles d'acteurs, un tiers de confiance qui les articule. Explorez l'architecture institutionnelle et sectorielle sur laquelle l'ODT structure des programmes bancables, durables et souverains.",
  },
  positioning: {
    title: "Le rôle d'intermédiation de l'ODT",
    body:
      "En sa qualité de bureau d'ingénierie conseil, XP-NOVA agit à travers sa Division ODT comme l'intermédiaire technique, l'intégrateur et le tiers de confiance entre les sept familles d'acteurs de la gouvernance territoriale au Cameroun. Face à la multiplicité des interlocuteurs et au risque de fragmentation, l'ODT articule la puissance publique centrale, la maîtrise d'ouvrage décentralisée, le capital financier des bailleurs, la dynamique privée et l'ancrage communautaire au service de projets de territoires.",
    snd30:
      "Ancrage : la Stratégie Nationale de Développement 2020-2030 (SND30) et le Code Général des Collectivités Territoriales Décentralisées (CTD). Les cadres de coopération des Nations Unies (UNSDCF) complètent ce socle.",
  },
  manifesteLabel: "Manifeste de l'ingénierie territoriale ODT",
  manifeste:
    "Soumettre un projet à l'ODT, c'est confier son ingénierie à un acteur d'intermédiation capable de réunir l'État, les communes, les bailleurs de fonds, le secteur privé et les populations riveraines au sein d'un cadre contractuel unique, sécurisé par un visa technique.",
  domainesEyebrow: "Cadre sectoriel",
  domainesTitle: "Les 12 domaines structurants",
  domainesIntro:
    "Définis par la SND30 et les cadres de coopération des Nations Unies, ces douze secteurs opérationnels d'ingénierie couvrent quatre grands piliers : transformation économique, capital humain, résilience environnementale et gouvernance. L'ODT ne les isole jamais : chaque dossier les fait converger.",
  famillesEyebrow: "Cadre institutionnel",
  famillesTitle: "Les 7 familles d'acteurs",
  famillesIntro:
    "La réussite d'une intervention territoriale tient à l'articulation de sept familles d'acteurs. Pour chacune, l'ODT apporte une valeur d'intermédiation précise — de l'alignement souverain à la médiation foncière.",
  convergenceEyebrow: "Ingénierie de convergence",
  convergenceTitle: "Faire converger domaines et acteurs",
  convergenceIntro:
    "L'efficacité de l'ODT repose sur sa capacité à faire converger la matrice des 12 domaines sectoriels et la taxonomie des 7 familles d'acteurs. Un projet d'aménagement hydroagricole (domaine 3) intègre systématiquement le désenclavement routier (domaine 2), l'énergie solaire (domaine 5), l'audit environnemental RDUE (domaine 6) et la formation des coopératives locales (domaine 7) — au sein d'un dossier unique.",
  securisationLabel: "Sécurisation des décaissements par visa technique",
  securisation:
    "Les ressources mobilisées par les bailleurs (famille 3) ou l'État (famille 1) au profit des CTD (famille 2) et des entreprises privées (famille 5) sont placées sur un compte dédié et sécurisé, et libérées par tranches. Aucun décaissement n'intervient sans la délivrance préalable d'un visa technique signé par les ingénieurs de XP-NOVA, certifiant la qualité et l'atteinte effective des jalons de chantier.",
  parcoursEyebrow: "Parcours contractuel canonique",
  parcoursTitle: "De l'idée au chantier sécurisé",
  parcoursIntro:
    "L'accès aux services de facilitation et d'ingénierie de la Division ODT respecte une séquence claire, de la soumission gratuite au démarrage sous contrôle d'ingénieur.",
  domaines: domainesFr,
  familles: famillesFr,
  parcours: parcoursFr,
  labels: {
    pilier: "Pilier",
    domaine: "Domaine",
    famille: "Famille d'acteurs",
    entites: "Entités clés au Cameroun",
    intermediation: "Intermédiation & valeur ajoutée ODT",
    analyse: "Analyse détaillée",
    articulation: "Articulation & convergence",
    composantes: "Ce que couvre ce domaine",
    discover: "Explorer le domaine",
    seeFamille: "Voir la famille",
    backDomaines: "← Tous les domaines",
    backFamilles: "← Toutes les familles d'acteurs",
    submit: "Soumettre un projet territorial",
    allDomaines: "12 domaines structurants",
    allFamilles: "7 familles d'acteurs",
  },
};

const domainesEn: Domaine[] = [
  {
    num: 1,
    slug: "amenagement-urbanisme",
    pilier: "Governance & territory",
    title: "Territorial planning and urban development",
    short: "Spatial planning, master plans and land-use control, from rural to peri-urban areas.",
    composantes: [
      "Spatial planning and master plans (SDDR / PCD).",
      "Urban management, mobility and sanitation.",
      "Prevention of land-use conflicts (agriculture, forest, urbanisation).",
      "Development of rural and peri-urban areas.",
    ],
    articulation:
      "The bedrock of any territorial portfolio: it orders priorities and secures land before investment.",
  },
  {
    num: 2,
    slug: "infrastructures",
    pilier: "Economic transformation",
    title: "Productive and social infrastructure",
    short: "Roads, tracks, hydraulic works and market, health and school facilities.",
    composantes: [
      "Urban roads, farm tracks and rural roads.",
      "Hydraulic works and drinking-water networks.",
      "Market facilities: markets, ISO abattoirs, collection centres.",
      "School and health infrastructure.",
    ],
    articulation:
      "Infrastructure only pays when connected: a farm track is designed with the market, energy and collection it serves.",
  },
  {
    num: 3,
    slug: "agriculture-elevage",
    pilier: "Economic transformation",
    title: "Agriculture, livestock and food systems",
    short: "Productivity, food sovereignty and structuring of agro-industrial value chains.",
    composantes: [
      "Agricultural productivity, food security and sovereignty.",
      "Structuring of agro-industrial value chains (7 crop / 5 livestock & aquaculture).",
      "Sustainable management of land and water resources.",
    ],
    articulation:
      "Agricultural component delivered with AGROVITA; ODT provides territorial integration, structuring and financing.",
  },
  {
    num: 4,
    slug: "industries-transformation",
    pilier: "Economic transformation",
    title: "Industry, services and economic transformation",
    short: "Agro-industry, timber, mining and private-sector dynamisation, market and non-market.",
    composantes: [
      "Agro-industry, timber sector, textiles, mining, hydrocarbons.",
      "Private-sector dynamisation.",
      "Structuring of market and non-market services.",
    ],
    articulation:
      "Transform locally rather than export raw materials: value stays in the territory.",
  },
  {
    num: 5,
    slug: "energie-ressources",
    pilier: "Economic transformation",
    title: "Energy and natural resources",
    short: "Hybrid solar energy, integrated resource management and territorial energy resilience.",
    composantes: [
      "Energy infrastructure (hybrid solar plants).",
      "Integrated management of natural resources (forests, water, soils).",
      "Ecological transition and territorial energy resilience.",
    ],
    articulation:
      "Energy is the multiplier of every productive programme: it conditions processing, cold chain and digital.",
  },
];
const domainesEn2: Domaine[] = [
  {
    num: 6,
    slug: "environnement-climat",
    pilier: "Environmental security & resilience",
    title: "Environment, climate and risk management",
    short: "Biodiversity, erosion and risk control, climate adaptation and EUDR compliance.",
    composantes: [
      "Biodiversity protection; control of erosion and desertification.",
      "Risk prevention (incl. volcanic) and climate-change adaptation.",
      "EUDR compliance audits (zero deforestation).",
    ],
    articulation:
      "Environmental compliance (ESIA/ESMP, EUDR) is built in from design: a condition of access to financing.",
  },
  {
    num: 7,
    slug: "education-formation",
    pilier: "Human capital",
    title: "Education, training and human capital",
    short: "Education infrastructure, vocational-training engineering and territorial skills.",
    composantes: [
      "Education infrastructure (primary, secondary, higher).",
      "Vocational-training engineering and employability.",
      "Strengthening of territorial skills.",
    ],
    articulation:
      "No asset is sustainable without the skills to operate it: training accompanies every programme.",
  },
  {
    num: 8,
    slug: "sante-nutrition",
    pilier: "Human capital",
    title: "Health, nutrition and social protection",
    short: "Access to local care, nutrition and social-inclusion schemes.",
    composantes: [
      "Equitable access to care and local health facilities.",
      "Nutrition and the fight against malnutrition.",
      "Social-inclusion schemes.",
    ],
    articulation:
      "Local health underpins the productivity and cohesion of living areas.",
  },
  {
    num: 9,
    slug: "emploi-inclusion",
    pilier: "Economic transformation",
    title: "Employment, economic inclusion and entrepreneurship",
    short: "Rural and urban jobs, informal-to-formal transition, support to SMEs and cooperatives.",
    composantes: [
      "Creation of rural and urban jobs.",
      "Transition from the informal to the formal sector.",
      "Support to SMEs, micro-enterprises, cooperatives and local initiatives.",
    ],
    articulation:
      "Local employment is the measurable purpose of every programme: it grounds acceptance and durability.",
  },
  {
    num: 10,
    slug: "gouvernance-decentralisation",
    pilier: "Governance & territory",
    title: "Local governance, decentralisation and social cohesion",
    short: "Strengthening local governments, transfer of powers, participatory democracy and peace.",
    composantes: [
      "Institutional strengthening of decentralised local governments (CTD).",
      "Effective transfer of powers and resources.",
      "Participatory democracy, community mobilisation and peace consolidation.",
    ],
    articulation:
      "The local government remains the contracting authority: ODT equips its decision, never replaces it.",
  },
  {
    num: 11,
    slug: "integration-regionale",
    pilier: "Economic transformation",
    title: "Regional integration and trade facilitation",
    short: "Cross-border corridors, CEMAC sub-regional trade and AfCFTA operationalisation.",
    composantes: [
      "Development of cross-border logistics corridors.",
      "Growth of sub-regional trade (CEMAC).",
      "Operationalisation of the AfCFTA.",
    ],
    articulation:
      "The territory does not stop at the border: corridors open regional markets.",
  },
  {
    num: 12,
    slug: "innovation-numerique",
    pilier: "Innovation & data",
    title: "Innovation, research and digital",
    short: "R&D, digital transformation of local public services and territorial information systems.",
    composantes: [
      "Research and development (IRAD).",
      "Digital transformation of local public services.",
      "Territorial information systems (WebGIS, IoT, digitised cadastres).",
    ],
    articulation:
      "Territorial data (GIS/IoT) is the compass: it grounds prioritisation and programme monitoring.",
  },
];

const famillesEn: Famille[] = [
  {
    num: 1,
    slug: "etat-central",
    title: "Central state",
    entites: "Presidency, PM's Office (CND), MINEPAT, MINDDEVEL, MINAT, line ministries, Parliament, Audit Court.",
    intermediation:
      "Alignment of projects with the SND30, compliance with sovereign guidance and securing of administrative approvals.",
    analyse: [
      { titre: "Presidency & Prime Minister's Office (PMO)", desc: "Strategic impetus, major arbitration, implementing decrees and chairing of the National Decentralisation Council (CND)." },
      { titre: "MINEPAT", desc: "National planning, public-investment programming, SND30 partnership framework and coordination of development partnerships." },
      { titre: "MINDDEVEL & MINAT", desc: "Technical, administrative and financial oversight of local governments, legality control, monitoring of transfers of powers and resources." },
      { titre: "Line ministries", desc: "MINADER, MINEPIA, MINTP, MINDUH, MINEPDED, MINEE… : sector policies, technical specifications and transfer of resources to territories." },
      { titre: "Parliament & Audit Court", desc: "Finance laws, legal framework for decentralisation and supreme audit of local public finances." },
    ],
  },
  {
    num: 2,
    slug: "collectivites-territoriales",
    title: "Decentralised local governments (CTD)",
    entites: "Regions, municipalities (urban, rural, borough), urban communities.",
    intermediation:
      "Delegated project management (AMO), master plans, multi-year investment plans in FCFA and works supervision.",
    analyse: [
      { titre: "Municipalities (rural, urban, borough)", desc: "Local planning via Communal Development Plans (PCD), basic services, roads, markets and local land." },
      { titre: "Urban communities / metropolises", desc: "Large-scale urban development, major infrastructure, mobility, sanitation and structuring facilities." },
      { titre: "Regions", desc: "Inter-municipal economic coordination, regional territorial planning, economic and social development." },
    ],
  },
  {
    num: 3,
    slug: "partenaires-financiers",
    title: "Technical and financial partners (TFP)",
    entites: "EU, AFD, World Bank, AfDB, United Nations system, Expertise France.",
    intermediation:
      "Structuring of bankable dossiers, ESG/EUDR audits and securing of disbursements conditioned on the technical sign-off.",
    analyse: [
      { titre: "Multilateral & bilateral donors", desc: "European Union (EU), French Development Agency (AFD), World Bank, African Development Bank (AfDB)." },
      { titre: "Specialised agencies & United Nations", desc: "Expertise France, UN system agencies (UNDP, FAO, UN-Habitat) providing technical assistance and support platforms." },
      { titre: "ODT's role", desc: "Guarantee to TFPs delivery rigour, financial accountability (SYSCOHADA/ESG) and rigorous monitoring of construction milestones." },
    ],
  },
  {
    num: 4,
    slug: "acteurs-communautaires",
    title: "Local and community actors",
    entites: "Traditional chieftaincies, development committees, CBOs, professional associations.",
    intermediation:
      "Social dialogue, land mediation, conflict prevention and participatory governance.",
    analyse: [
      { titre: "Traditional chieftaincies (1st, 2nd, 3rd degree)", desc: "Guardians of customary land use, land mediation and citizen mobilisation." },
      { titre: "Village / neighbourhood development committees", desc: "Local management and expression of populations' priority needs." },
      { titre: "CBOs & associations", desc: "Women's and youth groups and local socio-professional associations." },
    ],
  },
  {
    num: 5,
    slug: "acteurs-prives",
    title: "Private and economic actors",
    entites: "Construction firms, agro-industries, SMEs, engineering firms, cooperatives, operators (e.g. ODT — XP-NOVA).",
    intermediation:
      "Procurement (tender files), agglomeration contracts and securing under an engineer's technical sign-off.",
    analyse: [
      { titre: "Construction firms, agro-industries & SMEs", desc: "Execution of works, resource processing and market access." },
      { titre: "Engineering & consulting firms", desc: "Diagnostics, specialised works supervision and technical controls." },
      { titre: "Territorial development operators (e.g. XP-NOVA SARL)", desc: "Technical integrator providing AMO, financial structuring in FCFA, works monitoring and cash-flow securing." },
    ],
  },
  {
    num: 6,
    slug: "societe-civile-savoir",
    title: "Civil society and knowledge actors",
    entites: "National and international NGOs, universities, research centres (IRAD), think tanks, observatories.",
    intermediation:
      "Integration of scientific data (GIS/IoT) and environmental impact audits (ESIA/ESMP).",
    analyse: [
      { titre: "National and international NGOs", desc: "Advocacy, defence of community rights, environmental protection and independent monitoring." },
      { titre: "Universities, research institutes (e.g. IRAD) & think tanks", desc: "Data production, impact studies, AgTech innovation, GIS and development observatories." },
    ],
  },
  {
    num: 7,
    slug: "cadres-concertation",
    title: "Consultation frameworks and governance platforms",
    entites: "CCP-SND30, ANAU, National Decentralisation Council (CND), sector frameworks.",
    intermediation:
      "Technical secretariat, facilitation of multi-actor dialogue and arbitration of territorial disputes.",
    analyse: [
      { titre: "CCP-SND30", desc: "Partnership Consultation Framework for monitoring the National Development Strategy." },
      { titre: "National Decentralisation Council (CND)", desc: "Steering and evaluation body for the decentralisation process in Cameroon." },
      { titre: "ANAU", desc: "National Platform of Urban Actors: consultation space for urban-development stakeholders." },
      { titre: "Sector frameworks", desc: "Watershed monitoring committees and farmer-herder conflict arbitration committees." },
    ],
  },
];

const parcoursEn: ParcoursStep[] = [
  { num: "01", titre: "Free submission", desc: "Register the project on odt.xp-nova.com via the canonical button “Submit my project”." },
  { num: "02", titre: "Pre-diagnosis within 48h", desc: "A free first feasibility and territorial-alignment analysis, delivered by an engineer within 48 working hours." },
  { num: "03", titre: "Official file opening (FOD)", desc: "Payment of the File Opening Fee authorising detailed technical studies." },
  { num: "04", titre: "Assignment agreement & Escrow", desc: "Signature of the AMO/MOE contract denominated in FCFA, ring-fencing of capital and start under engineering control." },
];

const en: ExplorerContent = {
  crumb: "Explore",
  hero: {
    eyebrow: "Explore · Territorial mapping",
    title: "Understand the territory before transforming it",
    lead: "Twelve structuring domains, seven families of actors, one trusted intermediary that connects them. Explore the institutional and sectoral architecture on which ODT structures bankable, sustainable and sovereign programmes.",
  },
  positioning: {
    title: "ODT's intermediation role",
    body:
      "As an engineering and consulting firm, XP-NOVA acts through its ODT Division as the technical intermediary, integrator and trusted third party between the seven families of actors in Cameroon's territorial governance. Faced with a multiplicity of interlocutors and the risk of fragmentation, ODT connects central public authority, decentralised contracting authority, donors' financial capital, private-sector dynamism and community anchoring in the service of territorial projects.",
    snd30:
      "Anchoring: the National Development Strategy 2020-2030 (SND30) and the General Code of Decentralised Local Governments (CTD). The United Nations cooperation frameworks (UNSDCF) complete this base.",
  },
  manifesteLabel: "ODT territorial-engineering manifesto",
  manifeste:
    "Submitting a project to ODT means entrusting its engineering to an intermediation actor able to bring together the State, municipalities, donors, the private sector and neighbouring populations within a single contractual framework, secured by a technical sign-off.",
  domainesEyebrow: "Sectoral framework",
  domainesTitle: "The 12 structuring domains",
  domainesIntro:
    "Defined by the SND30 and the United Nations cooperation frameworks, these twelve operational engineering sectors span four pillars: economic transformation, human capital, environmental resilience and governance. ODT never isolates them: every dossier makes them converge.",
  famillesEyebrow: "Institutional framework",
  famillesTitle: "The 7 families of actors",
  famillesIntro:
    "The success of a territorial intervention rests on connecting seven families of actors. For each, ODT brings a precise intermediation value — from sovereign alignment to land mediation.",
  convergenceEyebrow: "Convergence engineering",
  convergenceTitle: "Making domains and actors converge",
  convergenceIntro:
    "ODT's effectiveness rests on its ability to converge the matrix of 12 sectoral domains and the taxonomy of 7 families of actors. A hydro-agricultural development project (domain 3) systematically integrates road access (domain 2), solar energy (domain 5), the EUDR environmental audit (domain 6) and training of local cooperatives (domain 7) — within a single dossier.",
  securisationLabel: "Securing disbursements through technical sign-off",
  securisation:
    "Resources mobilised by donors (family 3) or the State (family 1) for local governments (family 2) and private firms (family 5) are placed in a dedicated, secured account and released in tranches. No disbursement occurs without the prior delivery of a technical sign-off signed by XP-NOVA engineers, certifying quality and the effective achievement of construction milestones.",
  parcoursEyebrow: "Canonical contractual path",
  parcoursTitle: "From idea to secured works",
  parcoursIntro:
    "Access to the ODT Division's facilitation and engineering services follows a clear sequence, from free submission to a start under engineering control.",
  domaines: [...domainesEn, ...domainesEn2],
  familles: famillesEn,
  parcours: parcoursEn,
  labels: {
    pilier: "Pillar",
    domaine: "Domain",
    famille: "Family of actors",
    entites: "Key entities in Cameroon",
    intermediation: "Intermediation & ODT added value",
    analyse: "Detailed analysis",
    articulation: "Connection & convergence",
    composantes: "What this domain covers",
    discover: "Explore the domain",
    seeFamille: "View the family",
    backDomaines: "← All domains",
    backFamilles: "← All families of actors",
    submit: "Submit a territorial project",
    allDomaines: "12 structuring domains",
    allFamilles: "7 families of actors",
  },
};

export const explorer = { fr, en } as const;
export type Lang = keyof typeof explorer;

export function getExplorer(lang: Lang): ExplorerContent {
  return explorer[lang] ?? explorer.fr;
}
export function getDomaine(lang: Lang, slug: string): Domaine | undefined {
  return getExplorer(lang).domaines.find((d) => d.slug === slug);
}
export function getFamille(lang: Lang, slug: string): Famille | undefined {
  return getExplorer(lang).familles.find((f) => f.slug === slug);
}
