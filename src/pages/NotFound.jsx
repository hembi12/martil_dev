export default function NotFound() {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* Imagen SVG 404 */}
          <div className="mb-8">
            <img 
              src="/images/404.svg" 
              alt="Página no encontrada" 
              className="w-full h-auto max-w-xs mx-auto"
            />
          </div>
          
          {/* Mensaje opcional */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Página no encontrada
          </h1>
          
          <p className="text-gray-600 mb-8">
            La página que buscas no existe o ha sido movida.
          </p>
          
          {/* Botón para regresar al inicio */}
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }