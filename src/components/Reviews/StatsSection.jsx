import { statsData } from "./data/reviewsData";

const StatsSection = () => {
  const handleStartProject = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message =
      "¡Hola! He visto sus estadísticas y casos de éxito, y me convencieron completamente.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Estadísticas - Grid optimizado para mejor lectura */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center group">
            {/* Números principales - tamaños más balanceados */}
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-600 mb-2 sm:mb-3 md:mb-4 group-hover:scale-105 transition-all duration-300 ease-out leading-none">
              {stat.value}
            </div>

            {/* Labels - mejor jerarquía tipográfica */}
            <div className="text-neutral-700 text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-snug px-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Final - mejorado para móviles */}
      <div className="text-center mt-10 sm:mt-12 lg:mt-16 px-4 sm:px-6">
        {/* Título principal - más legible en móvil */}
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 lg:mb-6">
          ¿Listo para ser el próximo caso de éxito?
        </h3>

        {/* Botón CTA - mejor usabilidad móvil */}
        <button
          onClick={handleStartProject}
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base lg:text-lg hover:bg-blue-700 focus:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg min-h-[44px] min-w-[160px] cursor-pointer"
          role="button"
          tabIndex={0}
        >
          <span>Comenzar mi proyecto</span>
        </button>

        {/* Indicador adicional sutil para móvil */}
        <p className="text-xs sm:text-sm text-neutral-500 mt-3 sm:mt-4">
          💬 Respuesta inmediata por WhatsApp
        </p>
      </div>
    </>
  );
};

export default StatsSection;
