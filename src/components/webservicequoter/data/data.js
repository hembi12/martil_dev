export const services = [
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
  
  export const budgetOptions = [
    { id: "budget-1", label: "Menos de $2,000 MXN", value: "under-2000", multiplier: 1 },
    { id: "budget-2", label: "$2,000 - $5,000 MXN", value: "2000-5000", multiplier: 1.2 },
    { id: "budget-3", label: "$5,000 - $10,000 MXN", value: "5000-10000", multiplier: 1.5 },
    { id: "budget-4", label: "Más de $10,000 MXN", value: "over-10000", multiplier: 2 },
  ];
  
  export const timelineOptions = [
    { id: "timeline-1", label: "Lo antes posible (1-2 semanas)", value: "asap", multiplier: 1.3 },
    { id: "timeline-2", label: "1 mes", value: "1-month", multiplier: 1 },
    { id: "timeline-3", label: "2-3 meses", value: "2-3-months", multiplier: 0.9 },
    { id: "timeline-4", label: "No tengo prisa", value: "flexible", multiplier: 0.8 },
  ];
  
  export const additionalFeatures = [
    { id: "seo-advanced", label: "SEO Avanzado", price: 500 },
    { id: "analytics", label: "Google Analytics", price: 200 },
    { id: "chat", label: "Chat en vivo", price: 300 },
    { id: "social-media", label: "Integración redes sociales", price: 250 },
    { id: "newsletter", label: "Newsletter/Email marketing", price: 400 },
    { id: "multilang", label: "Sitio multiidioma", price: 800 },
    { id: "blog", label: "Blog/CMS personalizado", price: 600 },
    { id: "booking", label: "Sistema de reservas avanzado", price: 700 },
  ];
  
  export const steps = [
    { title: "Tipo de proyecto", description: "¿Qué tipo de sitio web necesitas?" },
    { title: "Tiempo", description: "¿Cuándo necesitas tu sitio web?" },
    { title: "Características", description: "¿Qué funcionalidades adicionales necesitas?" },
    { title: "Información", description: "Cuéntanos sobre tu proyecto" },
    { title: "Cotización", description: "Tu cotización personalizada" }
  ];