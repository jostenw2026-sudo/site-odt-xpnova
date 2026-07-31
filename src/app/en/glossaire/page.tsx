import type { Metadata } from "next";
import Glossaire from "@/components/Glossaire";

export const metadata: Metadata = {
  title: "Glossary — territorial development acronyms",
  description:
    "SND30, CTD, TFP, AMO/MOE, OHADA, EUDR, ESIA/ESMP, FOD, technical sign-off, CEMAC, AfCFTA, FCFA… the key acronyms and concepts of ODT explained.",
  alternates: { canonical: "/en/glossaire", languages: { fr: "/glossaire", en: "/en/glossaire" } },
};

export default function GlossairePageEn() {
  return <Glossaire lang="en" />;
}
