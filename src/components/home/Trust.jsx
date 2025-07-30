import { useRef, useState } from "react";

export default function Trust() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const ratings = [
    {
      name: "Reviewora",
      score: "4.7",
      reviews: "37",
      stars: 4.5,
      logo: "/trustpilot-logo.svg", // o usa texto si no tienes SVG
    },
    {
      name: "Credibleon",
      score: "4.8",
      reviews: "82",
      stars: 5,
      logo: "/hostadvice-logo.svg",
    },
    {
      name: "Trustlytic",
      score: "4.7",
      reviews: "14",
      stars: 4.5,
      logo: "/google-logo.svg",
    },
  ];

  const renderStars = (value) => {
    const fullStars = Math.floor(value);
    const halfStar = value % 1 >= 0.5;

    return (
      <div className="flex justify-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <span
            key={i}
            className="text-amber-500 text-shadow-md text-lg sm:text-xl md:text-2xl"
          >
            ★
          </span>
        ))}
        {halfStar && (
          <span className="text-amber-500 text-lg sm:text-xl md:text-2xl">
            ☆
          </span>
        )}
      </div>
    );
  };

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerWidth = container.clientWidth;
      const cardWidth = window.innerWidth >= 640 ? 320 : 288; // w-80 en sm, w-72 en móvil
      const gap = window.innerWidth >= 640 ? 32 : 24; // gap-8 en sm, gap-6 en móvil
      const padding = 16; // px-4 = 16px de padding total
      
      // Calcular la posición para centrar la tarjeta considerando el padding
      const cardPosition = (cardWidth + gap) * index + padding;
      const scrollPosition = cardPosition - (containerWidth / 2) + (cardWidth / 2);
      
      container.scrollTo({
        left: Math.max(0, Math.min(scrollPosition, container.scrollWidth - containerWidth)),
        behavior: "smooth"
      });
      
      setCurrentIndex(index);
    }
  };

  const scrollLeft = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToCard(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(ratings.length - 1, currentIndex + 1);
    scrollToCard(newIndex);
  };

  return (
    <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título opcional de la sección */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-shadow-md">
            Confianza respaldada por nuestros clientes
          </h2>
        </div>

        {/* Contenedor con scroll horizontal */}
        <div className="relative">
          {/* Scroll horizontal en móvil y tablet, grid en desktop */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Scroll horizontal para móvil/tablet */}
            <div
              className="lg:hidden overflow-x-auto scrollbar-hide"
              ref={scrollRef}
            >
              <div className="flex gap-6 sm:gap-8 pb-4 pt-2 min-w-max px-6">
                {ratings.map((item, index) => (
                  <div
                    key={index}
                    className={`flex-none w-72 sm:w-80 flex flex-col items-center p-6 sm:p-8 bg-neutral-100 hover:bg-neutral-100 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform ${
                      currentIndex === index ? 'scale-105' : ''
                    }`}
                  >
                    {/* Logo/Nombre de la plataforma - MEJORADO */}
                    <div className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 flex items-center">
                      {item.name === "Credibleon" ? (
                        <div className="flex items-center">
                          <span className="font-light text-green-600 text-shadow-md">
                            Credi
                          </span>
                          <span className="font-bold text-green-700 text-shadow-md">
                            bleon
                          </span>
                        </div>
                      ) : (
                        <span className="text-green-600 text-shadow-md">
                          {item.name}
                        </span>
                      )}
                    </div>

                    {/* Estrellas */}
                    <div className="mb-2">{renderStars(item.stars)}</div>

                    {/* Puntaje y número de reseñas - MEJORADO */}
                    <div className="text-center">
                      <p className="text-2xl sm:text-3xl text-shadow-md font-bold text-green-600 mb-1">
                        {item.score}
                        <span className="text-base sm:text-lg lg:text-xl text-shadow-md text-green-800">
                          /5
                        </span>
                      </p>
                      <p className="text-sm sm:text-base font-medium text-blue-500">
                        {item.reviews} opiniones
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid para desktop - MEJORADO */}
            <div className="hidden lg:contents">
              {ratings.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-8 bg-white hover:bg-neutral-100 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {/* Logo/Nombre de la plataforma */}
                  <div className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 h-12 flex items-center">
                    {item.name === "Credibleon" ? (
                      <div className="flex items-center">
                        <span className="font-light text-green-600 text-shadow-md">
                          Credi
                        </span>
                        <span className="font-bold text-green-700 text-shadow-md">
                          bleon
                        </span>
                      </div>
                    ) : (
                      <span className="text-green-600 text-shadow-md">
                        {item.name}
                      </span>
                    )}
                  </div>

                  {/* Estrellas */}
                  <div className="mb-2">{renderStars(item.stars)}</div>

                  {/* Puntaje y número de reseñas */}
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">
                      {item.score}
                      <span className="text-base sm:text-lg lg:text-xl text-green-800">
                        /5
                      </span>
                    </p>
                    <p className="text-sm sm:text-base text-blue-500">
                      {item.reviews} opiniones
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de posición - MEJORADO */}
          <div className="flex justify-center mt-4 gap-2">
            <div className="text-sm text-neutral-200 flex items-center gap-2 lg:hidden">
              <span>Desliza para ver más reseñas</span>
              <div className="flex gap-1">
                {ratings.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-lg transition-colors duration-300 ${
                      currentIndex === index ? 'bg-white' : 'bg-blue-500'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Flechas de navegación */}
          <div className="flex justify-center mt-4 gap-4 lg:hidden">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`flex items-center justify-center w-10 h-10 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 border ${
                currentIndex === 0 
                  ? 'bg-transparent text-white cursor-not-allowed border-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-600'
              }`}
              aria-label="Anterior"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={scrollRight}
              disabled={currentIndex === ratings.length - 1}
              className={`flex items-center justify-center w-10 h-10 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 border ${
                currentIndex === ratings.length - 1
                ? 'bg-transparent text-white cursor-not-allowed border-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-600'
              }`}
              aria-label="Siguiente"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}