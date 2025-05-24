import Header from './_components/Header';
import Star from './_components/Stars';
import CallButton from "./_components/CallButton";

export default function Home() {
  return (
    <>
      <div className="bg-white text-gray-900">
        <main className="max-w-6xl mx-auto">
          <Header />

          <section className="bg-[#0D1B2A] text-white py-14 px-6 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center text-center md:text-left">
              <div className="flex-1 z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                  INTERVENTION RAPIDE À METZ <br /> ET SES ALENTOURS
                </h1>
                <p className="text-base sm:text-lg mb-6 max-w-md mx-auto md:mx-0 leading-relaxed">
                  Réparation de fuite, débouchage, chauffage, serrurerie et autres services d'urgence.
                </p>
                <div className="flex justify-center md:justify-start gap-3 sm:gap-4">
                  <button className="bg-orange-500 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-orange-600 transition text-sm sm:text-base">
                    DÉCOUVRIR NOS SERVICES
                  </button>
                  <CallButton />
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 flex items-end justify-center -mb-22 z-0">
                <img
                  src="/plumber-working.png"
                  alt="Plombier en action"
                  className="h-auto max-h-[320px] sm:max-h-[420px] md:max-h-[460px] w-auto object-contain mx-auto"
                />
              </div>
            </div>
          </section>

          {/* À PROPOS */}
          <section className="bg-gray-100 py-12 px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h5 className="text-black text-[12px] font-medium tracking-widest leading-[1.33em] uppercase mb-3">
                Chary Depannage • Metz • depuis 2025
              </h5>
              <h3 className="text-[34px] font-bold mb-7 uppercase tracking-[0.025em] leading-[1.41]">
                AU SERVICE DU CLIENT
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
                Guillaume Chary intervient depuis 2020 pour vos urgences de{" "}
                <strong>plomberie</strong>, <strong>chauffagerie</strong> et{" "}
                <strong>serrurerie</strong> à Metz et dans les environs. Disponible 5j/7,
                il garantit un service rapide, fiable et de qualité, pour les particuliers
                comme les professionnels.
              </p>

            </div>
          </section>

          {/* SERVICES */}
          <section className="bg-white py-12 px-4 sm:px-6 text-center">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 sm:mb-12">NOS SERVICES</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                {[
                  {
                    iconSrc: "/leak.png",
                    title: "Réparation de fuite",
                  },
                  {
                    iconSrc: "/cleaning.png",
                    title: "Débouchage",
                  },
                  {
                    iconSrc: "/water-heater.png",
                    title: "Remplacement chauffe-eau",
                  },
                  {
                    iconSrc: "/icons/door.png",
                    title: "Ouverture de porte",
                  },
                ].map((service) => (
                  <div
                    key={service.title}
                    className="bg-[#F9FAFB] border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={service.iconSrc}
                      alt={service.title}
                      className="mx-auto mb-4 h-16 w-16 sm:h-20 sm:w-20 object-contain"
                      style={{ filter: "invert(49%) sepia(94%) saturate(3707%) hue-rotate(10deg) brightness(95%) contrast(90%)" }}
                    />
                    <h4 className="text-blue-900 font-semibold text-base sm:text-lg">{service.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-gray-100 py-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 sm:px-0">
                {["/real1.jpg", "/real2.jpg", "/real3.jpg", "/real1.jpg"].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Réalisation G&G Intervention ${i + 1}`}
                    className="w-full h-56 rounded-lg shadow-md object-cover"
                  />
                ))}
              </div>

              {/* Réseaux */}
              <div className="flex flex-col justify-center text-left">
                <h3 className="text-blue-900 font-extrabold uppercase mb-4 text-xl tracking-wider">
                  Rejoignez-nous sur les réseaux
                </h3>
                <p className="text-gray-700 mb-4">
                  Promotions, actualités et réalisations à suivre sur nos comptes.
                </p>
                
                <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                  <a href="https://www.facebook.com/guillaume.chary" target="_blank" rel="noopener noreferrer" className="flex justify-start">
                    <img src="/icons/facebook.svg" alt="Facebook" className="w-16 h-16" />
                  </a>
                  <a href="https://www.instagram.com/m5.gui57" target="_blank" rel="noopener noreferrer" className="flex justify-start">
                    <img src="/icons/instagram.svg" alt="Instagram" className="w-16 h-16" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="bg-white py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-900 mb-2">CONTACT</h3>
                <p className="text-gray-700">
                  Besoin d’une intervention ?<br />
                  Appelez-nous ou envoyez un message.
                </p>
              </div>
              <div className="flex-1 rounded-lg overflow-hidden h-70 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50000!2d6.179067!3d49.121343!3m2!1i1024!2i768!4f10.0!3m3!1m2!1s0x47948cc7a53607d9%3A0x407f3528a4b1d80!2sMetz%2C%20France!5e0!3m2!1sfr!2sus!4v1688476249571!5m2!1sfr!2sus"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de Metz"
                />
              </div>
            </div>
          </section>

          {/* AVIS CLIENTS */}
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
        </main>

        <section className="bg-[#0D1B2A] text-white py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-64 text-xs md:text-sm">
            
            {/* Colonne 1 : Horaires */}
            <div className="md:ml-40">
              <h4 className="font-semibold text-lg mb-4">HORAIRES</h4>
              <ul className="space-y-1">
                {[
                  { jour: 'Lundi', horaire: '9h00 - 18h' },
                  { jour: 'Mardi', horaire: '9h00 - 18h' },
                  { jour: 'Mercredi', horaire: '9h00 - 18h' },
                  { jour: 'Jeudi', horaire: '9h00 - 18h' },
                  { jour: 'Vendredi', horaire: '9h00 - 18h' },
                  { jour: 'Samedi', horaire: 'Fermé' },
                  { jour: 'Dimanche', horaire: 'Fermé' }
                ].map(({ jour, horaire }) => (
                  <li key={jour} className="flex justify-between">
                    <span>{jour} :</span>
                    <span>{horaire}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 2 : En pratique + Nous suivre */}
            <div className="flex flex-col gap-6">
              {/* En pratique */}
              <div>
                <h4 className="font-semibold text-lg mb-4">EN PRATIQUE</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:underline">Confidentialité</a></li>
                  <li><a href="#" className="hover:underline">Mentions légales</a></li>
                  <li><a href="#" className="hover:underline">C.G.V.</a></li>
                  <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
              </div>

              {/* Nous suivre */}
              <div>
                <h4 className="font-semibold text-lg mb-4">NOUS SUIVRE</h4>
                <div className="flex items-center gap-4">
                  <a href="https://www.facebook.com/guillaume.chary" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/facebook.png" alt="Facebook" className="w-8 h-8 md:w-10 md:h-10" />
                  </a>
                  <div className="text-2xl md:text-4xl font-light text-white">|</div>
                  <a href="https://www.instagram.com/m5.gui57" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/instagram.png" alt="Instagram" className="w-8 h-8 md:w-10 md:h-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#08111b] text-white py-4 px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-center gap-2 sm:gap-0">
            <span>
              Chary Depannage, 2025
            </span>
            <span>
              Ce site est une réalisation de{" "}
              <a 
                href="https://www.mikaelvery.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-blue-400"
              >
                Mikael Very
              </a>
            </span> 
          </div>
        </footer>
      </div>
    </>
  );
}
