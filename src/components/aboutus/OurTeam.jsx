import React from "react";

const OurTeam = () => {
  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
          Nuestro Equipo
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Profesionales apasionados por la tecnología y comprometidos con tu
          éxito
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Fundador */}
        <div className="text-center bg-neutral-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-2xl font-bold">M</span>
          </div>
          <h4 className="text-xl font-semibold text-neutral-900 mb-2">
            Martín López
          </h4>
          <p className="text-blue-600 font-medium mb-3">
            Fundador & Lead Developer
          </p>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Full-stack developer con más de 5 años de experiencia.
            Especializado en React, Node.js y arquitecturas modernas.
            Apasionado por crear soluciones que realmente impacten.
          </p>
        </div>

        {/* Diseñadora UX/UI */}
        <div className="text-center bg-neutral-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-2xl font-bold">A</span>
          </div>
          <h4 className="text-xl font-semibold text-neutral-900 mb-2">
            Ana García
          </h4>
          <p className="text-pink-600 font-medium mb-3">UX/UI Designer</p>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Diseñadora especializada en experiencia de usuario y interfaces
            intuitivas. Con formación en psicología, entiende cómo los
            usuarios interactúan con la tecnología.
          </p>
        </div>

        {/* Developer Backend */}
        <div className="text-center bg-neutral-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-2xl font-bold">C</span>
          </div>
          <h4 className="text-xl font-semibold text-neutral-900 mb-2">
            Carlos Ruiz
          </h4>
          <p className="text-green-600 font-medium mb-3">
            Backend Developer
          </p>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Experto en desarrollo backend y seguridad web. Maneja las
            integraciones complejas y se asegura de que todo funcione
            perfectamente detrás de escena.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;