import {
  Header,
  Footer,
  CompanyDetails,
  Hero,
  About,
  Services,
  RealisationsSection,
  Contact,
  AvisGoogle
} from './_components';
import ScrollToTop from './_components/ScrollToTop';
import CTASection from './_components/CTASection';

export const metadata = {
  title:
    "GG Intervention Metz | Plombier, Serrurier, Vitrier & Dépannage multiservices",
  description:
    "Besoin d’un plombier, serrurier ou vitrier à Metz ? GG Intervention propose dépannage rapide 6j/7 (8h–19h), plomberie, serrurerie, vitrerie, montage & pose de meubles. Devis en ligne gratuit !",
  robots: "index, follow",
  alternates: {
    canonical: "https://ggintervention.fr",
  },
  openGraph: {
    title: "GG Intervention Metz | Plombier, Serrurier & Vitrier",
    description:
      "Plomberie, serrurerie, vitrerie et dépannage multiservices à Metz et alentours. Intervention rapide 6j/7 de 8h à 19h. Contactez GG Intervention dès maintenant !",
    url: "https://ggintervention.fr",
    siteName: "GG Intervention",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="bg-white/50 text-gray-900 overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <RealisationsSection />
      <Contact />
      <AvisGoogle />
      <CTASection />
      <CompanyDetails />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
