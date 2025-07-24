import { useRef, useState } from "react";
import {
  Briefcase,
  Building,
  Store,
  Sparkles,
  Users,
  Globe,
  ScreenShare,
  Code,
  TabletSmartphone,
  Search,
  Moon,
  Languages,
  Shield,
  Zap,
  ShoppingCart,
  Camera,
  UserPlus,
  Calendar,
  Clock,
  Contact,
} from "lucide-react";

const iconComponents = {
  Briefcase,
  Building,
  Store,
  Sparkles,
  Users,
  Globe,
  ScreenShare,
  Code,
  TabletSmartphone,
  Search,
  Moon,
  Languages,
  Shield,
  Zap,
  ShoppingCart,
  Camera,
  UserPlus,
  Calendar,
  Clock,
  Contact,
};

export default function ServiceSelection({
  services,
  selectedService,
  setSelectedService,
}) {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerWidth = container.clientWidth;
      const cardWidth = window.innerWidth >= 640 ? 384 : 320;
      const gap = window.innerWidth >= 640 ? 32 : 24;
      const padding = 24;

      const cardPosition = (cardWidth + gap) * index + padding;
      const scrollPosition = cardPosition - containerWidth / 2 + cardWidth / 2;

      container.scrollTo({
        left: Math.max(
          0,
          Math.min(scrollPosition, container.scrollWidth - containerWidth)
        ),
        behavior: "smooth",
      });

      setCurrentIndex(index);
    }
  };

  const ServiceCard = ({ service, isSelected, onClick, index }) => {
    const IconComponent = iconComponents[service.iconName];

    const gradientBackgrounds = [
      "bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-md",
      "bg-gradient-to-br from-green-500 to-emerald-700 shadow-md",
      "bg-gradient-to-br from-purple-500 to-fuchsia-700 shadow-md",
      "bg-gradient-to-br from-orange-400 to-amber-600 shadow-md",
      "bg-gradient-to-br from-red-500 to-rose-700 shadow-md",
      "bg-gradient-to-br from-teal-400 to-cyan-600 shadow-md",
    ];

    return (
      <div
        onClick={onClick}
        className={`cursor-pointer transition-all duration-300 min-h-80 sm:min-h-80 lg:min-h-70 ${
          isSelected
            ? "scale-105 ring-2 ring-blue-500 ring-opacity-50"
            : "hover:scale-102"
        } bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border ${
          isSelected ? "border-blue-500" : "border-gray-200"
        }`}
      >
        <div className="text-center h-full flex flex-col justify-between">
          <div>
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center text-white ${
                isSelected
                  ? "bg-blue-500"
                  : gradientBackgrounds[index % gradientBackgrounds.length]
              }`}
            >
              <IconComponent className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-bold text-blue-600">
              {service.priceMXN}
            </p>
            <p className="text-sm text-gray-500">{service.estimatedTime}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          ¿Qué tipo de sitio web necesitas?
        </h2>
        <p className="text-lg text-gray-600">
          Selecciona la opción que mejor describa tu proyecto
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:gap-6">
        {/* Mobile carousel */}
        <div
          className="lg:hidden overflow-x-auto scrollbar-hide py-2"
          ref={scrollRef}
        >
          <div className="flex gap-6 pb-4 pt-2 min-w-max px-6">
            {services.map((service, index) => (
              <div key={service.id} className="flex-none w-80">
                <ServiceCard
                  service={service}
                  index={index}
                  isSelected={selectedService?.id === service.id}
                  onClick={() => setSelectedService(service)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:contents">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isSelected={selectedService?.id === service.id}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      {/* Mobile indicators */}
      <div className="flex justify-center mt-4 lg:hidden">
        <div className="flex gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
