// Importamos solo los nombres de los iconos, no el JSX
import {
  Briefcase,
  Building,
  Globe,
  Users,
  Store,
  Sparkles,
  Smartphone,
  Tablet,
  Monitor,
  Moon,
  Languages,
  Zap,
  Shield,
  Search,
  ShoppingCart,
  Camera,
  Calendar,
  Clock,
  Contact,
} from "lucide-react";

export const servicesData = [
  {
    title: "Negocios pequeños",
    iconName: "Briefcase", // Solo el nombre del icono
    description: "Crea tu presencia online desde cero para atraer más clientes locales.",
    priceUSD: "$99 USD",
    priceMXN: "$1,980 MXN",
    estimatedTime: "5-7 días",
    features: [
      "Página informativa y contacto",
      "Diseño responsivo",
      "Optimización básica SEO",
    ],
    serviceIcons: [
      {
        iconName: "Smartphone",
        tooltip: "Optimizado para móviles",
      },
      {
        iconName: "Tablet",
        tooltip: "Compatible con tablets",
      },
      {
        iconName: "Monitor",
        tooltip: "Diseño para desktop",
      },
      {
        iconName: "Search",
        tooltip: "SEO básico incluido",
      },
      {
        iconName: "Moon",
        tooltip: "Modo oscuro disponible",
      },
      {
        iconName: "Languages",
        tooltip: "Soporte multiidioma",
      },
      {
        iconName: "Shield",
        tooltip: "Seguridad avanzada",
      },
    ],
  },
  {
    title: "Empresas medianas y grandes",
    iconName: "Building",
    description: "Desarrollamos sitios escalables, modernos y listos para crecer contigo.",
    priceUSD: "$199 USD",
    priceMXN: "$3,980 MXN",
    estimatedTime: "14-30 días",
    features: [
      "Múltiples secciones y CMS",
      "Alta velocidad y seguridad",
      "Integraciones avanzadas",
    ],
    serviceIcons: [
      {
        iconName: "Smartphone",
        tooltip: "Optimizado para móviles",
      },
      {
        iconName: "Tablet",
        tooltip: "Compatible con tablets",
      },
      {
        iconName: "Monitor",
        tooltip: "Diseño para desktop",
      },
      {
        iconName: "Moon",
        tooltip: "Modo oscuro disponible",
      },
      {
        iconName: "Languages",
        tooltip: "Soporte multiidioma",
      },
      {
        iconName: "Shield",
        tooltip: "Seguridad avanzada",
      },
      {
        iconName: "Zap",
        tooltip: "Carga ultrarrápida",
      },
    ],
  },
  {
    title: "Tiendas en línea",
    iconName: "Store",
    description: "Vende productos 24/7 con una tienda rápida, segura y personalizada.",
    priceUSD: "$99 USD",
    priceMXN: "$1,980 MXN",
    estimatedTime: "7-30 días",
    features: [
      "Catálogo de productos",
      "Pasarelas de pago",
      "Gestión de pedidos",
    ],
    serviceIcons: [
      {
        iconName: "Smartphone",
        tooltip: "Optimizado para móviles",
      },
      {
        iconName: "Tablet",
        tooltip: "Compatible con tablets",
      },
      {
        iconName: "Monitor",
        tooltip: "Diseño para desktop",
      },
      {
        iconName: "ShoppingCart",
        tooltip: "Carrito de compras",
      },
      {
        iconName: "Shield",
        tooltip: "Pagos seguros",
      },
      {
        iconName: "Search",
        tooltip: "SEO para e-commerce",
      },
      {
        iconName: "Zap",
        tooltip: "Carga ultrarrápida",
      },
    ],
  },
  {
    title: "Influencers y creadores",
    iconName: "Sparkles",
    description: "Una web con tu estilo, integrada con redes sociales y enfocada en tu audiencia.",
    priceUSD: "$99 USD",
    priceMXN: "$1,980 MXN",
    estimatedTime: "7-21 días",
    features: [
      "Integración con redes",
      "Galerías y videos",
      "Formulario de contacto",
    ],
    serviceIcons: [
      {
        iconName: "Smartphone",
        tooltip: "Optimizado para móviles",
      },
      {
        iconName: "Tablet",
        tooltip: "Compatible con tablets",
      },
      {
        iconName: "Monitor",
        tooltip: "Diseño para desktop",
      },
      {
        iconName: "Moon",
        tooltip: "Modo oscuro disponible",
      },
      {
        iconName: "Shield",
        tooltip: "Seguridad avanzada",
      },
      {
        iconName: "Camera",
        tooltip: "Galerías optimizadas",
      },
      {
        iconName: "Globe",
        tooltip: "Integración redes sociales",
      },
    ],
  },
  {
    title: "Freelancers y servicios",
    iconName: "Users",
    description: "Portafolios, reservas de citas y contacto directo con tus clientes.",
    priceUSD: "$99 USD",
    priceMXN: "$1,980 MXN",
    estimatedTime: "7-30 días",
    features: [
      "Portafolio profesional",
      "Botón de contacto rápido",
      "Reservas y calendario",
    ],
    serviceIcons: [
      {
        iconName: "Smartphone",
        tooltip: "Optimizado para móviles",
      },
      {
        iconName: "Tablet",
        tooltip: "Compatible con tablets",
      },
      {
        iconName: "Monitor",
        tooltip: "Diseño para desktop",
      },
      {
        iconName: "Calendar",
        tooltip: "Sistema de reservas",
      },
      {
        iconName: "Shield",
        tooltip: "Seguridad avanzada",
      },
      {
        iconName: "Camera",
        tooltip: "Galerías optimizadas",
      },
      {
        iconName: "Contact",
        tooltip: "Contacto directo",
      },
    ],
  },
  {
    title: "Reservas y citas en línea",
    iconName: "Globe",
    description: "Webs ideales para profesionales que agendan con clientes: doctores, coaches, terapeutas, etc.",
    priceUSD: "$99 USD",
    priceMXN: "$1,980 MXN",
    estimatedTime: "7-28 días",
    features: [
      "Agenda interactiva",
      "Notificaciones por correo",
      "Formulario de contacto personalizado",
    ],
    serviceIcons: [
      {
        iconName: "Smartphone",
        tooltip: "Optimizado para móviles",
      },
      {
        iconName: "Tablet",
        tooltip: "Compatible con tablets",
      },
      {
        iconName: "Monitor",
        tooltip: "Diseño para desktop",
      },
      {
        iconName: "Calendar",
        tooltip: "Agenda avanzada",
      },
      {
        iconName: "Shield",
        tooltip: "Seguridad avanzada",
      },
      {
        iconName: "Clock",
        tooltip: "Recordatorios automáticos",
      },
      {
        iconName: "Contact",
        tooltip: "Contacto directo",
      },
    ],
  },
];

// Mapa de iconos para convertir nombres a componentes JSX
export const iconMap = {
  Briefcase,
  Building,
  Globe,
  Users,
  Store,
  Sparkles,
  Smartphone,
  Tablet,
  Monitor,
  Moon,
  Languages,
  Zap,
  Shield,
  Search,
  ShoppingCart,
  Camera,
  Calendar,
  Clock,
  Contact,
};