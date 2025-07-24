export default function ClientInfoForm({ clientInfo, setClientInfo }) {
  const updateClientInfo = (field, value) => {
    setClientInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Cuéntanos sobre tu proyecto
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
          Para generar tu cotización personalizada
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Nombre completo */}
            <div className="md:col-span-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                value={clientInfo.name}
                onChange={(e) => updateClientInfo('name', e.target.value)}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                placeholder="Tu nombre completo"
                required
              />
            </div>
            
            {/* Email */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={clientInfo.email}
                onChange={(e) => updateClientInfo('email', e.target.value)}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                placeholder="tu@email.com"
                required
              />
            </div>
            
            {/* Teléfono */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                value={clientInfo.phone}
                onChange={(e) => updateClientInfo('phone', e.target.value)}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                placeholder="+52 55 1234 5678"
              />
            </div>
            
            {/* Empresa/Negocio */}
            <div className="md:col-span-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                Empresa/Negocio
              </label>
              <input
                type="text"
                value={clientInfo.company}
                onChange={(e) => updateClientInfo('company', e.target.value)}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                placeholder="Nombre de tu empresa (opcional)"
              />
            </div>
          </div>

          {/* Información adicional */}
          <div className="mt-6 sm:mt-8 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-800">
                  <strong>Protegemos tu privacidad:</strong> Tus datos solo se usan para generar la cotización y contactarte sobre tu proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}