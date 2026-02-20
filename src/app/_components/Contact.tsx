import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import GoogleMapWithCircle from "./GoogleMapWithCircle";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#161616] py-24 px-6 border-t border-white/8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[#F4500A] text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            Nous contacter
          </p>
          <h2
            className="text-white font-black leading-[1.1] tracking-tight"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              letterSpacing: "-0.02em",
            }}
          >
            Une urgence ?<br />On est là.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── Infos contact ── */}
          <div className="flex flex-col gap-6">
            <p className="text-[#7A7570] text-base font-light leading-relaxed max-w-sm">
              Une question, un besoin urgent ou une demande de devis ?
              Guillaume est à votre écoute du lundi au samedi de 8h à 19h.
            </p>

            {/* Téléphone */}
            <a
              href="tel:0760432122"
              className="flex items-center gap-4 bg-[#F4500A] hover:bg-[#FF6B2B] text-white rounded-2xl px-6 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/25 group"
            >
              <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                <PhoneIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/70 text-xs uppercase tracking-wider mb-0.5">Appeler maintenant</p>
                <p className="text-white font-bold text-lg tracking-wide">07 60 43 21 22</p>
              </div>
              <svg className="w-5 h-5 text-white/50 ml-auto group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:gg.intervention@gmail.com"
              className="flex items-center gap-4 bg-[#1A1A1A] hover:bg-[#222] border border-white/8 hover:border-white/15 text-white rounded-2xl px-6 py-5 transition-all duration-200 group"
            >
              <div className="w-11 h-11 bg-[#F4500A]/12 rounded-xl flex items-center justify-center shrink-0">
                <EnvelopeIcon className="w-5 h-5 text-[#F4500A]" />
              </div>
              <div>
                <p className="text-[#7A7570] text-xs uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-[#F0EDE8] font-medium text-sm">gg.intervention@gmail.com</p>
              </div>
            </a>

            {/* Devis CTA */}
            <a
              href="/devis"
              className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/25 text-white font-medium px-6 py-4 rounded-xl text-[15px] transition-all duration-200"
            >
              Demander un devis gratuit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* ── Carte ── */}
          <div className="bg-[#1A1A1A] border border-white/8 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/8">
              <p className="text-white font-semibold text-sm">Zone d'intervention</p>
              <p className="text-[#7A7570] text-xs mt-0.5">Metz et alentours — rayon 50 km</p>
            </div>
            <div className="h-72 md:h-80">
              <GoogleMapWithCircle />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}