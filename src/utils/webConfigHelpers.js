// utils/webConfigHelpers.js
export const getInitialFormData = () => ({
  escala: '',
  tipoNegocio: '',
  paginasPrincipales: '',
  cantidadProductos: '',
  necesitaBlog: '',
  frecuenciaBlog: '',
  tipoContenido: [],
  visitantesEstimados: '',
  presupuesto: '',
  tiempoLanzamiento: '',
  funcionalidades: [],
  idiomas: '',
  necesitaEcommerce: '',
  integraccionesExternas: [],
  soporte: ''
});

export const getRecommendedConfig = (formData) => {
  const { escala, visitantesEstimados, cantidadProductos } = formData;
  
  // Determinar escala basada en múltiples factores
  const isSmall = escala === 'pequeña' || visitantesEstimados === 'menos-1000' || cantidadProductos === '1-10' || cantidadProductos === 'ninguno';
  const isLarge = escala === 'grande' || visitantesEstimados === '50000+' || cantidadProductos === '200+';
  
  if (isSmall && !isLarge) {
    return {
      escala: 'Pequeña',
      almacenamiento: '500MB - 2GB',
      anchoBanda: '1-10 GB/mes',
      tiempoCarga: '2-4 segundos',
      paginasRecomendadas: '3-7 páginas',
      presupuestoEstimado: '$500 - $3,000'
    };
  } else if (isLarge) {
    return {
      escala: 'Grande',
      almacenamiento: '10-100+ GB',
      anchoBanda: '100GB - 1TB+/mes',
      tiempoCarga: '1-2 segundos',
      paginasRecomendadas: '100+ páginas',
      presupuestoEstimado: '$15,000+'
    };
  } else {
    return {
      escala: 'Mediana', 
      almacenamiento: '2-10 GB',
      anchoBanda: '10-100 GB/mes',
      tiempoCarga: '2-3 segundos',
      paginasRecomendadas: '10-50 páginas',
      presupuestoEstimado: '$3,000 - $15,000'
    };
  }
};
