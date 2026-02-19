"use client";

import { useState } from "react";

const images = ["/real1.jpg", "/real2.jpg", "/real3.jpg", "/real4.jpg"];

const reseaux = [
  { href: "https://www.facebook.com/ggintervention", icon: "/icons/facebook.svg", label: "Facebook" },
  { href: "https://www.instagram.com/ggintervention", icon: "/icons/instagram.svg", label: "Instagram" },
  { href: "https://www.snapchat.com/add/ggintervention", icon: "/icons/snapchat.svg", label: "Snapchat" },
];

function ImageCard({
  src,
  alt,
  onClick,
  className,
  style,
}: {
  src: string;
  alt: string;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`group relative overflow-hidden border border-white/8 bg-[#1A1A1A] cursor-pointer ${className}`}
      style={style}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-[#F4500A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/15 border border-white/30 flex items-center justify-center backdrop-blur-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function RealisationsSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i! - 1 + images.length) % images.length);
  const next = () => setLightbox((i) => (i! + 1) % images.length);

  return (
    <section id="realisations" className="bg-[#161616] py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="text-[#F4500A] text-xs font-semibold uppercase tracking-[0.15em] mb-3 md:mb-4">
              Portfolio
            </p>
            <h2
              className="text-white font-black leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em" }}
            >
              Nos réalisations
            </h2>
          </div>
          <a
            href="/realisations"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-white/25 text-white font-medium px-5 py-3 rounded-xl text-sm transition-all duration-200 self-start"
          >
            Voir tout →
          </a>
        </div>

        {/* ── MOBILE : 2 colonnes ── */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {images.map((src, i) => (
            <ImageCard
              key={i}
              src={src}
              alt={`Réalisation ${i + 1}`}
              onClick={() => setLightbox(i)}
              className="rounded-xl aspect-square"
            />
          ))}
          {/* Réseaux pleine largeur */}
          <div className="col-span-2 rounded-xl bg-[#1A1A1A] border border-white/8 p-5 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <p className="text-white font-bold text-sm mb-1 uppercase tracking-wide" style={{ fontFamily: "'Syne', sans-serif" }}>
                Suivez-nous
              </p>
              <p className="text-[#7A7570] text-xs">Interventions & actualités</p>
            </div>
            <div className="flex sm:flex-col gap-2">
              {reseaux.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/8 rounded-xl px-3 py-2 transition-all duration-200">
                  <img src={icon} alt={label} className="w-4 h-4 object-contain" />
                  <span className="text-[#F0EDE8] text-xs font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── DESKTOP : grille asymétrique ── */}
        <div
          className="hidden md:grid gap-4"
          style={{ gridTemplateColumns: "repeat(12, 1fr)", gridTemplateRows: "220px 220px" }}
        >
          <ImageCard src={images[0]} alt="Réalisation 1" onClick={() => setLightbox(0)}
            className="rounded-2xl" style={{ gridColumn: "1 / 6", gridRow: "1 / 3" }} />
          <ImageCard src={images[1]} alt="Réalisation 2" onClick={() => setLightbox(1)}
            className="rounded-2xl" style={{ gridColumn: "6 / 9", gridRow: "1 / 2" }} />
          <ImageCard src={images[2]} alt="Réalisation 3" onClick={() => setLightbox(2)}
            className="rounded-2xl" style={{ gridColumn: "9 / 13", gridRow: "1 / 2" }} />
          <ImageCard src={images[3]} alt="Réalisation 4" onClick={() => setLightbox(3)}
            className="rounded-2xl" style={{ gridColumn: "6 / 10", gridRow: "2 / 3" }} />

          {/* Réseaux sociaux */}
          <div className="rounded-2xl bg-[#1A1A1A] border border-white/8 p-6 flex flex-col justify-between"
            style={{ gridColumn: "10 / 13", gridRow: "2 / 3" }}>
            <div>
              <p className="text-white font-bold text-base mb-1 uppercase tracking-wide" style={{ fontFamily: "'Syne', sans-serif" }}>
                Suivez-nous
              </p>
              <p className="text-[#7A7570] text-xs leading-relaxed">Interventions, promos et actualités</p>
            </div>
            <div className="flex flex-col gap-2.5">
              {reseaux.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15 rounded-xl px-3 py-2 transition-all duration-200">
                  <img src={icon} alt={label} className="w-4 h-4 object-contain" />
                  <span className="text-[#F0EDE8] text-xs font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setLightbox(null)}
        >
          {/* Image */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightbox]}
              alt={`Réalisation ${lightbox + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* Compteur */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/10">
              {lightbox + 1} / {images.length}
            </div>

            {/* Fermer */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 md:top-4 md:right-4 w-10 h-10 bg-[#1A1A1A] hover:bg-[#F4500A] border border-white/10 hover:border-[#F4500A] rounded-full flex items-center justify-center text-white transition-all duration-200 cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Précédent */}
            <button
              onClick={prev}
              className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1A1A1A] hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-200 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Suivant */}
            <button
              onClick={next}
              className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1A1A1A] hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-200 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Clic extérieur = fermer */}
          <p className="absolute bottom-6 text-white/30 text-xs">Cliquer en dehors pour fermer</p>
        </div>
      )}
    </section>
  );
}