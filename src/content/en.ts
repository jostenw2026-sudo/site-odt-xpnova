// English content mirror — donor-facing tone (World Bank, GIZ, EU, AfDB…):
// factual, compliance-centred, mobilisation-centred (charte §6.5).
// Same honesty doctrine as FR: statuses displayed, sources cited, engagement
// framework on every reference.

import type { StatutKey } from "./site";

export const siteEn = {
  fullName: "Territorial Development Operator",
  baseline: "Territorial Development Operator",
  rattachement: "An initiative of XP-NOVA — Engineering & Consulting Firm",
  devise: "Plan. Finance. Transform.",
  description:
    "ODT — Territorial Development Operator: territorial intelligence, structuring programmes and financing for the territories of Central Africa. An XP-NOVA initiative.",
  responsePromise: "48h",
  proofStats: [
    { value: "7", label: "territorial observatories" },
    { value: "5", label: "programme models" },
    { value: "6", label: "countries of mobilisable experience" },
    { value: "48h", label: "first response" },
  ],
  ecosystem: [
    { key: "xpnova", name: "XP-NOVA", tagline: "Engineering & Consulting Firm — the disciplines", url: "https://xp-nova.com" },
    { key: "agrovita", name: "AGROVITA", tagline: "Agriculture & agro-industry", url: "https://agrovita.xp-nova.com" },
  ],
} as const;

export const navEn = [
  { label: "About ODT", href: "/en/odt" },
  { label: "Territories & Programmes", href: "/en/programmes" },
  { label: "Observatory", href: "/en/observatoire" },
  { label: "Financing", href: "/en/financement" },
  { label: "Methodology", href: "/en/methodologie" },
  { label: "Resources", href: "/en/ressources" },
] as const;

export const ctaEn = {
  primary: { label: "Submit a territorial project", href: "/en/contact" },
  secondary: { label: "Explore the Observatory", href: "/en/observatoire" },
} as const;

export const STATUTS_EN: Record<StatutKey, { label: string; desc: string }> = {
  "programme-type": {
    label: "Programme model",
    desc: "Replicable model: assumption-based figures, to be adapted to each territory.",
  },
  "en-structuration": {
    label: "Under structuring",
    desc: "Real territory, partnerships being assembled.",
  },
  reference: {
    label: "Track record",
    desc: "Assignment actually delivered — engagement framework stated.",
  },
};

// ─── WDI: English labels & country names ───
export const WDI_LABELS_EN: Record<string, string> = {
  "EG.ELC.ACCS.ZS": "Access to electricity",
  "EG.ELC.ACCS.RU.ZS": "Access to electricity (rural)",
  "SH.H2O.BASW.ZS": "Access to basic drinking water",
  "SH.STA.BASS.ZS": "Access to basic sanitation",
  "NY.GDP.PCAP.CD": "GDP per capita",
  "NY.GDP.MKTP.KD.ZG": "GDP growth",
  "NV.AGR.TOTL.ZS": "Agriculture, share of GDP",
  "IT.NET.USER.ZS": "Internet users",
  "SP.URB.TOTL.IN.ZS": "Urban population",
  "SP.POP.TOTL": "Total population",
};
export const PAYS_EN: Record<string, string> = {
  CMR: "Cameroon", GAB: "Gabon", COG: "Congo", TCD: "Chad", CAF: "CAR", GNQ: "Equatorial Guinea",
};
export const WDI_SOURCE_EN = "World Bank — World Development Indicators (WDI)";

