import {
  MessageSquare,
  FileText,
  Palette,
  Code,
  TestTube,
  Rocket,
  CheckCircle,
  Clock,
} from "lucide-react";
import WorkCTA from "./WorkCTA";

const WorkProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Consulta inicial",
      description:
        "Conversamos sobre tu proyecto, objetivos y necesidades específicas para entender tu visión completa.",
      icon: MessageSquare,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      gradientColor: "bg-gradient-to-br from-teal-400 to-cyan-600 shadow-xs",
      iconColor: "text-blue-50",
      duration: "1 día",
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
      gradientColor: "bg-gradient-to-br from-red-500 to-rose-700 shadow-xs",
      iconColor: "text-purple-50",
      duration: "1-2 días",
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
      gradientColor: "bg-gradient-to-br from-orange-400 to-amber-600 shadow-xs",
      iconColor: "text-pink-50",
      duration: "2-5 días",
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
        "bg-gradient-to-br from-purple-500 to-fuchsia-700 shadow-xs",
      iconColor: "text-green-50",
      duration: "3-15 días",
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
        "bg-gradient-to-br from-green-500 to-emerald-700 shadow-xs",
      iconColor: "text-orange-50",
      duration: "1-3 días",
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
        "bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-xs",
      iconColor: "text-indigo-50",
      duration: "1 día",
      details: [
        "Despliegue en producción",
        "Configuración de dominio",
        "Entrega de credenciales",
      ],
    },
  ];

  return (
    <section
      id="work-process"
      className="bg-gradient-to-b from-neutral-50 to-neutral-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header minimalista */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 text-shadow-xs leading-tight">
            Proceso de trabajo
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Simple y eficiente en 6 pasos
          </p>
        </div>

        {/* Scroll horizontal de pasos */}
        <div className="relative">
          {/* Contenedor con scroll horizontal */}
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-6 sm:gap-8 min-w-max">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.id}
                    className="flex-none w-80 sm:w-96 lg:w-[420px]"
                  >
                    <div
                      className={`bg-white shadow-md hover:shadow-lg rounded-lg p-6 sm:p-8 text-left transition-all duration-300 flex flex-col justify-between min-h-[500px] sm:min-h-[580px] md:min-h-[600px] ${
                        index === 1
                          ? "animate-delay-1"
                          : index === 2
                          ? "animate-delay-2"
                          : index === 3
                          ? "animate-delay-3"
                          : index === 4
                          ? "animate-delay-4"
                          : index === 5
                          ? "animate-delay-5"
                          : ""
                      }`}
                    >
                      <div className="flex-grow">
                        {/* Header de la tarjeta */}
                        <div className="flex items-start gap-3 sm:gap-4 mb-4">
                          <div
                            className={`flex-shrink-0 p-2 sm:p-3 ${step.gradientColor} rounded-lg shadow-xs`}
                          >
                            <Icon
                              className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${step.iconColor}`}
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-800 text-shadow-xs leading-tight">
                              {step.title}
                            </h3>
                            <div className="flex items-center gap-2 text-neutral-500 mt-1">
                              <span className="text-2xl sm:text-3xl font-bold text-neutral-200 text-shadow-xs">
                                {String(step.id).padStart(2, "0")}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Duración */}
                        <div className="mb-4 sm:mb-6">
                          <div className="flex items-center gap-2 text-green-600">
                            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                            <span className="text-sm sm:text-base font-medium">
                              Tiempo estimado: {step.duration}
                            </span>
                          </div>
                        </div>

                        {/* Descripción */}
                        <p className="text-neutral-600 mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                          {step.description}
                        </p>

                        {/* Lista de características */}
                        <div className="space-y-3 mb-4">
                          <h4 className="font-semibold text-neutral-900 text-sm sm:text-base">
                            Qué incluye este paso:
                          </h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {step.details.map((detail, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 sm:gap-3 text-neutral-700 text-sm sm:text-base"
                              >
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Texto adicional */}
                        <div className="mb-4">
                          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                            Cada paso está diseñado para garantizar la calidad y
                            satisfacción
                          </p>
                        </div>
                      </div>

                      {/* Badge del paso */}
                      <div className="mt-auto">
                        <div
                          className={`w-full px-4 py-3 ${step.bgColor} ${step.color} font-semibold rounded-lg text-sm sm:text-base text-center text-shadow-xs border-2 ${step.borderColor}`}
                        >
                          Paso {step.id} de {steps.length}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="flex justify-center mt-4 gap-2">
            <div className="text-sm text-neutral-500 flex items-center gap-2">
              <span>Desliza para ver los pasos</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA minimalista */}
        <WorkCTA />
      </div>
    </section>
  );
};

export default WorkProcess;