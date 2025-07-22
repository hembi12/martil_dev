// src/layout/header/Header.jsx
import { useState, useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const menuItems = [
    { 
      id: 'inicio', 
      label: 'Inicio', 
      href: '#'
    },
    { 
      id: 'servicios', 
      label: 'Servicios', 
      href: '#servicios'
    },
    { 
      id: 'work-process', 
      label: 'Proceso', 
      href: '#work-process'
    },
    { 
      id: 'testimonios', 
      label: 'Reseñas', 
      href: '#testimonios'
    },
    { 
      id: 'faq', 
      label: 'FAQ', 
      href: '#faq'
    }
  ];

  // Función para detectar la sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'work-process', 'testimonios', 'faq'];
      const scrollPosition = window.scrollY + 100;

      if (window.scrollY < 100) {
        setActiveSection('inicio');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        if (sectionId === 'inicio') continue;
        
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
    
    if (item.href !== '#') {
      const targetElement = document.querySelector(item.href);
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Cerrar menú cuando se redimensiona
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <Logo />
        
        <Navigation 
          menuItems={menuItems}
          activeSection={activeSection}
          onMenuClick={handleMenuClick}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </div>

      <MobileMenu
        menuItems={menuItems}
        activeSection={activeSection}
        onMenuClick={handleMenuClick}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </header>
  );
}