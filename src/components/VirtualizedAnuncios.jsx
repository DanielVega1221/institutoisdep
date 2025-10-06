import React, { useState, useEffect, useRef } from 'react';

const VirtualizedAnuncios = ({ children, threshold = 0.1, rootMargin = '200px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Una vez visible, ya no necesitamos observar
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={elementRef} style={{ minHeight: isVisible ? 'auto' : '600px' }}>
      {isVisible ? children : (
        <div style={{
          height: '600px',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          color: '#64748b'
        }}>
          📚 Cargando anuncios...
        </div>
      )}
    </div>
  );
};

export default VirtualizedAnuncios;