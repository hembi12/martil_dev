import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useState } from "react";

const NavigationControls = ({
  currentIndex,
  totalTestimonials,
  isAutoPlaying,
  onPrevious,
  onNext,
  onGoToTestimonial,
  onToggleAutoPlay,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {/* Flechas de navegación - Solo visible en móviles (sm y menor) */}
      <button
        onClick={onPrevious}
        className="absolute left-4 top-93 sm:top-33 md:top-33 lg:top-35 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-lg hover:scale-110  flex items-center justify-center hover:bg-blue-50 transition-all duration-300 z-10 cursor-pointer"
        aria-label="Testimonio anterior"
      >
        <ChevronLeft className="w-5 h-5 text-blue-600" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-93 sm:top-33 md:top-33 lg:top-35 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-lg hover:scale-110  flex items-center justify-center hover:bg-blue-50 transition-all duration-300 z-10 cursor-pointer"
        aria-label="Siguiente testimonio"
      >
        <ChevronRight className="w-5 h-5 text-blue-600" />
      </button>

      {/* Controles de navegación centrales */}
      <div className="flex justify-center items-center gap-4 mt-8 mb-12">
        <div className="flex gap-2">
          {Array.from({ length: totalTestimonials }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer shadow-md ${
                index === currentIndex
                  ? "bg-blue-600 w-8"
                  : "bg-blue-300 hover:bg-blue-400"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* Botón de Play/Pause con tooltip personalizado */}
        <div className="relative">
          <button
            onClick={onToggleAutoPlay}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="ml-2 px-3 py-2 bg-neutral-100 shadow-md rounded-full flex items-center gap-2 hover:bg-blue-100 transition-all duration-300 cursor-pointer"
            aria-label={
              isAutoPlaying
                ? "Pausar reproducción automática"
                : "Reproducir automáticamente"
            }
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4 text-blue-600" />
            ) : (
              <Play className="w-4 h-4 text-blue-600 ml-0.5" />
            )}
          </button>
          
          {/* Tooltip personalizado */}
          {showTooltip && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-blue-600 text-white text-xs rounded whitespace-nowrap z-50">
              {isAutoPlaying ? "Pausar" : "Reproducir"}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-blue-600"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationControls;