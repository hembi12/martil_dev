import { Check } from "lucide-react";

export default function TimelineSelection({ timelineOptions, timeline, setTimeline }) {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          ¿Cuándo necesitas tu sitio web?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
          Los plazos más ajustados pueden afectar el precio
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-3xl mx-auto px-4">
        {timelineOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setTimeline(option.value)}
            className={`p-4 sm:p-6 lg:p-8 rounded-xl border-2 transition-all duration-300 text-left group hover:scale-102 ${
              timeline === option.value
                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200 shadow-lg'
                : 'border-gray-200 hover:border-blue-300 bg-white hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 leading-tight">
                {option.label}
              </span>
              <div className={`flex-shrink-0 ml-3 transition-all duration-300 ${
                timeline === option.value 
                  ? 'scale-110' 
                  : 'scale-0 group-hover:scale-100'
              }`}>
                {timeline === option.value ? (
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                ) : (
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-gray-300 group-hover:border-blue-300"></div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}