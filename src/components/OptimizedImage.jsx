import React, { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  webpSrc, 
  alt, 
  className = '', 
  style = {},
  onLoad,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PC9zdmc+'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <>
      {/* Placeholder mientras carga */}
      {!isLoaded && !hasError && (
        <div 
          className={`${className} image-placeholder`}
          style={{
            ...style,
            backgroundImage: `url(${placeholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)',
            transition: 'opacity 0.3s ease'
          }}
        />
      )}
      
      {/* Imagen optimizada con soporte WebP */}
      <picture style={{ display: isLoaded ? 'block' : 'none' }}>
        {webpSrc && (
          <source srcSet={webpSrc} type="image/webp" />
        )}
        <img
          src={src}
          alt={alt}
          className={className}
          style={{
            ...style,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      </picture>
    </>
  );
};

export default OptimizedImage;
