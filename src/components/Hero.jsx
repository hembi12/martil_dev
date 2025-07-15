import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Texto principal */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Desarrollo web profesional para negocios y emprendedores
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 max-w-2xl mx-auto lg:mx-0">
            Creamos sitios web profesionales que impulsan tus ideas. Diseño
            moderno, funcionalidad avanzada y resultados garantizados.
          </p>

          {/* Lista de beneficios */}
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            {[
              "100% responsivo, adaptable y rápido",
              "Optimización SEO desde el inicio",
              "Automatización para ahorrar tiempo y recursos",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-start sm:items-center gap-3 text-neutral-700 justify-center lg:justify-start"
              >
                <CheckCircle className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-sm sm:text-base md:text-lg text-left">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-base sm:text-lg font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300 shadow-md hover:shadow-lg">
              Cotización gratuita
            </button>
          </div>
        </div>

        {/* Imagen decorativa */}
        <div className="w-full order-2 lg:order-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Desarrollo web"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-auto object-cover rounded-xl shadow-lg"
            />
            {/* Overlay decorativo opcional */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
