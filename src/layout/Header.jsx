import { useState, useEffect } from 'react';
import { Menu, X, Home, Box, Star, HelpCircle, Route } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const menuItems = [
    { 
      id: 'inicio', 
      label: 'Inicio', 
      href: '#', 
      icon: <Home className="w-4 h-4" />
    },
    { 
      id: 'servicios', 
      label: 'Servicios', 
      href: '#servicios', 
      icon: <Box className="w-4 h-4" />
    },
    { 
      id: 'work-process', 
      label: 'Proceso', 
      href: '#work-process', 
      icon: <Route className="w-4 h-4" />
    },
    { 
      id: 'testimonios', 
      label: 'Reseñas', 
      href: '#testimonios', 
      icon: <Star className="w-4 h-4" />
    },
    { 
      id: 'faq', 
      label: 'FAQ', 
      href: '#faq', 
      icon: <HelpCircle className="w-4 h-4" />
    }
  ];

  // Función para detectar la sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'work-process', 'testimonios', 'faq'];
      const scrollPosition = window.scrollY + 100; // Offset para mejor detección

      // Si estamos en la parte superior de la página
      if (window.scrollY < 100) {
        setActiveSection('inicio');
        return;
      }

      // Verificar cada sección
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        if (sectionId === 'inicio') continue; // Skip inicio ya que no tiene elemento
        
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (item) => {
    setActiveSection(item.id);
    setMenuOpen(false);
    
    // Smooth scroll para secciones específicas
    if (item.href !== '#') {
      const targetElement = document.querySelector(item.href);
      if (targetElement) {
        // Calcular la altura del header para el offset
        const headerHeight = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.offsetTop - headerHeight - 20; // 20px extra de padding
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Para "Inicio", scroll al top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Cerrar menú cuando se redimensiona
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo y nombre - más compacto en móvil */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 p-1.5 sm:p-2 shadow-md">
            <Box className="w-5 h-5 sm:w-6 sm:h-6 text-blue-50" />
          </div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900">
            MARTIL.DEV
          </h1>
        </div>

        {/* Botón de hamburguesa - mejor touch target */}
        <button
          className="lg:hidden text-neutral-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2 transition-all duration-200 relative z-50"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? (
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          ) : (
            <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
          )}
        </button>

        {/* Menú de navegación desktop - mejor spacing */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={`flex items-center gap-2 px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg text-sm xl:text-base font-medium transition-all duration-200 cursor-pointer min-h-[40px] ${
                activeSection === item.id
                  ? 'text-blue-600 bg-blue-100 shadow-md'
                  : 'text-neutral-700 hover:text-blue-600 hover:bg-blue-50 focus:text-blue-600 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1'
              }`}
              role="menuitem"
              tabIndex={0}
            >
              {item.icon}
              <span className="whitespace-nowrap">
                {/* Texto más corto en pantallas LG, completo en XL */}
                <span className="lg:hidden xl:inline">{item.label}</span>
                <span className="hidden lg:inline xl:hidden">
                  {item.id === 'work-process' ? 'Proceso' : item.label}
                </span>
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Menú móvil desplegable - mejorado */}
      <div 
        className={`lg:hidden relative z-50 transition-all duration-300 ease-out ${
          menuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <nav 
          className="px-4 sm:px-6 pb-4 space-y-1 bg-white border-t border-neutral-100 shadow-lg"
          role="menu"
          aria-label="Menú de navegación móvil"
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => {
                e.stopPropagation();
                handleMenuClick(item);
              }}
              className={`flex items-center gap-3 w-full px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer min-h-[44px] ${
                activeSection === item.id
                  ? 'text-blue-600 bg-blue-100 shadow-md'
                  : 'text-neutral-700 hover:text-blue-600 hover:bg-blue-50 focus:text-blue-600 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset'
              }`}
              role="menuitem"
              tabIndex={0}
            >
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <span className="flex-grow text-left">{item.label}</span>
              {activeSection === item.id && (
                <div className="w-2 h-2 bg-blue-600 rounded-lg flex-shrink-0"></div>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Overlay para cerrar menú en móvil */}
      {menuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}