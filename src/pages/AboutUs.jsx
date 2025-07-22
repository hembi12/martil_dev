import React, { useEffect } from 'react';
import { 
  Users, 
  Target, 
  Heart, 
  Zap, 
  Award, 
  Code, 
  Globe, 
  Lightbulb,
  CheckCircle,
  Star,
  Calendar,
  MapPin
} from 'lucide-react';

const AboutUs = () => {
  // Scroll al inicio cuando se carga el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="text-blue-400">MARTIL.DEV</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Somos un equipo apasionado de desarrolladores web dedicados a transformar ideas en 
              experiencias digitales excepcionales que impulsan el crecimiento de tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 max-w-6xl py-16">
        
        {/* Nuestra Historia */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  MARTIL.DEV nació en 2023 con una visión clara: democratizar el acceso a sitios web 
                  profesionales para empresas de todos los tamaños. Comenzamos como un pequeño equipo 
                  de desarrolladores freelance y hemos crecido hasta convertirnos en una agencia 
                  especializada que ha ayudado a más de 150 empresas a establecer su presencia digital.
                </p>
                <p>
                  Lo que nos diferencia es nuestro enfoque personal y nuestro compromiso con la 
                  excelencia técnica. Cada proyecto es único, y trabajamos de cerca con nuestros 
                  clientes para entender no solo lo que necesitan, sino también sus aspiraciones 
                  y objetivos de negocio.
                </p>
                <p>
                  Hoy, seguimos siendo un equipo ágil y centrado en el cliente, utilizando las 
                  tecnologías más modernas para crear sitios web que no solo se ven increíbles, 
                  sino que también funcionan de manera excepcional.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-sm text-gray-600">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Satisfacción del Cliente</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Soporte Técnico</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra Misión, Visión y Valores */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Principios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los valores que guían cada decisión y cada línea de código que escribimos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Misión */}
            <div className="text-center bg-blue-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Empoderar a empresas y emprendedores con sitios web profesionales, accesibles 
                y de alta calidad que les permitan competir en el mundo digital sin importar su tamaño o presupuesto.
              </p>
            </div>

            {/* Visión */}
            <div className="text-center bg-green-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nuestra Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser la agencia de desarrollo web líder en México, reconocida por nuestra excelencia 
                técnica, innovación constante y el impacto positivo en el crecimiento de nuestros clientes.
              </p>
            </div>

            {/* Valores */}
            <div className="text-center bg-purple-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nuestros Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparencia en cada proceso, excelencia en cada entrega, innovación en cada solución 
                y compromiso genuino con el éxito de cada cliente que confía en nosotros.
              </p>
            </div>
          </div>
        </section>

        {/* Lo que nos hace diferentes */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué nos hace diferentes?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combinamos experiencia técnica con un enfoque humano y personal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
              <Zap className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Desarrollo Ágil</h4>
              <p className="text-sm text-gray-600">Entregas rápidas sin comprometer la calidad</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
              <Code className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Código Limpio</h4>
              <p className="text-sm text-gray-600">Sitios optimizados y fáciles de mantener</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
              <Users className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Atención Personal</h4>
              <p className="text-sm text-gray-600">Comunicación directa en cada proyecto</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
              <Award className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Garantía Total</h4>
              <p className="text-sm text-gray-600">30 días de garantía y soporte continuo</p>
            </div>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesionales apasionados por la tecnología y comprometidos con tu éxito
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fundador */}
            <div className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Martín López</h4>
              <p className="text-blue-600 font-medium mb-3">Fundador & Lead Developer</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Full-stack developer con más de 5 años de experiencia. Especializado en React, 
                Node.js y arquitecturas modernas. Apasionado por crear soluciones que realmente impacten.
              </p>
            </div>

            {/* Diseñadora UX/UI */}
            <div className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Ana García</h4>
              <p className="text-pink-600 font-medium mb-3">UX/UI Designer</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Diseñadora especializada en experiencia de usuario y interfaces intuitivas. 
                Con formación en psicología, entiende cómo los usuarios interactúan con la tecnología.
              </p>
            </div>

            {/* Developer Backend */}
            <div className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Carlos Ruiz</h4>
              <p className="text-green-600 font-medium mb-3">Backend Developer</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Experto en desarrollo backend y seguridad web. Maneja las integraciones complejas 
                y se asegura de que todo funcione perfectamente detrás de escena.
              </p>
            </div>
          </div>
        </section>

        {/* Nuestro Proceso */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Una metodología probada que garantiza resultados excepcionales
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Consulta y Análisis</h4>
                <p className="text-gray-600">
                  Nos reunimos contigo para entender tu negocio, objetivos y audiencia. Analizamos 
                  tus necesidades específicas y definimos el alcance del proyecto.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Estrategia y Planificación</h4>
                <p className="text-gray-600">
                  Desarrollamos una estrategia personalizada, definimos la arquitectura del sitio 
                  y creamos un cronograma detallado con hitos claros.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Diseño y Prototipado</h4>
                <p className="text-gray-600">
                  Creamos wireframes y mockups que reflejen tu marca y ofrezcan una experiencia 
                  de usuario excepcional. Te mantenemos involucrado en cada decisión.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Desarrollo y Testing</h4>
                <p className="text-gray-600">
                  Programamos tu sitio con las mejores prácticas, realizamos pruebas exhaustivas 
                  y optimizamos cada aspecto para máximo rendimiento.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">5</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Lanzamiento y Soporte</h4>
                <p className="text-gray-600">
                  Publicamos tu sitio, te capacitamos en su uso y te proporcionamos soporte 
                  continuo para asegurar que todo funcione perfectamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologías */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tecnologías que Dominamos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Utilizamos las herramientas más modernas y confiables del mercado
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', color: 'text-blue-500' },
              { name: 'Next.js', color: 'text-gray-900' },
              { name: 'Node.js', color: 'text-green-600' },
              { name: 'WordPress', color: 'text-blue-600' },
              { name: 'Shopify', color: 'text-green-500' },
              { name: 'Tailwind', color: 'text-cyan-500' },
              { name: 'MySQL', color: 'text-orange-500' },
              { name: 'MongoDB', color: 'text-green-600' },
              { name: 'AWS', color: 'text-orange-400' },
              { name: 'Vercel', color: 'text-gray-900' },
              { name: 'Stripe', color: 'text-purple-600' },
              { name: 'PayPal', color: 'text-blue-600' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
                <div className={`font-semibold ${tech.color} mb-2`}>{tech.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Ubicación */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-red-500" />
                  Nuestra Ubicación
                </h2>
                <p className="text-gray-600 mb-4">
                  Aunque trabajamos principalmente de forma remota para ofrecer la mejor flexibilidad 
                  y precios a nuestros clientes, nuestras oficinas principales se encuentran en:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-800 font-medium">Ciudad de México, México</p>
                  <p className="text-gray-600">Atendemos clientes en toda América Latina</p>
                  <p className="text-gray-600">Consultas virtuales disponibles 24/7</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Horarios de Atención</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lunes - Viernes:</span>
                    <span className="text-gray-800">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sábados:</span>
                    <span className="text-gray-800">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Domingos:</span>
                    <span className="text-gray-800">Solo emergencias</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Respuesta promedio:</span>
                    <span className="text-gray-800">&lt; 2 horas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">¿Listo para trabajar con nosotros?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a las más de 150 empresas que han confiado en MARTIL.DEV para transformar 
            su presencia digital y hacer crecer su negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Solicitar Cotización
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Ver Nuestro Portafolio
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;