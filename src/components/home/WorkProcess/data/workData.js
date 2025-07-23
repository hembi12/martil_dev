import {
    MessageSquare,
    FileText,
    Palette,
    Code,
    TestTube,
    Rocket,
  } from "lucide-react";
  
  export const workSteps = [
    {
      id: 1,
      title: "Consulta inicial",
      description:
        "Conversamos sobre tu proyecto, objetivos y necesidades específicas para entender tu visión completa.",
      icon: MessageSquare,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      gradientColor: "bg-gradient-to-br from-teal-400 to-cyan-600 shadow-md",
      iconColor: "text-blue-50",
      duration: "1 día*",
      details: [
        "Análisis de requerimientos",
        "Definición de objetivos",
        "Propuesta personalizada",
      ],
    },
    {
      id: 2,
      title: "Planificación",
      description:
        "Definimos la estructura, funcionalidades y cronograma del proyecto basado en tus requerimientos.",
      icon: FileText,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      gradientColor: "bg-gradient-to-br from-red-500 to-rose-700 shadow-md",
      iconColor: "text-purple-50",
      duration: "1-2 días*",
      details: [
        "Arquitectura del sitio",
        "Wireframes básicos",
        "Cronograma detallado",
      ],
    },
    {
      id: 3,
      title: "Diseño",
      description:
        "Creamos el diseño visual y la experiencia de usuario que refleje tu marca y atraiga a tu audiencia.",
      icon: Palette,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      gradientColor: "bg-gradient-to-br from-orange-400 to-amber-600 shadow-md",
      iconColor: "text-pink-50",
      duration: "2-5 días*",
      details: [
        "Mockups de alta fidelidad",
        "Paleta de colores",
        "Elementos visuales únicos",
      ],
    },
    {
      id: 4,
      title: "Desarrollo",
      description:
        "Programamos tu sitio web con las mejores tecnologías, asegurando velocidad y funcionalidad.",
      icon: Code,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      gradientColor:
        "bg-gradient-to-br from-purple-500 to-fuchsia-700 shadow-md",
      iconColor: "text-green-50",
      duration: "3-15 días*",
      details: [
        "Código limpio y optimizado",
        "Funcionalidades avanzadas",
        "Integración de APIs",
      ],
    },
    {
      id: 5,
      title: "Pruebas",
      description:
        "Realizamos pruebas exhaustivas en diferentes dispositivos y navegadores para garantizar calidad.",
      icon: TestTube,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      gradientColor:
        "bg-gradient-to-br from-green-500 to-emerald-700 shadow-md",
      iconColor: "text-orange-50",
      duration: "1-3 días*",
      details: [
        "Testing multiplataforma",
        "Optimización de rendimiento",
        "Corrección de errores",
      ],
    },
    {
      id: 6,
      title: "Lanzamiento",
      description:
        "Publicamos tu sitio web y te entregamos todo listo para que comiences a recibir clientes.",
      icon: Rocket,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      gradientColor:
        "bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-md",
      iconColor: "text-indigo-50",
      duration: "1 día*",
      details: [
        "Despliegue en producción",
        "Configuración de dominio",
        "Entrega de credenciales",
      ],
    },
  ];