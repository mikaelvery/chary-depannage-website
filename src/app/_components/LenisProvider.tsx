"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
        duration: 0.5,            // Réglage de la durée du scroll (plus bas = plus rapide)
        easing: (t) => t,         // Fonction d'easing linéaire (tu peux en tester d'autres)
        wheelMultiplier: 1.9,     // Rend la molette plus rapide
        touchMultiplier: 1.0,     // Pour le scroll tactile
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
