import { Star, Timer } from "lucide-react";

export default function QuotationSummary({
  selectedService,
  timelineOptions,
  additionalFeatures,
  timeline,
  features,
  calculateTotal,
  // eslint-disable-next-line no-unused-vars
  onModifyProject = () => {},
}) {
  const selectedTimeline = timelineOptions.find((t) => t.value === timeline);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Tu cotización personalizada
        </h2>
        <p className="text-lg text-gray-600">
          Basada en tus requerimientos específicos
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Summary */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Resumen del proyecto
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="text-gray-700">
                      <strong>Tipo:</strong> {selectedService?.title}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Timer className="w-5 h-5 text-orange-500 mr-2" />
                    <span className="text-gray-700">
                      <strong>Timeline:</strong> {selectedTimeline?.label}
                    </span>
                  </div>
                </div>
              </div>
              
              {features.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Características adicionales:
                  </h4>
                  <ul className="space-y-2">
                    {features.map(featureId => {
                      const feature = additionalFeatures.find(f => f.id === featureId);
                      return (
                        <li key={featureId} className="flex justify-between text-sm">
                          <span className="text-gray-700">{feature?.label}</span>
                          <span className="text-blue-600 font-medium">+${feature?.price} MXN</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Total Price */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Precio total estimado
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  ${calculateTotal().toLocaleString()} MXN
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  Precio final sujeto a evaluación técnica
                </p>
                
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Solicitar cotización oficial
                  </button>
                  <button className="w-full border border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Modificar proyecto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}