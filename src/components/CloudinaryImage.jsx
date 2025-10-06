import React from 'react';

const CloudinaryImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = null,
  ...props 
}) => {
  // Si no hay src, usar fallback
  const imageSrc = src || fallbackSrc;
  
  if (!imageSrc) {
    return null;
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        if (fallbackSrc && e.target.src !== fallbackSrc) {
          e.target.src = fallbackSrc;
        }
      }}
      {...props}
    />
  );
};

export default CloudinaryImage;