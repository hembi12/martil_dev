import { CheckCircle, ShieldCheck, CircleHelp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import CountdownTimer from "./CountdownTimer";
import BrowserMockup from "./BrowserMockup";

export default function Hero() {

  const handleQuoteClick = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message =
      "¡Hola! Me interesa solicitar una cotización gratuita para mi sitio web.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleOnlineQuoteClick = () => {
    // Aquí puedes redirigir a tu formulario de cotización en línea
    // Por ejemplo: window.location.href = '/cotizacion-online';
    console.log("Redirigir a cotización en línea");
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Texto principal */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Texto principal */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-shadow-md leading-tight">
              Tu web. Tu{" "}
              <span className="underline underline-offset-4 decoration-blue-500">
                control
              </span>
              . Con soporte cuando lo necesites.
            </h1>
          </div>

          {/* Lista de beneficios - Las 4 ventajas más claras */}
          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
            {[
              {
                text: "Sitio web 100% personalizado",
                tooltip:
                  "Diseño único creado específicamente para tu negocio, sin plantillas genéricas. Incluye todas las páginas que necesites.",
              },
              {
                text: "Dominio y hosting incluidos",
                tooltip:
                  "Tu dominio personalizado y alojamiento web profesional incluidos en el desarrollo inicial, sin costos adicionales.",
              },
              {
                text: "Plan de mantenimiento opcional",
                tooltip:
                  "Si eliges nuestro plan mensual, nos encargamos de actualizaciones, respaldos, seguridad y mejoras continuas sin que te preocupes por nada técnico.",
              },
              {
                text: "Soporte técnico especializado",
                tooltip:
                  "Atención técnica profesional vía WhatsApp y email. En el plan de mantenimiento incluye soporte prioritario 24/7.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start sm:items-center gap-3 text-neutral-100 font-medium justify-center lg:justify-start relative"
              >
                <CheckCircle className="text-green-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-base md:text-lg text-left">
                  {item.text}
                </span>

                {/* Ícono de ayuda individual */}
                <div className="relative">
                  <div className="text-neutral-300">
                    <CircleHelp className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Precio - MEJORADO */}
          <div className="mt-4 sm:mt-6 text-center lg:text-left">
            <div className="space-y-2">
              {/* Precio de desarrollo */}
              <div className="text-2xl md:text-3xl">
                <span className="text-base sm:text-lg text-neutral-200 font-normal">
                  Desarrollo inicial:
                </span>
                <span className="ml-2 text-green-400 font-bold text-shadow-md">
                  $1,980
                </span>
                <span className="text-lg text-neutral-200 font-normal ml-1">
                  MXN
                </span>
              </div>

              {/* Precio de mantenimiento */}
              <div className="text-xl md:text-2xl">
                <span className="text-sm sm:text-base text-neutral-300 font-normal">
                  Mantenimiento opcional:
                </span>
                <span className="ml-2 text-amber-400 font-semibold">$299</span>
                <span className="text-base text-neutral-300 font-normal ml-1">
                  MXN/mes
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
              {/* Botón primario - WhatsApp */}
              <button
                onClick={handleQuoteClick}
                className="inline-flex items-center gap-2 w-auto sm:w-auto px-6 py-3 bg-green-600 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <FaWhatsapp className="w-5 h-5" />
                Cotización gratuita
              </button>

              {/* Botón secundario - Solo contador */}
              <button onClick={handleOnlineQuoteClick}>
                <CountdownTimer />
              </button>
            </div>

            {/* Badge de seguridad - MEJORADO */}
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-neutral-200">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span className="text-xs font-medium sm:text-sm">
                Garantía de satisfacción
              </span>
            </div>
          </div>
        </div>

        {/* Mockup de navegador Mac */}
        <BrowserMockup />
      </div>
    </div>
  );
}