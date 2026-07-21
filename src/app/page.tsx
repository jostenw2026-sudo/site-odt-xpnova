import Hero from "@/components/Hero";
import { Section, SectionTitle, Button } from "@/components/ui";
import { CardMetier, CardReference, EcosystemBlock } from "@/components/cards";
import { StatsBar, ProcessTimeline, Trajectoire, Pillars, CTABanner } from "@/components/blocks";
import { metiers } from "@/content/metiers";
import { featuredReferences } from "@/content/references";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar tone="light" />

      <Section>
        <SectionTitle
          eyebrow="Nos métiers"
          title="Les compétences qui sécurisent les projets"
          intro="Sept métiers d'ingénierie, mobilisés seuls ou en chaîne, de l'étude amont au suivi d'impact."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metiers.map((m) => (
            <CardMetier key={m.slug} m={m} />
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="Notre méthode"
          title="Une ingénierie orientée résultats"
          intro="Six phases, un livrable vérifiable à chaque étape. Le risque projet n'est pas subi : il est instruit, tracé et piloté."
        />
        <ProcessTimeline compact />
        <div className="mt-8">
          <Button href="/methode" variant="secondary">
            Découvrir la méthode
          </Button>
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Nos domaines d'application"
          title="Une ingénierie, deux terrains d'application"
          intro="XP-NOVA porte les métiers. Leurs applications sectorielles sont conduites par nos plateformes dédiées."
        />
        <EcosystemBlock />
      </Section>

      <Section tone="light">
        <SectionTitle eyebrow="Pourquoi XP-NOVA" title="Quatre raisons de nous confier votre projet" />
        <Pillars />
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Notre trajectoire"
          title="Une société établie, portée par un ingénieur de terrain"
          intro="La société existe depuis 2006 ; elle s'adosse à la trajectoire de son promoteur, ingénieur depuis 1989."
        />
        <Trajectoire />
      </Section>

      <Section tone="light">
        <SectionTitle
          eyebrow="Quelques références"
          title="Des projets menés dans des contextes exigeants"
          intro="Chaque référence indique son cadre d'intervention — la transparence est notre première preuve."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredReferences.slice(0, 6).map((r) => (
            <CardReference key={r.slug} r={r} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/references" variant="secondary">
            Toutes les références
          </Button>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
