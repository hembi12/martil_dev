import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Box,
  CheckCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Negocios pequeños",
    "Empresas medianas y grandes",
    "Tiendas en línea",
    "Influencers y creadores",
    "Freelancers y servicios",
    "Reservas y citas en línea",
  ];

  const quickLinks = [
    { text: "Sobre nosotros", href: "/sobre-nosotros" },
    { text: "Portafolio", href: "/portafolio" },
    { text: "Precios", href: "/precios" },
    { text: "Blog", href: "/blog" },
    { text: "Contacto", href: "/contacto" },
  ];

  /*
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ];
  */

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message = "¡Hola! Tengo algunas dudas específicas sobre mi proyecto web. ¿Podrían ayudarme a resolverlas?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Newsletter al principio */}
        <div className="mb-12 pb-8 border-b border-neutral-800">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg sm:text-xl font-semibold mb-4">
              Mantente al día con las últimas tendencias web
            </h4>
            <p className="text-neutral-300 text-sm sm:text-base mb-6">
              Recibe tips, recursos y ofertas especiales directamente en tu
              bandeja de entrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg bg-neutral-100 border border-neutral-800 text-neutral-900 placeholder-neutral-600"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 whitespace-nowrap cursor-pointer">
                Suscribirme
              </button>
            </div>
          </div>
        </div>

        {/* Sección principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Información de la empresa */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Box className="w-6 h-6 text-blue-50" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">MARTIL.DEV</h3>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              Olvídate de lo genérico. Diseñamos desde cero pensando en tu
              negocio, tus objetivos y tus clientes.
            </p>

            {/* Características destacadas */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Dominio y hosting gratis</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>100% responsivo</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold mb-6">
              Paginas web para:
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#servicios"
                    className="text-neutral-300 text-sm sm:text-base hover:text-blue-300 transition-colors duration-200 block"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('servicios');
                      if (element) {
                        const yOffset = -80; // Offset negativo para posicionar por encima del título
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div className="lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold mb-6">
              Enlaces rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = link.href;
                    }}
                    className="text-neutral-300 text-sm sm:text-base hover:text-blue-300 transition-colors duration-200 block"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold mb-6">
              Contáctanos
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <a
                    href="mailto:contacto@martil.dev"
                    className="text-neutral-200 text-sm sm:text-base hover:text-blue-300 transition-colors duration-200"
                  >
                    contacto@martil.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neutral-400">Teléfono</p>
                  <a
                    href="#"
                    onClick={handleWhatsAppClick}
                    className="text-neutral-200 text-sm sm:text-base hover:text-blue-300 transition-colors duration-200 cursor-pointer"
                  >
                    +52 56 3750 0980
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neutral-300">Ubicación</p>
                  <p className="text-neutral-200 text-sm sm:text-base">
                    Ciudad de México, México
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neutral-400">Horarios</p>
                  <p className="text-neutral-200 text-sm sm:text-base">
                    Lun - Vie: 9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior del footer */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-1 text-sm text-neutral-100">
              <span>© {currentYear} MARTIL.DEV</span>
            </div>

            {/* Redes sociales - COMENTADO */}
            {/*
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-100 hidden sm:block">
                Síguenos:
              </span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 text-blue-50"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            */}

            {/* Enlaces legales */}
            <div className="flex gap-6 text-sm text-neutral-100">
              <a
                href="/privacidad"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/privacidad";
                }}
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Privacidad
              </a>
              <a
                href="/terminos"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/terminos";
                }}
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}