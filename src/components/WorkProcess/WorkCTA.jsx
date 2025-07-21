const WorkCTA = () => {
  const handleStartProject = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message = "¡Hola! Estoy listo para comenzar mi proyecto de sitio web. Me gustaría iniciar el proceso y conocer los próximos pasos.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="text-center mt-12 sm:mt-16">
      <div className="max-w-lg mx-auto">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4 lg:mb-6">
          ¿Comenzamos tu proyecto?
        </h3>
        {/* Descripción - MEJORADA */}
        <p className="text-neutral-600 text-sm sm:text-base md:text-lg mb-4 max-w-3xl mx-auto leading-relaxed px-4">
          Inicia el proceso hoy y ten tu sitio web listo en tiempo récord.
        </p>
        {/* Botón CTA - MEJORADO */}
        <button 
          onClick={handleStartProject}
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
              Comenzar ahora
        </button>
      </div>
    </div>
  );
};

export default WorkCTA;