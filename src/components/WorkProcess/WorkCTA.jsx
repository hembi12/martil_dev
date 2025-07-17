const WorkCTA = () => {
  return (
    <div className="text-center mt-12 sm:mt-16">
      <div className="max-w-lg mx-auto">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4 lg:mb-6">
          ¿Comenzamos tu proyecto?
        </h3>
        <p className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-3xl mx-auto leading-relaxed px-4">
          Inicia el proceso hoy y ten tu sitio web listo en tiempo récord.
        </p>
        <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
          Comenzar ahora
        </button>
      </div>
    </div>
  );
};

export default WorkCTA;
