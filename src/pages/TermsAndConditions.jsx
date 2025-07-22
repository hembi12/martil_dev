import React, { useEffect } from 'react';
import { 
  Shield, 
  Calendar, 
  CheckCircle, 
  CreditCard, 
  Clock, 
  MessageSquare
} from 'lucide-react';

const TermsAndConditions = () => {
  // Scroll al inicio cuando se carga el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-6 max-w-4xl py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 mr-3 text-gray-700" />
            <h1 className="text-3xl font-bold text-gray-900">Términos y Condiciones</h1>
          </div>
          <p className="text-gray-600">
            Servicios de desarrollo web profesional
          </p>
        </div>
        {/* Last Updated */}
        <div className="border-l-4 border-blue-500 pl-4 mb-12">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <p><strong>Última actualización:</strong> 22 de julio de 2025</p>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-12">
          {/* 1. Aceptación de Términos */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Aceptación de Términos</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Al contratar cualquiera de nuestros servicios de desarrollo web, el cliente acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, le recomendamos no proceder con la contratación de nuestros servicios.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento, notificando previamente a nuestros clientes.
              </p>
            </div>
          </section>

          {/* 2. Servicios Ofrecidos */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Servicios Ofrecidos</h2>
            <p className="text-gray-600 mb-6">
              Ofrecemos los siguientes servicios de desarrollo web:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-medium text-gray-900 mb-1">Negocios Pequeños</h4>
                <p className="text-sm text-gray-600 mb-1">$1,980 MXN / $99 USD</p>
                <p className="text-xs text-gray-500">Páginas informativas, diseño responsivo, SEO básico</p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-medium text-gray-900 mb-1">Empresas Medianas y Grandes</h4>
                <p className="text-sm text-gray-600 mb-1">$3,980 MXN / $199 USD</p>
                <p className="text-xs text-gray-500">Sitios escalables, CMS, integraciones avanzadas</p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-medium text-gray-900 mb-1">Tiendas en Línea</h4>
                <p className="text-sm text-gray-600 mb-1">$1,980 MXN / $99 USD</p>
                <p className="text-xs text-gray-500">E-commerce, pasarelas de pago, gestión de pedidos</p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-medium text-gray-900 mb-1">Servicios Especializados</h4>
                <p className="text-sm text-gray-600 mb-1">$1,980 MXN / $99 USD</p>
                <p className="text-xs text-gray-500">Influencers, freelancers, reservas y citas</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Todos los servicios incluyen dominio, hosting, diseño responsivo y seguridad avanzada. Tiempos de entrega: 5-30 días según complejidad.
            </p>
          </section>

          {/* 3. Proceso de Trabajo */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Proceso de Trabajo</h2>
            <p className="text-gray-600 mb-4">
              Seguimos una metodología estructurada en 6 fases:
            </p>
            <ol className="space-y-2 text-gray-600">
              <li><strong>Consulta Inicial (1 día):</strong> Análisis de requerimientos y definición de objetivos</li>
              <li><strong>Planificación (1-2 días):</strong> Arquitectura del sitio y cronograma detallado</li>
              <li><strong>Diseño (2-5 días):</strong> Mockups de alta fidelidad y elementos visuales únicos</li>
              <li><strong>Desarrollo (3-15 días):</strong> Programación con código limpio y funcionalidades avanzadas</li>
              <li><strong>Pruebas (1-3 días):</strong> Testing multiplataforma y optimización de rendimiento</li>
              <li><strong>Lanzamiento (1 día):</strong> Despliegue en producción y entrega de credenciales</li>
            </ol>
          </section>

          {/* 4. Términos de Pago */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Términos de Pago</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Modalidad de Pago</h4>
                <p className="text-gray-600">Pago único según el paquete seleccionado. No manejamos pagos recurrentes para el desarrollo inicial.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Estructura de Pagos</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 50% al inicio del proyecto (anticipo)</li>
                  <li>• 50% al completar el desarrollo y antes del lanzamiento</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Métodos de Pago</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Transferencia bancaria (México)</li>
                  <li>• PayPal (internacional)</li>
                  <li>• Stripe (tarjetas de crédito/débito)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Plazos de Entrega */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Plazos de Entrega</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-4">
              <p className="text-yellow-800 text-sm">
                <strong>Importante:</strong> Los tiempos son estimaciones que dependen de la entrega de contenido y feedback del cliente.
              </p>
            </div>
            <ul className="space-y-1 text-gray-600">
              <li>• Negocios pequeños: 5-7 días hábiles</li>
              <li>• Empresas medianas y grandes: 14-30 días hábiles</li>
              <li>• Tiendas en línea: 7-30 días hábiles</li>
              <li>• Servicios especializados: 7-28 días hábiles</li>
            </ul>
          </section>

          {/* 6. Responsabilidades del Cliente */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Responsabilidades del Cliente</h2>
            <p className="text-gray-600 mb-3">El cliente se compromete a:</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Proporcionar contenido necesario (textos, imágenes, logos) en formato digital</li>
              <li>• Responder consultas en máximo 48 horas hábiles</li>
              <li>• Revisar y aprobar cada etapa antes de continuar</li>
              <li>• Garantizar derechos de uso del contenido proporcionado</li>
              <li>• Realizar pagos según términos acordados</li>
            </ul>
          </section>

          {/* 7. Garantías y Soporte */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Garantías y Soporte</h2>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <h4 className="font-medium text-green-900 mb-2 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Garantía de 30 días
                </h4>
                <p className="text-green-800 text-sm">
                  Correcciones de errores técnicos y problemas de funcionalidad según especificaciones originales.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <h4 className="font-medium text-blue-900 mb-2">Soporte Técnico (60 días)</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Resolución de problemas técnicos</li>
                  <li>• Actualizaciones de seguridad críticas</li>
                  <li>• Asesoría básica sobre el uso del sitio</li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm">
                <strong>Nota:</strong> Cambios en diseño, nuevas funcionalidades o modificaciones posteriores se facturan por separado.
              </p>
            </div>
          </section>

          {/* 8. Política de Revisiones */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Política de Revisiones</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="border border-gray-200 rounded p-3">
                <h4 className="font-medium text-gray-900 mb-1">Fase de Diseño</h4>
                <p className="text-sm text-gray-600">Hasta 3 revisiones incluidas</p>
              </div>
              <div className="border border-gray-200 rounded p-3">
                <h4 className="font-medium text-gray-900 mb-1">Fase de Desarrollo</h4>
                <p className="text-sm text-gray-600">Hasta 2 revisiones incluidas</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Revisiones adicionales: $50 USD por hora de trabajo adicional.
            </p>
          </section>

          {/* 9. Propiedad Intelectual */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Propiedad Intelectual</h2>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Derechos del Cliente</h4>
                <p className="text-gray-600 text-sm">
                  Una vez completado el pago total, el cliente adquiere todos los derechos sobre el diseño final, código fuente y elementos gráficos creados específicamente para su proyecto.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Derechos del Desarrollador</h4>
                <p className="text-gray-600 text-sm">
                  Nos reservamos el derecho de mostrar el trabajo en nuestro portafolio, respetando la confidencialidad acordada.
                </p>
              </div>
            </div>
          </section>

          {/* 10. Política de Cancelación */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Política de Cancelación</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Cancelación en fase de consulta</span>
                <span className="text-sm text-gray-500">100% reembolso (menos comisiones)</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Cancelación en fase de diseño</span>
                <span className="text-sm text-gray-500">50% reembolso</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Cancelación en fase de desarrollo</span>
                <span className="text-sm text-gray-500">Sin reembolso</span>
              </div>
            </div>
          </section>

          {/* 11. Limitaciones de Responsabilidad */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Limitaciones de Responsabilidad</h2>
            <p className="text-gray-600 mb-3">Nuestra responsabilidad se limita a:</p>
            <ul className="space-y-1 text-gray-600 mb-4">
              <li>• Funcionamiento del sitio según especificaciones acordadas</li>
              <li>• Entrega en tiempos estimados (sujeto a colaboración del cliente)</li>
              <li>• Calidad técnica según estándares de la industria</li>
            </ul>
            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="text-red-800 text-sm">
                No nos responsabilizamos por pérdidas de ganancias, daños indirectos, problemas de terceros, fallas en servicios externos o uso indebido posterior.
              </p>
            </div>
          </section>

          {/* 12. Modificaciones */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Modificaciones de los Términos</h2>
            <p className="text-gray-600 mb-3">
              Nos reservamos el derecho de actualizar estos términos. Las modificaciones entrarán en vigor tras su publicación.
            </p>
            <p className="text-gray-600 text-sm">
              Notificaremos cambios significativos con 7 días de anticipación por correo electrónico.
            </p>
          </section>

          {/* 13. Ley Aplicable */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Ley Aplicable</h2>
            <p className="text-gray-600 mb-3">
              Estos términos se rigen por las leyes de México. Las disputas se resolverán mediante:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center p-3 border border-gray-200 rounded">
                <p className="font-medium text-gray-900">Primera Instancia</p>
                <p className="text-sm text-gray-600">Mediación amigable</p>
              </div>
              <div className="text-center p-3 border border-gray-200 rounded">
                <p className="font-medium text-gray-900">Jurisdicción</p>
                <p className="text-sm text-gray-600">Tribunales de CDMX</p>
              </div>
            </div>
          </section>

          {/* 14. Contacto */}
          <section className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-5 h-5 mr-2 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">Contacto</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Para consultas sobre estos términos o cotizaciones:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-sm text-gray-600">info@martil.dev</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">WhatsApp</p>
                <p className="text-sm text-gray-600">+52 55 1234 5678</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Tiempo de respuesta: 24 horas hábiles
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;