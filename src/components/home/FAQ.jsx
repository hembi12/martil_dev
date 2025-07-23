import { useState } from "react";
import { Plus, Minus, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState(2);

  const handleContactUs = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message =
      "¡Hola! He revisado sus preguntas frecuentes pero tengo algunas dudas específicas sobre mi proyecto web. ¿Podrían ayudarme a resolverlas?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar mi sitio web?",
      answer:
        "El tiempo de desarrollo depende del tamaño del proyecto. Va desde 5 días hábiles para sitios pequeños hasta 30 días o más para proyectos grandes. Siempre te damos un cronograma antes de iniciar.",
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
    setVisibleItems((prev) => Math.min(prev + 2, faqs.length));
  };

  const showLessFAQs = () => {
    setVisibleItems(2);
    setOpenItem(null); // Cerrar cualquier FAQ abierta al contraer
  };

  const hasMoreToShow = visibleItems < faqs.length;

  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-neutral-100 to-neutral-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header de la sección - títulos más balanceados */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 text-shadow-sm">
            Preguntas frecuentes
          </h2>
        </div>

        {/* Lista de FAQs */}
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {faqs.slice(0, visibleItems).map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border border-neutral-200 transition-all duration-300 shadow-sm hover:shadow-md ${
                openItem === index
                  ? "shadow-md ring-1 ring-blue-200 border-blue-200"
                  : ""
              }`}
            >
              {/* Pregunta - Botón clickeable con mejor UX móvil */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-4 sm:p-6 lg:p-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-xl transition-all duration-200 group"
                aria-expanded={openItem === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                  {/* Pregunta - tamaños optimizados */}
                  <div className="flex-grow min-w-0 pr-2">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-neutral-900 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Icono de expansión - más touch-friendly */}
                  <div className="flex-shrink-0">
                    <div
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        openItem === index
                          ? "bg-blue-600 text-white"
                          : "bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100 group-hover:border-blue-300"
                      }`}
                    >
                      {openItem === index ? (
                        <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </div>
                  </div>
                </div>
              </button>

              {/* Respuesta - Panel expandible con mejor animación */}
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openItem === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                  {/* Línea divisoria sutil */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-4 sm:mb-6"></div>

                  <div className="pl-0 sm:pl-2 lg:pl-4">
                    <p className="text-neutral-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enlace Ver Más/Ver Menos - mejor UX */}
        {faqs.length > 2 && (
          <div className="text-center mt-6 sm:mt-8 lg:mt-12">
            {hasMoreToShow ? (
              <button
                onClick={showMoreFAQs}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-700 transition-all duration-300 group py-2 px-4 rounded-lg hover:bg-blue-50"
                aria-label={`Mostrar ${Math.min(
                  2,
                  faqs.length - visibleItems
                )} preguntas más`}
              >
                <span className="underline-offset-2 group-hover:underline">
                  Ver más preguntas
                </span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
              </button>
            ) : (
              <button
                onClick={showLessFAQs}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-700 transition-all duration-300 group py-2 px-4 rounded-lg hover:bg-blue-50"
                aria-label="Mostrar menos preguntas"
              >
                <span className="underline-offset-2 group-hover:underline">
                  Ver menos preguntas
                </span>
                <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            )}
          </div>
        )}

        {/* CTA al final - actualizado con el mismo estilo del Hero */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16 px-2 sm:px-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 lg:mb-6 text-shadow-sm">
            ¿Tienes alguna otra pregunta?
          </h3>
          <p className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl mb-4 max-w-3xl mx-auto leading-relaxed px-4">
            Nuestro equipo está aquí para ayudarte. Contáctanos y resolveremos
            todas tus dudas sobre tu proyecto web.
          </p>
          <button
            onClick={handleContactUs}
            className="w-auto sm:w-auto px-6 py-3 bg-blue-600 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            Contáctanos ahora
          </button>

          {/* Indicador adicional sutil para móvil */}
          <p className="text-xs sm:text-sm font-medium text-neutral-600 mt-3 sm:mt-4 flex items-center justify-center gap-1">
            Respuesta inmediata por WhatsApp
            <FaWhatsapp className="w-4 h-4 text-green-600" />
          </p>
        </div>
      </div>
    </section>
  );
}
