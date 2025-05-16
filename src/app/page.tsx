import Header from './_components/Header';

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <main className="max-w-6xl mx-auto">
          <Header />

          {/* HERO */}
          <section className="bg-[#0D1B2A] text-white py-14 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
              {/* Texte gauche */}
              <div className="flex-1">
                <h2 className="text-4xl font-bold leading-tight mb-4">
                  INTERVENTION RAPIDE À METZ <br /> ET SES ALENTOURS
                </h2>
                <p className="text-lg mb-6 max-w-md mx-auto md:mx-0 leading-relaxed">
                  Réparation de fuite, débouchage, chauffage, serrurerie et autres services d'urgence.
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition text-lg">
                    DÉCOUVRIR NOS SERVICES
                  </button>
                </div>
              </div>

              {/* Image droite */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src="/plumber-working.png"
                  alt="Plombier en action"
                  className="h-full max-h-[700px] w-auto object-contain"
                />
              </div>
            </div>
          </section>

          {/* À PROPOS */}
          <section className="bg-white py-12 px-6 text-center">
            <div className="max-w-6xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                Guillaume Chary intervient depuis 2020 en urgence pour vos besoins en <strong>plomberie</strong>, 
                <strong> chauffagerie</strong> et <strong> serrurerie</strong>. Disponible 7j/7 à Metz et ses alentours, 
                il propose un service de qualité, rapide et fiable pour particuliers comme professionnels. 
                Une fuite, une porte bloquée ou un chauffe-eau en panne ? Il est là pour vous dépanner rapidement.
              </p>
            </div>
          </section>

          {/* SERVICES */}
          <section className="bg-gray-100 py-12 px-6 text-center">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-10">NOS SERVICES</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: "🔥", title: "Réparation de fuite" },
                  { icon: "🧰", title: "Débouchage" },
                  { icon: "💧", title: "Remplacement chauffe-eau" },
                  { icon: "🔑", title: "Ouverture de porte" },
                ].map((service) => (
                  <div
                    key={service.title}
                    className="bg-white rounded-xl p-6 flex flex-col items-center gap-3 shadow-sm"
                  >
                    <div className="text-orange-500 text-4xl">{service.icon}</div>
                    <span className="text-blue-900 font-semibold">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* NOS RÉALISATIONS */}
          <section className="bg-gray-100 py-12 px-6 text-center">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">NOS RÉALISATIONS</h3>
              <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
                <div className="inline-flex gap-4 px-2">
                  {["/real1.jpg", "/real2.jpg", "/real3.jpg", "/real1.jpg"].map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Réalisation ${index + 1}`}
                      className="h-64 w-auto rounded-lg shadow-md object-cover"
                    />
                  ))}
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
              <div className="flex-1 rounded-lg overflow-hidden h-40 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.2441708431233!2d6.170542115765141!3d49.11930887931427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479514cbb7ca4203%3A0x4048f48c6e10b10!2sMetz!5e0!3m2!1sfr!2sfr!4v1683578012345!5m2!1sfr!2sfr"
                  width="100%"
                  height="160"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de Metz"
                ></iframe>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-[#0D1B2A] text-white py-4 px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-center gap-2 sm:gap-0">
            <span>
              © 2020 Le Plombier de Metz / Tous droits réservés - Réalisation Mikaelvery développeur à Montpellier
            </span>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/m5.gui57" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.png" alt="Instagram" className="w-5 h-5 hover:opacity-75 transition " />
              </a>
              <a href="https://www.facebook.com/guillaume.chary" target="_blank" rel="noopener noreferrer">
                <img src="/icons/facebook.png" alt="Facebook" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
