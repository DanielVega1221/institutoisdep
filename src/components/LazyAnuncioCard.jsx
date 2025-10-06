import React, { useState, useEffect, useRef, memo } from 'react';
import { getPlaceholderForAnuncio } from '../utils/imagePlaceholders';

const LazyAnuncioCard = memo(({ 
  children, 
  optimizedSrc, 
  fallbackSrc, 
  className = '', 
  style = {},
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentBgImage, setCurrentBgImage] = useState('');
  const cardRef = useRef(null);

  // Usar placeholder optimizado - más liviano
  const placeholder = getPlaceholderForAnuncio('anuncio');

  useEffect(() => {
    // Intersection Observer optimizado
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconectar inmediatamente
        }
      },
      {
        rootMargin: '100px', // Más margen para carga temprana
        threshold: 0.1
      }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setCurrentBgImage(`url(${placeholder})`);
      return;
    }

    // Carga optimizada de imagen
    const loadImage = async () => {
      try {
        const img = new Image();
        
        // Usar solo la imagen optimizada para mejor rendimiento
        img.onload = () => {
          setCurrentBgImage(`url(${optimizedSrc})`);
          setImageLoaded(true);
        };
        
        img.onerror = () => {
          // Si falla, usar fallback sin log excesivo
          if (fallbackSrc) {
            const fallbackImg = new Image();
            fallbackImg.onload = () => {
              setCurrentBgImage(`url(${fallbackSrc})`);
              setImageLoaded(true);
            };
            fallbackImg.src = fallbackSrc;
          }
        };
        
        img.src = optimizedSrc;
      } catch (error) {
        // Silenciar errores para mejor rendimiento
        console.warn('Error loading image:', error);
      }
    };

    // Usar requestIdleCallback si está disponible para no bloquear el hilo principal
    if (window.requestIdleCallback) {
      window.requestIdleCallback(loadImage);
    } else {
      setTimeout(loadImage, 16); // ~1 frame de delay
    }
  }, [isVisible, optimizedSrc, fallbackSrc, placeholder]);

  // Estilos optimizados con menos propiedades
  const combinedStyle = {
    ...style,
    '--bg-image': currentBgImage,
    backgroundImage: currentBgImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: imageLoaded ? 'opacity 0.3s ease' : 'none', // Transición más simple
    opacity: imageLoaded ? 1 : 0.9
  };

  const combinedClassName = [
    className,
    !isVisible && 'anuncio-lazy-background',
    imageLoaded ? 'anuncio-background-loaded' : 'anuncio-background-loading'
  ].filter(Boolean).join(' ');

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
});

export default LazyAnuncioCard;