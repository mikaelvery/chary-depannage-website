import Link from "next/link";
import CallButton from "../_components/CallButton";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#0a1525] to-[#0d1b2a] text-white py-14 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center text-center md:text-left">
        <div className="flex-1 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd9f6e] to-[#f8b400]">
              INTERVENTION RAPIDE
            </span><br /><span className="text-3xl sm:text-4xl md:text-3xl">À METZ ET SES ALENTOURS</span> 
          </h1>
          <p className="text-base sm:text-lg mb-6 max-w-md mx-auto md:mx-0 leading-relaxed">
            Dépannages urgents et multiservices à Metz : fuites, serrures bloquées, vitres cassées et petits travaux. Intervention rapide et devis en ligne gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/devis"
              className="bg-[#BD9F6E] hover:bg-[#cba870] text-white font-semibold px-6 py-3 rounded-full text-base shadow-lg transition"
            >
              OBTENIR UN DEVIS
            </Link>
            <CallButton />
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex items-end justify-center -mb-22 z-0">
          <img
            src="/plumber-working.png"
            alt="Plombier en action"
            className="h-auto max-h-[320px] sm:max-h-[420px] md:max-h-[460px] w-auto object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
} 