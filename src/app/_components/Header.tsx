import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm transition-shadow duration-300 .animate-fade-in-down">
      <div className="w-full sm:max-w-6xl mx-auto flex justify-between items-center px-4 py-3 md:py-4 md:px-6">
        
        {/* Logo + Société */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-95 transition">
          <img
            src="/logo-gg.png"
            alt="Logo G & G"
            className="h-15 sm:h-20 object-contain"
          />
          <div className="leading-snug mt-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight bg-black text-transparent bg-clip-text">
              Intervention
            </h2>
            <p className="text-[9px] sm:text-xs text-[#bd9f6e] font-bold uppercase tracking-wider">
              Pose • Répare • Dépanne
            </p>
          </div>
        </Link>

        {/* Navigation + Téléphone */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
          <Link href="#services" className="hover:text-[#bd9f6e] transition">Services</Link>
          <Link href="#about" className="hover:text-[#bd9f6e] transition">À propos</Link>
          <Link href="#contact" className="hover:text-[#bd9f6e] transition">Contact</Link>
        </div>
      </div>
    </header>
  );
}
