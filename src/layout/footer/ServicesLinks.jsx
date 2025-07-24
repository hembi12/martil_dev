// src/layout/footer/ServicesLinks.jsx
import { Link } from 'react-router-dom';

export default function ServicesLinks() {
  const services = [
    "Empresas medianas y grandes",
    "Reservas y citas en línea",
    "Influencers y creadores",
    "Freelancers y servicios",
    "Negocios pequeños",
    "Tiendas en línea",
  ];

  const quickLinks = [
    { text: "Sobre nosotros", href: "/sobre-nosotros" },
    { text: "Bolsa de trabajo", href: "/bolsa-de-trabajo" },
    { text: "Contacto", href: "/contacto" },
    { text: "Precios", href: "/precios" },
    { text: "Blog", href: "/blog" },
  ];

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const element = document.getElementById('servicios');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Servicios */}
      <div className="lg:col-span-1">
        <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6 text-white">
          Páginas web para:
        </h4>
        <ul className="space-y-2 sm:space-y-3">
          {services.map((service, index) => (
            <li key={index}>
              <a
                href="#servicios"
                className="text-neutral-300 text-sm sm:text-base hover:text-blue-300 focus:text-blue-300 focus:outline-none transition-colors duration-200 block py-1"
                onClick={handleScrollToServices}
              >
                {service}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Enlaces rápidos */}
      <div className="lg:col-span-1">
        <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6 text-white">
          Enlaces rápidos
        </h4>
        <ul className="space-y-2 sm:space-y-3">
          {quickLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                className="text-neutral-300 text-sm sm:text-base hover:text-blue-300 focus:text-blue-300 focus:outline-none transition-colors duration-200 block py-1"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}