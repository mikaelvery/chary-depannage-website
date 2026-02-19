import Link from "next/link";

const horaires = [
  { jour: "Lundi", horaire: "8h00 – 19h", open: true },
  { jour: "Mardi", horaire: "8h00 – 19h", open: true },
  { jour: "Mercredi", horaire: "8h00 – 19h", open: true },
  { jour: "Jeudi", horaire: "8h00 – 19h", open: true },
  { jour: "Vendredi", horaire: "8h00 – 19h", open: true },
  { jour: "Samedi", horaire: "8h00 – 19h", open: true },
  { jour: "Dimanche", horaire: "Fermé", open: false },
];

const pratiques = [
  { label: "Confidentialité", href: "/politique-de-confidentialite" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "C.G.V.", href: "/conditions-generales" },
  { label: "Contact", href: "/contact" },
];

const reseaux = [
  { href: "https://www.facebook.com/ggintervention", icon: "/icons/facebook.png", label: "Facebook" },
  { href: "https://www.instagram.com/ggintervention", icon: "/icons/instagram.png", label: "Instagram" },
  { href: "https://www.snapchat.com/add/ggintervention", icon: "/icons/snapchat.png", label: "Snapchat" },
];

export default function CompanyDetails() {
  return (
    <section className="bg-[#161616] border-t border-white/8 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

        {/* ── Horaires ── */}
        <div>
          <p className="text-[#F4500A] text-xs font-semibold uppercase tracking-[0.15em] mb-6">
            Horaires
          </p>
          <ul className="flex flex-col gap-0">
            {horaires.map(({ jour, horaire, open }, i) => (
              <li
                key={jour}
                className={`flex justify-between items-center py-3 border-b border-white/6 last:border-0 animate-fade-slide-in`}
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "forwards" }}
              >
                <span className="text-[#7A7570] text-sm">{jour}</span>
                <span className={`text-sm font-medium ${open ? "text-[#F0EDE8]" : "text-[#7A7570]"}`}>
                  {horaire}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── En pratique ── */}
        <div>
          <p className="text-[#F4500A] text-xs font-semibold uppercase tracking-[0.15em] mb-6">
            En pratique
          </p>
          <ul className="flex flex-col gap-3">
            {pratiques.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[#7A7570] hover:text-[#F0EDE8] text-sm transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Nous suivre ── */}
        <div>
          <p className="text-[#F4500A] text-xs font-semibold uppercase tracking-[0.15em] mb-6">
            Nous suivre
          </p>
          <div className="flex flex-col gap-3">
            {reseaux.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/5 hover:bg-white/8 border border-white/8 hover:border-white/15 rounded-xl px-4 py-3 transition-all duration-200 group"
              >
                <img src={icon} alt={label} className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition" />
                <span className="text-[#7A7570] group-hover:text-[#F0EDE8] text-sm font-medium transition-colors duration-200">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}