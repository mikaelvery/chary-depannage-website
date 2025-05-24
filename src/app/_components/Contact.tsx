export default function Contact() {
    return(
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
    );
}