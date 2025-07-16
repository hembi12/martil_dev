import { servicesData } from "./data/servicesData";
import ServiceCard from "./ServiceCard";
import CustomQuoteCTA from "./CustomQuoteCTA";

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-gradient-to-b from-neutral-100 to-neutral-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
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
        {/* Section Header integrado */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 text-shadow-xs leading-tight">
            Soluciones para cada tipo de cliente
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos sitios web adaptados a diferentes sectores, necesidades y
            objetivos.
          </p>
        </div>

        {/* Scroll horizontal de servicios */}
        <div className="relative">
          {/* Contenedor con scroll horizontal */}
          <div className="overflow-x-auto scrollbar-hide pb-4">
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
            <div className="text-sm text-neutral-500 flex items-center gap-2">
              <span>Desliza para ver más servicios</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action personalizado */}
        <CustomQuoteCTA />
      </div>
    </section>
  );
}
