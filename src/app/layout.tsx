import { Geist, Geist_Mono, Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { DevisProvider } from "../context/DevisContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

// ── Fonts ──
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Syne pour les titres (H1, H2, logo)
const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

// DM Sans pour le corps de texte
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://ggintervention.fr"),
  title: "GG Intervention | Dépannage plomberie, serrurerie & vitrerie à Metz",
  description:
    "GG Intervention à Metz : dépannage multiservices rapide et fiable. Plomberie, serrurerie, vitrerie, montage et pose de meubles. Intervention 6j/7 dans un rayon de 50 km. Devis gratuit.",
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
  robots: "index, follow",
  openGraph: {
    title: "GG Intervention Metz | Plombier, Serrurier & Vitrier",
    description:
      "Plomberie, serrurerie, vitrerie et dépannage multiservices à Metz et alentours. Intervention rapide 6j/7, devis gratuit.",
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
    <html
      lang="fr"
      className={`h-full scroll-smooth ${syne.variable} ${dmSans.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta name="author" content="GG Intervention" />

        {/* JSON-LD LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "GG Intervention",
              alternateName: "G&G Intervention",
              image: "https://ggintervention.fr/logo-gg.png",
              url: "https://ggintervention.fr",
              telephone: "0760432122",
              email: "gg.intervention@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Metz",
                addressRegion: "Grand Est",
                addressCountry: "FR",
              },
              areaServed: {
                "@type": "Place",
                name: "Metz et alentours (50 km)",
              },
              description:
                "GG Intervention à Metz propose des services de plomberie, serrurerie, vitrerie et montage de meubles. Intervention rapide et fiable, devis gratuit, 6j/7.",
              openingHours: "Mo-Sa 08:00-19:00",
              sameAs: [
                "https://www.facebook.com/ggintervention",
                "https://www.instagram.com/ggintervention",
                "https://www.snapchat.com/add/ggintervention",
              ],
            }),
          }}
        />
      </head>
      <body className="h-full bg-[#0E0E0E] text-[#F0EDE8] antialiased overflow-x-hidden">
        <DevisProvider>
          {children}
        </DevisProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}