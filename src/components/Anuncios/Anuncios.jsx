import React, { memo } from "react";
import "./Anuncios.css";
import CloudinaryAnuncioCard from "../CloudinaryAnuncioCard";
import OptimizedImage from "../OptimizedImage";

const Anuncios = ({ onAnuncioClick }) => {

  const handlePsicologiaSocialClick = () => {
    if (onAnuncioClick) {
      onAnuncioClick("Formación Profesional en Psicología Social");
    }
  };

  const handleCriminalisticaClick = () => {
    if (onAnuncioClick) {
      onAnuncioClick("Diplomatura Profesional en Criminalística");
    }
  };

  const handleDeteccionFalsificacionClick = () => {
    if (onAnuncioClick) {
      onAnuncioClick("Detección en Falsificación en Firmas");
    }
  };

  const handleGrafologiaEmocionalClick = () => {
    if (onAnuncioClick) {
      onAnuncioClick("Grafología Emocional");
    }
  };

  const handlePsicografologiaClick = () => {
    if (onAnuncioClick) {
      onAnuncioClick("Formación Profesional en Psicografología");
    }
  };

  const handleTecnografiaClick = () => {
    if (onAnuncioClick) {
      onAnuncioClick("Diplomatura Superior en Tecnografía Pericial Forense: Área Grafológica");
    }
  };

  return (
    <>
      <section className="anuncios-section">
        <div className="anuncios-card-container anuncios-card-container-spaced">
          
          
          {/* ===== CARDS PROMOCIONALES ===== */}
          <div className="promotional-cards-container">
            <div className="promotional-cards-grid">
              {/* Card Psicología Social */}
              <div 
                className="promotional-card promotional-card-clickable" 
                onClick={handlePsicologiaSocialClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handlePsicologiaSocialClick()}
              >
                <OptimizedImage 
                  imageName="psicologiasocial"
                  alt="Formación Profesional en Psicología Social" 
                  className="promotional-card-image"
                />
              </div>
              
              {/* Card Criminalística */}
              <div 
                className="promotional-card promotional-card-clickable"
                onClick={handleCriminalisticaClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleCriminalisticaClick()}
              >
                <OptimizedImage 
                  imageName="criminalistica"
                  alt="Carrera de Formación Profesional en Criminalística" 
                  className="promotional-card-image"
                />
              </div>

              {/* Card Detección de Falsificación */}
              <div 
                className="promotional-card promotional-card-clickable"
                onClick={handleDeteccionFalsificacionClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleDeteccionFalsificacionClick()}
              >
                <OptimizedImage 
                  imageName="detecciondefalsificacion"
                  alt="Capacitación Profesional en Detección de Falsificación de Firmas" 
                  className="promotional-card-image"
                />
              </div>


              {/* Card Seminario Grafología Emocional (Kurt) */}
              <div 
                className="promotional-card promotional-card-clickable"
                onClick={handleGrafologiaEmocionalClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleGrafologiaEmocionalClick()}
              >
                <OptimizedImage 
                  imageName="grafologiaemocionalkurt"
                  alt="Seminario Profesional en Grafología Emocional - Teoría de Kurt A. Honroth" 
                  className="promotional-card-image"
                />
              </div>

              {/* Card Psicografología */}
              <div 
                className="promotional-card promotional-card-clickable"
                onClick={handlePsicografologiaClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handlePsicografologiaClick()}
              >
                <OptimizedImage 
                  imageName="psicografologia"
                  alt="Formación Profesional en Psicografología" 
                  className="promotional-card-image"
                />
              </div>

              {/* Card Tecnografía Pericial */}
              <div 
                className="promotional-card promotional-card-clickable"
                onClick={handleTecnografiaClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleTecnografiaClick()}
              >
                <OptimizedImage 
                  imageName="tecnografiapericial"
                  alt="Diplomatura Superior en Tecnografía Pericial Forense Área Grafológica" 
                  className="promotional-card-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Anuncios);
