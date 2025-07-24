// components/webconfig/ContentStructure.jsx
import React from 'react';

const ContentStructure = ({ formData, onInputChange }) => {
  const contentTypes = [
    'Texto', 'Imágenes', 'Videos', 'Documentos PDF', 
    'Galería de fotos', 'Formularios de contacto', 'Mapas', 'Testimonios'
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">📄 Contenido y Estructura</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">¿Cuántas páginas principales necesitas?</label>
          <select 
            name="paginasPrincipales" 
            value={formData.paginasPrincipales} 
            onChange={onInputChange} 
            className="w-full p-2 border rounded-lg" 
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="1-5">1-5 páginas</option>
            <option value="6-15">6-15 páginas</option>
            <option value="16-50">16-50 páginas</option>
            <option value="50+">Más de 50 páginas</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">¿Cuántos productos/servicios mostrarás?</label>
          <select 
            name="cantidadProductos" 
            value={formData.cantidadProductos} 
            onChange={onInputChange} 
            className="w-full p-2 border rounded-lg" 
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="ninguno">Ninguno</option>
            <option value="1-10">1-10 elementos</option>
            <option value="11-50">11-50 elementos</option>
            <option value="51-200">51-200 elementos</option>
            <option value="200+">Más de 200 elementos</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium mb-2">¿Necesitas un blog/sección de noticias?</label>
          <select 
            name="necesitaBlog" 
            value={formData.necesitaBlog} 
            onChange={onInputChange} 
            className="w-full p-2 border rounded-lg" 
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="no">No necesito</option>
            <option value="basico">Sí, básico (pocas entradas)</option>
            <option value="regular">Sí, regular (actualización mensual)</option>
            <option value="frecuente">Sí, frecuente (actualización semanal)</option>
            <option value="diario">Sí, muy activo (diario)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">¿Necesitas funcionalidad de e-commerce?</label>
          <select 
            name="necesitaEcommerce" 
            value={formData.necesitaEcommerce} 
            onChange={onInputChange} 
            className="w-full p-2 border rounded-lg" 
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="no">No necesito</option>
            <option value="basico">Sí, básico (pocos productos)</option>
            <option value="completo">Sí, completo (catálogo extenso)</option>
            <option value="enterprise">Sí, nivel enterprise</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-2">
          ¿Qué tipo de contenido incluirás? (selecciona todos los que apliquen)
        </label>
        <div className="grid md:grid-cols-2 gap-2">
          {contentTypes.map(option => (
            <label key={option} className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                name="tipoContenido" 
                value={option} 
                checked={formData.tipoContenido.includes(option)}
                onChange={onInputChange} 
                className="rounded"
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStructure;
