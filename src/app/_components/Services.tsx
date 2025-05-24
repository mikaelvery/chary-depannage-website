export default function Services() {
  const services = [
    {
      iconSrc: "/leak.png",
      title: "Réparation de fuite",
    },
    {
      iconSrc: "/cleaning.png",
      title: "Débouchage",
    },
    {
      iconSrc: "/water-heater.png",
      title: "Remplacement chauffe-eau",
    },
    {
      iconSrc: "/icons/door.png",
      title: "Ouverture de porte",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-[#C27803] uppercase tracking-widest font-medium mb-2">
          Chary Dépannage
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10">
          Nos services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#FFF6E5] flex items-center justify-center shadow-inner">
                <img
                  src={service.iconSrc}
                  alt={service.title}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h4 className="text-[#0D1B2A] font-semibold text-base sm:text-lg">
                {service.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
