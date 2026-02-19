// Bloc CTA orange — à placer entre AvisGoogle et CompanyDetails dans page.tsx
export default function CTASection() {
  return (
    <section className="bg-[#F4500A] py-20 px-6 relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-full bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-full bg-black/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-white/70 text-xs font-semibold uppercase tracking-[0.15em] mb-4">
          Besoin d'aide ?
        </p>
        <h2
          className="text-white font-black leading-[1.1] tracking-tight mb-4"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            letterSpacing: "-0.02em",
          }}
        >
          Une urgence ?<br />On intervient vite.
        </h2>
        <p className="text-white/80 text-lg font-light mb-10">
          Appelez directement Guillaume ou demandez un devis en ligne.
          <br />Réponse rapide garantie.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+330760432122"
            className="inline-flex items-center gap-2 bg-white text-[#F4500A] font-bold px-8 py-4 rounded-xl text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
          >
            📞 07 60 43 21 22
          </a>
          <a
            href="/devis"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-[15px] transition-all duration-200"
          >
            Devis gratuit en ligne →
          </a>
        </div>
      </div>
    </section>
  );
}
