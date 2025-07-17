import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const NavigationControls = ({
  currentIndex,
  totalTestimonials,
  isAutoPlaying,
  onPrevious,
  onNext,
  onGoToTestimonial,
  onToggleAutoPlay,
}) => {
  return (
    <>
      {/* Flechas de navegación - Solo visible en móviles (sm y menor) */}
      <button
        onClick={onPrevious}
        className="absolute left-4 top-73 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-lg hover:scale-110  flex items-center justify-center hover:bg-blue-50 transition-colors duration-200 z-10 cursor-pointer"
        aria-label="Testimonio anterior"
      >
        <ChevronLeft className="w-5 h-5 text-blue-600" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-73 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-lg hover:scale-110  flex items-center justify-center hover:bg-blue-50 transition-colors duration-200 z-10 cursor-pointer"
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
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "bg-blue-600 w-8"
                  : "bg-blue-300 hover:bg-blue-400"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* Botón de Play/Pause */}
        <button
          onClick={onToggleAutoPlay}
          className="ml-2 px-3 py-2 bg-white shadow-md rounded-full flex items-center gap-2 hover:bg-blue-100 transition-colors duration-200 hover:shadow-lg cursor-pointer"
          aria-label={
            isAutoPlaying
              ? "Pausar reproducción automática"
              : "Reproducir automáticamente"
          }
          title={isAutoPlaying ? "Pausar" : "Reproducir"}
        >
          {isAutoPlaying ? (
            <Pause className="w-4 h-4 text-blue-600" />
          ) : (
            <Play className="w-4 h-4 text-blue-600 ml-0.5" />
          )}
        </button>
      </div>
    </>
  );
};

export default NavigationControls;