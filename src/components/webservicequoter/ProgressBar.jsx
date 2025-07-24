import { Check } from "lucide-react";

export default function ProgressBar({ steps, currentStep }) {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4">
      {/* Mobile Progress Bar (now used for all screen sizes) */}
      <div className="flex flex-col items-center space-y-2 mb-4">
        <div className="text-sm sm:text-base md:text-lg font-medium text-gray-900">
          Paso {currentStep + 1} de {steps.length}
        </div>
        <div className="text-xs sm:text-sm md:text-base text-gray-600 text-center">
          {steps[currentStep].title}
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}