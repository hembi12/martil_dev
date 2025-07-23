import React from "react";
import { Zap, Code, Users, Award } from "lucide-react";

const WhatMakesDifferent = () => {
  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
          ¿Qué nos hace diferentes?
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Combinamos experiencia técnica con un enfoque humano y personal
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center p-6 border border-neutral-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
          <Zap className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
          <h4 className="font-semibold text-neutral-900 mb-2">
            Desarrollo Ágil
          </h4>
          <p className="text-sm text-neutral-600">
            Entregas rápidas sin comprometer la calidad
          </p>
        </div>

        <div className="text-center p-6 border border-neutral-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
          <Code className="w-10 h-10 text-blue-500 mx-auto mb-4" />
          <h4 className="font-semibold text-neutral-900 mb-2">
            Código Limpio
          </h4>
          <p className="text-sm text-neutral-600">
            Sitios optimizados y fáciles de mantener
          </p>
        </div>

        <div className="text-center p-6 border border-neutral-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
          <Users className="w-10 h-10 text-green-500 mx-auto mb-4" />
          <h4 className="font-semibold text-neutral-900 mb-2">
            Atención Personal
          </h4>
          <p className="text-sm text-neutral-600">
            Comunicación directa en cada proyecto
          </p>
        </div>

        <div className="text-center p-6 border border-neutral-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
          <Award className="w-10 h-10 text-purple-500 mx-auto mb-4" />
          <h4 className="font-semibold text-neutral-900 mb-2">
            Garantía Total
          </h4>
          <p className="text-sm text-neutral-600">
            30 días de garantía y soporte continuo
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;