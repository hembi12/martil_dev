import { useState, useRef } from "react";
import { 
  Briefcase, Building, Store, Sparkles, Users, Globe, 
  ScreenShare, Code, TabletSmartphone, Search, Moon, 
  Languages, Shield, Zap, ShoppingCart, Camera, UserPlus, 
  Calendar, Clock, Contact, ChevronRight, ChevronLeft,
  Check, ArrowRight, DollarSign, Timer, Star
} from "lucide-react";

export default function WebServiceQuoter() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [features, setFeatures] = useState([]);
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: "small-business",
      title: "Negocios pequeños",
      iconName: "Briefcase",
      description: "Crea tu presencia online desde cero para atraer más clientes locales.",
      priceUSD: "$99",
      priceMXN: "$1,980 MXN",
      estimatedTime: "5-7 días",
      basePrice: 1980,
      features: [
        "Página informativa y contacto",
        "Diseño responsivo",
        "Optimización básica SEO",
      ],
      serviceIcons: [
        { iconName: "ScreenShare", tooltip: "Dominio" },
        { iconName: "Code", tooltip: "Hosting" },
        { iconName: "TabletSmartphone", tooltip: "Diseño responsivo" },
        { iconName: "Search", tooltip: "SEO básico" },
        { iconName: "Moon", tooltip: "Modo oscuro" },
        { iconName: "Languages", tooltip: "Soporte multiidioma" },
        { iconName: "Shield", tooltip: "Seguridad avanzada" },
      ],
    },
    {
      id: "medium-large",
      title: "Empresas medianas y grandes",
      iconName: "Building",
      description: "Desarrollamos sitios escalables, modernos y listos para crecer contigo.",
      priceUSD: "$199",
      priceMXN: "$3,980 MXN",
      estimatedTime: "14-30 días",
      basePrice: 3980,
      features: [
        "Múltiples secciones y CMS",
        "Alta velocidad y seguridad",
        "Integraciones avanzadas",
      ],
      serviceIcons: [
        { iconName: "ScreenShare", tooltip: "Dominio" },
        { iconName: "Code", tooltip: "Hosting" },
        { iconName: "TabletSmartphone", tooltip: "Diseño responsivo" },
        { iconName: "Moon", tooltip: "Modo oscuro" },
        { iconName: "Languages", tooltip: "Soporte multiidioma" },
        { iconName: "Shield", tooltip: "Seguridad avanzada" },
        { iconName: "Zap", tooltip: "Carga ultrarrápida" },
      ],
    },
    {
      id: "ecommerce",
      title: "Tiendas en línea",
      iconName: "Store",
      description: "Vende productos 24/7 con una tienda rápida, segura y personalizada.",
      priceUSD: "$99",
      priceMXN: "$1,980 MXN",
      estimatedTime: "7-30 días",
      basePrice: 1980,
      features: [
        "Catálogo de productos",
        "Pasarelas de pago",
        "Gestión de pedidos",
      ],
      serviceIcons: [
        { iconName: "ScreenShare", tooltip: "Dominio" },
        { iconName: "Code", tooltip: "Hosting" },
        { iconName: "TabletSmartphone", tooltip: "Diseño responsivo" },
        { iconName: "ShoppingCart", tooltip: "Carrito de compras" },
        { iconName: "Shield", tooltip: "Pagos seguros" },
        { iconName: "Search", tooltip: "SEO para e-commerce" },
        { iconName: "Zap", tooltip: "Carga ultrarrápida" },
      ],
    },
    {
      id: "influencers",
      title: "Influencers y creadores",
      iconName: "Sparkles",
      description: "Una web con tu estilo, integrada con redes sociales y enfocada en tu audiencia.",
      priceUSD: "$99",
      priceMXN: "$1,980 MXN",
      estimatedTime: "7-21 días",
      basePrice: 1980,
      features: [
        "Integración con redes",
        "Galerías y videos",
        "Formulario de contacto",
      ],
      serviceIcons: [
        { iconName: "ScreenShare", tooltip: "Dominio" },
        { iconName: "Code", tooltip: "Hosting" },
        { iconName: "TabletSmartphone", tooltip: "Diseño responsivo" },
        { iconName: "Moon", tooltip: "Modo oscuro" },
        { iconName: "Shield", tooltip: "Seguridad avanzada" },
        { iconName: "Camera", tooltip: "Galerías optimizadas" },
        { iconName: "UserPlus", tooltip: "Integración redes sociales" },
      ],
    },
    {
      id: "freelancers",
      title: "Freelancers y servicios",
      iconName: "Users",
      description: "Portafolios, reservas de citas y contacto directo con tus clientes.",
      priceUSD: "$99",
      priceMXN: "$1,980 MXN",
      estimatedTime: "7-30 días",
      basePrice: 1980,
      features: [
        "Portafolio profesional",
        "Botón de contacto rápido",
        "Reservas y calendario",
      ],
      serviceIcons: [
        { iconName: "ScreenShare", tooltip: "Dominio" },
        { iconName: "Code", tooltip: "Hosting" },
        { iconName: "TabletSmartphone", tooltip: "Diseño responsivo" },
        { iconName: "Calendar", tooltip: "Sistema de reservas" },
        { iconName: "Shield", tooltip: "Seguridad avanzada" },
        { iconName: "Camera", tooltip: "Galerías optimizadas" },
        { iconName: "Contact", tooltip: "Contacto directo" },
      ],
    },
    {
      id: "appointments",
      title: "Reservas y citas en línea",
      iconName: "Globe",
      description: "Webs ideales para profesionales que agendan con clientes: doctores, coaches, terapeutas, etc.",
      priceUSD: "$99",
      priceMXN: "$1,980 MXN",
      estimatedTime: "7-28 días",
      basePrice: 1980,
      features: [
        "Agenda interactiva",
        "Notificaciones por correo",
        "Formulario de contacto personalizado",
      ],
      serviceIcons: [
        { iconName: "ScreenShare", tooltip: "Dominio" },
        { iconName: "Code", tooltip: "Hosting" },
        { iconName: "TabletSmartphone", tooltip: "Diseño responsivo" },
        { iconName: "Calendar", tooltip: "Agenda avanzada" },
        { iconName: "Shield", tooltip: "Seguridad avanzada" },
        { iconName: "Clock", tooltip: "Recordatorios automáticos" },
        { iconName: "Contact", tooltip: "Contacto directo" },
      ],
    },
  ];

  const budgetOptions = [
    { id: "budget-1", label: "Menos de $2,000 MXN", value: "under-2000", multiplier: 1 },
    { id: "budget-2", label: "$2,000 - $5,000 MXN", value: "2000-5000", multiplier: 1.2 },
    { id: "budget-3", label: "$5,000 - $10,000 MXN", value: "5000-10000", multiplier: 1.5 },
    { id: "budget-4", label: "Más de $10,000 MXN", value: "over-10000", multiplier: 2 },
  ];

  const timelineOptions = [
    { id: "timeline-1", label: "Lo antes posible (1-2 semanas)", value: "asap", multiplier: 1.3 },
    { id: "timeline-2", label: "1 mes", value: "1-month", multiplier: 1 },
    { id: "timeline-3", label: "2-3 meses", value: "2-3-months", multiplier: 0.9 },
    { id: "timeline-4", label: "No tengo prisa", value: "flexible", multiplier: 0.8 },
  ];

  const additionalFeatures = [
    { id: "seo-advanced", label: "SEO Avanzado", price: 500 },
    { id: "analytics", label: "Google Analytics", price: 200 },
    { id: "chat", label: "Chat en vivo", price: 300 },
    { id: "social-media", label: "Integración redes sociales", price: 250 },
    { id: "newsletter", label: "Newsletter/Email marketing", price: 400 },
    { id: "multilang", label: "Sitio multiidioma", price: 800 },
    { id: "blog", label: "Blog/CMS personalizado", price: 600 },
    { id: "booking", label: "Sistema de reservas avanzado", price: 700 },
  ];

  const iconComponents = {
    Briefcase, Building, Store, Sparkles, Users, Globe,
    ScreenShare, Code, TabletSmartphone, Search, Moon,
    Languages, Shield, Zap, ShoppingCart, Camera, UserPlus,
    Calendar, Clock, Contact, Check, DollarSign, Timer, Star
  };

  const steps = [
    { title: "Tipo de proyecto", description: "¿Qué tipo de sitio web necesitas?" },
    { title: "Presupuesto", description: "¿Cuál es tu presupuesto aproximado?" },
    { title: "Tiempo", description: "¿Cuándo necesitas tu sitio web?" },
    { title: "Características", description: "¿Qué funcionalidades adicionales necesitas?" },
    { title: "Información", description: "Cuéntanos sobre tu proyecto" },
    { title: "Cotización", description: "Tu cotización personalizada" }
  ];

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerWidth = container.clientWidth;
      const cardWidth = window.innerWidth >= 640 ? 384 : 320;
      const gap = window.innerWidth >= 640 ? 32 : 24;
      const padding = 24;
      
      const cardPosition = (cardWidth + gap) * index + padding;
      const scrollPosition = cardPosition - (containerWidth / 2) + (cardWidth / 2);
      
      container.scrollTo({
        left: Math.max(0, Math.min(scrollPosition, container.scrollWidth - containerWidth)),
        behavior: "smooth"
      });
      
      setCurrentIndex(index);
    }
  };

  const calculateTotal = () => {
    if (!selectedService) return 0;
    
    let total = selectedService.basePrice;
    
    // Aplicar multiplicador de presupuesto
    const budgetOption = budgetOptions.find(b => b.value === budget);
    if (budgetOption) {
      total *= budgetOption.multiplier;
    }
    
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

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Qué tipo de sitio web necesitas?
              </h2>
              <p className="text-lg text-gray-600">
                Selecciona la opción que mejor describa tu proyecto
              </p>
            </div>
            
            <div className="lg:grid lg:grid-cols-3 lg:gap-6">
              <div className="lg:hidden overflow-x-auto scrollbar-hide py-2" ref={scrollRef}>
                <div className="flex gap-6 pb-4 pt-2 min-w-max px-6">
                  {services.map((service) => {
                    const IconComponent = iconComponents[service.iconName];
                    return (
                      <div
                        key={service.id}
                        onClick={() => setSelectedService(service)}
                        className={`flex-none w-80 cursor-pointer transition-all duration-300 transform ${
                          selectedService?.id === service.id 
                            ? 'scale-105 ring-2 ring-blue-500 ring-opacity-50' 
                            : 'hover:scale-102'
                        } bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border ${
                          selectedService?.id === service.id ? 'border-blue-500' : 'border-gray-200'
                        }`}
                      >
                        <div className="text-center">
                          <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                            selectedService?.id === service.id ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'
                          }`}>
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {service.description}
                          </p>
                          <div className="space-y-2">
                            <p className="text-2xl font-bold text-blue-600">
                              {service.priceMXN}
                            </p>
                            <p className="text-sm text-gray-500">
                              {service.estimatedTime}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="hidden lg:contents">
                {services.map((service) => {
                  const IconComponent = iconComponents[service.iconName];
                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={`cursor-pointer transition-all duration-300 ${
                        selectedService?.id === service.id 
                          ? 'scale-105 ring-2 ring-blue-500' 
                          : 'hover:scale-102'
                      } bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border ${
                        selectedService?.id === service.id ? 'border-blue-500' : 'border-gray-200'
                      }`}
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                          selectedService?.id === service.id ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'
                        }`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          <p className="text-2xl font-bold text-blue-600">
                            {service.priceMXN}
                          </p>
                          <p className="text-sm text-gray-500">
                            {service.estimatedTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Indicadores móviles */}
            <div className="flex justify-center mt-4 lg:hidden">
              <div className="flex gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToCard(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Cuál es tu presupuesto aproximado?
              </h2>
              <p className="text-lg text-gray-600">
                Esto nos ayuda a personalizar tu cotización
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {budgetOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setBudget(option.value)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    budget === option.value
                      ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-blue-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      {option.label}
                    </span>
                    {budget === option.value && (
                      <Check className="w-6 h-6 text-blue-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Cuándo necesitas tu sitio web?
              </h2>
              <p className="text-lg text-gray-600">
                Los plazos más ajustados pueden afectar el precio
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {timelineOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setTimeline(option.value)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    timeline === option.value
                      ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-blue-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      {option.label}
                    </span>
                    {timeline === option.value && (
                      <Check className="w-6 h-6 text-blue-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Qué funcionalidades adicionales necesitas?
              </h2>
              <p className="text-lg text-gray-600">
                Selecciona todas las que apliquen (opcional)
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {additionalFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => {
                    if (features.includes(feature.id)) {
                      setFeatures(features.filter(f => f !== feature.id));
                    } else {
                      setFeatures([...features, feature.id]);
                    }
                  }}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    features.includes(feature.id)
                      ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-blue-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-semibold text-gray-900 block">
                        {feature.label}
                      </span>
                      <span className="text-blue-600 font-medium">
                        +${feature.price} MXN
                      </span>
                    </div>
                    {features.includes(feature.id) && (
                      <Check className="w-6 h-6 text-blue-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cuéntanos sobre tu proyecto
              </h2>
              <p className="text-lg text-gray-600">
                Para generar tu cotización personalizada
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa/Negocio
                </label>
                <input
                  type="text"
                  value={clientInfo.company}
                  onChange={(e) => setClientInfo({...clientInfo, company: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nombre de tu empresa (opcional)"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={clientInfo.phone}
                  onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+52 55 1234 5678"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tu cotización personalizada
              </h2>
              <p className="text-lg text-gray-600">
                Basada en tus requerimientos específicos
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Resumen del proyecto */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Resumen del proyecto
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Star className="w-5 h-5 text-blue-500 mr-2" />
                          <span className="text-gray-700">
                            <strong>Tipo:</strong> {selectedService?.title}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-gray-700">
                            <strong>Presupuesto:</strong> {budgetOptions.find(b => b.value === budget)?.label}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Timer className="w-5 h-5 text-orange-500 mr-2" />
                          <span className="text-gray-700">
                            <strong>Timeline:</strong> {timelineOptions.find(t => t.value === timeline)?.label}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {features.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Características adicionales:
                        </h4>
                        <ul className="space-y-2">
                          {features.map(featureId => {
                            const feature = additionalFeatures.find(f => f.id === featureId);
                            return (
                              <li key={featureId} className="flex justify-between text-sm">
                                <span className="text-gray-700">{feature?.label}</span>
                                <span className="text-blue-600 font-medium">+${feature?.price} MXN</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* Precio total */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Precio total estimado
                      </h3>
                      <div className="text-4xl font-bold text-blue-600 mb-4">
                        ${calculateTotal().toLocaleString()} MXN
                      </div>
                      <p className="text-gray-600 text-sm mb-6">
                        Precio final sujeto a evaluación técnica
                      </p>
                      
                      <div className="space-y-3">
                        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                          Solicitar cotización oficial
                        </button>
                        <button className="w-full border border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                          Modificar proyecto
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return selectedService !== null;
      case 1: return budget !== "";
      case 2: return timeline !== "";
      case 3: return true; // Las características adicionales son opcionales
      case 4: return clientInfo.name && clientInfo.email;
      case 5: return true;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cotizador de Servicios Web
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Obtén una cotización personalizada en minutos
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    index <= currentStep 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {index < currentStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div className="text-xs mt-2 text-center max-w-20">
                    <div className="font-medium text-gray-900">{step.title}</div>
                    <div className="text-gray-500 hidden sm:block">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-12">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center max-w-2xl mx-auto">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-md hover:shadow-lg'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Anterior
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                canProceed()
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Siguiente
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          ) : (
            <button
              onClick={() => {
                // Aquí puedes agregar la lógica para enviar la cotización
                alert('¡Cotización enviada! Te contactaremos pronto.');
              }}
              className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Enviar cotización
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          )}
        </div>

        {/* Summary Card - Visible from step 1 onwards */}
        {currentStep > 0 && currentStep < 5 && (
          <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm lg:block hidden">
            <h4 className="font-semibold text-gray-900 mb-2">Resumen actual</h4>
            <div className="space-y-1 text-sm">
              {selectedService && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Servicio:</span>
                  <span className="font-medium">{selectedService.title}</span>
                </div>
              )}
              {budget && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Presupuesto:</span>
                  <span className="font-medium">
                    {budgetOptions.find(b => b.value === budget)?.label}
                  </span>
                </div>
              )}
              {timeline && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Timeline:</span>
                  <span className="font-medium">
                    {timelineOptions.find(t => t.value === timeline)?.label}
                  </span>
                </div>
              )}
              {features.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Extras:</span>
                  <span className="font-medium">{features.length} seleccionados</span>
                </div>
              )}
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total estimado:</span>
                  <span className="text-blue-600">${calculateTotal().toLocaleString()} MXN</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}