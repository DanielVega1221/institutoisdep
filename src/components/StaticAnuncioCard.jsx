import React, { memo } from 'react';

const StaticAnuncioCard = memo(({ 
  children, 
  optimizedSrc, 
  fallbackSrc, 
  className = '', 
  style = {},
  ...props 
}) => {
  // Usar imagen optimizada directamente
  const backgroundImage = `url(${optimizedSrc || fallbackSrc})`;

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

export default StaticAnuncioCard;