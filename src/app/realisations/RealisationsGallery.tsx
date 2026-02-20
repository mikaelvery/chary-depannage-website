"use client";

import { useState, useEffect } from "react";

const images = [
  "/real1.jpg",
  "/real2.jpg",
  "/real3.jpg",
  "/real4.jpg",
  "/real5.jpg",
  "/real6.jpg",
];

export default function RealisationsGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i! - 1 + images.length) % images.length);
  const next = () => setLightbox((i) => (i! + 1) % images.length);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <div className="max-w-6xl mx-auto">

        {/* Grid — 2 colonnes mobile, 3 desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative rounded-xl md:rounded-2xl overflow-hidden border border-white/8 bg-[#1A1A1A] cursor-pointer aspect-square"
            >
              <img
                src={src}
                alt={`Réalisation GG Intervention ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay hover */}
              <div className="absolute inset-0 bg-[#F4500A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
              {/* Numéro discret */}
              <div className="absolute bottom-2 right-2 bg-black/50 text-white/60 text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">
                {i + 1}/{images.length}
              </div>
            </div>
          ))}
        </div>

        {/* CTA bas */}
        <div className="mt-10 text-center">
          <a
            href="tel:0760432122"
            className="inline-flex items-center gap-2 bg-[#F4500A] hover:bg-[#FF6B2B] text-white font-semibold px-8 py-4 rounded-xl text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/25"
          >
            📞 Demander un devis — 07 60 43 21 22
          </a>
        </div>

      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={close}
        >
          {/* Fermer */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#1A1A1A] hover:bg-[#F4500A] border border-white/10 hover:border-[#F4500A] rounded-full flex items-center justify-center text-white transition-all duration-200 cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Contenu */}
          <div
            className="relative w-full max-w-4xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightbox]}
              alt={`Réalisation ${lightbox + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* Compteur */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/10 pointer-events-none">
              {lightbox + 1} / {images.length}
            </div>

            {/* Précédent */}
            <button onClick={prev}
              className="absolute -left-2 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1A1A1A]/90 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-200 cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>

            {/* Suivant */}
            <button onClick={next}
              className="absolute -right-2 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1A1A1A]/90 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-200 cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>

          <p className="absolute bottom-5 text-white/25 text-xs pointer-events-none">
            Échap · ← → pour naviguer
          </p>
        </div>
      )}
    </>
  );
}