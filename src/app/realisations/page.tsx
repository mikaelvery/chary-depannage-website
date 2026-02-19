import Header from "../_components/Header";
import Footer from "../_components/Footer";
import CompanyDetails from "../_components/CompanyDetails";
import RealisationsGallery from "./RealisationsGallery";
import BackButton from "../_components/BackButton";

export const metadata = {
  title: "Nos réalisations - GG Intervention Metz | Plomberie, Serrurerie & Vitrerie",
  description:
    "Découvrez les réalisations de GG Intervention à Metz : dépannage en plomberie, serrurerie, vitrerie et multiservices. Exemples de nos interventions rapides et efficaces.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ggintervention.fr/realisations",
  },
  openGraph: {
    title: "Nos réalisations - GG Intervention Metz",
    description:
      "Quelques exemples de nos dépannages en plomberie, serrurerie et vitrerie à Metz et alentours.",
    url: "https://ggintervention.fr/realisations",
    siteName: "GG Intervention",
    type: "website",
  },
};

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0E0E0E] min-h-screen pt-28 pb-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header section */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[#F4500A] text-xs font-semibold uppercase tracking-[0.15em] mb-3">
                Portfolio
              </p>
              <h1
                className="text-white font-black leading-[1.1] tracking-tight"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(28px, 4vw, 48px)",
                  letterSpacing: "-0.02em",
                }}
              >
                Nos réalisations
              </h1>
            </div>
            <BackButton />
          </div>

          <RealisationsGallery />
        </div>
      </main>
      <CompanyDetails />
      <Footer />
    </>
  );
}