"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut"
      className="
        fixed bottom-6 right-6 z-50
        w-11 h-11
        bg-[#1A1A1A] hover:bg-[#F4500A]
        border border-white/10 hover:border-[#F4500A]
        rounded-full
        flex items-center justify-center
        text-[#7A7570] hover:text-white
        shadow-lg shadow-black/40
        transition-all duration-200
        hover:-translate-y-0.5
        cursor-pointer
      "
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}