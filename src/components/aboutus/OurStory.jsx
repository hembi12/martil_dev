import { FaWhatsapp } from "react-icons/fa";

const OurStory = () => {
  // Datos de estadísticas específicas para OurStory
  const statsData = [
    {
      value: "150+",
      label: "Proyectos Completados",
    },
    {
      value: "98%",
      label: "Satisfacción del Cliente",
    },
    {
      value: "2+",
      label: "Años de Experiencia",
    },
    {
      value: "24/7",
      label: "Soporte Técnico",
    },
  ];

  const handleStartProject = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message =
      "¡Hola! He leído su historia y me interesa trabajar con su equipo.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-gradient-to-b from-neutral-50 to-neutral-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header centrado */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 text-shadow-sm">
            Nuestra Historia
          </h2>
        </div>

        {/* Contenido principal centrado */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <div className="space-y-6 sm:space-y-8 text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed">
            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-neutral-800">
              En <strong>Martil.dev</strong>, nos especializamos en el{" "}
              <strong>desarrollo de sitios web profesionales</strong> para
              empresas de todos los tamaños. Desde 2024, nuestra misión ha sido
              clara:{" "}
              <strong>hacer accesible el diseño web de alta calidad</strong>{" "}
              para negocios que quieren destacar en internet.
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-lg">
              Iniciamos como un equipo de{" "}
              <strong>desarrolladores freelance</strong> apasionados por la
              tecnología, y hoy somos una{" "}
              <strong>agencia de desarrollo web</strong> que ha ayudado a más de
              150 empresas a construir su presencia digital. Combinamos
              experiencia técnica con un enfoque personalizado para cada
              cliente.
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-neutral-800">
              Nuestro equipo ágil utiliza las últimas{" "}
              <strong>tecnologías web</strong> para crear{" "}
              <strong>
                sitios rápidos, optimizados para SEO y con un diseño impactante
              </strong>
              . En martil.dev, no solo construimos páginas: desarrollamos
              soluciones digitales que impulsan resultados reales.
            </p>
          </div>
        </div>

        {/* Estadísticas mejoradas - sin contenedor */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          {/* Estadísticas - Grid optimizado para mejor lectura */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center group">
                {/* Números principales - tamaños más balanceados */}
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-600 mb-2 sm:mb-3 md:mb-4 group-hover:scale-105 transition-all duration-300 ease-out leading-none text-shadow-md">
                  {stat.value}
                </div>

                {/* Labels - mejor jerarquía tipográfica con responsividad completa */}
                <div className="text-neutral-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-medium leading-snug px-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Final - CTA unificado */}
        <div className="text-center px-4 sm:px-6">
          {/* Título principal - más legible en móvil con responsividad completa */}
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 lg:mb-6 text-shadow-sm">
            ¿Te gustaría formar parte de nuestra historia?
          </h3>
          {/* Botón CTA - mismo estilo que Hero y FAQ */}
          <button
            onClick={handleStartProject}
            className="w-auto sm:w-auto px-6 py-3 bg-blue-600 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            Comenzar mi proyecto
          </button>
          {/* Indicador adicional sutil para móvil con responsividad completa */}
          <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-base font-medium text-neutral-600 mt-3 sm:mt-4 flex items-center justify-center gap-1">
            Respuesta inmediata por WhatsApp
            <FaWhatsapp className="w-4 h-4 text-green-600" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
