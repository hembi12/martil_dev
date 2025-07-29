// src/layout/header/MobileMenu.jsx
import { Home, Box, Star, HelpCircle, Route } from 'lucide-react';

const iconMap = {
  'inicio': Home,
  'servicios': Box,
  'work-process': Route,
  'testimonios': Star,
  'faq': HelpCircle
};

export default function MobileMenu({ 
  menuItems, 
  activeSection, 
  onMenuClick, 
  menuOpen, 
  setMenuOpen 
}) {
  return (
    <>
      {/* Menú móvil desplegable */}
      <div 
        className={`lg:hidden relative z-50 transition-all duration-300 ease-out ${
          menuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <nav 
          className="px-4 sm:px-6 pb-4 space-y-1 bg-gray-900 shadow-md"
          role="menu"
          aria-label="Menú de navegación móvil"
        >
          {menuItems.map((item) => {
            const IconComponent = iconMap[item.id];
            return (
              <button
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onMenuClick(item);
                }}
                className={`flex items-center gap-3 w-full px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer min-h-[44px] ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-white text-shadow-md shadow-md'
                    : 'text-white text-shadow-md hover:text-blue-600 hover:bg-white'
                }`}
                role="menuitem"
                tabIndex={0}
              >
                <div className="flex-shrink-0">
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="flex-grow text-left">{item.label}</span>
                {activeSection === item.id && (
                  <div className="w-2 h-2 bg-blue-600 rounded-lg flex-shrink-0"></div>
                )}
              </button>
            );
          })}
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
    </>
  );
}