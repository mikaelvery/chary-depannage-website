import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white w-full shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-6">
        {/* Logo + Nom */}
        <div className="flex items-center gap-3">
          <FaHome className="h-10 w-10 text-blue-900" />
          <div>
            <h1 className="text-2xl font-bold text-blue-900 tracking-tight">CHARY</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">
              Dépannage Express
            </p>
          </div>
        </div>

        {/* Coordonnées + Bouton */}
        <div className="flex items-center gap-6">
          <span className="text-xl font-bold text-blue-900 whitespace-nowrap">
            06 45 19 06 94
          </span>
          <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded hover:bg-orange-600 transition text-sm">
            Obtenir un devis
          </button>
        </div>
      </div>
    </header>
  );
}
