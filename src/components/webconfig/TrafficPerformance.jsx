// components/webconfig/TrafficPerformance.jsx
import React from 'react';

const TrafficPerformance = ({ formData, onInputChange }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">📊 Tráfico y Rendimiento</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">¿Cuántos visitantes esperas por mes?</label>
          <select 
            name="visitantesEstimados" 
            value={formData.visitantesEstimados} 
            onChange={onInputChange} 
            className="w-full p-2 border rounded-lg" 
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="menos-1000">Menos de 1,000</option>
            <option value="1000-10000">1,000 - 10,000</option>
            <option value="10000-50000">10,000 - 50,000</option>
            <option value="50000+">Más de 50,000</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">¿En cuántos idiomas necesitas el sitio?</label>
          <select 
            name="idiomas" 
            value={formData.idiomas} 
            onChange={onInputChange} 
            className="w-full p-2 border rounded-lg" 
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="1">Solo 1 idioma</option>
            <option value="2">2 idiomas</option>
            <option value="3-5">3-5 idiomas</option>
            <option value="5+">Más de 5 idiomas</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TrafficPerformance;