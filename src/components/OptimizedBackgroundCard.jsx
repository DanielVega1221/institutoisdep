import React, { useState, useEffect, useRef } from 'react';

const OptimizedBackgroundCard = ({ 
  children, 
  imageSrc, 
  webpSrc, 
  className = '',
  style = {},
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentBgImage, setCurrentBgImage] = useState('');
  const cardRef = useRef(null);

  useEffect(() => {
    const loadBackgroundImage = async () => {
      try {
        // Crear placeholder mientras carga
        const placeholder = 'data:image/svg+xml;base64,' + btoa(`
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#e2e8f0;stop-opacity:0.8" />
                <stop offset="50%" style="stop-color:#cbd5e0;stop-opacity:0.6" />
                <stop offset="100%" style="stop-color:#a0aec0;stop-opacity:0.8" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#gradient)"/>
          </svg>
        `);

        // Inicialmente usar placeholder
        setCurrentBgImage(`url(${placeholder})`);

        // Función para probar si una imagen se puede cargar
        const testImageLoad = (src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = reject;
            img.src = src;
          });
        };

        // Detectar soporte WebP
        const supportsWebP = () => {
          return new Promise((resolve) => {
            const webP = new Image();
            webP.onload = webP.onerror = () => resolve(webP.height === 2);
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
          });
        };

        let finalImageSrc = imageSrc;

        // Intentar cargar WebP si está disponible y el navegador lo soporta
        if (webpSrc && await supportsWebP()) {
          try {
            await testImageLoad(webpSrc);
            finalImageSrc = webpSrc;
          } catch {
            // Si WebP falla, usar imagen original
            await testImageLoad(imageSrc);
          }
        } else {
          await testImageLoad(imageSrc);
        }

        // Aplicar la imagen final
        setCurrentBgImage(`url(${finalImageSrc})`);
        setImageLoaded(true);

      } catch (error) {
        console.warn('Error loading background image:', error);
        // Mantener placeholder en caso de error
      }
    };

    if (imageSrc) {
      loadBackgroundImage();
    }
  }, [imageSrc, webpSrc]);

  // Crear el style combinado
  const combinedStyle = {
    ...style,
    backgroundImage: currentBgImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: imageLoaded ? 'all 0.5s ease-in-out' : 'none',
    filter: imageLoaded ? 'none' : 'blur(1px)',
    '--bg-image': currentBgImage
  };

  const combinedClassName = `${className} ${imageLoaded ? 'anuncio-background-loaded' : 'anuncio-background-loading'}`;

  return (
    <div
      ref={cardRef}
      className={combinedClassName}
      style={combinedStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default OptimizedBackgroundCard;