// ─── Observatories ───
export interface ObsEn {
  slug: string;
  title: string;
  short: string;
  intro: string;
  enjeux: string[];
  lienEcosysteme?: { label: string; url: string };
}
export const observatoiresEn: ObsEn[] = [
  {
    slug: "eau",
    title: "Water Observatory",
    short: "Access to drinking water and sanitation.",
    intro:
      "Access to drinking water and sanitation conditions health, schooling and territorial productivity. This observatory tracks access rates, gaps across CEMAC countries and their trajectory over time.",
    enjeux: [
      "Close the access gap between cities and rural areas.",
      "Make infrastructure last: maintenance and delegated management.",
      "Mobilise dedicated financing (climate funds, donors, local budgets).",
    ],
  },
  {
    slug: "energie",
    title: "Energy Observatory",
    short: "National and rural electrification, energy transition.",
    intro:
      "Without reliable energy there is no local industry and no sustainable public services. This observatory tracks electrification — national and rural — and transition dynamics (solar, mini-grids).",
    enjeux: [
      "Close the rural electrification gap.",
      "Develop mini-grids and productive solar.",
      "Secure energy for public facilities and economic hubs.",
    ],
  },
  {
    slug: "infrastructures",
    title: "Infrastructure Observatory",
    short: "Physical and digital connectivity of territories.",
    intro:
      "Roads, public facilities, digital connectivity: infrastructure determines access to markets and services. This observatory tracks the physical and digital connectivity of territories.",
    enjeux: [
      "Open up production basins (rural roads, structures).",
      "Extend digital connectivity beyond the main cities.",
      "Plan public facilities that are properly sized and maintained.",
    ],
  },
  {
    slug: "economie",
    title: "Economic Observatory",
    short: "Growth, income and territorial economic dynamics.",
    intro:
      "This observatory tracks the main economic variables of CEMAC countries — growth, income per capita, urbanisation — to inform territorial investment strategies.",
    enjeux: [
      "Diversify local economies beyond resource rents.",
      "Direct investment towards high-potential hubs.",
      "Gradually formalise territorial economies.",
    ],
  },
  {
    slug: "agriculture",
    title: "Agriculture Observatory",
    short: "The weight of agriculture in territorial economies.",
    intro:
      "Agriculture remains the first employer of the territories. This observatory, maintained with AGROVITA, tracks its economic weight and links to the value-chain data of the group's agricultural platform.",
    enjeux: [
      "Move from subsistence farming to structured value chains.",
      "Anchor processing in production basins (agropoles).",
      "Secure access to urban and export markets.",
    ],
    lienEcosysteme: { label: "Value-chain data and support: AGROVITA", url: "https://agrovita.xp-nova.com" },
  },
  {
    slug: "climat-resilience",
    title: "Climate & Resilience Observatory",
    short: "Climate vulnerabilities and access to green finance.",
    intro:
      "The territories of Central Africa face growing hazards (floods, droughts, erosion). This observatory documents vulnerabilities and access to climate finance — a window still largely under-mobilised.",
    enjeux: [
      "Integrate climate risk from the territorial planning stage.",
      "Make infrastructure resilient (standards, drainage, materials).",
      "Mobilise climate funds (GCF, GEF, bilateral windows).",
    ],
  },
  {
    slug: "gouvernance",
    title: "Governance Observatory",
    short: "Decentralisation, local capacity and accountability.",
    intro:
      "Decentralisation transfers competencies; capacity and resources must follow. This observatory tracks the local governance dynamics that condition the success of territorial programmes.",
    enjeux: [
      "Strengthen the contracting-authority capacity of local governments.",
      "Equip accountability: data, indicators, publication.",
      "Turn local development plans into real project portfolios.",
    ],
  },
];
export const getObsEn = (slug: string) => observatoiresEn.find((o) => o.slug === slug);

// ─── Programmes ───
export interface ProgEn {
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
  lienAgrovita?: boolean;
}
export const CADRE_HYPOTHESES_EN =
  "Indicative sizing figures (FCFA), explicit assumptions — to be refined through feasibility studies (XP-NOVA).";

