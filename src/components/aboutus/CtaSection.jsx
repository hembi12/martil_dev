import React from "react";

const CtaSection = () => {
  return (
    <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12">
      <h2 className="text-3xl font-bold mb-4">
        ¿Listo para trabajar con nosotros?
      </h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Únete a las más de 150 empresas que han confiado en MARTIL.DEV para
        transformar su presencia digital y hacer crecer su negocio.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors duration-200">
          Solicitar Cotización
        </button>
        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
          Ver Nuestro Portafolio
        </button>
      </div>
    </section>
  );
};

export default CtaSection;