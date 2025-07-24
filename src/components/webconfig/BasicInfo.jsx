// components/webconfig/BasicInfo.jsx
import React from 'react';

const BasicInfo = ({ formData, onInputChange }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">📋 Información Básica</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">¿Qué escala de proyecto tienes en mente?</label>
          <select 
            name="escala" 
            value={formData.escala} 
            onChange={onInputChange} 
            className="w-full p-2 border rounded-lg" 
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="pequeña">Pequeña (Personal/Local)</option>
            <option value="mediana">Mediana (Empresarial/Regional)</option>
            <option value="grande">Grande (Corporativa/Nacional)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">¿Qué tipo de negocio/proyecto es?</label>
          <select 
            name="tipoNegocio" 
            value={formData.tipoNegocio} 
            onChange={onInputChange} 
            className="w-full p-2 border rounded-lg" 
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="personal">Sitio Personal/Portfolio</option>
            <option value="restaurante">Restaurante/Comida</option>
            <option value="servicios">Servicios Profesionales</option>
            <option value="tienda">Tienda Online</option>
            <option value="blog">Blog/Contenido</option>
            <option value="empresa">Empresa/Corporativo</option>
            <option value="nonprofit">ONG/Sin fines de lucro</option>
            <option value="educativo">Educativo</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;