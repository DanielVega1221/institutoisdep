import React, { useEffect, useRef } from 'react';
import './Banner.css';

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
          <span className="banner-text">
            🎓 ABIERTA LA INSCRIPCIÓN 2025 🎓 ¡Únete a nosotros y transforma tu futuro! INSCRIPCIONES ABIERTAS  
          </span>
          <span className="banner-text">
            🎓 ABIERTA LA INSCRIPCIÓN 2025 🎓 ¡Únete a nosotros y transforma tu futuro!  INSCRIPCIONES ABIERTAS  
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
