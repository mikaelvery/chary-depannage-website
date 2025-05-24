export default function Services() {
    return(
        <section className="bg-white py-12 px-4 sm:px-6 text-center">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 sm:mb-12">NOS SERVICES</h2>
         
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                {[
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
                ].map((service) => (
                  <div
                    key={service.title}
                    className="bg-[#F9FAFB] border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={service.iconSrc}
                      alt={service.title}
                      className="mx-auto mb-4 h-16 w-16 sm:h-20 sm:w-20 object-contain"
                      style={{ filter: "invert(49%) sepia(94%) saturate(3707%) hue-rotate(10deg) brightness(95%) contrast(90%)" }}
                    />
                    <h4 className="text-blue-900 font-semibold text-base sm:text-lg">{service.title}</h4>
                  </div>
                ))}
              </div>
            </div>
        </section>
    );
}