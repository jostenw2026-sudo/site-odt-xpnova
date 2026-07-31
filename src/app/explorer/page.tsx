import type { Metadata } from "next";
import Explorer from "@/components/Explorer";

export const metadata: Metadata = {
  title: "Explorer — 12 domaines structurants & 7 familles d'acteurs",
  description:
    "Cartographie territoriale de l'ODT : les 12 domaines structurants du développement (SND30), les 7 familles d'acteurs, l'ingénierie de convergence (escrow OHADA, visa technique) et le parcours contractuel.",
  alternates: { canonical: "/explorer", languages: { fr: "/explorer", en: "/en/explorer" } },
};

export default function ExplorerPage() {
  return <Explorer lang="fr" />;
}
