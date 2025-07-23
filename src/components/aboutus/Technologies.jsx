import React from "react";

const Technologies = () => {
  const technologies = [
    { name: "React", color: "text-blue-500" },
    { name: "Next.js", color: "text-neutral-900" },
    { name: "Node.js", color: "text-green-600" },
    { name: "WordPress", color: "text-blue-600" },
    { name: "Shopify", color: "text-green-500" },
    { name: "Tailwind", color: "text-cyan-500" },
    { name: "MySQL", color: "text-orange-500" },
    { name: "MongoDB", color: "text-green-600" },
    { name: "AWS", color: "text-orange-400" },
    { name: "Vercel", color: "text-neutral-900" },
    { name: "Stripe", color: "text-purple-600" },
    { name: "PayPal", color: "text-blue-600" },
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
          Tecnologías que Dominamos
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Utilizamos las herramientas más modernas y confiables del mercado
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="text-center p-4 border border-neutral-200 rounded-lg hover:border-blue-300 transition-colors duration-300"
          >
            <div className={`font-semibold ${tech.color} mb-2`}>
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;