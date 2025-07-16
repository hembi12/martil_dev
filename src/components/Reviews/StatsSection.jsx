import { statsData } from './data/reviewsData';

const StatsSection = () => {
  return (
    <>
      {/* Estadísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-3 sm:mb-4 text-shadow-lg group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </div>
            <div className="text-neutral-800 text-sm sm:text-base md:text-lg font-semibold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Final */}
      <div className="text-center mt-12">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">
          ¿Listo para ser el próximo caso de éxito?
        </h3>
        <p className="text-neutral-600 text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto">
          Únete a más de 100 clientes que han transformado sus negocios con
          nuestras soluciones web
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
          Comenzar mi proyecto
        </button>
      </div>
    </>
  );
};

export default StatsSection;