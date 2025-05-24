"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
        duration: 0.6,            // durée du scroll (plus bas = plus rapide)
        easing: (t) => t,         
        wheelMultiplier: 1.8,     // molette plus rapide
        touchMultiplier: 1.2,     // scroll tactile
    });


    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
