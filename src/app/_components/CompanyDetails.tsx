import Link from "next/link";

export default function CompanyDetails() {
  const horaires = [
    { jour: "Lundi", horaire: "9h00 - 18h" },
    { jour: "Mardi", horaire: "9h00 - 18h" },
    { jour: "Mercredi", horaire: "9h00 - 18h" },
    { jour: "Jeudi", horaire: "9h00 - 18h" },
    { jour: "Vendredi", horaire: "9h00 - 18h" },
    { jour: "Samedi", horaire: "Fermé" },
    { jour: "Dimanche", horaire: "Fermé" },
  ];

  const pratiques = [
    { label: "Confidentialité", href: "/privacy-policy" },
    { label: "Mentions légales", href: "/legal-notice" },
    { label: "C.G.V.", href: "/terms-of-service" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <section
      className="bg-gradient-to-b from-[#0a1525] to-[#0d1b2a] text-white py-14 px-6 sm:px-12"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 relative">
        {/* Colonne 1 : Horaires */}
        <div data-aos="fade-right" className="md:ml-40 relative z-10">
          <h4 className="text-[#bd9f6e] font-bold text-xl mb-6 tracking-wide border-b border-[#bd9f6e] pb-2">
            HORAIRES
          </h4>
          <ul>
            {horaires.map(({ jour, horaire }, index) => (
              <li
                key={jour}
                className="flex justify-between border-b border-gray-700 py-2 last:border-0 opacity-0 animate-fade-slide-in"
                style={{ animationDelay: `${index * 120}ms`, animationFillMode: "forwards" }}
              >
                <span className="font-medium">{jour} :</span>
                <span className="text-white">{horaire}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Séparateur vertical animé */}
        <div
          className="hidden md:block absolute top-10 bottom-10 left-1/2 border-l border-gray-700 opacity-50"
          data-aos="fade"
          data-aos-duration="1200"
          data-aos-delay="500"
        ></div>

        {/* Colonne 2 : En pratique + Nous suivre */}
        <div data-aos="fade-left" className="flex flex-col gap-10 relative z-10 md:mr-40">
          {/* En pratique */}
          <div>
            <h4 className="text-[#bd9f6e] font-bold text-xl mb-6 tracking-wide border-b border-[#bd9f6e] pb-2">
              EN PRATIQUE
            </h4>
            <ul>
              {pratiques.map(({ label, href }, index) => (
                <li
                  key={label}
                  className="opacity-0 animate-fade-slide-in"
                  style={{ animationDelay: `${index * 120}ms`, animationFillMode: "forwards" }}
                >
                  <Link
                    href={href}
                    className="hover:text-blue-400 hover:underline transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-[#bd9f6e] focus:ring-offset-2"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nous suivre */}
          <div>
            <h4 className="text-[#bd9f6e] font-bold text-xl mb-6 tracking-wide border-b border-[#bd9f6e] pb-2">
              NOUS SUIVRE
            </h4>
            <div className="flex items-center gap-6">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/ggintervention"
                target="_blank"
                rel="noopener noreferrer"
                className="group transform transition-transform hover:scale-110 hover:animate-pulse-slow focus:outline-none focus:ring-2 focus:ring-[#bd9f6e] focus:ring-offset-2"
                aria-label="Suivez-nous sur Facebook"
              >
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  className="w-10 h-10 drop-shadow-lg transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-[190deg]"
                />
              </a>

              <div className="text-2xl font-light text-white select-none opacity-60">|</div>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ggintervention"
                target="_blank"
                rel="noopener noreferrer"
                className="group transform transition-transform hover:scale-110 hover:animate-pulse-slow focus:outline-none focus:ring-2 focus:ring-[#bd9f6e] focus:ring-offset-2"
                aria-label="Suivez-nous sur Instagram"
              >
                <img
                  src="/icons/instagram.png"
                  alt="Instagram"
                  className="w-10 h-10 drop-shadow-lg transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-[305deg]"
                />
              </a>
              
              <div className="text-2xl font-light text-white select-none opacity-60">|</div>

              {/* snapchat */}
              <a
                href="https://www.snapchat.com/ggintervention"
                target="_blank"
                rel="noopener noreferrer"
                className="group transform transition-transform hover:scale-110 hover:animate-pulse-slow focus:outline-none focus:ring-2 focus:ring-[#bd9f6e] focus:ring-offset-2"
                aria-label="Suivez-nous sur Snpachat"
              >
                <img
                  src="/icons/snapchat.png"
                  alt="Snapchat"
                  className="w-10 h-10 drop-shadow-lg transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-200 group-hover:hue-rotate-[305deg]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
