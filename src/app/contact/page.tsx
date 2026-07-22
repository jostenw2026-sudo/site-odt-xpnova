import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { PageHero, Breadcrumbs } from "@/components/blocks";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Soumettre un projet territorial",
  description:
    "Décrivez votre territoire et votre ambition : l'équipe ODT vous répond sous 48 h ouvrées. Yaoundé, Cameroun.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Soumettre un projet territorial"
        lead="La prise de contact est libre et sans engagement. Premier retour sous 48 h ouvrées par un interlocuteur identifié."
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <ContactForm />
          <aside className="space-y-4">
            <div className="rounded-lg border border-line bg-light p-6 text-sm">
              <p className="font-bold text-navy">ODT — {site.fullName}</p>
              <p className="mt-2 text-grey">{site.address}</p>
              <p className="mt-1 text-grey">{site.phone}</p>
              <p className="mt-1">
                <a href={`mailto:${site.email}`} className="font-semibold">
                  {site.email}
                </a>
              </p>
            </div>
            <div className="rounded-lg border border-line bg-paper p-6 text-sm">
              <p className="font-bold text-navy">Vous êtes un bailleur ou un partenaire ?</p>
              <p className="mt-2 text-grey">
                Précisez-le dans le formulaire : votre demande est orientée vers un échange
                institutionnel dédié (présentation du modèle, du pipeline et des documents sur
                demande).
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
