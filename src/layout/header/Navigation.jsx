// src/layout/header/Navigation.jsx
import { Menu, X, Home, Box, Star, HelpCircle, Route } from 'lucide-react';

const iconMap = {
  'inicio': Home,
  'servicios': Box,
  'work-process': Route,
  'testimonios': Star,
  'faq': HelpCircle
};

export default function Navigation({ 
  menuItems, 
  activeSection, 
  onMenuClick, 
  menuOpen, 
  setMenuOpen 
}) {
  return (
    <>
      {/* Botón de hamburguesa */}
      <button
        className="lg:hidden text-neutral-100 hover:text-blue-100 focus:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-offset-2 rounded-lg p-2 transition-all duration-200 relative z-50"
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

      {/* Menú de navegación desktop */}
      <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
        {menuItems.map((item) => {
          const IconComponent = iconMap[item.id];
          return (
            <button
              key={item.id}
              onClick={() => onMenuClick(item)}
              className={`flex items-center gap-2 px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg text-sm xl:text-base font-medium transition-all duration-200 cursor-pointer min-h-[40px] ${
                activeSection === item.id
                  ? 'text-blue-600 bg-white text-shadow-md'
                  : 'text-neutral-100 text-shadow-md hover:text-blue-600 hover:bg-white focus:text-blue-600 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-offset-1'
              }`}
              role="menuitem"
              tabIndex={0}
            >
              <IconComponent className="w-4 h-4" />
              <span className="whitespace-nowrap">
                <span className="lg:hidden xl:inline">{item.label}</span>
                <span className="hidden lg:inline xl:hidden">
                  {item.id === 'work-process' ? 'Proceso' : item.label}
                </span>
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}