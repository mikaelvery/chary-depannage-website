import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white w-full shadow sm:px-2">
      <div className="w-full sm:max-w-6xl mx-auto flex justify-between items-center px-4 py-2 md:py-4 md:px-6">
        {/* Logo + Nom */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <FaHome className="h-6 w-6 sm:h-8 sm:w-8 text-blue-900" />
          <div className="leading-tight">
            <h1 className="text-base sm:text-lg font-bold text-blue-900 tracking-tight">
              CHARY
            </h1>
            <p className="text-[7px] sm:text-[9px] text-gray-500 uppercase tracking-widest">
              Dépannage Express
            </p>
          </div>
        </div>

        {/* Téléphone + bouton */}
        <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap">
          <span className="text-sm sm:text-base font-bold text-blue-900">
            06 45 19 06 94
          </span>
          <button className="bg-orange-500 text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-orange-600 transition text-xs sm:text-sm">
            Obtenir un devis
          </button>
        </div>
      </div>
    </header>
  );
}
