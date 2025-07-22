// src/layout/footer/ContactSection.jsx
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message = "¡Hola! Tengo algunas dudas específicas sobre mi proyecto web. ¿Podrían ayudarme a resolverlas?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      content: (
        <a
          href="mailto:contacto@martil.dev"
          className="text-neutral-200 text-sm sm:text-base hover:text-blue-300 focus:text-blue-300 focus:outline-none transition-colors duration-200 break-all"
        >
          contacto@martil.dev
        </a>
      )
    },
    {
      icon: Phone,
      label: "WhatsApp",
      content: (
        <a
          href="#"
          onClick={handleWhatsAppClick}
          className="text-neutral-200 text-sm sm:text-base hover:text-blue-300 focus:text-blue-300 focus:outline-none transition-colors duration-200 cursor-pointer"
        >
          +52 56 3750 0980
        </a>
      )
    },
    {
      icon: MapPin,
      label: "Ubicación",
      content: (
        <p className="text-neutral-200 text-sm sm:text-base">
          Ciudad de México, México
        </p>
      )
    },
    {
      icon: Clock,
      label: "Horarios",
      content: (
        <p className="text-neutral-200 text-sm sm:text-base">
          Lun - Vie: 9:00 - 18:00
        </p>
      )
    }
  ];

  return (
    <div className="sm:col-span-2 lg:col-span-1">
      <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6 text-white">
        Contáctanos
      </h4>
      <div className="space-y-3 sm:space-y-4">
        {contactItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-blue-600/20 rounded-lg flex items-center justify-center mt-0.5">
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-blue-50" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-neutral-400 mb-1 font-medium">{item.label}</p>
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}