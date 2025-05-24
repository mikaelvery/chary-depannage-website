export default function CompanyDetails() {
    return (  
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
    );
}
