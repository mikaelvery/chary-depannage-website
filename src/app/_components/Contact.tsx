import { PhoneIcon } from '@heroicons/react/24/solid'

export default function Contact() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        {/* Texte contact */}
        <div className="flex-1">
            <h3 className="text-3xl font-extrabold text-blue-900 mb-4 tracking-wide">
                Contactez-nous
            </h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                Besoin d’une intervention rapide et fiable ? <br />
                Appelez-nous ou envoyez un message, nous sommes là pour vous aider.
            </p>
            <a
                href="tel:+33612345678"
                className="inline-flex items-center bg-[#C27803] hover:bg-[#f8b400] text-white font-semibold px-6 py-3 rounded-full text-base shadow-lg transition"
            >
            <PhoneIcon className="w-5 h-5 mr-2" />
                Appeler maintenant
            </a>
        </div>

        {/* Carte */}
        <div className="flex-1 w-full rounded-xl overflow-hidden shadow-lg">
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
  );
}
