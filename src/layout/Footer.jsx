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
    Zap,
    Shield,
  } from "lucide-react";
  
  export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    const services = [
      "Negocios pequeños",
      "Empresas medianas y grandes",
      "Tiendas en línea",
      "Influencers y creadores",
      "Freelancers y servicios",
      "Reservas y citas en línea"
    ];
  
    const quickLinks = [
      "Sobre nosotros",
      "Portafolio",
      "Precios",
      "Blog",
      "Contacto"
    ];
  
    const socialLinks = [
      { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
      { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
      { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
      { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" }
    ];
  
    return (
      <footer className="bg-gray-900 text-white">
        {/* Sección principal del footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Información de la empresa */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Box className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">MARTIL.DEV</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Creamos sitios web profesionales que impulsan tu negocio. 
                Diseño moderno, funcionalidad avanzada y resultados garantizados.
              </p>
              
              {/* Características destacadas */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span>Desarrollo rápido y eficiente</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>Sitios seguros y confiables</span>
                </div>
              </div>
            </div>
  
            {/* Servicios */}
            <div className="lg:col-span-1">
              <h4 className="text-lg sm:text-xl font-semibold mb-6">Paginas web para:</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 text-sm sm:text-base hover:text-blue-400 transition-colors duration-200 block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Enlaces rápidos */}
            <div className="lg:col-span-1">
              <h4 className="text-lg sm:text-xl font-semibold mb-6">Enlaces rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 text-sm sm:text-base hover:text-blue-400 transition-colors duration-200 block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Información de contacto */}
            <div className="lg:col-span-1">
              <h4 className="text-lg sm:text-xl font-semibold mb-6">Contáctanos</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a 
                      href="mailto:contacto@webstudio.com" 
                      className="text-gray-300 text-sm sm:text-base hover:text-blue-400 transition-colors duration-200"
                    >
                      contacto@martil.dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <a 
                      href="tel:+525555123456" 
                      className="text-gray-300 text-sm sm:text-base hover:text-blue-400 transition-colors duration-200"
                    >
                      +52 56 3750 0980
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Ubicación</p>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Ciudad de México, México
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Horarios</p>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Lun - Vie: 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Newsletter */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-lg sm:text-xl font-semibold mb-4">
                Mantente al día con las últimas tendencias web
              </h4>
              <p className="text-gray-300 text-sm sm:text-base mb-6">
                Recibe tips, recursos y ofertas especiales directamente en tu bandeja de entrada.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 whitespace-nowrap">
                  Suscribirme
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Sección inferior del footer */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <span>© {currentYear} MARTIL.DEV</span>
              </div>
  
              {/* Redes sociales */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400 hidden sm:block">Síguenos:</span>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 text-gray-400 hover:text-white"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
  
              {/* Enlaces legales */}
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                  Privacidad
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                  Términos
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }