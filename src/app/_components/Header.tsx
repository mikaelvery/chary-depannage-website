"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PulseDot } from "./PulseDot";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "À propos" },
    { href: "/#realisations", label: "Réalisations" },
    { href: "/#avis", label: "Avis" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 transition-all duration-300 ${
          scrolled ? "py-3 bg-[#0E0E0E]/98" : "py-4 bg-[#0E0E0E]/80"
        } backdrop-blur-xl`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition shrink-0" onClick={closeMenu}>
            <img
              src="/logo-gg.png"
              alt="Logo G & G"
              className="h-12 sm:h-14 object-contain"
            />
            <div className="leading-tight">
              <p
                className="text-white font-bold text-[15px] sm:text-[17px] tracking-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                GG Intervention
              </p>
              <p className="text-[9px] sm:text-[10px] text-[#7A7570] font-medium uppercase tracking-widest">
                Metz &amp; alentours
              </p>
            </div>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-[#7A7570] hover:text-[#F0EDE8] transition-colors duration-200 font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Droite : CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="tel:+330760432122"
              className="flex items-center gap-2 bg-[#F4500A] hover:bg-[#FF6B2B] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200"
            >
              <PulseDot color="green" />
              <span className="hidden sm:inline">07 60 43 21 22</span>
              <span className="sm:hidden">Appeler</span>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg border border-white/10 hover:border-white/20 transition cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Ouvrir le menu"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

        </div>
      </header>

      {/* Menu mobile plein écran */}
      <div
        className={`fixed inset-0 z-40 bg-[#0E0E0E] flex flex-col pt-24 px-6 pb-8 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Liens nav */}
        <nav className="flex flex-col flex-1">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-[28px] font-black text-[#7A7570] hover:text-white py-5 border-b border-white/6 transition-colors duration-200"
              style={{
                fontFamily: "'Syne', sans-serif",
                transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTAs en bas */}
        <div className="flex flex-col gap-3 mt-8">
          <Link
            href="tel:+330760432122"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2.5 bg-[#F4500A] text-white font-bold py-4 rounded-xl text-base"
          >
            <PulseDot color="green" />
            07 60 43 21 22
          </Link>
          <Link
            href="/devis"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 border border-white/10 text-white font-medium py-4 rounded-xl text-base hover:border-white/25 transition"
          >
            Devis gratuit →
          </Link>
        </div>
      </div>
    </>
  );
}