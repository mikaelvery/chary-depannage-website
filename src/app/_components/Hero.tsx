import Link from "next/link";
import { AvailabilityBadge, PulseDot } from "./PulseDot";

const FLOAT_STYLES = `
  @keyframes float1 {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-8px); }
  }
  @keyframes float2 {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(6px); }
  }
`;

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0E0E0E] text-white flex items-center overflow-hidden pt-28 md:pt-24 pb-20">
      <style>{FLOAT_STYLES}</style>

      {/* Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-[#F4500A]/8 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-[#F4500A]/5 blur-[100px]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* ── Visuel ── */}
          <div className="relative flex items-center justify-center order-first md:order-last">
            {/* Wrapper avec marges pour les floating cards qui débordent */}
            <div className="relative mx-8 md:mx-12 w-[240px] md:w-[340px] lg:w-[360px]">

              {/* Card image — taille contrôlée */}
              <div className="rounded-2xl overflow-hidden border border-white/8 bg-[#161616] w-full aspect-square">
                <img
                  src="/logo.png"
                  alt="GG Intervention — Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating card "Intervention rapide"
                  → haut gauche, sort de la card vers le haut-gauche
                  → sur mobile : reste dans la zone, petite taille */}
              <div
                className="absolute -top-4 -left-7 md:-top-5 md:-left-7 bg-[#1A1A1A] border border-white/10 rounded-xl md:rounded-2xl p-2 md:p-3 flex items-center gap-2 md:gap-2.5 shadow-2xl z-10"
                style={{ animation: "float1 4s ease-in-out infinite" }}
              >
                <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#F4500A]/15 flex items-center justify-center text-sm md:text-xl shrink-0">
                  🔧
                </div>
                <div>
                  <p className="text-white text-[10px] md:text-[13px] font-semibold leading-tight whitespace-nowrap">
                    Intervention rapide
                  </p>
                  <p className="text-[#7A7570] text-[9px] md:text-[11px]">Sous 1h en urgence</p>
                </div>
              </div>

              {/* Floating card "4.4 Google"
                  → bas gauche, sort vers le bas */}
              <div
                className="absolute -bottom-4 -left-3 md:-bottom-5 md:-left-12 bg-[#1A1A1A] border border-white/10 rounded-xl md:rounded-2xl p-2.5 md:p-4 shadow-2xl"
                style={{ animation: "float2 5s ease-in-out infinite" }}
              >
                <p
                  className="text-white font-black text-[15px] md:text-[22px] leading-none"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  4.4
                </p>
                <p className="text-[#FBBF24] text-[10px] md:text-sm my-0.5 md:my-1">★★★★☆</p>
                <p className="text-[#7A7570] text-[9px] md:text-[11px]">31 avis Google</p>
              </div>

              {/* Floating card "Disponibilité" — desktop uniquement, sort à droite */}
              <div
                className="hidden lg:block absolute top-1/2 -right-25 -translate-y-1/2 bg-[#1A1A1A] border border-white/10 rounded-2xl p-4 shadow-2xl"
                style={{ animation: "float1 4.5s ease-in-out infinite reverse" }}
              >
                <p
                  className="text-white text-[11px] font-bold uppercase tracking-widest mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Disponibilité
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[12px]">
                    <PulseDot color="green" />
                    <span className="text-white font-medium whitespace-nowrap">Lun – Sam</span>
                    <span className="text-[#7A7570]">8h–19h</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px]">
                    <PulseDot color="orange" />
                    <span className="text-[#7A7570]">Dimanche</span>
                    <span className="text-[#7A7570]">Fermé</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── Contenu texte ── */}
          <div className="order-last md:order-first">

            {/* Badge */}
            <div className="mb-6">
              <AvailabilityBadge />
            </div>

            {/* Titre */}
            <h1
              className="font-black leading-[1.0] tracking-tight mb-5 text-white"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(36px, 8vw, 68px)",
                letterSpacing: "-0.03em",
              }}
            >
              Dépannage<br />
              <span className="text-[#F4500A] relative inline-block">
                rapide
                <span className="absolute bottom-0.5 left-0 right-0 h-[3px] bg-[#F4500A]/30 rounded-full" />
              </span>{" "}à<br />
              Metz
            </h1>

            {/* Description */}
            <p className="text-[#7A7570] text-base md:text-lg leading-relaxed mb-7 max-w-md font-light">
              Plomberie, serrurerie, vitrage et petit mobilier.
              Guillaume intervient depuis 2019 avec sérieux et réactivité,
              pour particuliers et professionnels.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 bg-[#F4500A] hover:bg-[#FF6B2B] text-white font-semibold px-6 py-4 rounded-xl text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
              >
                Devis gratuit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="tel:0760432122"
                className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/25 text-white font-medium px-6 py-4 rounded-xl text-[15px] transition-all duration-200"
              >
                📞 Appeler maintenant
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/8">
              {[
                { num: "+5 ans", label: "d'expérience" },
                { num: "4,4 ★", label: "note Google" },
                { num: "50 km", label: "autour de Metz" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  {i > 0 && <div className="w-px h-8 bg-white/10" />}
                  <div>
                    <p
                      className="text-white font-black text-xl leading-none"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {stat.num}
                    </p>
                    <p className="text-[#7A7570] text-xs mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Strip orange bas */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#F4500A] py-3 md:py-4 overflow-hidden">
        <div className="flex items-center gap-6 md:gap-10 px-4 md:px-6 flex-nowrap overflow-x-auto scrollbar-none">
          {[
            { icon: "🚿", label: "Plomberie & Débouchage" },
            { icon: "🔐", label: "Serrurerie & Ouverture" },
            { icon: "🪟", label: "Petit Vitrage" },
            { icon: "🛋️", label: "Montage & Pose de meubles" },
            { icon: "✅", label: "Devis gratuit en ligne" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-white text-xs md:text-sm font-medium whitespace-nowrap shrink-0"
            >
              <span className="text-base md:text-[18px]">{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}