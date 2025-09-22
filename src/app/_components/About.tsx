export default function About() {
  return (
    <section
      className="bg-[#F4F4F5] py-16 px-6 text-center"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="600"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="max-w-4xl mx-auto">
        <p
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="700"
          className="text-sm sm:text-base text-[#BD9F6E] font-semibold uppercase tracking-widest mb-2"
        >
          G&G Intervention • Metz • Depuis 2025
        </p>

        <h2
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 uppercase tracking-tight leading-tight"
        >
          Au service du client
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="700"
          className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
        >
          Guillaume Chary intervient depuis 2019 pour vos urgences de{" "}
          <strong className="text-black font-semibold">plomberie</strong>,{" "}
          <strong className="text-black font-semibold">débouchage</strong>,{" "}
          <strong className="text-black font-semibold">serrurerie</strong>,{" "}
          <strong className="text-black font-semibold">petit vitrage</strong>{" "}
          ainsi que le{" "}
          <strong className="text-black font-semibold">montage et la pose de meubles</strong>{" "}
          à Metz et dans les environs. Disponible 6j/7, il garantit un service rapide,
          fiable et de qualité, pour les particuliers comme pour les professionnels.
        </p>
      </div>
    </section>
  );
}
