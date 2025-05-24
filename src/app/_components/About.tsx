export default function About() {
  return (
    <section className="bg-[#F4F4F5] py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm sm:text-base text-[#C27803] font-semibold uppercase tracking-widest mb-2">
          Chary Dépannage • Metz • Depuis 2025
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 uppercase tracking-tight leading-tight">
          Au service du client
        </h2>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Guillaume Chary intervient depuis 2020 pour vos urgences de{" "}
          <strong className="text-black font-semibold">plomberie</strong>,{" "}
          <strong className="text-black font-semibold">chauffagerie</strong> et{" "}
          <strong className="text-black font-semibold">serrurerie</strong> à Metz et dans les environs.
          Disponible 5j/7, il garantit un service rapide, fiable et de qualité,
          pour les particuliers comme les professionnels.
        </p>
      </div>
    </section>
  );
}
