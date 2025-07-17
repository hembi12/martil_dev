import { useRef } from 'react';

export default function Trust() {
  const scrollRef = useRef(null);

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
      score: "4.9",
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
            className="text-amber-500 text-shadow-xs text-lg sm:text-xl md:text-2xl"
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

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-neutral-50 to-neutral-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título opcional de la sección */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 text-shadow-xs">
            Confianza respaldada por nuestros de clientes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Nuestro compromiso con la excelencia se refleja en las valoraciones
            de nuestros clientes
          </p>
        </div>

        {/* Contenedor con scroll horizontal */}
        <div className="relative">
          {/* Scroll horizontal en móvil y tablet, grid en desktop */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Scroll horizontal para móvil/tablet */}
            <div className="lg:hidden overflow-x-auto scrollbar-hide" ref={scrollRef}>
              <div className="flex gap-6 sm:gap-8 pb-4 min-w-max">
                {ratings.map((item, index) => (
                  <div
                    key={index}
                    className="flex-none w-72 sm:w-80 flex flex-col items-center p-6 sm:p-8 bg-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {/* Logo/Nombre de la plataforma */}
                    <div className="text-xl sm:text-2xl font-semibold mb-2 flex items-center">
                      {item.name === "Credibleon" ? (
                        <div className="flex items-center">
                          <span className="font-light text-green-600 text-shadow-xs">
                            Credi
                          </span>
                          <span className="font-bold text-green-800 text-shadow-xs">
                            bleon
                          </span>
                        </div>
                      ) : (
                        <span className="text-green-600 text-shadow-xs">
                          {item.name}
                        </span>
                      )}
                    </div>

                    {/* Estrellas */}
                    <div className="mb-2">{renderStars(item.stars)}</div>

                    {/* Puntaje y número de reseñas */}
                    <div className="text-center">
                      <p className="text-2xl sm:text-3xl text-shadow-xs font-bold text-blue-600 mb-1">
                        {item.score}
                        <span className="text-lg sm:text-xl text-shadow-xs text-blue-900">
                          /5
                        </span>
                      </p>
                      <p className="text-sm sm:text-base text-blue-900">
                        {item.reviews} opiniones
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid para desktop */}
            <div className="hidden lg:contents">
              {ratings.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-8 bg-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                >
                  {/* Logo/Nombre de la plataforma */}
                  <div className="text-2xl lg:text-3xl font-semibold mb-2 h-12 flex items-center">
                    {item.name === "Credibleon" ? (
                      <div className="flex items-center">
                        <span className="font-light text-green-600 text-shadow-xs">
                          Credi
                        </span>
                        <span className="font-bold text-green-800 text-shadow-xs">
                          bleon
                        </span>
                      </div>
                    ) : (
                      <span className="text-green-600 text-shadow-xs">
                        {item.name}
                      </span>
                    )}
                  </div>

                  {/* Estrellas */}
                  <div className="mb-4">{renderStars(item.stars)}</div>

                  {/* Puntaje y número de reseñas */}
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600 mb-1">
                      {item.score}
                      <span className="text-xl text-blue-900">/5</span>
                    </p>
                    <p className="text-base text-blue-900">
                      {item.reviews} opiniones
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="flex justify-center mt-4 gap-2">
            <div className="text-sm text-neutral-500 flex items-center gap-2 lg:hidden">
              <span>Desliza para ver más reseñas</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
              </div>
            </div>
          </div>

          {/* Flechas de navegación */}
          <div className="flex justify-center mt-4 gap-4 lg:hidden">
            <button
              onClick={scrollLeft}
              className="flex items-center justify-center w-10 h-10 bg-white hover:bg-blue-50 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 border border-neutral-200"
              aria-label="Anterior"
            >
              <svg
                className="w-6 h-6 text-blue-600"
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
              className="flex items-center justify-center w-10 h-10 bg-white hover:bg-blue-50 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 border border-neutral-200"
              aria-label="Siguiente"
            >
              <svg
                className="w-6 h-6 text-blue-600"
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