import type { Metadata } from "next";
import Explorer from "@/components/Explorer";

export const metadata: Metadata = {
  title: "Explore — 12 structuring domains & 7 families of actors",
  description:
    "ODT territorial mapping: the 12 structuring development domains (SND30), the 7 families of actors, convergence engineering (secured disbursements, technical sign-off) and the contractual path.",
  alternates: { canonical: "/en/explorer", languages: { fr: "/explorer", en: "/en/explorer" } },
};

export default function ExplorerPageEn() {
  return <Explorer lang="en" />;
}