export const programmesEn: ProgEn[] = [
  {
    slug: "agropole-vivrier-regional",
    type: "Agropole",
    title: "Regional food-crop agropole",
    statut: "programme-type",
    horizon: "5–7 years",
    short: "Concentrate production, processing and market access of a food basin around an equipped platform.",
    vision:
      "A food production basin structured around an agro-industrial platform: irrigated schemes, processing units, a logistics platform and shared services (energy, cold chain, quality). The agropole connects producers to urban markets and creates value locally instead of exporting raw commodities.",
    composantes: [
      { titre: "Production schemes", desc: "Hydro-agricultural works, collection roads, producer organisations." },
      { titre: "Processing platform", desc: "Shared agro-industrial units, cold chain, storage." },
      { titre: "Energy & water", desc: "Productive solar plant, boreholes and supply, effluent treatment." },
      { titre: "Market access", desc: "Logistics platform, contracts with urban buyers and export." },
      { titre: "Governance & services", desc: "Management company, producer services desk, quality and certification." },
    ],
    hypotheses: [
      { poste: "Total investment (assumption)", valeur: "FCFA 15–40 bn depending on the basin" },
      { poste: "Phasing", valeur: "Pilot tranche 3–8 bn, then extensions" },
      { poste: "Typical financing", valeur: "Donors (60–70%) · PPP (20–30%) · public and local budgets" },
    ],
    impacts: [
      "Direct and induced jobs across the basin (production, processing, logistics).",
      "Lower post-harvest losses and import dependency.",
      "Local revenue and a lasting economic anchor for the local government.",
    ],
    ancrage:
      "Mobilisable anchor: the promoter's hydro-agricultural and rural engineering track record (Yaoundé water supply, Mongomeyen networks), AGROVITA value chains, and the XP-NOVA structuring method.",
    lienAgrovita: true,
  },
  {
    slug: "corridor-economique",
    type: "Economic corridor",
    title: "Logistics and economic corridor",
    statut: "programme-type",
    horizon: "7–10 years",
    short: "Turn a transport axis into a development corridor: logistics, energy, services and activity hubs.",
    vision:
      "A corridor is not a road: it is an economic system. The programme articulates the transport axis with logistics platforms, energy, digital connectivity and activity hubs at strategic nodes — so that value flows through, and stops in, the territories crossed.",
    composantes: [
      { titre: "Axis infrastructure", desc: "Rehabilitation/maintenance of the axis, structures, road safety." },
      { titre: "Logistics platforms", desc: "Dry ports, freight stations, bonded warehouses." },
      { titre: "Energy & digital", desc: "Electrification of the nodes, fibre and mobile coverage." },
      { titre: "Activity hubs", desc: "Business zones at intersections, services to hauliers." },
      { titre: "Facilitation", desc: "One-stop shops, customs interoperability, flow observatory." },
    ],
    hypotheses: [
      { poste: "Total investment (assumption)", valeur: "FCFA 50–200 bn depending on length" },
      { poste: "Structure", valeur: "Sovereign and donor financing + PPP on the platforms" },
    ],
    impacts: [
      "Lower logistics costs and lead times along the axis.",
      "Activity and jobs at the corridor's nodes.",
      "Better-captured customs and tax revenue.",
    ],
    ancrage:
      "Mobilisable anchor: the promoter's experience on major transport infrastructure — Ouagadougou-Donsin airport (80 buildings, 120,000 m², 34 MW), Malabo, Yaoundé-Nsimalen and Douala (GEQUIPS reference sheets, engagement framework stated).",
  },
  {
    slug: "pole-croissance-universitaire",
    type: "Growth pole",
    title: "University and services growth pole",
    statut: "programme-type",
    horizon: "5–8 years",
    short: "Make a campus the engine of an urban pole: education, housing, services, entrepreneurship.",
    vision:
      "A well-designed campus transforms a secondary city: an inflow of students and faculty, demand for housing and services, local entrepreneurship. The programme organises that dynamic instead of enduring it — campus, neighbourhoods, transport, energy and incubation designed together.",
    composantes: [
      { titre: "Campus & facilities", desc: "Teaching buildings, laboratories, library, sports facilities." },
      { titre: "Student life", desc: "Halls of residence, catering, health, soft mobility." },
      { titre: "Networks", desc: "Energy (incl. solar), water, sanitation, campus and district digital." },
      { titre: "Knowledge economy", desc: "Incubator, business links, continuing education." },
    ],
    hypotheses: [
      { poste: "Total investment (assumption)", valeur: "FCFA 20–60 bn depending on target capacity" },
      { poste: "Sizing benchmark", valeur: "Typical campus: 20–30 buildings, 50–80 ha" },
    ],
    impacts: [
      "Increased intake capacity and quality of training.",
      "A residential and services economy around the campus.",
      "Skills retained in the regions.",
    ],
    ancrage:
      "Documented anchor: technical design supervision of the ENS Maroua campus — 25 buildings on 63 ha (GEQUIPS assignment for EGIS Cameroon, FCFA 79 m of services, reference sheet available).",
  },
  {
    slug: "bassin-hydro-agricole",
    type: "Development basin",
    title: "Hydro-agricultural development basin",
    statut: "programme-type",
    horizon: "4–6 years",
    short: "Secure a basin's water — drinking and productive — and build the local economy on it.",
    vision:
      "Water structures everything: health, agriculture, energy. The programme treats a watershed as a development unit: resource mobilisation, drinking water, irrigation, rural roads and electrification — with basin governance that makes the works last.",
    composantes: [
      { titre: "Resource mobilisation", desc: "Boreholes, intakes, hillside reservoirs depending on hydrology." },
      { titre: "Drinking water", desc: "Supply systems, standpipes, local delegated management." },
      { titre: "Productive water", desc: "Irrigated schemes, pastoral watering." },
      { titre: "Access & energy", desc: "Basin roads, community and productive solar." },
      { titre: "Basin governance", desc: "User committees, tariffs, maintenance." },
    ],
    hypotheses: [
      { poste: "Total investment (assumption)", valeur: "FCFA 5–20 bn depending on the basin" },
      { poste: "Typical financing", valeur: "Water/climate donors + public budgets + user contributions (operations)" },
    ],
    impacts: [
      "Measurable increase in the basin's drinking-water access rate.",
      "Agricultural production secured through the dry season.",
      "Reduced water-borne disease burden.",
    ],
    ancrage:
      "Mobilisable anchor: technical and financial supervision of the Yaoundé city water supply (Nyong intake, network, water towers) led by the promoter at the DGTC; Mongomeyen urban networks (Equatorial Guinea) — engagement framework stated.",
    lienAgrovita: true,
  },
  {
    slug: "portefeuille-communal",
    type: "Portfolio",
    title: "Municipal project portfolio",
    statut: "programme-type",
    horizon: "3–5 years (one term)",
    short: "Turn a municipal development plan into a portfolio of 8–12 prioritised, structured and financed projects.",
    vision:
      "Most municipal plans remain lists of needs. The programme turns them into investment portfolios: data-driven prioritisation (Observatory), project-by-project structuring, a multi-window financing plan and delivery steering over the term of office.",
    composantes: [
      { titre: "Data-driven diagnosis", desc: "Territorial profile, indicators, mapping of needs and potential." },
      { titre: "Prioritisation", desc: "8–12 projects selected on published impact and feasibility criteria." },
      { titre: "Structuring", desc: "Project sheets to the standards of the targeted windows, budgets in FCFA." },
      { titre: "Financing plan", desc: "Public investment budget, national municipal funds, donors, local PPPs, decentralised cooperation." },
      { titre: "Steering & accountability", desc: "Public portfolio dashboard, half-yearly reviews." },
    ],
    hypotheses: [
      { poste: "Typical portfolio (assumption)", valeur: "FCFA 2–10 bn over one term" },
      { poste: "Structuring cost", valeur: "1–3% of the portfolio, fundable through support windows" },
    ],
    impacts: [
      "A measurably higher execution rate of the municipal plan.",
      "Strengthened municipal contracting-authority capacity.",
      "Citizen and partner trust (published accountability).",
    ],
    ancrage:
      "Mobilisable anchor: the XP-NOVA six-phase method, the promoter's track record in technical-financial supervision of public projects (DGTC 1989–1999) and in public investment programme audits (Gabon PIB, 2005).",
  },
];
export const getProgEn = (slug: string) => programmesEn.find((p) => p.slug === slug);

