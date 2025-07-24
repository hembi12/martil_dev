import { Check } from "lucide-react";

export default function FeaturesSelection({ additionalFeatures, features, setFeatures }) {
  const toggleFeature = (featureId) => {
    if (features.includes(featureId)) {
      setFeatures(features.filter(f => f !== featureId));
    } else {
      setFeatures([...features, featureId]);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          ¿Qué funcionalidades adicionales necesitas?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
          Selecciona todas las que apliquen (opcional)
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto px-4">
        {additionalFeatures.map((feature) => (
          <button
            key={feature.id}
            onClick={() => toggleFeature(feature.id)}
            className={`p-4 sm:p-5 lg:p-6 rounded-xl border-2 transition-all duration-300 text-left group hover:scale-102 ${
              features.includes(feature.id)
                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200 shadow-lg'
                : 'border-gray-200 hover:border-blue-300 bg-white hover:shadow-md'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 block leading-tight">
                  {feature.label}
                </span>
                <span className="text-sm sm:text-base text-blue-600 font-medium mt-1 block">
                  +${feature.price} MXN
                </span>
              </div>
              <div className={`flex-shrink-0 ml-3 transition-all duration-300 ${
                features.includes(feature.id) 
                  ? 'scale-110' 
                  : 'scale-0 group-hover:scale-100'
              }`}>
                {features.includes(feature.id) ? (
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                ) : (
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-gray-300 group-hover:border-blue-300"></div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected features counter for mobile */}
      {features.length > 0 && (
        <div className="text-center sm:hidden">
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            {features.length} característica{features.length !== 1 ? 's' : ''} seleccionada{features.length !== 1 ? 's' : ''}
          </div>
        </div>
      )}
    </div>
  );
}