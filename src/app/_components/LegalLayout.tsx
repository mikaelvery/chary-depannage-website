import Header from "./Header";
import Footer from "./Footer";
import CompanyDetails from "./CompanyDetails";
import BackButton from "./BackButton";

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main className="bg-[#0E0E0E] min-h-screen pt-28 pb-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">

          {/* Header page */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[#F4500A] text-xs font-semibold uppercase tracking-[0.15em] mb-3">
                GG Intervention
              </p>
              <h1
                className="text-white font-black leading-[1.1] tracking-tight"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(24px, 4vw, 40px)",
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </h1>
            </div>
            <BackButton />
          </div>

          {/* Séparateur */}
          <div className="h-px bg-white/8 mb-10" />

          {/* Contenu */}
          <div className="text-[#7A7570] text-sm leading-relaxed space-y-8">
            {children}
          </div>

        </div>
      </main>
      <CompanyDetails />
      <Footer />
    </>
  );
}