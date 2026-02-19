"use client";

import { useState } from "react";

type Review = {
  name: string;
  stars: number;
  date: string;
  text: string;
  photoUrl: string;
};

// Données statiques — à remplacer par Google Places API plus tard
const reviews: Review[] = [
  {
    name: "Marc D.",
    stars: 5,
    date: "il y a 2 mois",
    text: "Service impeccable, intervention en urgence réussie en moins d'une heure. Guillaume est professionnel et efficace. Je recommande vivement.",
    photoUrl: "/marc.png",
  },
  {
    name: "Sophie M.",
    stars: 5,
    date: "il y a 2 mois",
    text: "Guillaume est très professionnel, je recommande sans hésitation. Travail soigné, tarif honnête et ponctualité au rendez-vous.",
    photoUrl: "/sophie.png",
  },
  {
    name: "Kevin B.",
    stars: 5,
    date: "il y a 1 mois",
    text: "Rapide, efficace et sympathique ! Je referai appel à lui sans problème, service rapide et vraiment pro.",
    photoUrl: "/kevin.png",
  },
  {
    name: "Julie R.",
    stars: 4,
    date: "il y a 3 semaines",
    text: "Bon rapport qualité/prix. Très bon contact. Le travail a été fait avec soin.",
    photoUrl: "/julie.png",
  },
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i <= stars ? "#FBBF24" : "none"}
          stroke="#FBBF24"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <span className="font-bold tracking-wide select-none text-sm">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

// Initiale + couleur déterministe si pas de photo
const AVATAR_COLORS = [
  "from-[#F4500A] to-[#FF9A6C]",
  "from-[#7C3AED] to-[#A78BFA]",
  "from-[#0EA5E9] to-[#38BDF8]",
  "from-[#059669] to-[#34D399]",
];

export default function AvisGoogle() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  return (
    <section id="avis" className="bg-[#0E0E0E] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#F4500A] text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              Témoignages
            </p>
            <h2
              className="text-white font-black leading-[1.1] tracking-tight"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                letterSpacing: "-0.02em",
              }}
            >
              Ce que disent<br />nos clients
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[#7A7570] text-sm">
            <span>Avis vérifiés</span>
            <GoogleLogo />
          </div>
        </div>

        {/* Score global */}
        <div className="bg-[#1A1A1A] border border-white/8 rounded-2xl p-6 md:p-8 flex flex-wrap gap-8 items-center mb-10">
          {/* Note */}
          <div className="text-center pr-8 border-r border-white/8 shrink-0">
            <p
              className="text-white font-black text-6xl leading-none"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              4.4
            </p>
            <div className="flex justify-center my-2">
              <StarRating stars={4} />
            </div>
            <p className="text-[#7A7570] text-xs">31 avis vérifiés</p>
          </div>

          {/* Barres de répartition */}
          <div className="flex-1 min-w-[200px] flex flex-col gap-2.5">
            {[
              { label: "5★", pct: 65 },
              { label: "4★", pct: 20 },
              { label: "3★", pct: 10 },
              { label: "2★", pct: 5 },
              { label: "1★", pct: 0 },
            ].map(({ label, pct }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-[#7A7570] text-xs w-5 shrink-0">{label}</span>
                <div className="flex-1 h-1.5 bg-white/8 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FBBF24] rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-[#7A7570] text-xs w-7 text-right">{pct}%</span>
              </div>
            ))}
          </div>

          {/* Google badge */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center font-bold text-[#4285F4] text-xl shrink-0">
              G
            </div>
            <div>
              <p className="text-white font-medium text-sm leading-tight">Google Reviews</p>
              <p className="text-[#7A7570] text-xs">Avis vérifiés</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <div
              key={i}
              onClick={() => setSelectedReview(review)}
              className="group bg-[#1A1A1A] border border-white/8 rounded-2xl p-6 cursor-pointer hover:border-[#F4500A]/30 transition-all duration-200 flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${AVATAR_COLORS[i % AVATAR_COLORS.length]} flex items-center justify-center font-black text-white text-base shrink-0`}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-white font-medium text-sm leading-tight">{review.name}</p>
                  <p className="text-[#7A7570] text-[11px] mt-0.5">{review.date} · via Google</p>
                </div>
              </div>

              {/* Stars */}
              <StarRating stars={review.stars} />

              {/* Text */}
              <p className="text-[#7A7570] text-sm leading-relaxed font-light flex-1">
                {review.text.length > 80 ? (
                  <>
                    {review.text.slice(0, 80)}
                    <span className="text-[#F4500A]">... Lire plus</span>
                  </>
                ) : (
                  review.text
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Powered by */}
        <p className="text-center text-[#7A7570] text-xs mt-10">
          powered by <GoogleLogo />
        </p>
      </div>

      {/* Modal */}
      {selectedReview && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="bg-[#1A1A1A] border border-white/10 rounded-2xl shadow-2xl max-w-md w-full p-7 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 text-[#7A7570] hover:text-white transition text-xl leading-none"
            >
              ×
            </button>
            <div className="flex items-center gap-4 mb-5">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${AVATAR_COLORS[reviews.indexOf(selectedReview) % AVATAR_COLORS.length]} flex items-center justify-center font-black text-white text-lg shrink-0`}
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {selectedReview.name[0]}
              </div>
              <div>
                <p className="text-white font-semibold">{selectedReview.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <StarRating stars={selectedReview.stars} />
                  <span className="text-[#7A7570] text-xs">{selectedReview.date}</span>
                </div>
              </div>
            </div>
            <p className="text-[#7A7570] text-sm leading-relaxed font-light">
              {selectedReview.text}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}