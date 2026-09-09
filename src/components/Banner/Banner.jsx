import React, { useEffect, useRef } from 'react';
import './Banner.css';

// NUEVO (cambio de esta sesión): texto institucional que se desplaza bajo el navbar.
// Se repite dos veces para que el recorrido de la animación cubra todo el ancho.
// PENDIENTE CLIENTE: revisar qué formaciones lista esta línea. Se corrigió el nombre de la
// diplomatura para que coincida con el real ("Diplomatura Superior en Psicología Social
// Psicoanalítica"), pero "Acompañante Terapéutico" es un curso, no una tecnicatura terciaria.
const TEXTO_BANNER = '¡Únete a Nosotros y Transforma tu Futuro! ISDEP Tecnicaturas Terciarias en Psicología Social y Acompañante Terapéutico - Diplomatura Superior en Psicología Social Psicoanalítica';

const Banner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    // Performance: Pausar animaciones cuando el tab no está activo
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.documentElement.classList.add('document-hidden');
      } else {
        document.documentElement.classList.remove('document-hidden');
      }
    };

    // Performance: Pausar animaciones cuando el banner no es visible en el viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('banner-in-view');
          } else {
            entry.target.classList.remove('banner-in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentBanner = bannerRef.current;
    if (currentBanner) {
      observer.observe(currentBanner);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (currentBanner) {
        observer.unobserve(currentBanner);
      }
    };
  }, []);

  return (
    <div className="banner-container" ref={bannerRef}>
      <div className="banner-content">
        <div className="scrolling-text">
          {/* ANTERIOR (texto que se desplazaba antes del cambio):
          <span className="banner-text">Inscripciones ENERO · Inicio MARZO</span>
          <span className="banner-text">Inscripciones JUNIO · Inicio AGOSTO</span>
          <span className="banner-text">Inscripciones ENERO · Inicio MARZO</span>
          <span className="banner-text">Inscripciones JUNIO · Inicio AGOSTO</span>
          */}
          <span className="banner-text">{TEXTO_BANNER}</span>
          <span className="banner-text">{TEXTO_BANNER}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
