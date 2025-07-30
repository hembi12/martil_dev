import { FaWhatsapp } from 'react-icons/fa';

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
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6 text-shadow-sm">
        ¿No encuentras lo que necesitas?
      </h3>
      
      {/* Botón principal con icono de WhatsApp */}
      <button
        onClick={handleQuoteRequest}
        className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg lg:text-xl hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
      >
        <FaWhatsapp className="text-xl" />
        Cotización personalizada
      </button>

      {/* Indicador adicional sutil para móvil */}
      <p className="text-xs sm:text-sm font-medium text-neutral-200 mt-3 sm:mt-4 flex items-center justify-center gap-1">
        Respuesta inmediata por WhatsApp
      </p>
    </div>
  );
};

export default CustomQuoteCTA;