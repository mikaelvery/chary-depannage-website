export default function RealisationsSection() {
    return(
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
    );
}