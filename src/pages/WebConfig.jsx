// pages/WebConfig.jsx
import React, { useState } from 'react';
import BasicInfo from '../components/webconfig/BasicInfo';
import ContentStructure from '../components/webconfig/ContentStructure';
import TrafficPerformance from '../components/webconfig/TrafficPerformance';
import BudgetTimeline from '../components/webconfig/BudgetTimeline';
import AdvancedFeatures from '../components/webconfig/AdvancedFeatures';
import ConfigSummary from '../components/webconfig/ConfigSummary';
import { getInitialFormData, getRecommendedConfig } from '../utils/webConfigHelpers';

const WebConfig = () => {
  const [formData, setFormData] = useState(getInitialFormData());
  const [showSummary, setShowSummary] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked 
          ? [...(prev[name] || []), value]
          : (prev[name] || []).filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = () => {
    setShowSummary(true);
  };

  const resetForm = () => {
    setFormData(getInitialFormData());
    setShowSummary(false);
  };

  if (showSummary) {
    const config = getRecommendedConfig(formData);
    return <ConfigSummary formData={formData} config={config} onReset={resetForm} />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">🌐 Configurador de Páginas Web</h1>
        <p className="text-blue-100">Responde estas preguntas para obtener la configuración perfecta para tu proyecto web</p>
      </div>

      <div className="space-y-6">
        <BasicInfo formData={formData} onInputChange={handleInputChange} />
        <ContentStructure formData={formData} onInputChange={handleInputChange} />
        <TrafficPerformance formData={formData} onInputChange={handleInputChange} />
        <BudgetTimeline formData={formData} onInputChange={handleInputChange} />
        <AdvancedFeatures formData={formData} onInputChange={handleInputChange} />

        <button 
          onClick={handleSubmit} 
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
        >
          🚀 Generar Mi Configuración Web
        </button>
      </div>
    </div>
  );
};

export default WebConfig;