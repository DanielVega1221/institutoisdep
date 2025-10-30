import React from 'react';
import { getOptimizedImage } from '../utils/optimizedImages.js';

/**
 * Componente para mostrar imágenes optimizadas con fallback automático
 * @param {string} imageName - Nombre de la imagen (sin extensión)
 * @param {string} alt - Texto alternativo
 * @param {string} className - Clases CSS
 * @param {object} style - Estilos inline
 * @param {boolean} useWebP - Si usar WebP cuando esté disponible (default: true)
 */
const OptimizedImage = ({ 
  imageName, 
  alt, 
  className = '', 
  style = {}, 
  useWebP = true,
  ...props 
}) => {
  const imageConfig = getOptimizedImage(imageName);
  
  if (!imageConfig) {
    console.warn(`Imagen optimizada no encontrada: ${imageName}`);
    return <div className="image-placeholder">Imagen no encontrada</div>;
  }
  
  return (
    <picture>
      {/* WebP para navegadores compatibles */}
      {useWebP && imageConfig.webp && (
        <source srcSet={imageConfig.webp} type="image/webp" />
      )}
      
      {/* Fallback para navegadores antiguos */}
      <img 
        src={imageConfig.fallback || imageConfig.webp}
        alt={alt}
        className={className}
        style={style}
        loading="lazy"
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
