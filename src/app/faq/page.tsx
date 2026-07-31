import type { Metadata } from "next";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ — questions fréquentes sur l'ODT",
  description:
    "Fonctionnement de l'ODT, parcours contractuel (soumission gratuite, pré-diagnostic 48 h, FOD, sécurisation des décaissements), visa technique, doctrine de transparence et devise (FCFA).",
  alternates: { canonical: "/faq", languages: { fr: "/faq", en: "/en/faq" } },
};

export default function FaqPage() {
  return <Faq lang="fr" />;
}
