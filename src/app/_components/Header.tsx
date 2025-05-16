import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white w-full shadow">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center px-4 py-4 md:px-6">
        {/* Logo + Nom */}
        <div className="flex items-center gap-3 mb-3 md:mb-0 flex-shrink-0">
          <FaHome className="h-8 w-8 md:h-10 md:w-10 text-blue-900" />
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-blue-900 tracking-tight">
              CHARY
            </h1>
            <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest">
              Dépannage Express
            </p>
          </div>
        </div>

        {/* Coordonnées + Bouton */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <span className="text-lg md:text-xl font-bold text-blue-900 whitespace-nowrap">
            06 45 19 06 94
          </span>
          <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 transition text-xs md:text-sm whitespace-nowrap">
            Obtenir un devis
          </button>
        </div>
      </div>
    </header>
  );
}
