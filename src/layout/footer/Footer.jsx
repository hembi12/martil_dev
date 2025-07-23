// src/layout/footer/Footer.jsx
import { Link } from 'react-router-dom';
import CompanyInfo from './CompanyInfo';
import ServicesLinks from './ServicesLinks';
import ContactSection from './ContactSection';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Sección principal del footer - Grid mejorado para móvil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <CompanyInfo />
          <ServicesLinks />
          <ContactSection />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-neutral-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-1 text-xs sm:text-sm text-neutral-300 order-2 sm:order-1">
              <span>© {currentYear} Martil.dev - Todos los derechos reservados</span>
            </div>

            {/* Enlaces legales */}
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-300 order-1 sm:order-2">
              <Link
                to="/politica-de-privacidad"
                className="hover:text-blue-300 focus:text-blue-300 focus:outline-none transition-colors duration-200 py-1"
              >
                Política de privacidad
              </Link>
              <Link
                to="/terminos-y-condiciones"
                className="hover:text-blue-300 focus:text-blue-300 focus:outline-none transition-colors duration-200 py-1"
              >
                Términos y condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}