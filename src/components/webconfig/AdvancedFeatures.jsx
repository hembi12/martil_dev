// components/webconfig/AdvancedFeatures.jsx
import React from 'react';

const AdvancedFeatures = ({ formData, onInputChange }) => {
  const features = [
    'Sistema de usuarios/login',
    'Búsqueda avanzada',
    'Chat en vivo',
    'Reservas/Citas online',
    'Integración con redes sociales',
    'Newsletter/Email marketing',
    'Sistema de pagos',
    'Dashboard administrativo',
    'API para móviles',
    'Analytics avanzado'
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">⚙️ Funcionalidades Avanzadas</h2>
      
      <div>
        <label className="block text-sm font-medium mb-2">
          ¿Qué funcionalidades avanzadas necesitas? (selecciona todas las que apliquen)
        </label>
        <div className="grid md:grid-cols-2 gap-2">
          {features.map(option => (
            <label key={option} className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                name="funcionalidades" 
                value={option} 
                checked={formData.funcionalidades.includes(option)}
                onChange={onInputChange} 
                className="rounded"
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-2">¿Qué tipo de soporte necesitas?</label>
        <select 
          name="soporte" 
          value={formData.soporte} 
          onChange={onInputChange} 
          className="w-full p-2 border rounded-lg" 
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="ninguno">No necesito soporte</option>
          <option value="basico">Soporte básico (email)</option>
          <option value="regular">Soporte regular (email + chat)</option>
          <option value="premium">Soporte premium (24/7)</option>
        </select>
      </div>
    </div>
  );
};

export default AdvancedFeatures;