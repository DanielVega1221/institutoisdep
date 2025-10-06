import React, { memo } from "react";
import "./Anuncios.css";
import LazyAnuncioCard from "../LazyAnuncioCard";

import logo1 from "../../assets/Logo1.png";
import curtImg from "../../assets/curt.png";

// Importar imágenes optimizadas y originales para fallback
import anuncio1ImagenOpt from "../../assets/optimized/anuncio1imagen.jpg";
import anuncio2ImagenOpt from "../../assets/optimized/anuncio2imagen.jpg";
import anuncio3ImagenOpt from "../../assets/optimized/anuncio3imagen.jpg";

// Importar originales como fallback
import anuncio1ImagenOrig from "../../assets/anuncio1imagen.jpg";
import anuncio2ImagenOrig from "../../assets/anuncio2imagen.jpg";
import anuncio3ImagenOrig from "../../assets/anuncio3imagen.jpg";

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
            <LazyAnuncioCard
              optimizedSrc={anuncio1ImagenOpt}
              fallbackSrc={anuncio1ImagenOrig}
              className="anuncio-card-grafologia-seminario anuncio-optimized-background"
            >
              <div className="anuncio-card-grafologia-seminario-overlay"></div>
              <div className="anuncio-card-grafologia-seminario-content">
                <div className="anuncio-grafologia-seminario-content-left">
                  <div className="anuncio-grafologia-seminario-header">
                    <h3 className="anuncio-titulo-alt-full anuncio-titulo-grafologia-seminario">
                      SEMINARIO PROFESIONAL EN <span className="titulo-highlight">Grafología Emocional</span>
                    </h3>
                    <h4 className="anuncio-subtitulo-alt-full anuncio-subtitulo-grafologia-seminario">
                      Seminario Profesional
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
                      <p className="anuncio-grafologia-frase-destacada">"Tiembla la mano, tiembla la letra"</p>
                      <p className="anuncio-grafologia-autor-bio">
                        Pionero en el análisis grafológico emocional, Curt A. Honroth desarrolló técnicas revolucionarias 
                        para interpretar los estados emocionales a través de la escritura manuscrita.
                      </p>
                    </div>
                    <div className="anuncio-grafologia-autor-imagen-nueva">
                      <img src={curtImg} alt="Curt August Honroth" className="anuncio-curt-img-rectangular" />
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
                      src={logo1}
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
            </LazyAnuncioCard>
            
            {/* ===== ANUNCIO PSICOLOGÍA SOCIAL ===== */}
            <LazyAnuncioCard
              optimizedSrc={anuncio2ImagenOpt}
              fallbackSrc={anuncio2ImagenOrig}
              className="anuncio-card-psicologia anuncio-optimized-background"
            >
              <div className="anuncio-card-psicologia-overlay"></div>
              <div className="anuncio-card-psicologia-content">
                <div className="anuncio-psicologia-content-left">
                  <h3 className="anuncio-titulo-alt-full anuncio-titulo-psicologia">
                    FORMACIÓN PROFESIONAL EN <span className="titulo-highlight">Psicología Social</span>
                  </h3>
                  <h4 className="anuncio-subtitulo-alt-full anuncio-subtitulo-psicologia">
                    "Comprender las relaciones humanas"
                  </h4>
                  <p className="anuncio-descripcion-psicologia">
                    Especialízate en el análisis del comportamiento humano en contextos sociales. Técnicas avanzadas de intervención comunitaria y psicología aplicada.
                  </p>
                  <div className="anuncio-modalidad-psicologia">
                    • Modalidad presencial
                  </div>
                </div>
                <div className="anuncio-psicologia-content-right">
                  <div className="anuncio-logo-circle-psicologia">
                    <img
                      src={logo1}
                      alt="Logo ISDEP"
                      className="anuncio-logo-img-psicologia"
                    />
                  </div>
                  <h5 className="anuncio-cta-text">Comienza Tu Carrera</h5>
                  <div className="anuncio-duracion-alt-full anuncio-duracion-psicologia">
                    Duración: {anuncioPsicologia.duracion}
                  </div>
                  <button
                    onClick={() => irACursos("Psicólogo Social")}
                    className="anuncio-boton-psicologia"
                  >
                    Inscribite Ahora
                  </button>
                </div>
              </div>
            </LazyAnuncioCard>
            
            {/* ===== ANUNCIO CRIMINALÍSTICA ===== */}
            <LazyAnuncioCard
              optimizedSrc={anuncio3ImagenOpt}
              fallbackSrc={anuncio3ImagenOrig}
              className="anuncio-card-criminalistica anuncio-optimized-background"
            >
              <div className="anuncio-card-criminalistica-overlay"></div>
              <div className="anuncio-card-criminalistica-content">
                <div className="anuncio-criminalistica-content-left">
                  <h3 className="anuncio-titulo-alt-full anuncio-titulo-criminalistica">
                    CARRERA DE FORMACIÓN PROFESIONAL EN <span className="titulo-highlight">Criminalística</span>
                  </h3>
                  <h4 className="anuncio-subtitulo-alt-full anuncio-subtitulo-criminalistica">
                    Vení y Formate como un Profesional
                  </h4>
                  <p className="anuncio-descripcion-criminalistica">
                    Desarrollá habilidades técnicas y científicas para la
                    investigación criminal y el análisis forense.
                  </p>
                  <div className="anuncio-modalidad-criminalistica">
                    • Modalidad a distancia
                  </div>
                </div>
                <div className="anuncio-criminalistica-content-right">
                  <div className="anuncio-logo-circle-criminalistica">
                    <img
                      src={logo1}
                      alt="Logo ISDEP"
                      className="anuncio-logo-img-criminalistica"
                    />
                  </div>
                  <h5 className="anuncio-cta-text">Más Información</h5>
                  <div className="anuncio-duracion-alt-full anuncio-duracion-criminalistica">
                    Duración: {anuncioCriminalistica.duracion}
                  </div>
                  <button
                    onClick={() => irACursos("Diplomatura en Criminalística")}
                    className="anuncio-boton-criminalistica"
                  >
                    Inscribite Ahora
                  </button>
                </div>
              </div>
            </LazyAnuncioCard>
            </div>
          </div>
        </section>
      </>
    );
};

export default memo(Anuncios);
