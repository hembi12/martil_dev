import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { iconMap } from './data/servicesData';

const ServiceCard = ({ service, index }) => {
  const [tooltip, setTooltip] = useState(null);

  const handleMouseEnter = (iconIndex) => {
    setTooltip(iconIndex);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  // Función para renderizar iconos desde el mapa
  const renderIcon = (iconName, className = "w-4 h-4") => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  // Renderizar el icono principal con clases responsivas
  const renderMainIcon = (iconName) => {
    return renderIcon(iconName, "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600");
  };

  return (
    <div
      className={`bg-white shadow-md hover:shadow-lg rounded-xl p-6 sm:p-8 text-left card-hover flex flex-col justify-between min-h-[450px] sm:min-h-[580px] md:min-h-[600px] animate-fade-in-up ${
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
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex-shrink-0 p-2 sm:p-3 bg-blue-50 rounded-lg">
            {renderMainIcon(service.iconName)}
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-800 leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Precio destacado */}
        <div className="mb-4 sm:mb-6">
          <p className="text-blue-600 font-bold text-xl sm:text-2xl md:text-3xl mb-1">
            Desde {service.priceUSD}
          </p>
          <p className="text-neutral-500 font-medium text-sm sm:text-base md:text-lg">
            {service.priceMXN}
          </p>
        </div>

        {/* Iconos de características con tooltips */}
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {service.serviceIcons.map((iconItem, iconIndex) => (
            <div
              key={iconIndex}
              className="relative"
              onMouseEnter={() => handleMouseEnter(iconIndex)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="p-2 bg-neutral-100 hover:bg-blue-50 rounded-lg transition-colors duration-200 cursor-help">
                <span className="text-neutral-700 hover:text-blue-600 transition-colors">
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
        <p className="text-neutral-600 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
          {service.description}
        </p>

        {/* Lista de características */}
        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          {service.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2 sm:gap-3 text-neutral-700 text-sm sm:text-base"
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Botón de CTA */}
      <div className="mt-auto">
        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-full text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200">
          Me interesa
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;