import Header from './_components/Header'

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <main className="max-w-6xl mx-auto px-6 py-8">
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
              <div className="flex-1 bg-gray-100 rounded-lg h-40 flex items-center justify-center text-blue-900 font-bold text-lg">
                Metz
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-[#0D1B2A] text-white py-4 px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-center gap-2 sm:gap-0">
            <span>Website by mikaelvery</span>
            <span>impasse des fleurs, Metz</span>
          </div>
        </footer>
      </div>
    </>
  )
}