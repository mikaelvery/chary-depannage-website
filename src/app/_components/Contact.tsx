import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import GoogleMapWithCircle from './GoogleMapWithCircle';

export default function Contact() {
  return (
    <section
      data-aos="slide-right"
      className="bg-white/90 py-16 px-6 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        {/* Bloc d'infos contact stylisé */}
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-extrabold tracking-wide text-[#0D1B2A]">
            Nous contacter
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Une question, un besoin urgent ou une demande de devis ?
            <br /> Notre équipe est à votre écoute.
          </p>

          <div className="space-y-3 text-left max-w-xs mx-auto md:mx-0">
            <div className="flex items-center gap-3 text-gray-800">
              <PhoneIcon className="w-5 h-5 text-[#BD9F6E]" />
              <a href="tel:+330760432122" className="hover:underline">
                +33 07 60 43 21 22
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-800">
              <EnvelopeIcon className="w-5 h-5 text-[#BD9F6E]" />
              <a href="mailto:gg.intervention@gmail.com" className="hover:underline">
                gg.intervention@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Carte avec cercle (My Maps iframe) */}
        <div className="mt-10 md:mt-0 w-full max-w-sm mx-auto md:mx-0 rounded-xl shadow-lg overflow-hidden">
          <p className="text-[#0D1B2A] font-semibold text-base text-center mb-4">
            Zone d'intervention autour de Metz (35 km)
          </p>
          <GoogleMapWithCircle />
        </div>   
      </div>
    </section>
  );
}
