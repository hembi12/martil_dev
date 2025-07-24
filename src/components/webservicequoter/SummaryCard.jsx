export default function SummaryCard({ 
  currentStep, 
  selectedService, 
  budgetOptions, 
  timelineOptions, 
  budget, 
  timeline, 
  features, 
  calculateTotal 
}) {
  if (currentStep <= 0 || currentStep >= 5) return null;

  const selectedBudget = budgetOptions.find(b => b.value === budget);
  const selectedTimeline = timelineOptions.find(t => t.value === timeline);

  return (
    <>
      {/* Desktop floating card */}
      <div className="fixed bottom-4 right-4 bg-white rounded-xl shadow-2xl p-4 sm:p-6 max-w-xs xl:max-w-sm hidden lg:block border border-gray-100 z-10">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-bold text-gray-900 text-sm xl:text-base">Resumen actual</h4>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        
        <div className="space-y-2 text-xs xl:text-sm">
          {selectedService && (
            <div className="flex justify-between items-start">
              <span className="text-gray-600 flex-shrink-0 mr-2">Servicio:</span>
              <span className="font-medium text-right leading-tight">{selectedService.title}</span>
            </div>
          )}
          {budget && (
            <div className="flex justify-between items-start">
              <span className="text-gray-600 flex-shrink-0 mr-2">Presupuesto:</span>
              <span className="font-medium text-right leading-tight">{selectedBudget?.label}</span>
            </div>
          )}
          {timeline && (
            <div className="flex justify-between items-start">
              <span className="text-gray-600 flex-shrink-0 mr-2">Timeline:</span>
              <span className="font-medium text-right leading-tight">{selectedTimeline?.label}</span>
            </div>
          )}
          {features.length > 0 && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Extras:</span>
              <span className="font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                {features.length} seleccionado{features.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}
          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex justify-between items-center font-bold">
              <span className="text-gray-900">Total estimado:</span>
              <span className="text-blue-600 text-sm xl:text-base">
                ${calculateTotal().toLocaleString()} MXN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl lg:hidden z-10">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-gray-900 text-sm">Resumen actual</h4>
            <div className="flex items-center text-xs text-gray-500">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></div>
              Paso {currentStep + 1}/6
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-xs mb-3">
            {selectedService && (
              <div className="bg-gray-50 rounded-lg p-2">
                <span className="text-gray-600 block">Servicio</span>
                <span className="font-medium text-gray-900 text-xs leading-tight">
                  {selectedService.title}
                </span>
              </div>
            )}
            {budget && (
              <div className="bg-gray-50 rounded-lg p-2">
                <span className="text-gray-600 block">Presupuesto</span>
                <span className="font-medium text-gray-900 text-xs leading-tight">
                  {selectedBudget?.label}
                </span>
              </div>
            )}
            {timeline && (
              <div className="bg-gray-50 rounded-lg p-2">
                <span className="text-gray-600 block">Timeline</span>
                <span className="font-medium text-gray-900 text-xs leading-tight">
                  {selectedTimeline?.label}
                </span>
              </div>
            )}
            {features.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-2">
                <span className="text-gray-600 block">Extras</span>
                <span className="font-medium text-blue-600 text-xs">
                  {features.length} seleccionado{features.length !== 1 ? 's' : ''}
                </span>
              </div>
            )}
          </div>
          
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-900 text-sm">Total estimado:</span>
              <span className="font-bold text-blue-600 text-base">
                ${calculateTotal().toLocaleString()} MXN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile spacer to prevent content overlap */}
      <div className="h-32 lg:hidden"></div>
    </>
  );
}