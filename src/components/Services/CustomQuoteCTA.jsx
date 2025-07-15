const CustomQuoteCTA = () => {
    const handleQuoteRequest = () => {
      // Aquí puedes agregar la lógica para manejar la solicitud de cotización
      // Por ejemplo: abrir un modal, redirigir a un formulario, etc.
      console.log("Solicitud de cotización personalizada");
      
      // Ejemplo de acciones que podrías implementar:
      // - Abrir un modal con formulario
      // - Redirigir a una página de contacto
      // - Scroll hacia un formulario de contacto
      // - Abrir WhatsApp o email
      
      // Scroll hacia sección de contacto (si existe)
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };
  
    return (
      <div className="text-center mt-6">
        {/* Título principal */}
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4 lg:mb-6">
          ¿No encuentras lo que necesitas?
        </h3>
        
        {/* Descripción */}
        <p className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          Creamos soluciones personalizadas para proyectos únicos. 
          Cuéntanos tu idea y te ayudamos a hacerla realidad.
        </p>
        
        {/* Botón principal */}
        <button 
          onClick={handleQuoteRequest}
          className="inline-block px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 bg-blue-600 text-white font-semibold rounded-full text-sm sm:text-base md:text-lg lg:text-xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Cotización personalizada
        </button>
      </div>
    );
  };
  
  export default CustomQuoteCTA;