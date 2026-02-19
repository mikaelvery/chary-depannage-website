import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] border-t border-white/8 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-[#7A7570]">

        <span>© 2025 Guillaume Chary — GG Intervention Metz</span>

        <div className="flex items-center gap-6">
          <Link href="/mentions-legales" className="hover:text-[#F0EDE8] transition-colors duration-200">
            Mentions légales
          </Link>
          <Link href="/politique-de-confidentialite" className="hover:text-[#F0EDE8] transition-colors duration-200">
            Confidentialité
          </Link>
          <Link href="/conditions-generales" className="hover:text-[#F0EDE8] transition-colors duration-200">
            CGV
          </Link>
        </div>

        <span>
          Réalisation{" "}
          <a
            href="portfolio-ft8n-f9nrmli5j-mikaelverys-projects.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F4500A] hover:text-[#FF6B2B] transition-colors duration-200 font-medium"
          >
            Mikael Very
          </a>
        </span>

      </div>
    </footer>
  );
}