import { PageHero, Breadcrumbs, CTABanner } from "@/components/blocks";
import { Section, SectionTitle, Callout } from "@/components/ui";
import CareersApply from "@/components/CareersApply";
import { getPublishedJobs } from "@/lib/jobs";

// Page Carrières ODT — corps bilingue partagé par /carrieres et /en/carrieres.
// S'inspire de la page Carrières d'agrovita, adaptée à l'Opérateur de
// Développement Territorial (données, programmes, financement des territoires).

type Lang = "fr" | "en";

const CONTENT = {
  fr: {
    crumb: "Carrières",
    hero: {
      eyebrow: "Carrières · ODT",
      title: "Il y a des équipes qui commentent le développement. Ici, on le met en œuvre.",
      lead: "L'ODT constitue son équipe : rejoignez un opérateur qui transforme les besoins des territoires d'Afrique centrale en programmes structurés et financés — de la donnée à la réalisation.",
    },
    stats: [
      ["4", "postes ouverts au noyau"],
      ["5", "profils d'associés recherchés"],
      ["7", "observatoires à faire vivre"],
      ["48 h", "premier retour à une candidature retenue"],
    ],
    whyEyebrow: "Pourquoi nous rejoindre",
    whyTitle: "Ce que l'ODT change dans une carrière d'expert",
    whyIntro:
      "Nous ne promettons pas le confort d'une grande administration. Nous promettons mieux : des territoires réels, une méthode exigeante et un rôle qui compte.",
    promesses: [
      ["Des territoires, pas des dossiers", "Du diagnostic de terrain à la donnée, jusqu'au financement mobilisé : vous suivez le programme de bout en bout. Vos livrables deviennent des projets financés — pas des rapports oubliés."],
      ["La responsabilité dès le premier jour", "Nous sommes un noyau restreint de profils polyvalents : chacun porte le jugement, la relation partenaire et la qualité de ses livrables. Ce que vous produisez compte — et se voit."],
      ["La donnée comme boussole", "L'Observatoire territorial fonde chaque priorisation sur des indicateurs réels, sourcés et datés. Vous décidez par la preuve, pas par l'intuition."],
      ["L'IA comme démultiplicateur, pas comme menace", "L'ODT est un opérateur augmenté par l'IA : elle densifie l'analyse et la rédaction, vous restez le cerveau qui supervise, valide et signe. Une façon de travailler que peu maîtrisent."],
      ["L'intégrité comme actif professionnel", "Doctrine d'honnêteté : chaque programme affiche son statut (programme-type, en structuration, référence). Rigueur des données et indépendance de l'avis donnent de la valeur à votre signature."],
      ["Une aventure à co-construire", "Rejoindre l'ODT aujourd'hui, ce n'est pas occuper un poste : c'est bâtir une pratique, ses standards et sa réputation. Les premières briques sont posées ; la suite s'écrit avec vous."],
    ],
    diversity:
      "L'ODT promeut la diversité : les candidatures des femmes et des jeunes diplômés sont vivement encouragées. Toutes sont examinées sans discrimination.",
    orgEyebrow: "Notre organisation",
    orgTitle: "Noyau · Réseau · Terrain · IA",
    orgIntro: "Quatre cercles complémentaires : où que vous entriez, votre rôle est clair.",
    dispositif: [
      ["T1", "Noyau permanent", "Un petit noyau de profils polyvalents porte le jugement, la relation et la responsabilité des programmes."],
      ["T2", "Réseau d'associés", "Les expertises rares et agréées (juriste des collectivités, financier PPP, géomètre-SIG, expert PGES…) sont mobilisées par mission."],
      ["T3", "Équipes terrain", "Enquêteurs, techniciens et agents de collecte recrutés localement, au plus près des territoires."],
      ["T4", "Augmentation IA & plateforme", "L'IA densifie études, modèles et rédaction — un senior supervise chaque livrable. La plateforme fait travailler ensemble noyau, réseau et terrain sur les mêmes dossiers, même à distance."],
    ],
    postesEyebrow: "Postes & vivier",
    postesTitle: "Postes ouverts et profils recherchés",
    postesIntro: "Le noyau se constitue autour de ces profils. Vous ne vous reconnaissez pas exactement ? Candidatez tout de même : nous constituons aussi un vivier d'associés.",
    postesLabel: "Noyau — postes ouverts",
    postes: [
      "Ingénieur(e) développement territorial / génie rural",
      "Analyste données & SIG (Observatoire)",
      "Chargé(e) de structuration & financement (montage bancable, PPP, bailleurs)",
      "Chef(fe) de projet programmes (agropole, corridor, pôle, bassin)",
    ],
    vivierLabel: "Vivier d'associés experts",
    vivier: [
      "Économiste du développement",
      "Juriste des collectivités & des marchés publics",
      "Expert PPP / finance climat",
      "Géomètre-topographe / spécialiste SIG",
      "Spécialiste sauvegardes environnementales & sociales (PGES/ESG)",
    ],
    formEyebrow: "Candidature",
    formTitle: "Postulez à l'ODT",
    formIntro: "Un seul formulaire, pour un poste ouvert comme pour une candidature spontanée. Partagez un lien vers votre CV.",
    roles: [
      "Ingénieur(e) développement territorial / génie rural",
      "Analyste données & SIG (Observatoire)",
      "Chargé(e) de structuration & financement",
      "Chef(fe) de projet programmes",
      "Associé(e) expert (vivier)",
    ],
  },
  en: {
    crumb: "Careers",
    hero: {
      eyebrow: "Careers · ODT",
      title: "Some teams comment on development. Here, we deliver it.",
      lead: "ODT is building its team: join an operator that turns the needs of Central African territories into structured, financed programmes — from data to delivery.",
    },
    stats: [
      ["4", "core positions open"],
      ["5", "associate profiles sought"],
      ["7", "observatories to run"],
      ["48 h", "first response to a shortlisted application"],
    ],
    whyEyebrow: "Why join us",
    whyTitle: "What ODT changes in an expert's career",
    whyIntro:
      "We don't promise the comfort of a large administration. We promise better: real territories, a demanding method and a role that matters.",
    promesses: [
      ["Territories, not paperwork", "From field diagnosis to data, through to financing secured: you follow the programme end to end. Your deliverables become financed projects — not forgotten reports."],
      ["Responsibility from day one", "We are a small core of versatile profiles: each carries judgement, the partner relationship and the quality of their deliverables. What you produce counts — and shows."],
      ["Data as a compass", "The territorial Observatory grounds every prioritisation in real, sourced, dated indicators. You decide by evidence, not intuition."],
      ["AI as a multiplier, not a threat", "ODT is an AI-augmented operator: it densifies analysis and drafting, while you remain the mind that supervises, validates and signs. A way of working few master."],
      ["Integrity as a professional asset", "Honesty doctrine: every programme states its status (model, under structuring, reference). Rigorous data and independent judgement give value to your signature."],
      ["An adventure to co-build", "Joining ODT today isn't taking a job: it's building a practice, its standards and its reputation. The first blocks are laid; the rest is written with you."],
    ],
    diversity:
      "ODT promotes diversity: applications from women and young graduates are warmly encouraged. All are reviewed without discrimination.",
    orgEyebrow: "Our organisation",
    orgTitle: "Core · Network · Field · AI",
    orgIntro: "Four complementary circles: wherever you join, your role is clear.",
    dispositif: [
      ["T1", "Permanent core", "A small core of versatile profiles carries judgement, relationships and responsibility for the programmes."],
      ["T2", "Associate network", "Rare, accredited expertise (local-government lawyer, PPP financier, surveyor-GIS, ESIA expert…) mobilised per assignment."],
      ["T3", "Field teams", "Surveyors, technicians and data collectors recruited locally, close to the territories."],
      ["T4", "AI augmentation & platform", "AI densifies studies, models and drafting — a senior supervises each deliverable. The platform lets core, network and field work on the same files, even remotely."],
    ],
    postesEyebrow: "Positions & talent pool",
    postesTitle: "Open positions and profiles sought",
    postesIntro: "The core is forming around these profiles. Not an exact match? Apply anyway: we are also building a pool of associates.",
    postesLabel: "Core — open positions",
    postes: [
      "Territorial development / rural engineering officer",
      "Data & GIS analyst (Observatory)",
      "Structuring & financing officer (bankable packaging, PPP, donors)",
      "Programme project manager (agropole, corridor, pole, basin)",
    ],
    vivierLabel: "Pool of associate experts",
    vivier: [
      "Development economist",
      "Local-government & public-procurement lawyer",
      "PPP / climate-finance expert",
      "Surveyor / GIS specialist",
      "Environmental & social safeguards specialist (ESMP/ESG)",
    ],
    formEyebrow: "Application",
    formTitle: "Apply to ODT",
    formIntro: "One form, for an open position or a spontaneous application. Share a link to your CV.",
    roles: [
      "Territorial development / rural engineering officer",
      "Data & GIS analyst (Observatory)",
      "Structuring & financing officer",
      "Programme project manager",
      "Associate expert (pool)",
    ],
  },
} as const;