// ─── References (GEQUIPS sheets) ───
export const CADRE_GEQUIPS_EN =
  "Assignment delivered by GEQUIPS SARL (shareholder of XP-NOVA SARL), Mr Wandji Josten Magloire as project manager. Capacity mobilisable by XP-NOVA through the statutory capacity-commitment mechanism and the technical support agreement.";

export const fichesEn: {
  slug: string; projet: string; pays: string; mission: string; periode: string;
  valeurServices: string; effectif: number; client: string; descriptif: string;
}[] = [
  { slug: "aeroport-ouagadougou-donsin", projet: "New Ouagadougou-Donsin airport", pays: "Burkina Faso",
    mission: "Technical design supervision (technology packages)", periode: "2012–2013 (12 months)",
    valeurServices: "FCFA 99m excl. tax", effectif: 14, client: "EGIS Cameroon",
    descriptif: "Complete aerodrome: 80 buildings (120,000 m²), utilities, runways — 34 MW installed electrical capacity. Full design of power, low-current, HVAC and plumbing systems." },
  { slug: "stade-omnisport-yaounde", projet: "Rehabilitation of the Yaoundé Omnisport stadium", pays: "Cameroon",
    mission: "Technical design supervision and works control", periode: "2015–2016 (15 months)",
    valeurServices: "FCFA 160m incl. tax", effectif: 22, client: "EGIS Cameroon",
    descriptif: "30,000-seat stadium (CAF/FIFA compliance) and R+2 annex buildings. Full design of power, low-current, HVAC, plumbing, sound, lighting and safety systems." },
  { slug: "complexe-olympique-olembe", projet: "Olembé Olympic sports complex (COSO)", pays: "Cameroon",
    mission: "Works control — drawings approval (power, low-current, plumbing, HVAC)", periode: "2017–…",
    valeurServices: "FCFA 8m incl. tax", effectif: 5, client: "EGIS Cameroon (EGIS International, delivery supervision)",
    descriptif: "60,000-seat complex: main stadium, training pitches, gymnasium, Olympic pools, 5* hotel — turnkey construction (PICCINI)." },
  { slug: "ens-maroua", projet: "École Normale Supérieure, Maroua", pays: "Cameroon",
    mission: "Technical design supervision (buildings and utilities)", periode: "2008–2011 (12 months of services)",
    valeurServices: "FCFA 79m excl. tax", effectif: 8, client: "EGIS Cameroon",
    descriptif: "University campus of 25 buildings on 63 ha: full design of power, low-current, HVAC and plumbing systems for buildings and utilities." },
  { slug: "siege-csph", projet: "CSPH headquarters building", pays: "Cameroon",
    mission: "Technical design supervision and works control", periode: "2001–2007 (36 months)",
    valeurServices: "FCFA 72m incl. tax", effectif: 8, client: "EGIS Cameroon",
    descriptif: "R+6 building: full design of the technical systems (power, low-current, HVAC, plumbing, sound, lighting, safety)." },
  { slug: "rehabilitation-sni", projet: "SNI high-rise rehabilitation (R+18)", pays: "Cameroon",
    mission: "Technical design supervision and works control", periode: "2002–2003 (15 months)",
    valeurServices: "FCFA 75m incl. tax", effectif: 10, client: "EGIS Cameroon",
    descriptif: "R+18 high-rise: complete technical systems, lifts, generator sets." },
  { slug: "siege-caa-conception", projet: "CAA headquarters — design", pays: "Cameroon",
    mission: "Technical design supervision", periode: "2009–2010 (6 months)",
    valeurServices: "FCFA 35m incl. tax", effectif: 8, client: "EGIS Cameroon",
    descriptif: "R+8 building with 3 basement levels: full design of the technology packages." },
  { slug: "siege-caa-controle", projet: "CAA headquarters — works control", pays: "Cameroon",
    mission: "Works control (power, low-current, plumbing, HVAC) — factory acceptance of equipment in Spain", periode: "2013–2016 (16 months of services)",
    valeurServices: "FCFA 32m incl. tax", effectif: 5, client: "EGIS Cameroon",
    descriptif: "R+8 building with 3 basement levels." },
  { slug: "siege-total-brazzaville", projet: "Total E&P headquarters — Brazzaville", pays: "Congo",
    mission: "Technical design supervision (detailed design phase)", periode: "2017 (6 months)",
    valeurServices: "FCFA 34m incl. tax", effectif: 9, client: "EGIS Cameroon",
    descriptif: "R+7 building with 2 basements: full design of the technical systems." },
];

