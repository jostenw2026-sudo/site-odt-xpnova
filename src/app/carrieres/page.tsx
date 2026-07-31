import type { Metadata } from "next";
import Careers from "@/components/Careers";

export const metadata: Metadata = {
  title: "Carrières",
  description:
    "Rejoignez l'ODT — Opérateur de Développement Territorial : ingénierie territoriale, données, structuration et financement des programmes en Afrique centrale. Postes ouverts et candidature en ligne.",
  alternates: { canonical: "/carrieres", languages: { fr: "/carrieres", en: "/en/carrieres" } },
};

export default function CarrieresPage() {
  return <Careers lang="fr" />;
}
