import type { Metadata } from "next";
import Careers from "@/components/Careers";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join ODT — Territorial Development Operator: territorial engineering, data, structuring and financing of programmes across Central Africa. Open positions and online application.",
  alternates: { canonical: "/en/carrieres", languages: { fr: "/carrieres", en: "/en/carrieres" } },
};

export default function CareersPage() {
  return <Careers lang="en" />;
}
