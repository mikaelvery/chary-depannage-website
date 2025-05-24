"use client";

import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 1500);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2, easing: (t: number) => t });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

 return (
    <>
      {show && (
        <button
            onClick={scrollToTop}
            aria-label="Retour en haut"
            className="
                fixed
                bottom-8
                right-8
                md:right-auto md:left-1/2 md:transform md:-translate-x-1/2
                hidden md:flex
                items-center justify-center
                w-15 h-15
                border-2
                rounded-full
                text-yellow-600
                shadow-lg
                hover:bg-yellow-50
                opacity-80
                transition
            "
            style={{
                borderColor: "#FFD700", 
                fontWeight: "bold",
                fontSize: "28px",
                lineHeight: 1,
            }}
        >
            <FaArrowUp />
        </button>
        )}
    </>
  );
}

