"use client";

const services = [
  {
    icon: "🚰",
    iconSrc: "/leak.png",
    title: "Plomberie",
    desc: "Remplacement de robinets, joints, tuyaux. Détection de fuites. Chauffe-eau et chasse d'eau.",
  },
  {
    icon: "🔥",
    iconSrc: "/water-heater.png",
    title: "Remplacement chauffe-eau",
    desc: "Installation et remplacement de chauffe-eau électriques et thermodynamiques.",
  },
  {
    icon: "💧",
    iconSrc: "/icons/water.png",
    title: "Détection de fuite",
    desc: "Localisation précise des fuites cachées. Évitez les dégâts des eaux avec une intervention rapide.",
  },
  {
    icon: "🪠",
    iconSrc: "/icons/cleaning.png",
    title: "Débouchage",
    desc: "WC, évier, baignoire bouchés ? Débouchage manuel et haute pression pour canalisations internes.",
  },
  {
    icon: "🔑",
    iconSrc: "/icons/door.png",
    title: "Serrurerie & Ouverture",
    desc: "Ouverture de porte sans dégât, remplacement de serrures et cylindres. Intervention discrète.",
  },
  {
    icon: "🪟",
    iconSrc: "/icons/window.png",
    title: "Petit vitrage",
    desc: "Remplacement de vitres cassées, vitraux, vitres de porte. Sécurisation et isolation.",
  },
];

export default function Services() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-[#161616] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[#F4500A] text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              Nos prestations
            </p>
            <h2
              className="text-white font-black leading-[1.1] tracking-tight"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                letterSpacing: "-0.02em",
              }}
            >
              Des services<br />multiservices
            </h2>
          </div>
          <p className="text-[#7A7570] text-base font-light leading-relaxed max-w-sm">
            De la fuite d'eau à la serrure bloquée, Guillaume prend en charge
            toutes vos urgences avec le matériel adapté.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              onClick={scrollToContact}
              className="group relative bg-[#1A1A1A] border border-white/8 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[#F4500A]/40 hover:shadow-2xl hover:shadow-black/40 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F4500A]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

              {/* Icon */}
              <div className="w-13 h-13 rounded-[14px] bg-[#F4500A]/12 group-hover:bg-[#F4500A]/20 transition-colors duration-300 flex items-center justify-center mb-5 relative z-10"
                   style={{ width: "52px", height: "52px" }}>
                <img
                  src={service.iconSrc}
                  alt={service.title}
                  className="w-7 h-7 object-contain"
                  onError={(e) => {
                    // Fallback sur emoji si image manquante
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    (e.currentTarget.nextSibling as HTMLElement)!.style.display = "block";
                  }}
                />
                <span className="hidden text-2xl">{service.icon}</span>
              </div>

              {/* Text */}
              <h3
                className="text-white font-bold text-lg mb-2.5 relative z-10"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {service.title}
              </h3>
              <p className="text-[#7A7570] text-sm leading-relaxed mb-5 font-light relative z-10">
                {service.desc}
              </p>

              {/* Link */}
              <span className="inline-flex items-center gap-1.5 text-[#FF6B2B] text-[13px] font-medium relative z-10 group-hover:gap-3 transition-all duration-200">
                Demander un devis
                <span>→</span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}