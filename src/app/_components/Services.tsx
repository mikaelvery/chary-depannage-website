'use client';
import { useEffect } from 'react';

export default function Services() {
  const services = [
    {
      iconSrc: '/leak.png',
      title: 'Réparation de fuite',
    },
    {
      iconSrc: '/cleaning.png',
      title: 'Débouchage',
    },
    {
      iconSrc: '/water-heater.png',
      title: 'Remplacement chauffe-eau',
    },
    {
      iconSrc: '/icons/door.png',
      title: 'Ouverture de porte',
    },
  ];

  const handleCardClick = (title: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="bg-white/80 py-20 px-4 sm:px-6 text-center"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          data-aos="zoom-in"
          data-aos-delay="250"
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 leading-tight"
        >
          Nos services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(service.title)}
              data-aos="zoom-in-up"
              data-aos-delay={400 + index * 150}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
            >
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-[#BD9F6E]/40 flex items-center justify-center shadow-inner group-hover:bg-[#bd9f6e]/70 transition">
                <img
                  src={service.iconSrc}
                  alt={service.title}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h4 className="text-[#0D1B2A] font-semibold text-base sm:text-lg group-hover:text-[#BD9F6E] transition">
                {service.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
