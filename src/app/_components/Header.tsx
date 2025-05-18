import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md transition-shadow duration-300">
      <div className="w-full sm:max-w-6xl mx-auto flex justify-between items-center px-4 py-2 md:py-4 md:px-6">
        <div className="flex items-center gap-2 flex-shrink-0">
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
        </div>

        {/* Bouton "Obtenir un devis" */}
        <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap">
          <Link
            href="../devis"
            className="bg-orange-500 text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-orange-600 transition text-xs sm:text-sm"
          >
            Obtenir un devis
          </Link>
        </div>
      </div>
    </header>
  );
}
