export default function BrowserMockup() {
    return (
      <div className="mt-4 sm:mt-6 w-full order-2 lg:order-2">
        <div className="relative">
          {/* Contenedor del navegador */}
          <div className="bg-neutral-100 rounded-lg p-3 shadow-md border border-neutral-100">
            {/* Barra superior del navegador */}
            <div className="flex items-center gap-2 mb-3">
              {/* Botones de semáforo */}
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
  
              {/* Barra de dirección - MEJORADO */}
              <div className="flex-1 ml-4">
                <div className="bg-neutral-300 rounded-md px-3 py-1 text-xs sm:text-sm text-neutral-900 border border-neutral-200 flex items-center">
                  <div className="w-3 h-3 mr-2">
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-3 h-3 text-blue-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM6.5 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                      />
                    </svg>
                  </div>
                  <span>https://tuempresa.com</span>
                </div>
              </div>
            </div>
  
            {/* Área de contenido del navegador */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden">
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
    );
  }