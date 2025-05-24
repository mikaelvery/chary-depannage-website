export default function CompanyDetails() {
  return (
    <section className="bg-gradient-to-b from-[#0a1525] to-[#0d1b2a] text-white py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-74 text-xs md:text-sm relative">

        {/* Colonne 1 : Horaires */}
        <div className="md:ml-40 relative z-10">
          <h4 className="font-semibold text-lg mb-5 tracking-wide">HORAIRES</h4>
          <ul className="space-y-2">
            {[
              { jour: 'Lundi', horaire: '9h00 - 18h' },
              { jour: 'Mardi', horaire: '9h00 - 18h' },
              { jour: 'Mercredi', horaire: '9h00 - 18h' },
              { jour: 'Jeudi', horaire: '9h00 - 18h' },
              { jour: 'Vendredi', horaire: '9h00 - 18h' },
              { jour: 'Samedi', horaire: 'Fermé' },
              { jour: 'Dimanche', horaire: 'Fermé' }
            ].map(({ jour, horaire }) => (
              <li key={jour} className="flex justify-between border-b border-gray-700 pb-1">
                <span className="font-medium">{jour} :</span>
                <span className="text-gray-400">{horaire}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Séparateur vertical visible sur desktop */}
        <div className="hidden md:block absolute top-10 bottom-10 left-1/2 border-l border-gray-700 opacity-50"></div>

        {/* Colonne 2 : En pratique + Nous suivre */}
        <div className="flex flex-col gap-8 relative z-10 md:mr-40">
          {/* En pratique */}
          <div>
            <h4 className="font-semibold text-lg mb-5 tracking-wide">EN PRATIQUE</h4>
            <ul className="space-y-2">
              {[
                { label: 'Confidentialité', href: '#' },
                { label: 'Mentions légales', href: '#' },
                { label: 'C.G.V.', href: '#' },
                { label: 'Contact', href: '#contact' }
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nous suivre */}
          <div>
            <h4 className="font-semibold text-lg mb-5 tracking-wide">NOUS SUIVRE</h4>
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/guillaume.chary"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-110"
              >
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  className="w-8 h-8 drop-shadow-lg"
                />
              </a>
              <div className="text-2xl font-light text-white select-none opacity-60">|</div>
              <a
                href="https://www.instagram.com/m5.gui57"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-110"
              >
                <img
                  src="/icons/instagram.png"
                  alt="Instagram"
                  className="w-8 h-8 drop-shadow-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
