import { useRef } from "react";
import { CheckCircle, Clock } from "lucide-react";
import { workSteps } from "./data/workData";
import WorkCTA from "./WorkCTA";

const WorkProcess = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      // Obtener el ancho de la tarjeta más el gap
      const cardWidth = window.innerWidth < 640 ? 320 + 24 : 384 + 32; // w-80 + gap-6 o w-96 + gap-8
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      // Obtener el ancho de la tarjeta más el gap
      const cardWidth = window.innerWidth < 640 ? 320 + 24 : 384 + 32; // w-80 + gap-6 o w-96 + gap-8
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };
  return (
    <section
      id="work-process"
      className="bg-gradient-to-b from-neutral-50 to-neutral-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 text-shadow-sm">
            Proceso de trabajo
          </h2>
        </div>

        {/* Scroll horizontal de pasos */}
        <div className="relative">
          {/* Contenedor con scroll horizontal */}
          <div className="overflow-x-auto scrollbar-hide pb-4" ref={scrollRef}>
            <div className="flex gap-6 sm:gap-8 min-w-max">
              {workSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.id}
                    className="flex-none w-80 sm:w-96 lg:w-[420px]"
                  >
                    <div
                      className={`bg-white shadow-md hover:shadow-lg rounded-lg p-6 sm:p-8 text-left transition-all duration-300 flex flex-col justify-between min-h-[500px] sm:min-h-[580px] md:min-h-[600px] ${
                        index === 1
                          ? "animate-delay-1"
                          : index === 2
                          ? "animate-delay-2"
                          : index === 3
                          ? "animate-delay-3"
                          : index === 4
                          ? "animate-delay-4"
                          : index === 5
                          ? "animate-delay-5"
                          : ""
                      }`}
                    >
                      <div className="flex-grow">
                        {/* Header de la tarjeta */}
                        <div className="flex items-start gap-3 sm:gap-4 mb-4">
                          <div
                            className={`flex-shrink-0 p-2 sm:p-3 ${step.gradientColor} rounded-lg shadow-xs`}
                          >
                            <Icon
                              className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${step.iconColor}`}
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-800 text-shadow-sm leading-tight">
                              {step.title}
                            </h3>
                            {/* Número del paso - MEJORADO */}
                            <div className="flex items-center gap-2 text-neutral-500 mt-1">
                              <span className="text-xl sm:text-2xl font-bold text-neutral-200 text-shadow-sm">
                                {String(step.id).padStart(2, "0")}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Duración - MEJORADA */}
                        <div className="mb-4 sm:mb-6">
                          <div className="flex items-center gap-2 text-green-600">
                            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                            <span className="text-xs sm:text-sm md:text-base font-medium">
                              Tiempo estimado: {step.duration}
                            </span>
                          </div>
                        </div>

                        {/* Descripción */}
                        <p className="text-neutral-600 mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                          {step.description}
                        </p>

                        {/* Lista de características - MEJORADA */}
                        <div className="space-y-3 mb-4">
                          <h4 className="font-semibold text-neutral-900 text-xs sm:text-sm md:text-base">
                            Qué incluye este paso:
                          </h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {step.details.map((detail, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 sm:gap-3 text-neutral-700 text-xs sm:text-sm md:text-base"
                              >
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Texto adicional */}
                        <div className="mb-4">
                          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                            Cada paso está diseñado para garantizar la calidad y
                            satisfacción
                          </p>
                        </div>
                      </div>

                      {/* Badge del paso - MEJORADO */}
                      <div className="mt-auto">
                        <div
                          className={`w-full px-4 py-3 ${step.bgColor} ${step.color} font-semibold rounded-lg text-xs sm:text-sm md:text-base text-center text-shadow-sm border-2 ${step.borderColor}`}
                        >
                          Paso {step.id} de {workSteps.length}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="flex justify-center mt-4 gap-2">
            <div className="text-sm text-neutral-500 flex items-center gap-2">
              <span>Desliza para ver los pasos</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
              </div>
            </div>
          </div>

          {/* Flechas de navegación */}
          <div className="flex justify-center mt-4 gap-4">
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
};

export default WorkProcess;