import { useState } from "react";
import ProgressBar from "../components/webservicequoter/ProgressBar";
import ServiceSelection from "../components/webservicequoter/ServiceSelection";
import TimelineSelection from "../components/webservicequoter/TimelineSelection";
import FeaturesSelection from "../components/webservicequoter/FeaturesSelection";
import ClientInfoForm from "../components/webservicequoter/ClientInfoForm";
import QuotationSummary from "../components/webservicequoter/QuotationSummary";
import NavigationButtons from "../components/webservicequoter/NavigationButtons";
import SummaryCard from "../components/webservicequoter/SummaryCard";
import CustomCTA from "../components/webservicequoter/CustomCTA";
import { services, timelineOptions, additionalFeatures, steps } from "../components/webservicequoter/data/data";

export default function WebServiceQuoter() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [timeline, setTimeline] = useState("");
  const [features, setFeatures] = useState([]);
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });

  const calculateTotal = () => {
    if (!selectedService) return 0;
    
    let total = selectedService.basePrice;
    
    // Aplicar multiplicador de tiempo
    const timelineOption = timelineOptions.find(t => t.value === timeline);
    if (timelineOption) {
      total *= timelineOption.multiplier;
    }
    
    // Agregar características adicionales
    features.forEach(featureId => {
      const feature = additionalFeatures.find(f => f.id === featureId);
      if (feature) {
        total += feature.price;
      }
    });
    
    return Math.round(total);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return selectedService !== null;
      case 1: return timeline !== "";
      case 2: return true; // Las características adicionales son opcionales
      case 3: return clientInfo.name && clientInfo.email;
      case 4: return true;
      default: return false;
    }
  };

  const handleQuotationSubmit = () => {
    // Crear objeto con todos los datos de la cotización
    const quotationData = {
      service: selectedService,
      timeline: timelineOptions.find(t => t.value === timeline),
      selectedFeatures: features.map(featureId => 
        additionalFeatures.find(f => f.id === featureId)
      ),
      clientInfo,
      totalPrice: calculateTotal(),
      timestamp: new Date().toISOString()
    };

    // Aquí puedes agregar la lógica para enviar la cotización
    console.log('Datos de la cotización:', quotationData);
    
    // Ejemplo de envío a API (comentado)
    /*
    try {
      const response = await fetch('/api/quotations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quotationData),
      });
      
      if (response.ok) {
        alert('¡Cotización enviada exitosamente! Te contactaremos pronto.');
      } else {
        alert('Error al enviar la cotización. Por favor intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar la cotización. Por favor intenta de nuevo.');
    }
    */
    
    // Por ahora, solo mostrar alert
    alert('¡Cotización enviada! Te contactaremos pronto.');
  };

  const handleModifyProject = () => {
    // Volver al primer paso para modificar el proyecto
    setCurrentStep(0);
  };

  const handleCustomCTAClick = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message = "¡Hola! Estuve usando el cotizador web y me gustaría recibir asesoría personalizada para mi proyecto.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ServiceSelection 
            services={services}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        );
      case 1:
        return (
          <TimelineSelection 
            timelineOptions={timelineOptions}
            timeline={timeline}
            setTimeline={setTimeline}
          />
        );
      case 2:
        return (
          <FeaturesSelection 
            additionalFeatures={additionalFeatures}
            features={features}
            setFeatures={setFeatures}
          />
        );
      case 3:
        return (
          <ClientInfoForm 
            clientInfo={clientInfo}
            setClientInfo={setClientInfo}
          />
        );
      case 4:
        return (
          <QuotationSummary 
            selectedService={selectedService}
            timelineOptions={timelineOptions}
            additionalFeatures={additionalFeatures}
            timeline={timeline}
            features={features}
            calculateTotal={calculateTotal}
            onModifyProject={handleModifyProject}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-4 sm:py-6 lg:py-8 px-2 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 text-shadow-md mb-2 sm:mb-4 leading-tight">
            Cotizador de Servicios Web
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Obtén una cotización personalizada en minutos
          </p>
          
          {/* Progress Bar */}
          <ProgressBar steps={steps} currentStep={currentStep} />
        </div>

        {/* Step Content */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <NavigationButtons 
          currentStep={currentStep}
          steps={steps}
          canProceed={canProceed}
          nextStep={nextStep}
          prevStep={prevStep}
          onQuotationSubmit={handleQuotationSubmit}
        />

        {/* Summary Card - Visible from step 1 onwards */}
        <SummaryCard 
          currentStep={currentStep}
          selectedService={selectedService}
          timelineOptions={timelineOptions}
          timeline={timeline}
          features={features}
          calculateTotal={calculateTotal}
        />

        {/* Custom CTA - Aparece al final del proceso o cuando se necesite asesoría */}
        {(currentStep === 4 || currentStep === 0) && (
          <CustomCTA 
            onClick={handleCustomCTAClick}
            className="mt-8 mb-8"
          />
        )}
      </div>
    </div>
  );
}