export default async function Careers({ lang = "fr" }: { lang?: Lang }) {
  const c = CONTENT[lang];
  const offers = await getPublishedJobs();
  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} lead={c.hero.lead} />
      <Breadcrumbs items={[{ label: c.crumb }]} lang={lang} />

      <div className="border-b border-line bg-light">
        <div className="container-x grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {c.stats.map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="font-display text-4xl font-extrabold text-teal">{num}</div>
              <div className="mt-1 text-sm text-grey">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <Section>
        <SectionTitle eyebrow={c.whyEyebrow} title={c.whyTitle} intro={c.whyIntro} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {c.promesses.map(([t, d]) => (
            <div key={t} className="rounded-lg border border-line bg-paper p-6">
              <div className="mb-3 h-1 w-8 rounded bg-gold" />
              <h3 className="title-3 text-navy">{t}</h3>
              <p className="mt-2 text-grey">{d}</p>
            </div>
          ))}
        </div>
        <Callout variant="gold">{c.diversity}</Callout>
      </Section>

      <Section tone="light">
        <SectionTitle eyebrow={c.orgEyebrow} title={c.orgTitle} intro={c.orgIntro} />
        <div className="grid gap-5 sm:grid-cols-2">
          {c.dispositif.map(([code, t, d]) => (
            <div key={code} className="rounded-lg border border-line bg-paper p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-sm font-bold text-white">{code}</span>
                <h3 className="title-3 text-navy">{t}</h3>
              </div>
              <p className="mt-2 text-grey">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="candidature">
        <SectionTitle eyebrow={c.postesEyebrow} title={c.postesTitle} intro={c.postesIntro} />
        <CareersApply
          offers={offers}
          roles={[...c.roles]}
          postes={[...c.postes]}
          vivier={[...c.vivier]}
          postesLabel={c.postesLabel}
          vivierLabel={c.vivierLabel}
          formTitle={c.formTitle}
          formIntro={c.formIntro}
          lang={lang}
        />
      </Section>

      <CTABanner lang={lang} />
    </>
  );
}
