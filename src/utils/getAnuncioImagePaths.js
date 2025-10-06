// Utilidad para obtener las rutas optimizadas de las imágenes de anuncios
const getAnuncioImagePaths = (imageName) => {
  const baseName = imageName.replace(/\.(jpg|jpeg|png)$/i, '');
  
  // Importar dinámicamente las imágenes desde assets/optimized
  const originalPath = `/src/assets/optimized/${baseName}.jpg`;
  const webpPath = `/src/assets/optimized/${baseName}.webp`;
  
  return {
    original: originalPath,
    webp: webpPath,
    // Para mayor compatibilidad, intentar con diferentes extensiones
    fallback: `/src/assets/${imageName}`
  };
};

// Configuración específica para cada anuncio
export const anuncioImages = {
  grafologia: {
    original: '/src/assets/optimized/anuncio1imagen.jpg',
    webp: '/src/assets/optimized/anuncio1imagen.webp',
    fallback: '/src/assets/anuncio1imagen.jpg'
  },
  criminalistica: {
    original: '/src/assets/optimized/anuncio2imagen.jpg', 
    webp: '/src/assets/optimized/anuncio2imagen.webp',
    fallback: '/src/assets/anuncio2imagen.jpg'
  },
  psicologia: {
    original: '/src/assets/optimized/anuncio3imagen.jpg',
    webp: '/src/assets/optimized/anuncio3imagen.webp', 
    fallback: '/src/assets/anuncio3imagen.jpg'
  }
};

export default getAnuncioImagePaths;