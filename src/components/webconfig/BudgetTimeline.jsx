// components/webconfig/BudgetTimeline.jsx
import React from 'react';

const BudgetTimeline = ({ formData, onInputChange }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">💰 Presupuesto y Cronograma</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">¿Cuál es tu presupuesto aproximado?</label>
          <select 
            name="presupuesto" 
            value={formData.presupuesto} 
            onChange={onInputChange} 
            className="w-full p-2 border rounded-lg" 
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="menos-1000">Menos de $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000-15000">$5,000 - $15,000</option>
            <option value="15000-50000">$15,000 - $50,000</option>
            <option value="50000+">Más de $50,000</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">¿En cuánto tiempo necesitas lanzar?</label>
          <select 
            name="tiempoLanzamiento" 
            value={formData.tiempoLanzamiento} 
            onChange={onInputChange} 
            className="w-full p-2 border rounded-lg" 
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="1-2-semanas">1-2 semanas</option>
            <option value="1-mes">1 mes</option>
            <option value="2-3-meses">2-3 meses</option>
            <option value="3-6-meses">3-6 meses</option>
            <option value="6-meses+">Más de 6 meses</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BudgetTimeline;