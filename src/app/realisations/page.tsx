"use client";

import { useState } from "react";
import DefaultLayout from "../_components/DefaultLayout";
import PageLayout from "../_components/PageLayout";

export default function RealisationsPage() {
  const images = [
    "/real1.jpg",
    "/real2.jpg",
    "/real3.jpg",
    "/real4.jpg",
    "/real5.jpg",
    "/real6.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <DefaultLayout>
      <PageLayout title="Nos réalisations">
        <main className="bg-gray-100/90 px-6 pt-20 pb-10 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Réalisation G&G ${i + 1}`}
                  onClick={() => setSelectedImage(src)}
                  className="cursor-pointer w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                />
              ))}
            </div>
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="Zoom"
                className="max-w-3xl max-h-[90vh] rounded-xl shadow-xl"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white text-3xl font-bold"
              >
                &times;
              </button>
            </div>
          )}
        </main>
      </PageLayout>
    </DefaultLayout>
  );
}
