import {
    Briefcase,
    Building,
    Store,
    Sparkles,
    Users,
    Globe,
  } from "lucide-react";
  
  export const testimonialsData = [
    {
      id: 1,
      name: "María G.",
      business: "Panadería Conchita",
      category: "Negocios pequeños",
      categoryIcon: "Briefcase",
      rating: 5,
      review:
        "Desde que lancé mi página web, las ventas han aumentado un 40%. Ahora los clientes pueden ver nuestros productos y hacer pedidos fácilmente. El diseño es hermoso y funciona perfecto en el celular.",
      location: "Ciudad de México",
      service: "Página informativa",
      businessType: "Panadería local",
      date: "Marzo 2025",
    },
    {
      id: 2,
      name: "Carlos M.",
      business: "Constructora Mendoza",
      category: "Empresas medianas y grandes",
      categoryIcon: "Building",
      rating: 5,
      review:
        "Necesitábamos una presencia digital profesional para nuestra constructora. El resultado superó nuestras expectativas. Tenemos un CMS que manejamos fácilmente y la velocidad de carga es impresionante.",
      location: "Guadalajara",
      service: "Sitio empresarial",
      businessType: "Construcción",
      date: "Febrero 2025",
    },
    {
      id: 3,
      name: "Ana R.",
      business: "Boutique Moda Única",
      category: "Tiendas en línea",
      categoryIcon: "Store",
      rating: 5,
      review:
        "Mi tienda online está generando ventas las 24 horas. El proceso de compra es súper fácil para mis clientes y yo puedo gestionar todo desde el panel administrativo. ¡Increíble inversión!",
      location: "Monterrey",
      service: "E-commerce",
      businessType: "Moda y accesorios",
      date: "Enero 2025",
    },
    {
      id: 4,
      name: "Diego H.",
      business: "@DiegoFitness",
      category: "Influencers y creadores",
      categoryIcon: "Sparkles",
      rating: 5,
      review:
        "Como fitness influencer, necesitaba una web que reflejara mi marca personal. Quedó espectacular, con mis videos integrados y enlaces a todas mis redes. Mis seguidores aman el diseño.",
      location: "Cancún",
      service: "Sitio personal",
      businessType: "Fitness e influencer",
      date: "Abril 2025",
    },
    {
      id: 5,
      name: "Laura V.",
      business: "Estudio Fotográfico LV",
      category: "Freelancers y servicios",
      categoryIcon: "Users",
      rating: 5,
      review:
        "Mi portafolio online ha sido clave para conseguir más clientes. Las galerías se ven increíbles y el botón de contacto directo hace que sea súper fácil para los clientes escribirme.",
      location: "Puebla",
      service: "Portafolio",
      businessType: "Fotografía",
      date: "Mayo 2025",
    },
    {
      id: 6,
      name: "Dr. Roberto S.",
      business: "Consultorio Dental",
      category: "Reservas y citas en línea",
      categoryIcon: "Globe",
      rating: 5,
      review:
        "El sistema de citas online ha revolucionado mi consulta. Los pacientes pueden agendar fácilmente y yo recibo notificaciones automáticas. Ha reducido las cancelaciones en un 60%.",
      location: "Querétaro",
      service: "Sistema de citas",
      businessType: "Servicios médicos",
      date: "Junio 2025",
    },
  ];
  
  // Mapa de iconos para convertir nombres a componentes JSX
  export const iconMap = {
    Briefcase,
    Building,
    Store,
    Sparkles,
    Users,
    Globe,
  };
  
  // Estadísticas de la empresa
  export const statsData = [
    {
      value: "100+",
      label: "Clientes satisfechos",
    },
    {
      value: "4.9",
      label: "Calificación promedio",
    },
    {
      value: "98%",
      label: "Tasa de satisfacción",
    },
    {
      value: "24/7",
      label: "Soporte Técnico",
    },
  ];