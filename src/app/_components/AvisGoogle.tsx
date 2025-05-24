import Star from '../_components/Stars';

export default function AvisGoogle() {
    return (
        <section className="bg-gray-100 text-black py-12 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Chary Plomberie & Co</h2>
              <p className="mb-6 text-sm md:text-base text-gray-700">
                Nos clients sont satisfaits ! Découvrez leurs retours directement sur notre fiche Google.
              </p>

              {/* Étoiles et note */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-[28px] font-semibold text-yellow-500">4.4</span>
                <div className="flex">
                  <Star filled />
                  <Star filled />
                  <Star filled />
                  <Star filled />
                  <Star half />
                </div>
                <span className="text-sm text-gray-600 ml-2">31 avis</span>
              </div>

              {/* Avis utilisateurs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-left text-sm">
                {[
                  {
                    name: "Marc D.",
                    stars: 5,
                    date: "il y a 2 mois",
                    text: "Service impeccable, intervention en urgence réussie.",
                    photoUrl: null,
                  },
                  {
                    name: "Sophie M.",
                    stars: 4.5,
                    date: "il y a 2 mois",
                    text: "Guillaume est très professionnel, je recommande sans hésitation.",
                    photoUrl: null,
                  },
                  {
                    name: "Kevin B.",
                    stars: 4.5,
                    date: "il y a 1 mois",
                    text: "Rapide, efficace et sympathique !",
                    photoUrl: null,
                  },
                  {
                    name: "Julie R.",
                    stars: 4.5,
                    date: "il y a 3 semaines",
                    text: "Bon rapport qualité/prix. Très bon contact.",
                    photoUrl: null,
                  },
                ].map(({ name, stars, date, text, photoUrl }, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      {photoUrl ? (
                        <img
                          src={photoUrl}
                          alt={name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                          {name.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Avis */}
                    <div className="flex flex-col">
                      <p className="font-bold text-black">{name}</p>
                      <div className="flex items-center mb-1 gap-1">
                        {[...Array(Math.floor(stars))].map((_, i) => (
                          <Star key={i} filled />
                        ))}
                        {stars % 1 !== 0 && <Star half />}
                        <p className="text-gray-500 text-xs ml-2">{date}</p>
                      </div>
                      <p className="text-gray-700">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Powered by Google */}
              <div className="text-gray-400 text-sm">
                powered by{" "}
                <span className="font-bold">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
              </div>
            </div>
        </section>
    );
}
