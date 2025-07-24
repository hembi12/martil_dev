import { CheckCircle, ShieldCheck, CircleHelp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/cotizacion');
  };

  return (
    <div className="bg-gradient-to-b from-neutral-100 to-neutral-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Texto principal */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-600 mb-4 sm:mb-6 text-shadow-md leading-tight">
            Tu sitio web, sin plantillas, sin límites
          </h1>
          <p className="mt-4 sm:mt-6 text-lg md:text-xl lg:text-2xl text-neutral-600 max-w-2xl mx-auto lg:mx-0">
            Olvídate de lo genérico. Diseñamos desde cero pensando en tu
            negocio, tus objetivos y tus clientes.
          </p>

          {/* Lista de beneficios - MEJORADO CON TOOLTIP INDIVIDUAL */}
          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
            {[
              {
                text: "Dominio gratis",
                tooltip: "Incluimos el registro de tu dominio personalizado por el primer año completamente gratis. Sujeto a disponibilidad del dominio."
              },
              {
                text: "Hosting gratis",
                tooltip: "Alojamiento web de alta calidad incluido por el primer año. Servidores rápidos y seguros para garantizar que tu sitio esté siempre disponible."
              },
              {
                text: "Soporte 24/7",
                tooltip: "Atención técnica disponible todos los días, las 24 horas via WhatsApp y email para resolver cualquier duda."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start sm:items-center gap-3 text-neutral-700 font-medium justify-center lg:justify-start relative"
              >
                <CheckCircle className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-base md:text-lg text-left">
                  {item.text}
                </span>
                
                {/* Ícono de ayuda individual */}
                <div className="relative">
                  <button
                    onMouseEnter={() => setActiveTooltip(idx)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    onClick={() => setActiveTooltip(activeTooltip === idx ? null : idx)}
                    className="text-neutral-500 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                  >
                    <CircleHelp className="w-4 h-4" />
                  </button>
                  
                  {/* Tooltip individual */}
                  {activeTooltip === idx && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-blue-600 border border-neutral-200 rounded-lg shadow-lg p-3 z-20">
                      <p className="text-xs text-white">
                        {item.tooltip}
                      </p>
                      
                      {/* Flecha del tooltip */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-600"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Precio - MEJORADO */}
          <div className="mt-4 sm:mt-6 text-center lg:text-left">
            <div className="text-3xl md:text-4xl font-bold text-neutral-900">
              <span className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal">
                Desde
              </span>
              <span className="ml-2 text-blue-600 text-shadow-sm">$99</span>
              <span className="text-lg md:text-xl text-neutral-600 font-normal ml-1">
                USD
              </span>
            </div>
            <p className="text-sm md:text-base font-medium text-neutral-700 mt-1">
              $1,980 MXN Pago único.*
            </p>
          </div>

          <div className="mt-4 sm:mt-6">
            {/* Botón CTA - MEJORADO CON ENRUTAMIENTO */}
            <button 
              onClick={handleQuoteClick}
              className="w-auto sm:w-auto px-6 py-3 bg-blue-600 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Cotización gratuita
            </button>

            {/* Badge de seguridad - MEJORADO */}
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-neutral-600">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span className="text-xs font-medium sm:text-sm">Garantía de satisfacción*</span>
            </div>
          </div>
        </div>

        {/* Mockup de navegador Mac */}
        <div className="mt-4 sm:mt-6 w-full order-2 lg:order-2">
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

                {/* Barra de dirección - MEJORADO */}
                <div className="flex-1 ml-4">
                  <div className="bg-neutral-200 rounded-md px-3 py-1 text-xs sm:text-sm text-neutral-900 border border-neutral-200 flex items-center">
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