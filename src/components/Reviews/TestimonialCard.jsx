import { Star, Quote } from "lucide-react";
import { iconMap } from './data/reviewsData';

const TestimonialCard = ({ testimonial }) => {
  const getInitials = (name) => {
    const names = name.split(" ");
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return name[0]?.toUpperCase() || "";
  };

  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-4 h-4" /> : null;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Quote decorativa - ajustada para ser menos prominente en móvil */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6">
        <Quote className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-200 opacity-60 sm:opacity-100" />
      </div>
      
      <div className="relative z-10">
        {/* Header con avatar y datos principales */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-blue-50 font-bold text-sm sm:text-lg lg:text-xl">
                {getInitials(testimonial.name)}
              </span>
            </div>
          </div>

          {/* Información principal */}
          <div className="flex-grow min-w-0">
            {/* Nombre - mejorado para móvil */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 mb-1 leading-tight">
              {testimonial.name}
            </h3>
            
            {/* Negocio - ajustado para mejor legibilidad */}
            <p className="text-blue-600 font-semibold text-sm sm:text-base lg:text-lg mb-2 leading-snug">
              {testimonial.business}
            </p>
            
            {/* Categoría con icono */}
            <div className="flex items-center gap-2 mb-2">
              {renderIcon(testimonial.categoryIcon)}
              <span className="text-neutral-600 text-xs sm:text-sm lg:text-base font-medium">
                {testimonial.category}
              </span>
            </div>
            
            {/* Ubicación y tipo de negocio */}
            <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-neutral-500 flex-wrap">
              <span className="whitespace-nowrap">{testimonial.location}</span>
              <span className="hidden sm:inline">•</span>
              <span className="whitespace-nowrap">{testimonial.businessType}</span>
            </div>
          </div>

          {/* Rating y fecha */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <div className="flex sm:block items-center justify-between sm:justify-start">
              {/* Fecha - mejor posicionada en móvil */}
              <p className="text-xs sm:text-xs lg:text-sm text-neutral-400 mb-0 sm:mb-1 text-left sm:text-right order-2 sm:order-1">
                {testimonial.date}
              </p>
              
              {/* Estrellas */}
              <div className="flex items-center gap-1 mb-0 sm:mb-2 order-1 sm:order-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-neutral-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Rating numérico - oculto en móvil muy pequeño */}
            <p className="hidden sm:block text-xs lg:text-sm text-neutral-500 text-right">
              {testimonial.rating}/5 estrellas
            </p>
          </div>
        </div>

        {/* Reseña principal - mejorada la tipografía */}
        <blockquote className="text-neutral-700 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-relaxed lg:leading-loose mb-4 sm:mb-6 font-normal sm:font-medium">
          <span className="text-neutral-400 text-lg sm:text-xl lg:text-2xl leading-none">"</span>
          {testimonial.review}
          <span className="text-neutral-400 text-lg sm:text-xl lg:text-2xl leading-none">"</span>
        </blockquote>

        {/* Badge de servicio - centrado en móvil, alineado normal en desktop */}
        <div className="flex justify-center sm:justify-start">
          <div className="inline-flex items-center gap-2 bg-blue-50 sm:bg-blue-100 text-blue-600 px-3 py-2 rounded-lg text-xs sm:text-sm lg:text-base font-medium border border-blue-100 sm:border-transparent shadow-md">
            <span className="text-neutral-500 sm:text-blue-600">Servicio:</span>
            <span className="font-semibold text-blue-700">{testimonial.service}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;