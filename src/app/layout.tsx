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
  metadataBase: new URL("https://ggintervention.com"),
  title: "G&G Intervention",
  description: "Dépannage multiservices à Metz : plomberie, chauffage, serrurerie, etc.",
  openGraph: {
    title: "G&G Intervention",
    description: "Intervention rapide à Metz et ses alentours pour tous vos dépannages.",
    url: "https://www.ggintervention.fr",
    siteName: "G&G Intervention",
    images: [
      {
        url: "/logo-gg.png",
        width: 800,
        height: 600,
        alt: "Logo G&G Intervention",
      },
    ],
    locale: "fr_FR",
    type: "website",
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
        <link rel="icon" href="/logo-gg.png" type="image/png" />
        <title>G&G Intervention</title>
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