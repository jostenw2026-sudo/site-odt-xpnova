import type { Metadata } from "next";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ — frequently asked questions about ODT",
  description:
    "How ODT works, the contractual path (free submission, 48h pre-diagnosis, FOD, secured disbursements), technical sign-off, transparency doctrine and currency (FCFA).",
  alternates: { canonical: "/en/faq", languages: { fr: "/faq", en: "/en/faq" } },
};

export default function FaqPageEn() {
  return <Faq lang="en" />;
}
