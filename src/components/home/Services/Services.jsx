import { useRef } from "react";
import { servicesData } from "./data/servicesData";
import ServiceCard from "./ServiceCard";
import CustomQuoteCTA from "./CustomQuoteCTA";

export default function Services() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      // Obtener el ancho de la tarjeta más el gap - ACTUALIZADO para incluir todos los breakpoints
      let cardWidth;
      if (window.innerWidth < 640) {
        cardWidth = 320 + 24; // w-80 + gap-6
      } else if (window.innerWidth < 1024) {
        cardWidth = 384 + 32; // w-96 + gap-8
      } else {
        cardWidth = 420 + 32; // w-[420px] + gap-8
      }
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      // Obtener el ancho de la tarjeta más el gap - ACTUALIZADO para incluir todos los breakpoints
      let cardWidth;
      if (window.innerWidth < 640) {
        cardWidth = 320 + 24; // w-80 + gap-6
      } else if (window.innerWidth < 1024) {
        cardWidth = 384 + 32; // w-96 + gap-8
      } else {
        cardWidth = 420 + 32; // w-[420px] + gap-8
      }
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section
      id="servicios"
      className="bg-gradient-to-b from-gray-900 to-gray-950 py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Estilos CSS para ocultar scrollbar */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header minimalista */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-100 mb-4 sm:mb-6 text-shadow-md">
            Soluciones{" "}
            <span className="underline underline-offset-4 decoration-blue-500">
              únicas
            </span>
          </h2>{" "}
        </div>

        {/* Scroll horizontal de servicios */}
        <div className="relative">
          {/* Contenedor con scroll horizontal */}
          <div className="overflow-x-auto scrollbar-hide pb-4" ref={scrollRef}>
            <div className="flex gap-6 sm:gap-8 min-w-max">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="flex-none w-80 sm:w-96 lg:w-[420px]"
                >
                  <ServiceCard service={service} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="flex justify-center mt-4 gap-2">
            <div className="text-sm text-neutral-100 flex items-center gap-2">
              <span>Desliza para ver más servicios</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              </div>
            </div>
          </div>

          {/* Flechas de navegación */}
          <div className="flex justify-center mt-4 gap-4">
            <button
              onClick={scrollLeft}
              className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-600 rounded-lg shadow-md transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label="Anterior"
            >
              <svg
                className="w-6 h-6 text-white"
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
              className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-600 rounded-lg shadow-md transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label="Siguiente"
            >
              <svg
                className="w-6 h-6 text-white"
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

        {/* Call to Action personalizado */}
        <CustomQuoteCTA />
      </div>
    </section>
  );
}
