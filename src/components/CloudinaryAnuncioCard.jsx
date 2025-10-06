import React, { memo } from 'react';

const CloudinaryAnuncioCard = memo(({ 
  children, 
  backgroundSrc,
  fallbackSrc, 
  className = '', 
  style = {},
  ...props 
}) => {
  // Usar backgroundSrc directamente (ya viene optimizada de cloudinaryImages.js)
  const backgroundImage = backgroundSrc || fallbackSrc ? `url(${backgroundSrc || fallbackSrc})` : '';

  const combinedStyle = {
    ...style,
    backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div
      className={className}
      style={combinedStyle}
      {...props}
    >
      {children}
    </div>
  );
});

export default CloudinaryAnuncioCard;