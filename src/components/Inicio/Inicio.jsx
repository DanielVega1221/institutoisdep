import React, { useEffect, useState } from 'react';
import './Inicio.css';
import { localImages } from '../../utils/localImages';

const Inicio = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Precargar la imagen para una transición más suave
    const img = new Image();
    img.onload = () => {
      console.log('✅ Imagen de inicio cargada');
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.warn('⚠️ Error cargando imagen de inicio');
      setImageLoaded(true); // Continuar de todas formas
    };
    img.src = localImages.banners.fondoInicio;
  }, []);

  return (
    <section 
      className={`inicio-hero inicio-optimized-background ${imageLoaded ? 'loaded' : 'loading'}`}
      style={{
        '--bg-image': `url(${localImages.banners.fondoInicio})`,
        backgroundImage: `url(${localImages.banners.fondoInicio})`
      }}
    >
      <div className="inicio-overlay">
        <div className="inicio-content">
          <h1 className="inicio-title">
            ISDEP, Instituto Superior de Enseñanza Profesional
          </h1>
          <p className="inicio-subtitle">
            Descubriendo los secretos de la personalidad a través de la escritura. 
            Donde cada trazo revela una historia y cada letra construye un futuro profesional. 
            Formamos expertos en grafología con pasión, precisión y propósito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
