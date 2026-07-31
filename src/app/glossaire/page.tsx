import type { Metadata } from "next";
import Glossaire from "@/components/Glossaire";

export const metadata: Metadata = {
  title: "Glossaire — sigles du développement territorial",
  description:
    "SND30, CTD, PTF, AMO/MOE, OHADA & escrow, RDUE, EIES/PGES, FOD, visa technique, CEMAC, ZLECAf, FCFA… les sigles et notions clés de l'ODT expliqués.",
  alternates: { canonical: "/glossaire", languages: { fr: "/glossaire", en: "/en/glossaire" } },
};

export default function GlossairePage() {
  return <Glossaire lang="fr" />;
}
