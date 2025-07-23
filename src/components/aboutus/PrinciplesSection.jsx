import { useRef, useState } from "react";
import { Target, Globe, Heart } from "lucide-react";

export default function PrinciplesSection() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const principles = [
    {
      id: "mission",
      title: "Nuestra Misión",
      icon: Target,
      iconColor: "text-red-50",
      bgColor: "bg-white",
      iconBgColor: "bg-gradient-to-br from-red-500 to-red-700 shadow-md",
      description:
        "Empoderar a empresas y emprendedores con sitios web profesionales, accesibles y de alta calidad que les permitan competir en el mundo digital sin importar su tamaño o presupuesto.",
    },
    {
      id: "vision",
      title: "Nuestra Visión",
      icon: Globe,
      iconColor: "text-teal-50",
      bgColor: "bg-white",
      iconBgColor: "bg-gradient-to-br from-teal-400 to-cyan-600 shadow-md",
      description:
        "Ser la agencia de desarrollo web líder en México, reconocida por nuestra excelencia técnica, innovación constante y el impacto positivo en el crecimiento de nuestros clientes.",
    },
    {
      id: "values",
      title: "Nuestros Valores",
      icon: Heart,
      iconColor: "text-purple-50",
      bgColor: "bg-white",
      iconBgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-700 shadow-md",
      description:
        "Transparencia en cada proceso, excelencia en cada entrega, innovación en cada solución y compromiso genuino con el éxito de cada cliente que confía en nosotros.",
    },
  ];

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerWidth = container.clientWidth;
      const cardWidth = window.innerWidth >= 640 ? 384 : 320; // w-96 en sm, w-80 en móvil
      const gap = window.innerWidth >= 640 ? 32 : 24; // gap-8 en sm, gap-6 en móvil
      const padding = 24; // px-6 = 24px de padding total
      
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
    const newIndex = Math.min(principles.length - 1, currentIndex + 1);
    scrollToCard(newIndex);
  };

  return (
    <section className="bg-gradient-to-br from-neutral-100 to-neutral-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 text-shadow-sm">
            Nuestros Principios
          </h2>
        </div>

        {/* Contenedor con scroll horizontal */}
        <div className="relative">
          {/* Scroll horizontal en móvil y tablet, grid en desktop */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Scroll horizontal para móvil/tablet */}
            <div
              className="lg:hidden overflow-x-auto scrollbar-hide py-2"
              ref={scrollRef}
            >
              <div className="flex gap-6 sm:gap-8 pb-4 pt-2 min-w-max px-6">
                {principles.map((principle, index) => {
                  const IconComponent = principle.icon;
                  return (
                    <div
                      key={principle.id}
                      className={`flex-none w-80 sm:w-96 text-center ${principle.bgColor} rounded-lg p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 transform ${
                        currentIndex === index ? 'scale-105' : ''
                      }`}
                    >
                      {/* Ícono */}
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 ${principle.iconBgColor} rounded-lg flex items-center justify-center mx-auto mb-6`}
                      >
                        <IconComponent
                          className={`w-10 h-10 sm:w-12 sm:h-12 ${principle.iconColor}`}
                        />
                      </div>

                      {/* Título */}
                      <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-4 sm:mb-6">
                        {principle.title}
                      </h3>

                      {/* Descripción */}
                      <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                        {principle.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Grid para desktop */}
            <div className="hidden lg:contents">
              {principles.map((principle) => {
                const IconComponent = principle.icon;
                return (
                  <div
                    key={principle.id}
                    className={`text-center ${principle.bgColor} rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 transform`}
                  >
                    {/* Ícono */}
                    <div
                      className={`md:w-14 md:h-14 ${principle.iconBgColor} rounded-lg flex items-center justify-center mx-auto mb-6`}
                    >
                      <IconComponent
                        className={`md:w-10 md:h-10 ${principle.iconColor}`}
                      />
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                      {principle.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-neutral-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Indicadores de posición - MEJORADO */}
          <div className="flex justify-center mt-4 gap-2">
            <div className="text-sm text-neutral-500 flex items-center gap-2 lg:hidden">
              <span>Desliza para ver más principios</span>
              <div className="flex gap-1">
                {principles.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-lg transition-colors duration-300 ${
                      currentIndex === index ? 'bg-blue-500' : 'bg-blue-200'
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
              className={`flex items-center justify-center w-10 h-10 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 border border-neutral-200 cursor-pointer ${
                currentIndex === 0 
                  ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed' 
                  : 'bg-white hover:bg-blue-50 text-blue-600'
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
              disabled={currentIndex === principles.length - 1}
              className={`flex items-center justify-center w-10 h-10 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 border border-neutral-200 cursor-pointer ${
                currentIndex === principles.length - 1
                  ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed' 
                  : 'bg-white hover:bg-blue-50 text-blue-600'
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