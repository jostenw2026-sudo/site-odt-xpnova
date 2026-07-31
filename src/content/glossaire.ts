// Glossaire ODT — sigles et notions du développement territorial camerounais,
// issus de la note stratégique et de la charte. Bilingue (fr/en).

export interface Term {
  sigle: string;
  intitule: string;
  def: string;
}

export interface GlossaireContent {
  crumb: string;
  hero: { eyebrow: string; title: string; lead: string };
  terms: Term[];
}

const fr: GlossaireContent = {
  crumb: "Glossaire",
  hero: {
    eyebrow: "Repères",
    title: "Glossaire du développement territorial",
    lead: "Les sigles et notions qui reviennent sur ce site et dans nos dossiers — cadre institutionnel, financement et ingénierie.",
  },
  terms: [
    { sigle: "AMO", intitule: "Assistance à Maîtrise d'Ouvrage", def: "Appui au maître d'ouvrage (une commune, une région) pour définir, piloter et sécuriser son projet, de la programmation à la réception." },
    { sigle: "ANAU", intitule: "Plateforme Nationale des Acteurs de l'Urbain", def: "Espace de concertation des acteurs du développement urbain au Cameroun." },
    { sigle: "CCP-SND30", intitule: "Cadre de Concertation Partenarial SND30", def: "Cadre de dialogue et de suivi partenarial de la Stratégie Nationale de Développement." },
    { sigle: "CEMAC", intitule: "Communauté Économique et Monétaire de l'Afrique Centrale", def: "Union régionale des six pays d'Afrique centrale, cadre du commerce sous-régional." },
    { sigle: "CND", intitule: "Conseil National de la Décentralisation", def: "Instance de pilotage et d'évaluation du processus de décentralisation au Cameroun." },
    { sigle: "CTD", intitule: "Collectivités Territoriales Décentralisées", def: "Régions et communes : maîtres d'ouvrage publics locaux du développement de proximité." },
    { sigle: "DCE / DAO", intitule: "Dossier de Consultation des Entreprises / d'Appel d'Offres", def: "Documents de mise en concurrence encadrant la passation des marchés de travaux ou de services." },
    { sigle: "EIES / PGES", intitule: "Étude d'Impact Environnemental et Social / Plan de Gestion", def: "Évaluation des effets environnementaux et sociaux d'un projet et plan de mesures d'atténuation et de suivi." },
    { sigle: "ESG", intitule: "Environnement, Social, Gouvernance", def: "Critères de durabilité et de redevabilité exigés par les bailleurs pour financer un projet." },
    { sigle: "FCFA", intitule: "Franc CFA", def: "Devise de référence de tous les montants (investissements, charges, revenus) sur ce site." },
    { sigle: "FOD", intitule: "Ouverture Officielle de Dossier", def: "Étape du parcours contractuel : l'acquittement des Frais d'Ouverture de Dossier autorise les études techniques de détail." },
    { sigle: "IRAD", intitule: "Institut de Recherche Agricole pour le Développement", def: "Organisme public de recherche agricole, partenaire savoir pour la donnée et l'innovation." },
    { sigle: "MOE", intitule: "Maîtrise d'Œuvre", def: "Conception technique et direction de l'exécution des travaux, sous la responsabilité d'un ingénieur." },
    { sigle: "OCB", intitule: "Organisations Communautaires de Base", def: "Groupements locaux (femmes, jeunes, associations socioprofessionnelles) porteurs de l'ancrage social." },
    { sigle: "OHADA", intitule: "Organisation pour l'Harmonisation en Afrique du Droit des Affaires", def: "Cadre juridique commun à 17 États africains, socle de la sécurité juridique des affaires et de la comptabilité SYSCOHADA." },
    { sigle: "PCD", intitule: "Plan Communal de Développement", def: "Document de planification locale d'une commune, base de priorisation de ses investissements." },
    { sigle: "PPI", intitule: "Programme Pluriannuel d'Investissement", def: "Programmation dans le temps des investissements d'une collectivité, chiffrée en FCFA." },
    { sigle: "PPP", intitule: "Partenariat Public-Privé", def: "Montage associant acteurs publics et privés pour financer et exploiter une infrastructure ou un service." },
    { sigle: "PTF", intitule: "Partenaires Techniques et Financiers", def: "Bailleurs et agences (UE, AFD, Banque Mondiale, BAD, Nations Unies…) apportant expertise et financements concessionnels." },
    { sigle: "RDUE", intitule: "Règlement de l'UE sur la déforestation", def: "Réglementation européenne exigeant une traçabilité « déforestation zéro » ; audit de conformité intégré à la conception des programmes." },
    { sigle: "SIG / WebGIS", intitule: "Système d'Information Géographique", def: "Outils de cartographie et d'analyse spatiale des données territoriales, socle de l'Observatoire." },
    { sigle: "SND30", intitule: "Stratégie Nationale de Développement 2020-2030", def: "Cadre stratégique national du Cameroun ; référence d'alignement de tout projet territorial." },
    { sigle: "SYSCOHADA", intitule: "Système comptable OHADA", def: "Référentiel comptable commun aux États OHADA, gage de redevabilité financière vis-à-vis des bailleurs." },
    { sigle: "Visa technique", intitule: "Visa technique d'ingénieur", def: "Document signé par les ingénieurs de XP-NOVA certifiant la qualité et l'atteinte des jalons ; condition de tout décaissement." },
    { sigle: "ZLECAf", intitule: "Zone de Libre-Échange Continentale africaine", def: "Marché continental unique dont l'opérationnalisation ouvre des débouchés régionaux aux territoires." },
  ],
};

