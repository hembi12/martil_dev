// components/webconfig/ConfigSummary.jsx
import React from 'react';

const ConfigSummary = ({ formData, config, onReset }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-2">🎯 Resumen de tu Configuración Web</h2>
        <p className="text-blue-100">Basado en tus respuestas, aquí está tu recomendación personalizada</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Configuración Recomendada */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-800 mb-4">📊 Configuración Recomendada</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium">Escala del Proyecto:</span>
              <span className="text-green-700 font-bold">{config.escala}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Almacenamiento:</span>
              <span className="text-gray-700">{config.almacenamiento}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Ancho de Banda:</span>
              <span className="text-gray-700">{config.anchoBanda}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Tiempo de Carga:</span>
              <span className="text-gray-700">{config.tiempoCarga}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Páginas Sugeridas:</span>
              <span className="text-gray-700">{config.paginasRecomendadas}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="font-bold">Presupuesto Estimado:</span>
              <span className="text-green-600 font-bold">{config.presupuestoEstimado}</span>
            </div>
          </div>
        </div>

        {/* Tus Selecciones */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-4">✅ Tus Selecciones</h3>
          <div className="space-y-2 text-sm">
            <div><strong>Tipo de Negocio:</strong> {formData.tipoNegocio}</div>
            <div><strong>Páginas Principales:</strong> {formData.paginasPrincipales}</div>
            <div><strong>Productos/Servicios:</strong> {formData.cantidadProductos}</div>
            <div><strong>Blog:</strong> {formData.necesitaBlog}</div>
            {formData.tipoContenido.length > 0 && (
              <div><strong>Contenido:</strong> {formData.tipoContenido.join(', ')}</div>
            )}
            <div><strong>Visitantes Estimados:</strong> {formData.visitantesEstimados}</div>
            <div><strong>Presupuesto:</strong> {formData.presupuesto}</div>
            <div><strong>Tiempo de Lanzamiento:</strong> {formData.tiempoLanzamiento}</div>
            {formData.funcionalidades.length > 0 && (
              <div><strong>Funcionalidades:</strong> {formData.funcionalidades.join(', ')}</div>
            )}
            <div><strong>E-commerce:</strong> {formData.necesitaEcommerce}</div>
            <div><strong>Soporte:</strong> {formData.soporte}</div>
          </div>
        </div>
      </div>

      {/* Siguientes Pasos */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">🚀 Siguientes Pasos Recomendados</h3>
        <ul className="list-disc list-inside space-y-2 text-yellow-700">
          <li>Crear un wireframe o boceto de las páginas principales</li>
          <li>Seleccionar un proveedor de hosting adecuado para la escala</li>
          <li>Definir la arquitectura de información y navegación</li>
          <li>Crear un cronograma detallado del proyecto</li>
          <li>Establecer los KPIs y métricas de éxito</li>
        </ul>
      </div>

      <div className="flex gap-4 mt-6">
        <button 
          onClick={onReset}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Nueva Configuración
        </button>
        <button 
          onClick={() => window.print()}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          🖨️ Imprimir Resumen
        </button>
      </div>
    </div>
  );
};

export default ConfigSummary;