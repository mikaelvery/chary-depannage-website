export default function About() {
  return (
    <section
      className="bg-[#F4F4F5] py-20 px-8 sm:px-12 text-center"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="600"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-12 sm:p-16">
        <p
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="700"
          className="text-sm sm:text-base text-[#BD9F6E] font-semibold uppercase tracking-widest mb-4"
        >
          G&G intervention • Metz • Depuis 2025
        </p>

        <h2
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="700"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 uppercase tracking-tight leading-tight"
        >
          Au service du client
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="700"
          className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
          style={{ lineHeight: 1.75 }}
        >
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
