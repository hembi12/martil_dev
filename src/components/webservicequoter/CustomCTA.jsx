import { FaWhatsapp } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const CustomCTA = ({
  title = "¿No encuentras lo que necesitas?",
  description = "Creamos soluciones personalizadas para proyectos únicos. Cuéntanos tu idea y te ayudamos a hacerla realidad.",
  buttonText = "Cotización personalizada",
  whatsappMessage = "¡Hola! Me interesa solicitar una cotización personalizada para mi proyecto.",
  buttonColor = "green",
  onClick,
  className = ""
}) => {
  const handleDefaultAction = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleClick = onClick || handleDefaultAction;

  // Clases de color dinámicas para el botón
  const getButtonClasses = () => {
    const baseClasses = "inline-flex items-center gap-2 w-auto sm:w-auto px-6 py-3 text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg transition duration-300 shadow-md hover:shadow-lg cursor-pointer";
    
    const colorVariants = {
      blue: "bg-blue-600 hover:bg-blue-700",
      green: "bg-green-600 hover:bg-green-700",
      red: "bg-red-600 hover:bg-red-700",
      purple: "bg-purple-600 hover:bg-purple-700",
      orange: "bg-orange-600 hover:bg-orange-700",
      gray: "bg-gray-600 hover:bg-gray-700"
    };

    return `${baseClasses} ${colorVariants[buttonColor] || colorVariants.blue}`;
  };

  return (
    <div className={`text-center mt-6 ${className}`}>
      {/* Título principal */}
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 lg:mb-6 text-shadow-sm">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl mb-4 max-w-3xl mx-auto leading-relaxed px-4">
        {description}
      </p>

      {/* Botón principal */}
      <button
        onClick={handleClick}
        className={getButtonClasses()}
      >
        <FaWhatsapp className="w-5 h-5 text-white" />
        {buttonText}
      </button>

      {/* Footer con enlace de email */}
      <p className="text-xs sm:text-sm font-medium text-neutral-600 mt-3 sm:mt-4 flex items-center justify-center gap-2">
        También por{" "}
        <a 
          href="mailto:hectormartilb@gmail.com"
          className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 inline-flex items-center gap-1"
        >
          <Mail className="w-4 h-4" />
          support@martil.dev
        </a>
      </p>
    </div>
  );
};

export default CustomCTA;