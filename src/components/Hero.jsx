import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-neutral-100 to-neutral-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Texto principal */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Tu sitio web, sin plantillas, sin límites
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 max-w-2xl mx-auto lg:mx-0">
            Olvídate de lo genérico. Diseñamos desde cero pensando en tu
            negocio, tus objetivos y tus clientes.
          </p>

          {/* Lista de beneficios */}
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            {[
              "Dominio y hosting gratis",
              "100% responsivo",
              "Soporte 24/7",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-start sm:items-center gap-3 text-neutral-700 justify-center lg:justify-start"
              >
                <CheckCircle className="text-green-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-sm sm:text-base md:text-lg text-left">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Precio */}
          <div className="mt-6 sm:mt-8 text-center lg:text-left">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900">
              <span className="text-lg sm:text-xl md:text-2xl text-neutral-600 font-normal">Desde</span>
              <span className="ml-2 text-blue-600 text-shadow-xs">$99</span>
              <span className="text-lg sm:text-xl md:text-2xl text-neutral-600 font-normal ml-1">USD</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-700 mt-1">
              $1,980 MXN
            </p>
          </div>

          <div className="mt-8">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg cursor-pointer">
              Cotización gratuita
            </button>
          </div>
        </div>

        {/* Mockup de navegador Mac */}
        <div className="w-full order-2 lg:order-2">
          <div className="relative">
            {/* Contenedor del navegador */}
            <div className="bg-white rounded-lg p-3 shadow-md border border-neutral-200">
              {/* Barra superior del navegador */}
              <div className="flex items-center gap-2 mb-3">
                {/* Botones de semáforo */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Barra de dirección */}
                <div className="flex-1 ml-4">
                  <div className="bg-neutral-200 rounded-md px-3 py-1 text-xs text-neutral-900 border border-neutral-200 flex items-center">
                    <div className="w-3 h-3 mr-2">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-blue-400">
                        <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM6.5 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"/>
                      </svg>
                    </div>
                    <span>https://tuempresa.com</span>
                  </div>
                </div>
              </div>
              
              {/* Área de contenido del navegador */}
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src="/images/hero-sky.webp"
                  alt="Desarrollo web"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-auto object-cover"
                />
                {/* Overlay decorativo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-b-lg"></div>
              </div>
            </div>
            
            {/* Sombra adicional para mayor realismo */}
            <div className="absolute -inset-2 bg-black/10 rounded-xl -z-10 blur-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}