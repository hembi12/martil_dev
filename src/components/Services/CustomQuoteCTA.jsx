const CustomQuoteCTA = () => {
  const handleQuoteRequest = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message =
      "¡Hola! Me interesa solicitar una cotización personalizada para mi proyecto.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="text-center mt-6">
      {/* Título principal */}
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4 lg:mb-6">
        ¿No encuentras lo que necesitas?
      </h3>

      {/* Descripción */}
      <p className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-3xl mx-auto leading-relaxed px-4">
        Creamos soluciones personalizadas para proyectos únicos. Cuéntanos tu
        idea y te ayudamos a hacerla realidad.
      </p>

      {/* Botón principal */}
      <button
        onClick={handleQuoteRequest}
        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg lg:text-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
      >
        Cotización personalizada
      </button>
    </div>
  );
};

export default CustomQuoteCTA;
