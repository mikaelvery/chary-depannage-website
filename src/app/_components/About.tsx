export default function About() {
  return (
    <section id="about" className="bg-[#0E0E0E] py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">

        {/* ── Image gauche ── */}
        {/* Sur mobile : centré avec largeur fixe pour marges égales gauche/droite */}
        {/* Sur desktop : pleine colonne */}
        <div className="flex justify-center md:block">
          <div className="relative w-[220px] md:w-full">

            <div className="rounded-2xl overflow-hidden border border-white/8 bg-[#161616] aspect-[3/4] max-h-[280px] md:max-h-[400px]">
              <img
                src="/plumber-working.png"
                alt="Guillaume Chary — GG Intervention"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Badge "Depuis 2019" */}
            <div className="absolute -bottom-6 right-8 md:-bottom-5 md:right-30 bg-[#F4500A] rounded-xl md:rounded-2xl px-5 py-4 md:px-6 md:py-5 text-center shadow-2xl shadow-orange-500/30">
              <p
                className="text-white font-black text-3xl md:text-4xl leading-none"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                2019
              </p>
              <p className="text-white/80 text-[10px] md:text-xs mt-1.5">En activité depuis</p>
            </div>

          </div>
        </div>

        {/* ── Contenu droit ── */}
        <div className="py-4 md:py-10 mt-4 md:mt-0">
          <p className="text-[#F4500A] text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            À propos
          </p>
          <h2
            className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              letterSpacing: "-0.02em",
            }}
          >
            Un artisan<br />de confiance
          </h2>
          <p className="text-[#7A7570] text-sm md:text-base leading-relaxed font-light mb-7">
            Guillaume Chary, artisan indépendant basé à Metz, intervient depuis 2019
            pour tous vos dépannages urgents. Sérieux, ponctuel et honnête — il vous
            propose toujours un devis clair avant toute intervention.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-3 md:gap-4 mb-8">
            {[
              "Disponible du lundi au samedi, de 8h à 19h",
              "Devis gratuit et transparent avant intervention",
              "Intervention dans un rayon de 50 km autour de Metz",
              "Plus de 5 ans d'expérience dans le multiservices",
              "Particuliers et professionnels",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#7A7570] text-sm md:text-[15px] leading-snug">
                <span className="w-5 h-5 md:w-[22px] md:h-[22px] rounded-[5px] md:rounded-[6px] bg-[#F4500A]/15 flex items-center justify-center text-[#F4500A] text-[10px] md:text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/devis"
              className="inline-flex items-center justify-center gap-2 bg-[#F4500A] hover:bg-[#FF6B2B] text-white font-semibold px-6 py-4 rounded-xl text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/25"
            >
              Obtenir un devis
            </a>
            <a
              href="tel:0760432122"
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/25 text-white font-medium px-6 py-4 rounded-xl text-[15px] transition-all duration-200"
            >
              Appeler Guillaume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}