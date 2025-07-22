// src/layout/footer/CompanyInfo.jsx
import { CheckCircle } from "lucide-react";

export default function CompanyInfo() {
  const features = [
    "Dominio y hosting gratis",
    "100% responsivo", 
    "Soporte 24/7"
  ];

  return (
    <div className="sm:col-span-2 lg:col-span-1">
      {/* Descripción */}
      <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
        Olvídate de lo genérico. Diseñamos desde cero pensando en tu
        negocio, tus objetivos y tus clientes.
      </p>

      {/* Características destacadas */}
      <div className="space-y-2 sm:space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 sm:gap-3 text-sm text-neutral-300">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}