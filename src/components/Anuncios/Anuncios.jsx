import React, { memo } from "react";
import "./Anuncios.css";
import CloudinaryAnuncioCard from "../CloudinaryAnuncioCard";
import OptimizedImage from "../OptimizedImage";
import { localImages } from "../../utils/localImages";

const anuncioGrafologia = {
  carrera: "Grafología Emocional",
  profesor: "Alberto Antonio Domínguez Aguilera",
  titulo: "Técnico Superior en Grafología. Tit. Of. Nro. 506087.",
};

const anuncioPsicologia = {
  carrera: "Psicología Social",
  titulo: "Psicólogo Social",
  tituloIntermedio: "Operador Preventivo en Salud Mental",
  tituloFinal: "Psicólogo Social",
  duracion: "3 años",
};

const anuncioCriminalistica = {
  carrera: "Criminalística",
  titulo: "Diplomatura en Criminalística",
  duracion: "1 año",
};





const Anuncios = ({ irACursos }) => {

  return (
    <>
      <section className="anuncios-section">
        <div className="anuncios-card-container anuncios-card-container-spaced">
          <div className="anuncios-list">
            {/* ===== ANUNCIO GRAFOLOGÍA EMOCIONAL ===== */}
            <CloudinaryAnuncioCard
              backgroundSrc={localImages.anuncios.anuncio1}
              fallbackSrc={localImages.anuncios.anuncio1}
              className="anuncio-card-grafologia-seminario"
            >
              <div className="anuncio-card-grafologia-seminario-overlay"></div>
              <div className="anuncio-card-grafologia-seminario-content">
                <div className="anuncio-grafologia-seminario-content-left">
                  <div className="anuncio-grafologia-seminario-header">
                    <h3 className="anuncio-titulo-alt-full anuncio-titulo-grafologia-seminario">
                      SEMINARIO PROFESIONAL EN <span className="titulo-highlight">Grafología Emocional</span>
                    </h3>
                    <h4 className="anuncio-subtitulo-alt-full anuncio-subtitulo-grafologia-seminario">
                      Seminario Profesional - modalidad online
                    </h4>
                  </div>
                  
                  {/* Descripción elegante del seminario */}
                  <div className="anuncio-grafologia-descripcion-elegante">
                    <p>
                      Descubre los secretos ocultos en cada trazo de escritura. Este seminario profesional te introducirá 
                      en el fascinante mundo de la grafología emocional, donde aprenderás a interpretar los aspectos 
                      psicológicos y emocionales que se revelan a través de la escritura manuscrita.
                    </p>
                  </div>
                  
                  {/* Sección del autor rediseñada */}
                  <div className="anuncio-grafologia-autor-section-nueva">
                    <div className="anuncio-grafologia-autor-texto">
                      <div className="anuncio-modalidad-tag">• Seminario Especializado</div>
                      <h5 className="anuncio-grafologia-autor-nombre">Teoría de Curt A. Honroth</h5>
                      <p className="anuncio-grafologia-frase-destacada">"Duda la mente, tiembla la mano"</p>
                      <p className="anuncio-grafologia-autor-bio">
                        Pionero en el análisis grafológico emocional, Curt A. Honroth desarrolló técnicas revolucionarias 
                        para interpretar los estados emocionales a través de la escritura manuscrita.
                      </p>
                    </div>
                    <div className="anuncio-grafologia-autor-imagen-nueva">
                      <img src={localImages.icons.curt} alt="Curt August Honroth" className="anuncio-curt-img-rectangular" />
                    </div>
                  </div>
                  
                  <div className="anuncio-grafologia-profesor-info">
                    <p className="anuncio-grafologia-dictado-por">Dictado por:</p>
                    <h6 className="anuncio-grafologia-profesor-nombre">{anuncioGrafologia.profesor}</h6>
                    <p className="anuncio-grafologia-profesor-credenciales">{anuncioGrafologia.titulo}</p>
                  </div>
                </div>
                
                <div className="anuncio-grafologia-seminario-content-right">
                  <div className="anuncio-logo-circle-grafologia-seminario">
                    <img
                      src={localImages.icons.logo1}
                      alt="Logo ISDEP"
                      className="anuncio-logo-img-grafologia-seminario"
                    />
                  </div>
                  <h5 className="anuncio-cta-text">Inscríbete Ahora</h5>
                  <button
                    onClick={() => irACursos("Grafología Emocional")}
                    className="anuncio-boton-grafologia-seminario"
                  >
                    Más Información
                  </button>
                </div>
              </div>
            </CloudinaryAnuncioCard>
            
          </div>
          
          {/* ===== CARDS PROMOCIONALES ===== */}
          <div className="promotional-cards-container">
            <div className="promotional-cards-grid">
              {/* Card Psicología Social */}
              <div className="promotional-card">
                <OptimizedImage 
                  imageName="psicologiasocial"
                  alt="Formación Profesional en Psicología Social" 
                  className="promotional-card-image"
                />
              </div>
              
              {/* Card Criminalística */}
              <div className="promotional-card">
                <OptimizedImage 
                  imageName="criminalistica"
                  alt="Carrera de Formación Profesional en Criminalística" 
                  className="promotional-card-image"
                />
              </div>

              {/* Card Detección de Falsificación */}
              <div className="promotional-card">
                <OptimizedImage 
                  imageName="detecciondefalsificacion"
                  alt="Capacitación Profesional en Detección de Falsificación de Firmas" 
                  className="promotional-card-image"
                />
              </div>

              {/* Card Grafología Emocional */}
              <div className="promotional-card">
                <OptimizedImage 
                  imageName="grafologiaemocional"
                  alt="Capacitación Profesional en Grafología Emocional" 
                  className="promotional-card-image"
                />
              </div>

              {/* Card Seminario Grafología Emocional (Kurt) */}
              <div className="promotional-card">
                <OptimizedImage 
                  imageName="grafologiaemocionalkurt"
                  alt="Seminario Profesional en Grafología Emocional - Teoría de Kurt A. Honroth" 
                  className="promotional-card-image"
                />
              </div>

              {/* Card Psicografología */}
              <div className="promotional-card">
                <OptimizedImage 
                  imageName="psicografologia"
                  alt="Formación Profesional en Psicografología" 
                  className="promotional-card-image"
                />
              </div>

              {/* Card Tecnografía Pericial */}
              <div className="promotional-card">
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