export const promoteurEn = {
  nom: "Josten Magloire Wandji",
  titre: "Electromechanical engineer (ENSP Yaoundé), statutory manager of XP-NOVA SARL",
  onige: "National Order of Electrical Engineers (ONIGE) — registration A001703",
  reperes: [
    { periode: "1989–1999", texte: "Project officer at the DGTC (Cameroon's Directorate-General of Major Works): technical and financial supervision of public facilities — including the Yaoundé city water supply (Nyong intake, network, water towers) and high-rise ministerial buildings." },
    { periode: "1999–today", texte: "Project director at GEQUIPS: design supervision of the technology packages of major facilities — airports (Malabo, Ouagadougou-Donsin, Nsimalen, Douala, Bangui), stadiums, campuses, institutional headquarters, urban networks (Mongomeyen, Equatorial Guinea)." },
    { periode: "2008–today", texte: "Technical expert for APAVE: MEP expertise and technical inspection (buildings, industry, public facilities)." },
    { periode: "2010–2012", texte: "Technical expert to the National Public Procurement Commission (compliance of tender documents and bid evaluation reports)." },
    { periode: "2005 · 2010", texte: "Public programme audits in Gabon: Public Investment Budget (4 provinces) and support to the Treasury audit." },
  ],
  pays: ["Cameroon", "Burkina Faso", "Gabon", "Equatorial Guinea", "CAR", "Congo"],
};
