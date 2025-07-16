import { CheckCircle, Clock } from "lucide-react";
import { useState } from "react";
import { iconMap } from "./data/servicesData";

const ServiceCard = ({ service, index }) => {
  const [tooltip, setTooltip] = useState(null);

  const handleMouseEnter = (iconIndex) => {
    setTooltip(iconIndex);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  // Colores para cada icono principal según el índice
  const getIconColor = (index) => {
    const colors = [
      "text-yellow-50", // Índice 0
      "text-green-50", // Índice 1
      "text-purple-50", // Índice 2
      "text-orange-50", // Índice 3
      "text-red-50", // Índice 4
      "text-teal-50", // Índice 5
    ];
    return colors[index % colors.length];
  };

  // Colores de fondo correspondientes para cada icono
  const getBackgroundColor = (index) => {
    const backgrounds = [
      "bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-xs", // Índice 0
      "bg-gradient-to-br from-green-500 to-emerald-700 shadow-xs", // Índice 1
      "bg-gradient-to-br from-purple-500 to-fuchsia-700 shadow-xs", // Índice 2
      "bg-gradient-to-br from-orange-400 to-amber-600 shadow-xs", // Índice 3
      "bg-gradient-to-br from-red-500 to-rose-700 shadow-xs", // Índice 4
      "bg-gradient-to-br from-teal-400 to-cyan-600 shadow-xs", // Índice 5
    ];
    return backgrounds[index % backgrounds.length];
  };

  // Función para renderizar iconos desde el mapa
  const renderIcon = (iconName, className = "w-4 h-4") => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  // Renderizar el icono principal con clases responsivas y color específico
  const renderMainIcon = (iconName) => {
    const colorClass = getIconColor(index);
    return renderIcon(
      iconName,
      `w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${colorClass}`
    );
  };

  return (
    <div
      className={`bg-white shadow-md hover:shadow-lg rounded-lg p-6 sm:p-8 text-left card-hover flex flex-col justify-between min-h-[550px] sm:min-h-[580px] md:min-h-[660px] animate-fade-in-up ${
        index === 1
          ? "animate-delay-1"
          : index === 2
          ? "animate-delay-2"
          : index === 3
          ? "animate-delay-3"
          : index === 4
          ? "animate-delay-4"
          : index === 5
          ? "animate-delay-5"
          : ""
      }`}
    >
      <div className="flex-grow">
        {/* Header de la tarjeta */}
        <div className="flex items-start gap-3 sm:gap-4 mb-4">
          <div
            className={`flex-shrink-0 p-2 sm:p-3 ${getBackgroundColor(
              index
            )} rounded-lg`}
          >
            {renderMainIcon(service.iconName)}
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-800 text-shadow-xs leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Precio y tiempo estimado */}
        <div className="mb-4">
          <p className="font-bold text-xl sm:text-2xl md:text-3xl mb-2">
            <span className="text-neutral-600">Desde </span>
            <span className="text-blue-600 text-shadow-xs">{service.priceUSD}</span>
          </p>
          <p className="text-neutral-500 font-medium text-sm sm:text-base md:text-lg mb-4">
            {service.priceMXN}
          </p>
          
          {/* Tiempo estimado */}
          <div className="flex items-center gap-2 text-green-600">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base font-medium">
              Tiempo estimado: {service.estimatedTime}
            </span>
          </div>
        </div>

        {/* Iconos de características con tooltips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.serviceIcons.map((iconItem, iconIndex) => (
            <div
              key={iconIndex}
              className="relative"
              onMouseEnter={() => handleMouseEnter(iconIndex)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors duration-200 cursor-help">
                <span className="text-blue-600 hover:text-blue-700 transition-colors">
                  {renderIcon(iconItem.iconName)}
                </span>
              </div>
              {tooltip === iconIndex && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-neutral-900 text-white text-xs rounded whitespace-nowrap z-10">
                  {iconItem.tooltip}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Descripción */}
        <p className="text-neutral-600 mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
          {service.description}
        </p>

        {/* Lista de características */}
        <ul className="space-y-2 sm:space-y-3 mb-4">
          {service.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2 sm:gap-3 text-neutral-700 text-sm sm:text-base"
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Texto adicional sobre más características */}
        <div className="mb-4">
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
            Conoce todas las funcionalidades haciendo clic en el botón
          </p>
        </div>
      </div>

      {/* Botón de CTA */}
      <div className="mt-auto">
        <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
          Me interesa
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;