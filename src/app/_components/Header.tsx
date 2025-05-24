import Link from "next/link";
import { Home } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md transition-shadow duration-300">
      <div className="w-full sm:max-w-6xl mx-auto flex justify-between items-center px-4 py-2 md:py-4 md:px-6">
        
        {/* Logo + Nom de la société */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0 hover:opacity-90 transition">
          <img
            src="/logo-gg.png"
            alt="Logo G & G société"
            className="h-12 sm:h-14 object-contain aspect-square"
          />
          <div className="leading-tight pt-5">
            <h1 className="text-base sm:text-lg font-bold text-black tracking-tight">
              G & G
            </h1>
            <p className="text-[7px] sm:text-[9px] text-gray-700 uppercase tracking-widest">
              POSE • REPARE • DEPANNE 
            </p>
          </div>
        </Link>

        {/* Bouton Obtenir un devis */}
        <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap pt-5">
          <Link
            href="/devis"
            className="flex items-center gap-2 border-2 border-orange-500 text-orange-500 font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-orange-500 hover:text-white transition text-xs sm:text-sm"
          >
            <span>Obtenir un devis</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
