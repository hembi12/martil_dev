import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function NavigationButtons({ 
  currentStep, 
  steps, 
  canProceed, 
  nextStep, 
  prevStep, 
  onQuotationSubmit 
}) {
  return (
    <div className="px-4">
      {/* Mobile Navigation - Stacked buttons */}
      <div className="flex flex-col gap-3 sm:hidden max-w-sm mx-auto">
        {currentStep < steps.length - 1 ? (
          <>
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className={`flex items-center justify-center px-6 py-4 rounded-lg font-semibold text-base transition-all duration-300 ${
                canProceed()
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg active:scale-95'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Siguiente
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Anterior
              </button>
            )}
          </>
        ) : (
          <>
            <button
              onClick={onQuotationSubmit}
              className="flex items-center justify-center px-6 py-4 bg-green-600 text-white rounded-lg font-semibold text-base hover:bg-green-700 transition-all duration-300 shadow-lg active:scale-95"
            >
              Enviar cotización
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            
            <button
              onClick={prevStep}
              className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Anterior
            </button>
          </>
        )}
      </div>

      {/* Desktop Navigation - Side by side buttons */}
      <div className="hidden sm:flex justify-between items-center max-w-3xl mx-auto">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`flex items-center px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
            currentStep === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-md hover:shadow-lg transform hover:scale-105'
          }`}
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          <span>Anterior</span>
        </button>

        {/* Step indicator for desktop */}
        <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
          <span>Paso {currentStep + 1} de {steps.length}</span>
        </div>

        {currentStep < steps.length - 1 ? (
          <button
            onClick={nextStep}
            disabled={!canProceed()}
            className={`flex items-center px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
              canProceed()
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
            }`}
          >
            <span>Siguiente</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </button>
        ) : (
          <button
            onClick={onQuotationSubmit}
            className="flex items-center px-4 sm:px-6 py-3 sm:py-4 bg-green-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Enviar cotización</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </button>
        )}
      </div>
    </div>
  );
}