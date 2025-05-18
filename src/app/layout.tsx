import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import LenisProvider from "./_components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://guillaumechary.com'), 
  title: 'Chary Depannage',
  description: 'depannage multiservice sur metz et environ',
  openGraph: {
    images: '/plumber-working.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} font-sans h-full bg-background text-foreground antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
