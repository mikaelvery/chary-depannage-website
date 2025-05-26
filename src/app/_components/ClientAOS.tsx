"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientAOS({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: window.innerWidth > 768 ? 120 : 300, // offset plus petit sur PC, plus grand sur mobile
    });
  }, []);

  return <>{children}</>;
}
