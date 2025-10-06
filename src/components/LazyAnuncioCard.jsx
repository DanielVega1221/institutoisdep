import React, { useState, useEffect, useRef, memo } from 'react';

const LazyAnuncioCard = memo(({ 
  children, 
  optimizedSrc, 
  fallbackSrc, 
  className = '', 
  style = {},
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentBgImage, setCurrentBgImage] = useState('');
  const cardRef = useRef(null);

  useEffect(() => {
    // Cargar imagen inmediatamente sin lazy loading ni intersection observer
    const loadImage = () => {
      const img = new Image();
      
      img.onload = () => {
        setCurrentBgImage(`url(${optimizedSrc})`);
        setImageLoaded(true);
      };
      
      img.onerror = () => {
        // Si falla, usar fallback
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
    };

    // Cargar inmediatamente
    loadImage();
  }, [optimizedSrc, fallbackSrc]);

  // Estilos simples sin transiciones
  const combinedStyle = {
    ...style,
    backgroundImage: currentBgImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const combinedClassName = [
    className,
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