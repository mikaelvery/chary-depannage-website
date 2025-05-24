import Star from '../_components/Stars';

export default function AvisGoogle() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 text-black py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide text-blue-900">
          Chary Plomberie & Co
        </h2>
        <p className="mb-10 text-base md:text-lg text-gray-600 max-w-xl mx-auto">
          Nos clients sont satisfaits ! Découvrez leurs retours directement sur notre fiche Google.
        </p>

        {/* Étoiles et note */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="text-4xl font-extrabold text-yellow-500 drop-shadow-md">4.4</span>
          <div className="flex space-x-1">
            <Star filled />
            <Star filled />
            <Star filled />
            <Star filled />
            <Star half />
          </div>
          <span className="text-gray-500 ml-3 text-sm md:text-base">31 avis</span>
        </div>

        {/* Avis utilisateurs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-sm md:text-base">
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
            <div
              key={index}
              className="flex gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                {photoUrl ? (
                  <img
                    src={photoUrl}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover shadow-sm"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-lg shadow-md transition-transform hover:scale-110">
                    {name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Avis */}
              <div className="flex flex-col">
                <p className="font-semibold text-blue-900">{name}</p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(Math.floor(stars))].map((_, i) => (
                    <Star key={i} filled />
                  ))}
                  {stars % 1 !== 0 && <Star half />}
                  <p className="text-gray-400 text-xs ml-2">{date}</p>
                </div>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Powered by Google */}
        <div className="text-gray-400 text-sm mt-12">
          powered by{" "}
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
    </section>
  );
}
