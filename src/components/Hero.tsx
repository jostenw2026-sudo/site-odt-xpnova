import { Button } from "./ui";
import { HeroBlueprint } from "./illustrations";
import { site, cta } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Grille subtile */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <HeroBlueprint className="pointer-events-none absolute -right-20 -top-12 h-[540px] w-[540px] md:right-0" />
      <div className="container-x relative py-20 md:py-28">
        <p className="eyebrow mb-4">{site.baseline}</p>
        <h1 className="title-hero max-w-4xl !text-white">
          Les projets ne manquent pas d&apos;ambition.
          <br />
          Ils manquent d&apos;<span className="text-gold">ingénierie</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-white/80 font-light">
          Nous concevons, structurons, pilotons et sécurisons les projets publics, privés et
          territoriaux — de l&apos;idée à l&apos;impact mesuré.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href={cta.secondary.href} variant="primary">
            {cta.secondary.label}
          </Button>
          <Button href={cta.primary.href} variant="ghost">
            {cta.primary.label}
          </Button>
        </div>

        {/* Devise */}
        <p className="mt-14 text-gold font-display text-lg tracking-wide">« {site.devise} »</p>
      </div>
      <div className="h-1.5 bg-gold" />
    </section>
  );
}
