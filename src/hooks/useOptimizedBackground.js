import { useState, useEffect } from 'react';

export const useOptimizedBackground = (imagePath, webpPath) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    // Crear un placeholder base64 para mostrar mientras carga
    const placeholder = 'data:image/svg+xml;base64,' + btoa(`
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#e2e8f0;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#cbd5e0;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#gradient)"/>
      </svg>
    `);

    // Inicialmente mostrar el placeholder
    setCurrentSrc(placeholder);

    // Intentar cargar la versión WebP primero si está disponible
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const testImg = new Image();
        testImg.onload = () => resolve(src);
        testImg.onerror = reject;
        testImg.src = src;
      });
    };

    const loadOptimizedImage = async () => {
      try {
        let finalSrc = imagePath;
        
        // Verificar soporte WebP del navegador
        const supportsWebP = await new Promise((resolve) => {
          const webP = new Image();
          webP.onload = webP.onerror = () => resolve(webP.height === 2);
          webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        });

        // Si el navegador soporta WebP y tenemos la versión WebP, usarla
        if (supportsWebP && webpPath) {
          try {
            finalSrc = await loadImage(webpPath);
          } catch {
            // Si falla WebP, usar la imagen original
            finalSrc = await loadImage(imagePath);
          }
        } else {
          finalSrc = await loadImage(imagePath);
        }

        setCurrentSrc(finalSrc);
        setIsLoaded(true);
      } catch (err) {
        setError(true);
        console.warn('Error loading background image:', err);
      }
    };

    loadOptimizedImage();
  }, [imagePath, webpPath]);

  return {
    backgroundImage: `url(${currentSrc})`,
    isLoaded,
    error
  };
};

export default useOptimizedBackground;