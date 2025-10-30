// Configuración de imágenes optimizadas - Generado automáticamente
// Fecha: 29/10/2025, 09:28:10

export const optimizedImages = {
  "criminalistica": {
    "webp": "/images/criminalistica.webp",
    "size": "116.95KB",
    "fallback": "/images/criminalistica.jpg"
  },
  "detecciondefalsificacion": {
    "webp": "/images/detecciondefalsificacion.webp",
    "size": "49.07KB",
    "fallback": "/images/detecciondefalsificacion.png"
  },
  "grafologiaemocional": {
    "webp": "/images/grafologiaemocional.webp",
    "size": "48.99KB",
    "fallback": "/images/grafologiaemocional.png"
  },
  "grafologiaemocionalkurt": {
    "webp": "/images/grafologiaemocionalkurt.webp",
    "size": "39.22KB",
    "fallback": "/images/grafologiaemocionalkurt.png"
  },
  "psicografologia": {
    "webp": "/images/psicografologia.webp",
    "size": "52.45KB",
    "fallback": "/images/psicografologia.png"
  },
  "psicologiasocial": {
    "webp": "/images/psicologiasocial.webp",
    "size": "111.71KB",
    "fallback": "/images/psicologiasocial.jpg"
  },
  "tecnografiapericial": {
    "webp": "/images/tecnografiapericial.webp",
    "size": "51.70KB",
    "fallback": "/images/tecnografiapericial.png"
  }
};

export const getOptimizedImage = (imageName) => {
  const imageConfig = optimizedImages[imageName];
  if (!imageConfig) {
    console.warn(`Imagen no encontrada en optimizadas: ${imageName}`);
    return null;
  }
  return imageConfig;
};

export const getImageSrc = (imageName, useWebP = true) => {
  const imageConfig = getOptimizedImage(imageName);
  if (!imageConfig) return null;
  
  // Detectar soporte WebP del navegador
  const supportsWebP = useWebP && typeof window !== 'undefined' && 
    window.HTMLCanvasElement && 
    window.HTMLCanvasElement.prototype.toDataURL &&
    window.HTMLCanvasElement.prototype.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  
  return supportsWebP ? imageConfig.webp : (imageConfig.fallback || imageConfig.webp);
};

// Metadatos de optimización
export const optimizationStats = {
  "generated": "2025-10-30T00:28:10.277Z",
  "description": "Mapeo de imágenes optimizadas - Instituto ISDEP",
  "totalWebpFiles": 7,
  "optimization": {
    "format": "WebP",
    "averageReduction": "92.4%",
    "totalSpaceSaved": "6.70MB"
  }
};
