import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import LenisProvider from "./_components/LenisProvider";
import { DevisProvider } from "../context/DevisContext";
import ClientAOS from "./_components/ClientAOS";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://ggintervention.fr"),
  title: "GG Intervention | Dépannage plomberie, serrurerie & vitrerie à Metz",
  description:
    "GG Intervention (G&G Intervention) à Metz : dépannage multiservices rapide et fiable. Plomberie, serrurerie, vitrerie, montage et pose de meubles. Intervention 6j/7 dans un rayon de 50 km. Devis gratuit.",
  keywords: [
    "GG Intervention",
    "G&G Intervention",
    "plombier Metz",
    "serrurier Metz",
    "vitrier Metz",
    "dépannage multiservices Metz",
    "ouverture de porte Metz",
    "fuite plomberie Metz",
    "remplacement vitrage Metz",
    "pose meubles Metz",
  ],
  openGraph: {
    title: "GG Intervention | Dépannage plomberie, serrurerie & vitrerie à Metz",
    description:
      "Plombier, serrurier, vitrier et dépannage multiservices à Metz et alentours. Service rapide et devis gratuit 6j/7.",
    url: "https://ggintervention.fr",
    siteName: "GG Intervention",
    images: [
      {
        url: "/logo-gg.png",
        width: 800,
        height: 600,
        alt: "Logo GG Intervention Metz",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://ggintervention.fr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo-gg.png" type="image/png" />

        {/* SEO de base */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="GG Intervention" />

        {/* OpenGraph (Facebook, Instagram, WhatsApp, Messenger) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="GG Intervention Metz | Plomberie, Serrurerie, Vitrerie & Dépannage multiservices"
        />
        <meta
          property="og:description"
          content="Plomberie, serrurerie, vitrerie et dépannage multiservices à Metz et alentours. Intervention rapide 6j/7, devis gratuit."
        />
        <meta property="og:url" content="https://ggintervention.fr" />
        <meta
          property="og:image"
          content="https://ggintervention.fr/logo-gg.png"
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="GG Intervention" />

        {/* Réseaux sociaux */}
        <meta property="article:publisher" content="https://www.facebook.com/ggintervention" />
        <meta property="article:author" content="https://www.facebook.com/ggintervention" />

        {/* JSON-LD LocalBusiness avec réseaux sociaux */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "GG Intervention",
              "alternateName": "G&G Intervention",
              "image": "https://ggintervention.fr/logo-gg.png",
              "url": "https://ggintervention.fr",
              "telephone": "+330760432122",
              "email": "gg.intervention@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Metz",
                "addressRegion": "Grand Est",
                "addressCountry": "FR",
              },
              "areaServed": {
                "@type": "Place",
                "name": "Metz et alentours (50 km)",
              },
              "description":
                "GG Intervention à Metz propose des services de plomberie, serrurerie, vitrerie et montage de meubles. Intervention rapide et fiable, devis gratuit, 6j/7.",
              "openingHours": "Mo-Su 08:00-19:00",
              "sameAs": [
                "https://www.facebook.com/ggintervention",
                "https://www.instagram.com/ggintervention",
                "https://www.snapchat.com/add/ggintervention"
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} font-sans h-full bg-background text-foreground antialiased`}
      >
        <DevisProvider>
          <LenisProvider>
            <ClientAOS>{children}</ClientAOS>
          </LenisProvider>
        </DevisProvider>
      </body>
    </html>
  );
}
