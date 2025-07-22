import React, { useEffect, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Globe,
  CheckCircle,
  AlertCircle,
  User,
  Building,
  FileText
} from 'lucide-react';

const Contact = () => {
  // Scroll al inicio cuando se carga el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Estado del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    submitted: false,
    error: null
  });

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = async () => {
    // Validación básica
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setFormStatus({ 
        isSubmitting: false, 
        submitted: false, 
        error: 'Por favor completa todos los campos obligatorios.' 
      });
      return;
    }

    setFormStatus({ isSubmitting: true, submitted: false, error: null });

    // Simular envío (aquí irían las validaciones y envío real)
    try {
      // Aquí iría la lógica de envío real (API, EmailJS, etc.)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus({ 
        isSubmitting: false, 
        submitted: true, 
        error: null 
      });
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        timeline: ''
      });
    } catch {
      setFormStatus({ 
        isSubmitting: false, 
        submitted: false, 
        error: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.' 
      });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ¡Hablemos de tu proyecto!
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para convertir tu visión en realidad. Cuéntanos sobre tu proyecto 
              y te ayudaremos a crear la presencia digital que tu negocio necesita.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 max-w-6xl py-16">
        
        {/* Información de Contacto Rápido */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Múltiples formas de contactarnos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Elige la opción que más te convenga. Respondemos rápido y estamos listos para ayudarte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <div className="text-center bg-green-50 border border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600 mb-4">Respuesta inmediata</p>
              <a 
                href="https://wa.me/5255123456789" 
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                +52 55 1234 5678
              </a>
            </div>

            {/* Email */}
            <div className="text-center bg-blue-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-sm text-gray-600 mb-4">Respuesta en 2-4 horas</p>
              <a 
                href="mailto:hola@martil.dev" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                hola@martil.dev
              </a>
            </div>

            {/* Teléfono */}
            <div className="text-center bg-purple-50 border border-purple-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Teléfono</h3>
              <p className="text-sm text-gray-600 mb-4">Lun-Vie 9am-7pm</p>
              <a 
                href="tel:+5255123456789" 
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
              >
                +52 55 1234 5678
              </a>
            </div>

            {/* Videollamada */}
            <div className="text-center bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Videollamada</h3>
              <p className="text-sm text-gray-600 mb-4">Consulta gratuita</p>
              <span className="inline-flex items-center text-orange-600 font-medium">
                Agenda tu cita
              </span>
            </div>
          </div>
        </section>

        {/* Formulario y Información */}
        <section className="grid lg:grid-cols-3 gap-12">
          
          {/* Formulario de Contacto */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cuéntanos sobre tu proyecto</h2>
              
              {/* Estado del formulario */}
              {formStatus.submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <p className="text-green-800 font-medium">¡Mensaje enviado exitosamente!</p>
                    <p className="text-green-700 text-sm">Te contactaremos dentro de las próximas 4 horas.</p>
                  </div>
                </div>
              )}

              {formStatus.error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                  <p className="text-red-800">{formStatus.error}</p>
                </div>
              )}

              <div className="space-y-6">
                {/* Información Personal */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Información de la Empresa */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa/Organización
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+52 55 1234 5678"
                      />
                    </div>
                  </div>
                </div>

                {/* Detalles del Proyecto */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de servicio *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="negocio-pequeno">Negocio pequeño</option>
                      <option value="empresa-grande">Empresa mediana/grande</option>
                      <option value="tienda-online">Tienda en línea</option>
                      <option value="influencer">Influencer/Creador</option>
                      <option value="freelancer">Freelancer/Servicios</option>
                      <option value="reservas">Reservas y citas</option>
                      <option value="personalizado">Proyecto personalizado</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Presupuesto aproximado
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="1000-3000">$1,000 - $3,000 MXN</option>
                      <option value="3000-5000">$3,000 - $5,000 MXN</option>
                      <option value="5000-10000">$5,000 - $10,000 MXN</option>
                      <option value="10000+">$10,000+ MXN</option>
                      <option value="por-definir">Por definir</option>
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Cuándo necesitas el proyecto?
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un plazo</option>
                    <option value="urgente">Lo antes posible (1-2 semanas)</option>
                    <option value="normal">En el próximo mes</option>
                    <option value="flexible">En los próximos 2-3 meses</option>
                    <option value="planificando">Solo estoy planificando</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Cuéntanos más sobre tu proyecto *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Describe tu proyecto, objetivos, funcionalidades que necesitas, audiencia objetivo, etc. Mientras más detalles nos proporciones, mejor podremos ayudarte."
                    />
                  </div>
                </div>

                {/* Botón de Envío */}
                <div>
                  <button
                    onClick={handleSubmit}
                    disabled={formStatus.isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-4 rounded-lg font-semibold text-white transition-colors duration-200 ${
                      formStatus.isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Información Adicional */}
          <div className="space-y-8">
            
            {/* Información de Contacto */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Información de contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Ubicación</p>
                    <p className="text-gray-600 text-sm">Ciudad de México, México</p>
                    <p className="text-gray-500 text-xs">Atendemos toda América Latina</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Horarios</p>
                    <p className="text-gray-600 text-sm">Lun-Vie: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600 text-sm">Sáb: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-500 text-xs">Zona horaria: México (GMT-6)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Respuesta</p>
                    <p className="text-gray-600 text-sm">WhatsApp: Inmediata</p>
                    <p className="text-gray-600 text-sm">Email: 2-4 horas</p>
                    <p className="text-gray-500 text-xs">Días hábiles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Qué esperar */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Qué pasa después?</h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Confirmación inmediata</p>
                    <p className="text-gray-600 text-xs">Recibirás un email confirmando que recibimos tu mensaje</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Primera respuesta</p>
                    <p className="text-gray-600 text-xs">Te contactaremos en 2-4 horas para agendar una consulta</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Consulta gratuita</p>
                    <p className="text-gray-600 text-xs">30 min de videollamada para entender tu proyecto</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Propuesta personalizada</p>
                    <p className="text-gray-600 text-xs">Documento detallado con precios y cronograma</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Rápido */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Preguntas frecuentes</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-900 text-sm">¿La consulta tiene costo?</p>
                  <p className="text-gray-600 text-xs">No, la primera consulta es completamente gratuita.</p>
                </div>

                <div>
                  <p className="font-medium text-gray-900 text-sm">¿Cuánto tarda un proyecto?</p>
                  <p className="text-gray-600 text-xs">Desde 5 días hasta 30 días según la complejidad.</p>
                </div>

                <div>
                  <p className="font-medium text-gray-900 text-sm">¿Ofrecen garantía?</p>
                  <p className="text-gray-600 text-xs">Sí, 30 días de garantía y 60 días de soporte técnico.</p>
                </div>

                <div>
                  <p className="font-medium text-gray-900 text-sm">¿Trabajan fuera de México?</p>
                  <p className="text-gray-600 text-xs">Sí, atendemos clientes en toda América Latina.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA de Urgencia */}
        <section className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Proyecto urgente?</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Si necesitas tu sitio web en menos de una semana, contáctanos por WhatsApp. 
            Manejamos proyectos express con entrega en 3-5 días.
          </p>
          <a 
            href="https://wa.me/5255123456789?text=Hola,%20tengo%20un%20proyecto%20urgente%20y%20necesito%20información"
            className="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            WhatsApp Directo
          </a>
        </section>
      </main>
    </div>
  );
};

export default Contact;