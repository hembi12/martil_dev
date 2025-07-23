import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-700 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-100 mb-4 sm:mb-6 text-shadow-sm leading-tight">
            Sobre{" "}
            <span className="text-yellow-400 text-shadow-md">Martil.dev</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
