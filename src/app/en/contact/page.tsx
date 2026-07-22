import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { PageHero, Breadcrumbs } from "@/components/blocks";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";
import { siteEn } from "@/content/en";

export const metadata: Metadata = {
  title: "Submit a territorial project",
  description:
    "Describe your territory and your ambition: the ODT team replies within 48 working hours. Yaoundé, Cameroon.",
  alternates: { canonical: "/en/contact", languages: { fr: "/contact", en: "/en/contact" } },
};

export default function ContactPageEn() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Submit a territorial project"
        lead="Getting in touch is free and without commitment. First response within 48 working hours from an identified contact person."
      />
      <Breadcrumbs items={[{ label: "Contact" }]} lang="en" />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <ContactForm lang="en" />
          <aside className="space-y-4">
            <div className="rounded-lg border border-line bg-light p-6 text-sm">
              <p className="font-bold text-navy">ODT — {siteEn.fullName}</p>
              <p className="mt-2 text-grey">{site.address}</p>
              <p className="mt-1 text-grey">{site.phone}</p>
              <p className="mt-1">
                <a href={`mailto:${site.email}`} className="font-semibold">
                  {site.email}
                </a>
              </p>
            </div>
            <div className="rounded-lg border border-line bg-paper p-6 text-sm">
              <p className="font-bold text-navy">Are you a donor or a partner?</p>
              <p className="mt-2 text-grey">
                Say so in the form: your request is routed to a dedicated institutional exchange
                (presentation of the model, the pipeline and documents on request).
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
