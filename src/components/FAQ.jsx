import { useState } from "react";
import { Plus, Minus, Mail, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState(2);

  const handleContactUs = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message = "¡Hola! He revisado sus preguntas frecuentes pero tengo algunas dudas específicas sobre mi proyecto web. ¿Podrían ayudarme a resolverlas?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar mi sitio web?",
      answer:
        "El tiempo de desarrollo varía según el tipo de proyecto. Un sitio básico para pequeños negocios toma entre 5-7 días hábiles, mientras que tiendas en línea o sitios más complejos pueden tomar de 10-15 días. Te proporcionamos un cronograma detallado antes de comenzar.",
      icon: <Mail className="w-5 h-5 text-blue-600" />,
    },
    {
      question: "¿Qué incluye exactamente cada paquete?",
      answer:
        "Cada paquete incluye diseño responsivo, optimización SEO básica, formularios de contacto, integración con redes sociales, certificado SSL, y hosting por 3 meses. Los paquetes más avanzados incluyen funcionalidades adicionales como e-commerce, sistemas de reservas, o CMS personalizado.",
      icon: <Mail className="w-5 h-5 text-blue-600" />,
    },
    {
      question: "¿Puedo hacer cambios después de que esté terminado?",
      answer:
        "¡Por supuesto! Incluimos 2 rondas de revisiones sin costo durante el desarrollo. Después de la entrega, ofrecemos soporte técnico y actualizaciones. Los cambios menores están incluidos en el mantenimiento, mientras que modificaciones mayores se cotizan por separado.",
      icon: <Mail className="w-5 h-5 text-blue-600" />,
    },
    {
      question: "¿El sitio web será compatible con móviles?",
      answer:
        "Absolutamente. Todos nuestros sitios web son completamente responsivos, lo que significa que se ven y funcionan perfectamente en teléfonos móviles, tablets y computadoras de escritorio. Optimizamos la experiencia para cada dispositivo.",
      icon: <Mail className="w-5 h-5 text-blue-600" />,
    },
    {
      question: "¿Qué pasa con el hosting y el dominio?",
      answer:
        "Incluimos hosting gratuito por los primeros 3 meses. Después, puedes continuar con nuestro servicio de hosting (desde $15 USD/mes) o migrar a tu proveedor preferido. Te ayudamos con la configuración del dominio si ya tienes uno, o te asistimos para comprar uno nuevo.",
      icon: <Mail className="w-5 h-5 text-blue-600" />,
    },
    {
      question: "¿Ofrecen capacitación para administrar el sitio?",
      answer:
        "Sí, incluimos una sesión de capacitación de 1 hora donde te enseñamos cómo actualizar contenido, agregar productos (en tiendas), gestionar formularios de contacto, y realizar tareas básicas de mantenimiento. También proporcionamos documentación detallada.",
      icon: <Mail className="w-5 h-5 text-blue-600" />,
    },
    {
      question: "¿Qué formas de pago aceptan?",
      answer:
        "Aceptamos transferencias bancarias, PayPal, y tarjetas de crédito/débito. Manejamos un esquema de pagos flexible: 50% al iniciar el proyecto y 50% al finalizar. Para proyectos grandes, podemos establecer un plan de pagos personalizado.",
      icon: <Mail className="w-5 h-5 text-blue-600" />,
    },
    {
      question: "¿Qué sucede si no estoy satisfecho con el resultado?",
      answer:
        "Tu satisfacción es nuestra prioridad. Ofrecemos múltiples rondas de revisiones durante el desarrollo para asegurar que el sitio cumpla tus expectativas. Si después de las revisiones incluidas aún no estás conforme, trabajaremos contigo para encontrar una solución satisfactoria.",
      icon: <Mail className="w-5 h-5 text-blue-600" />,
    },
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const showMoreFAQs = () => {
    setVisibleItems(prev => Math.min(prev + 2, faqs.length));
  };

  const showLessFAQs = () => {
    setVisibleItems(2);
    setOpenItem(null); // Cerrar cualquier FAQ abierta al contraer
  };

  const hasMoreToShow = visibleItems < faqs.length;

  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-neutral-100 to-neutral-50 py-4 sm:py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header de la sección */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 text-shadow-xs">
            Preguntas frecuentes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Resolvemos las dudas más comunes sobre nuestros servicios de
            desarrollo web
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.slice(0, visibleItems).map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg border border-neutral-200 transition-all duration-300 shadow-md hover:shadow-lg ${
                openItem === index ? "shadow-md ring-2 ring-blue-100" : ""
              }`}
            >
              {/* Pregunta - Botón clickeable */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 sm:p-8 focus:outline-none focus:ring-4 focus:ring-blue-200 rounded-xl sm:rounded-2xl transition-all duration-200"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Pregunta */}
                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 leading-tight mb-1">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Icono de expansión */}
                  <div className="flex-shrink-0 ml-4">
                    <div
                      className={`p-1 rounded-lg transition-all duration-300 cursor-pointer ${
                        openItem === index
                          ? "bg-blue-600 text-white rotate-180"
                          : "bg-white border border-blue-600 text-blue-600 hover:bg-blue-100"
                      }`}
                    >
                      {openItem === index ? (
                        <Minus className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </div>
                  </div>
                </div>
              </button>

              {/* Respuesta - Panel expandible */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 mt-4 sm:pb-8">
                  <div className="pl-12 sm:pl-16 md:pl-20">
                    <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enlace Ver Más/Ver Menos */}
        {faqs.length > 2 && (
          <div className="text-center mt-8 sm:mt-12">
            {hasMoreToShow ? (
              <button
                onClick={showMoreFAQs}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-700 transition-all duration-300 group"
              >
                <span className="group-hover:border-blue-700 hover:underline pb-0.5 cursor-pointer">Ver más preguntas</span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
              </button>
            ) : (
              <button
                onClick={showLessFAQs}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-700 transition-all duration-300 group"
              >
                <span className="group-hover:border-blue-700 hover:underline pb-0.5 cursor-pointer">Ver menos preguntas</span>
                <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            )}
          </div>
        )}

        {/* CTA al final */}
        <div className="text-center mt-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-4 sm:mb-6">
            ¿Tienes alguna otra pregunta?
          </h3>
          <p className="text-neutral-600 text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Nuestro equipo está aquí para ayudarte. Contáctanos y resolveremos
            todas tus dudas sobre tu proyecto web.
          </p>
          <button 
            onClick={handleContactUs}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            Contáctanos ahora
          </button>
        </div>
      </div>
    </section>
  );
}