import { useState, useEffect } from 'react';
import { Menu, X, Home, Box, Star, HelpCircle } from 'lucide-react';

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
      const sections = ['inicio', 'servicios', 'testimonios', 'faq'];
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

  return (
    <header className="sticky top-0 z-50 bg-neutral-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-blue-600 p-2 shadow-md">
            <Box className="w-6 h-6 text-blue-50" />
          </div>
          <h1 className="text-xl font-bold text-neutral-900 text-shadow-xs">MARTIL.DEV</h1>
        </div>

        {/* Botón de hamburguesa */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú de navegación grande */}
        <nav className="hidden lg:flex space-x-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? 'text-blue-600 bg-blue-100 font-medium'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <nav className="lg:hidden px-6 pb-4 space-y-2 bg-neutral-50">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={`flex items-center gap-2 w-full px-2 py-2 mt-4 rounded-lg transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? 'text-blue-600 bg-blue-100 font-medium'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}