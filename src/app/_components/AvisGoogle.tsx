'use client';

import { useState } from 'react';
import Star from '../_components/Stars';

type Review = {
  name: string;
  stars: number;
  date: string;
  text: string;
  photoUrl: string;
};

const reviews: Review[] = [
  {
    name: 'Marc D.',
    stars: 5,
    date: 'il y a 2 mois',
    text: 'Service impeccable, intervention en urgence réussie.',
    photoUrl: '/marc.png',
  },
  {
    name: 'Sophie M.',
    stars: 4.5,
    date: 'il y a 2 mois',
    text: 'Guillaume est très professionnel, je recommande sans hésitation.',
    photoUrl: '/sophie.png',
  },
  {
    name: 'Kevin B.',
    stars: 4.5,
    date: 'il y a 1 mois',
    text: 'Rapide, efficace et sympathique ! Je referai appel à lui sans problème, service rapide et vraiment pro.',
    photoUrl: '/kevin.png',
  },
  {
    name: 'Julie R.',
    stars: 4.5,
    date: 'il y a 3 semaines',
    text: 'Bon rapport qualité/prix. Très bon contact. Le travail a été fait avec soin.',
    photoUrl: '/julie.png',
  },
];

export default function AvisGoogle() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section data-aos="slide-left" className="bg-gradient-to-b from-gray-50 to-gray-100 text-black py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
            Ce que disent nos clients
        </h2>

        <div data-aos="zoom-in" className="flex items-center justify-center gap-4 mb-12">
          <span className="text-4xl font-extrabold text-yellow-500 drop-shadow-md leading-tight">4.4</span>
          <div className="flex space-x-1">
            <Star filled />
            <Star filled />
            <Star filled />
            <Star filled />
            <Star half />
          </div>
          <span className="text-gray-500 ml-3 text-sm md:text-base">31 avis</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-sm md:text-base">
          {(showAll ? reviews : reviews.slice(0, 4)).map((review, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedReview(review)}
              data-aos={index % 2 === 0 ? 'slide-left' : 'slide-right'}
              data-aos-delay={index * 100}
            >
              <img src={review.photoUrl} alt={review.name} className="w-12 h-12 rounded-full border-2 border-blue-600 object-cover" />
              <div className="flex flex-col flex-1">
                <p className="font-semibold text-blue-900">{review.name}</p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(Math.floor(review.stars))].map((_, i) => (
                    <Star key={i} filled />
                  ))}
                  {review.stars % 1 !== 0 && <Star half />}
                 <p className="text-gray-400 text-xs ml-2">{review.date}</p> 
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {review.text.length > 50 ? (
                    <>
                      {review.text.slice(0, 50)}...{' '}
                      <span className="text-blue-600 underline text-sm">Lire plus</span>
                    </>
                  ) : (
                    review.text
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-10 text-blue-900 border border-blue-900 px-4 py-2 rounded-full font-medium hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer"
          >
            Voir tous les avis
          </button>
        )}

        <div data-aos="fade-in" data-aos-delay="200" className="text-gray-400 text-sm mt-12">
          powered by{' '}
          <span className="font-bold tracking-wide select-none">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
        </div>
      </div>

      {/* Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative text-left">
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              ×
            </button>
            <div className="flex items-center gap-4 mb-4">
              <img src={selectedReview.photoUrl} alt={selectedReview.name} className="w-12 h-12 rounded-full border-2 border-blue-600 object-cover" />
              <div>
                <p className="font-semibold text-blue-900">{selectedReview.name}</p>
                <div className="flex items-center gap-1 text-sm">
                  {[...Array(Math.floor(selectedReview.stars))].map((_, i) => (
                    <Star key={i} filled />
                  ))}
                  {selectedReview.stars % 1 !== 0 && <Star half />}
                  <span className="text-gray-400 ml-2">{selectedReview.date}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">{selectedReview.text}</p>
          </div>
        </div>
      )}
    </section>
  );
}
