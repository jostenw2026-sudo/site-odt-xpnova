import type { Metadata } from "next";
import { site } from "@/content/site";
import Header from "@/components/Header";
import Footer from "@/components/blocks";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ODT — Opérateur de Développement Territorial | Afrique centrale",
    template: "%s | ODT — XP-NOVA",
  },
  description: site.description,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "ODT — Opérateur de Développement Territorial",
    title: "ODT — Opérateur de Développement Territorial",
    description: site.description,
    locale: "fr_FR",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
