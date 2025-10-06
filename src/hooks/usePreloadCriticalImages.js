// Hook para precargar imágenes críticas
import { useEffect } from 'react';

const usePreloadCriticalImages = (images = []) => {
  useEffect(() => {
    // Solo precargar en el navegador
    if (typeof window === 'undefined') return;

    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = reject;
        img.src = src;
      });
    };

    // Precargar solo la primera imagen (above the fold)
    const preloadCritical = async () => {
      try {
        if (images.length > 0) {
          // Precargar solo la primera imagen que es visible inmediatamente
          await preloadImage(images[0]);
          console.log('✓ Imagen crítica precargada:', images[0]);
        }
      } catch (error) {
        console.warn('Error precargando imagen crítica:', error);
      }
    };

    // Pequeño delay para no bloquear el render inicial
    const timeoutId = setTimeout(preloadCritical, 100);

    return () => clearTimeout(timeoutId);
  }, [images]);
};

export default usePreloadCriticalImages;