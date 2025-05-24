import CallButton from "../_components/CallButton";


export default function Hero() {
    return(
        <section className="bg-[#0D1B2A] text-white py-14 px-6 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center text-center md:text-left">
              <div className="flex-1 z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C27803] to-[#f8b400]">
                    INTERVENTION RAPIDE
                  </span><br /> À METZ ET SES ALENTOURS
                </h1>
                <p className="text-base sm:text-lg mb-6 max-w-md mx-auto md:mx-0 leading-relaxed">
                  Réparation de fuite, débouchage, chauffage, serrurerie et autres services d'urgence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="bg-[#C27803] hover:bg-[#f8b400] text-white font-semibold px-6 py-3 rounded-full text-base shadow-lg transition">
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
    );
} 