const en: GlossaireContent = {
  crumb: "Glossary",
  hero: {
    eyebrow: "Reference",
    title: "Territorial development glossary",
    lead: "The acronyms and concepts used across this site and in our dossiers — institutional framework, financing and engineering.",
  },
  terms: [
    { sigle: "AMO", intitule: "Delegated Project Management", def: "Support to the contracting authority (a municipality, a region) to define, steer and secure its project, from programming to handover." },
    { sigle: "ANAU", intitule: "National Platform of Urban Actors", def: "Consultation space for urban-development stakeholders in Cameroon." },
    { sigle: "CCP-SND30", intitule: "SND30 Partnership Consultation Framework", def: "Framework for partnership dialogue and monitoring of the National Development Strategy." },
    { sigle: "CEMAC", intitule: "Economic and Monetary Community of Central Africa", def: "Regional union of the six Central African countries, framework for sub-regional trade." },
    { sigle: "CND", intitule: "National Decentralisation Council", def: "Steering and evaluation body for the decentralisation process in Cameroon." },
    { sigle: "CTD", intitule: "Decentralised Local Governments", def: "Regions and municipalities: local public contracting authorities for proximity development." },
    { sigle: "DCE / DAO", intitule: "Tender / Bidding documents", def: "Competitive-bidding documents governing the award of works or service contracts." },
    { sigle: "EIES / PGES", intitule: "Environmental & Social Impact Assessment / Management Plan", def: "Assessment of a project's environmental and social effects and plan of mitigation and monitoring measures." },
    { sigle: "ESG", intitule: "Environmental, Social, Governance", def: "Sustainability and accountability criteria required by donors to finance a project." },
    { sigle: "FCFA", intitule: "CFA franc", def: "The reference currency for all amounts (investments, costs, revenues) on this site." },
    { sigle: "FOD", intitule: "Official File Opening", def: "A step of the contractual path: paying the File Opening Fee authorises detailed technical studies." },
    { sigle: "IRAD", intitule: "Agricultural Research Institute for Development", def: "Public agricultural-research body, a knowledge partner for data and innovation." },
    { sigle: "MOE", intitule: "Works Supervision (Maîtrise d'Œuvre)", def: "Technical design and direction of works execution, under an engineer's responsibility." },
    { sigle: "OCB", intitule: "Community-Based Organisations", def: "Local groups (women, youth, socio-professional associations) carrying social anchoring." },
    { sigle: "OHADA", intitule: "Organisation for the Harmonisation of Business Law in Africa", def: "Common legal framework across 17 African states, basis for legal business security and SYSCOHADA accounting." },
    { sigle: "PCD", intitule: "Communal Development Plan", def: "A municipality's local planning document, the basis for prioritising its investments." },
    { sigle: "PPI", intitule: "Multi-Year Investment Programme", def: "Time-phased programming of a local government's investments, costed in FCFA." },
    { sigle: "PPP", intitule: "Public-Private Partnership", def: "Arrangement combining public and private actors to finance and operate an infrastructure or service." },
    { sigle: "PTF", intitule: "Technical and Financial Partners", def: "Donors and agencies (EU, AFD, World Bank, AfDB, United Nations…) providing expertise and concessional financing." },
    { sigle: "EUDR (RDUE)", intitule: "EU Deforestation Regulation", def: "EU regulation requiring 'zero-deforestation' traceability; compliance audit built into programme design." },
    { sigle: "GIS / WebGIS", intitule: "Geographic Information System", def: "Mapping and spatial-analysis tools for territorial data, the foundation of the Observatory." },
    { sigle: "SND30", intitule: "National Development Strategy 2020-2030", def: "Cameroon's national strategic framework; the alignment reference for any territorial project." },
    { sigle: "SYSCOHADA", intitule: "OHADA accounting system", def: "Common accounting standard across OHADA states, a guarantee of financial accountability to donors." },
    { sigle: "Technical sign-off", intitule: "Engineer's technical sign-off", def: "Document signed by XP-NOVA engineers certifying quality and milestone achievement; a condition of any disbursement." },
    { sigle: "AfCFTA (ZLECAf)", intitule: "African Continental Free Trade Area", def: "Single continental market whose operationalisation opens regional outlets for territories." },
  ],
};

export const glossaire = { fr, en } as const;
export type GlossaireLang = keyof typeof glossaire;
export function getGlossaire(lang: GlossaireLang): GlossaireContent {
  return glossaire[lang] ?? glossaire.fr;
}
