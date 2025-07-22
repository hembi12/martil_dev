import React, { useEffect } from 'react';
import { 
  Shield, 
  Calendar, 
  Eye, 
  Database, 
  Lock, 
  MessageSquare,
  UserCheck,
  Globe,
  Mail,
  FileText
} from 'lucide-react';

const PrivacyPolicy = () => {
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
            <h1 className="text-3xl font-bold text-gray-900">Política de Privacidad</h1>
          </div>
          <p className="text-gray-600">
            Cómo recopilamos, utilizamos y protegemos tu información personal
          </p>
        </div>

        {/* Last Updated */}
        <div className="border-l-4 border-blue-500 pl-4 mb-12">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <p><strong>Última actualización:</strong> 22 de julio de 2025</p>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-12">
          {/* 1. Introducción */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introducción</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                En MARTIL.DEV, nos comprometemos a proteger tu privacidad y la confidencialidad de tu información personal. 
                Esta política de privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos la información 
                que nos proporcionas cuando utilizas nuestros servicios de desarrollo web.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Al contratar nuestros servicios o utilizar nuestro sitio web, aceptas las prácticas descritas en esta política.
              </p>
            </div>
          </section>

          {/* 2. Información que Recopilamos */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Información que Recopilamos</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                  <UserCheck className="w-5 h-5 mr-2 text-blue-600" />
                  Información Personal Directa
                </h3>
                <ul className="space-y-2 text-gray-600 ml-7">
                  <li>• <strong>Datos de contacto:</strong> Nombre completo, correo electrónico, número de teléfono</li>
                  <li>• <strong>Información comercial:</strong> Nombre de empresa, cargo, dirección de facturación</li>
                  <li>• <strong>Datos del proyecto:</strong> Requerimientos específicos, contenido proporcionado, preferencias de diseño</li>
                  <li>• <strong>Información de pago:</strong> Datos necesarios para procesar pagos (procesados por terceros seguros)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-green-600" />
                  Información Técnica Automática
                </h3>
                <ul className="space-y-2 text-gray-600 ml-7">
                  <li>• <strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas</li>
                  <li>• <strong>Información del dispositivo:</strong> Tipo de dispositivo, sistema operativo, resolución de pantalla</li>
                  <li>• <strong>Cookies:</strong> Preferencias del sitio, sesiones de usuario, análisis de uso</li>
                  <li>• <strong>Logs del servidor:</strong> Registros de acceso, errores técnicos, tiempos de respuesta</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-purple-600" />
                  Contenido del Proyecto
                </h3>
                <ul className="space-y-2 text-gray-600 ml-7">
                  <li>• Textos, imágenes y multimedia proporcionados para el desarrollo</li>
                  <li>• Logos, material de marca y elementos gráficos</li>
                  <li>• Documentos de requisitos y especificaciones técnicas</li>
                  <li>• Comunicaciones relacionadas con el proyecto</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Cómo Utilizamos tu Información */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Cómo Utilizamos tu Información</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">Prestación de Servicios</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Desarrollar y entregar tu sitio web según especificaciones</li>
                  <li>• Comunicarnos contigo sobre el progreso del proyecto</li>
                  <li>• Proporcionar soporte técnico y mantenimiento</li>
                  <li>• Procesar pagos y generar facturas</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">Mejora de Servicios</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Analizar el uso de nuestro sitio web para mejorarlo</li>
                  <li>• Desarrollar nuevas funcionalidades y servicios</li>
                  <li>• Personalizar nuestra comunicación y ofertas</li>
                  <li>• Realizar análisis internos de calidad</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">Comunicación y Marketing</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Enviar actualizaciones sobre tu proyecto</li>
                  <li>• Compartir noticias relevantes sobre nuestros servicios</li>
                  <li>• Solicitar feedback y testimonios (con tu consentimiento)</li>
                  <li>• Enviar promociones (puedes darte de baja en cualquier momento)</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-400 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">Cumplimiento Legal</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Cumplir con obligaciones fiscales y contables</li>
                  <li>• Responder a requerimientos legales válidos</li>
                  <li>• Proteger nuestros derechos y los de nuestros clientes</li>
                  <li>• Prevenir fraude y actividades ilegales</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Compartir Información */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Cuándo Compartimos tu Información</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
              <p className="text-yellow-800 text-sm">
                <strong>Principio general:</strong> No vendemos, alquilamos ni compartimos tu información personal con terceros para fines comerciales sin tu consentimiento explícito.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Proveedores de Servicios Autorizados</h4>
                <ul className="text-gray-600 space-y-1 text-sm ml-4">
                  <li>• <strong>Procesadores de pago:</strong> PayPal, Stripe (solo datos necesarios para el pago)</li>
                  <li>• <strong>Servicios de hosting:</strong> Para alojar tu sitio web (solo datos técnicos)</li>
                  <li>• <strong>Servicios de email:</strong> Para comunicaciones del proyecto</li>
                  <li>• <strong>Herramientas de análisis:</strong> Google Analytics (datos anonimizados)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Requerimientos Legales</h4>
                <p className="text-gray-600 text-sm">
                  Podemos divulgar información cuando sea requerido por ley, orden judicial, o para proteger nuestros derechos legales.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Con tu Consentimiento</h4>
                <p className="text-gray-600 text-sm">
                  Para mostrar tu proyecto en nuestro portafolio o como referencia, siempre solicitaremos tu autorización previa por escrito.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Protección de Datos */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Cómo Protegemos tu Información</h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <h4 className="font-medium text-green-900 mb-2 flex items-center">
                  <Lock className="w-4 h-4 mr-2" />
                  Medidas Técnicas de Seguridad
                </h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Cifrado SSL/TLS para todas las transmisiones de datos</li>
                  <li>• Almacenamiento seguro en servidores protegidos</li>
                  <li>• Copias de seguridad regulares y encriptadas</li>
                  <li>• Acceso restringido a personal autorizado únicamente</li>
                  <li>• Monitoreo continuo de seguridad</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <h4 className="font-medium text-blue-900 mb-2 flex items-center">
                  <Database className="w-4 h-4 mr-2" />
                  Medidas Organizacionales
                </h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Políticas internas de manejo de datos</li>
                  <li>• Capacitación regular del equipo en privacidad</li>
                  <li>• Acuerdos de confidencialidad con colaboradores</li>
                  <li>• Auditorías periódicas de seguridad</li>
                  <li>• Procedimientos de respuesta a incidentes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6. Retención de Datos */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Retención de Datos</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Datos del proyecto activo</span>
                <span className="text-sm text-gray-500">Durante el desarrollo + 1 año</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Información de facturación</span>
                <span className="text-sm text-gray-500">7 años (requerimiento fiscal)</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Datos de soporte técnico</span>
                <span className="text-sm text-gray-500">2 años después del último contacto</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Logs del servidor</span>
                <span className="text-sm text-gray-500">90 días</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Cookies de análisis</span>
                <span className="text-sm text-gray-500">26 meses máximo</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-4">
              Después de estos períodos, eliminamos o anonimizamos tu información de manera segura, excepto cuando la ley requiera conservarla por más tiempo.
            </p>
          </section>

          {/* 7. Tus Derechos */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Tus Derechos de Privacidad</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-medium text-gray-900 mb-2">Derecho de Acceso</h4>
                <p className="text-sm text-gray-600">Solicitar una copia de la información personal que tenemos sobre ti</p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-medium text-gray-900 mb-2">Derecho de Rectificación</h4>
                <p className="text-sm text-gray-600">Corregir información inexacta o desactualizada</p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-medium text-gray-900 mb-2">Derecho de Eliminación</h4>
                <p className="text-sm text-gray-600">Solicitar la eliminación de tu información personal</p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-medium text-gray-900 mb-2">Derecho de Portabilidad</h4>
                <p className="text-sm text-gray-600">Recibir tus datos en un formato estructurado y legible</p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-medium text-gray-900 mb-2">Derecho de Oposición</h4>
                <p className="text-sm text-gray-600">Oponerte al procesamiento de tus datos para marketing directo</p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h4 className="font-medium text-gray-900 mb-2">Derecho de Limitación</h4>
                <p className="text-sm text-gray-600">Restringir cómo utilizamos tu información en ciertas circunstancias</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <h4 className="font-medium text-blue-900 mb-2">Cómo Ejercer tus Derechos</h4>
              <p className="text-blue-800 text-sm mb-2">
                Para ejercer cualquiera de estos derechos, contáctanos a través de:
              </p>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Email: privacidad@martil.dev</li>
                <li>• WhatsApp: +52 55 1234 5678</li>
                <li>• Responderemos en un plazo máximo de 30 días</li>
              </ul>
            </div>
          </section>

          {/* 8. Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Uso de Cookies</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web:
              </p>

              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Cookies Esenciales</h4>
                  <p className="text-gray-600 text-sm">Necesarias para el funcionamiento básico del sitio (sesiones, seguridad).</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Cookies de Rendimiento</h4>
                  <p className="text-gray-600 text-sm">Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Cookies de Funcionalidad</h4>
                  <p className="text-gray-600 text-sm">Recuerdan tus preferencias para mejorar tu experiencia.</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                Puedes controlar las cookies a través de la configuración de tu navegador. Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio.
              </p>
            </div>
          </section>

          {/* 9. Transferencias Internacionales */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Transferencias Internacionales</h2>
            
            <p className="text-gray-600 mb-4">
              Algunos de nuestros proveedores de servicios pueden estar ubicados fuera de México. En estos casos:
            </p>

            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Nos aseguramos de que tengan medidas de protección adecuadas</li>
              <li>• Verificamos que cumplan con estándares internacionales de privacidad</li>
              <li>• Establecemos contratos que garanticen la protección de tus datos</li>
              <li>• Solo transferimos la información mínima necesaria</li>
            </ul>

            <p className="text-gray-600 text-sm">
              Los principales servicios internacionales que utilizamos incluyen Google Analytics (datos anonimizados) y proveedores de cloud computing con certificaciones de seguridad.
            </p>
          </section>

          {/* 10. Menores de Edad */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Protección de Menores</h2>
            
            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="text-red-800 text-sm mb-2">
                <strong>Nuestros servicios están dirigidos a empresas y adultos.</strong>
              </p>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• No recopilamos intencionalmente información de menores de 18 años</li>
                <li>• Si descubrimos que hemos recopilado datos de un menor, los eliminaremos inmediatamente</li>
                <li>• Los padres pueden contactarnos si creen que su hijo ha proporcionado información</li>
              </ul>
            </div>
          </section>

          {/* 11. Cambios en la Política */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Actualizaciones de esta Política</h2>
            
            <p className="text-gray-600 mb-4">
              Podemos actualizar esta política de privacidad ocasionalmente para reflejar cambios en nuestras prácticas o por razones legales.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <h4 className="font-medium text-blue-900 mb-2">Notificación de Cambios</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Cambios menores: Actualización de la fecha en esta página</li>
                <li>• Cambios significativos: Notificación por email con 30 días de anticipación</li>
                <li>• Te recomendamos revisar esta política periódicamente</li>
              </ul>
            </div>
          </section>

          {/* 12. Contacto */}
          <section className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-5 h-5 mr-2 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">Contacto sobre Privacidad</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Si tienes preguntas sobre esta política de privacidad o el manejo de tus datos:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="font-medium text-gray-900">Responsable de Datos</p>
                <p className="text-sm text-gray-600">MARTIL.DEV</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Email de Privacidad</p>
                <p className="text-sm text-gray-600">privacidad@martil.dev</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">WhatsApp</p>
                <p className="text-sm text-gray-600">+52 55 1234 5678</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Tiempo de Respuesta</p>
                <p className="text-sm text-gray-600">Máximo 30 días hábiles</p>
              </div>
            </div>
            
            <div className="bg-white rounded p-4 border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">Información Requerida para Solicitudes</h4>
              <p className="text-gray-600 text-sm">
                Para procesar tu solicitud de manera eficiente, incluye: tu nombre completo, email asociado a nuestros servicios, 
                y una descripción clara de tu solicitud. Esto nos ayuda a verificar tu identidad y proteger tu privacidad.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;