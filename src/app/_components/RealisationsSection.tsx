export default function RealisationsSection() {
  const images = ["/real1.jpg", "/real2.jpg", "/real3.jpg", "/real4.jpg"];

  return (
    <section className="bg-gray-100/80 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Images de réalisations */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4 sm:gap-6">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Réalisation G&G Intervention ${i + 1}`}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="w-full h-40 sm:h-56 rounded-xl shadow-lg object-cover hover:brightness-110 hover:scale-105 transition duration-300 cursor-pointer"
            />
          ))}

          <div className="col-span-2 flex justify-center mt-2 sm:mt-4">
            <a
              href="/realisations"
              className="bg-[#BD9F6E] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#cba870] transition text-sm"
            >
              Voir toutes nos réalisations
            </a>
          </div>
        </div>

        {/* Bloc Réseaux Sociaux */}
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center md:pl-6 text-center md:text-left"
        >
          <h3 className="text-[#0D1B2A] font-extrabold uppercase mb-3 text-2xl tracking-widest">
            Rejoignez-nous
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed text-base">
            Suivez nos interventions, promotions et actualités sur nos réseaux sociaux.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/ggintervention"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-xl shadow px-4 py-3 hover:bg-gray-200 transition justify-center
                        w-full max-w-[250px] mx-auto sm:mx-0 sm:w-auto"
            >
              <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-800">Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ggintervention"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-xl shadow px-4 py-3 hover:bg-gray-200 transition justify-center
                        w-full max-w-[250px] mx-auto sm:mx-0 sm:w-auto"
            >
              <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-800">Instagram</span>
            </a>

            {/* Snapchat */}
            <a
              href="https://www.snapchat.com/add/ggintervention"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-xl shadow px-4 py-3 hover:bg-gray-200 transition justify-center
                        w-full max-w-[250px] mx-auto sm:mx-0 sm:w-auto"
            >
              <img src="/icons/snapchat.svg" alt="Snapchat" className="w-6 h-6" />
              <span className="text-sm font-medium text-gray-800">Snapchat</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
