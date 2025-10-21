import React, { memo } from "react";
import "./Anuncios.css";
import CloudinaryAnuncioCard from "../CloudinaryAnuncioCard";
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
            
            {/* ===== ANUNCIO PSICOLOGÍA SOCIAL ===== */}
            <CloudinaryAnuncioCard
              backgroundSrc={localImages.anuncios.anuncio2}
              fallbackSrc={localImages.anuncios.anuncio2}
              className="anuncio-card-psicologia"
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
                    • Modalidad online
                  </div>
                </div>
                <div className="anuncio-psicologia-content-right">
                  <div className="anuncio-logo-circle-psicologia">
                    <img
                      src={localImages.icons.logo1}
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
            </CloudinaryAnuncioCard>
            
            {/* ===== ANUNCIO CRIMINALÍSTICA ===== */}
            <CloudinaryAnuncioCard
              backgroundSrc={localImages.anuncios.anuncio3}
              fallbackSrc={localImages.anuncios.anuncio3}
              className="anuncio-card-criminalistica"
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
                    • Modalidad online
                  </div>
                </div>
                <div className="anuncio-criminalistica-content-right">
                  <div className="anuncio-logo-circle-criminalistica">
                    <img
                      src={localImages.icons.logo1}
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
            </CloudinaryAnuncioCard>
            
            {/* ===== NUEVO ANUNCIO 1 - GRAFOLOGÍA DISEÑO LIMPIO Y MODERNO ===== */}
            <div 
              className="anuncio-clean anuncio-grafologia-clean"
              style={{ backgroundImage: `url(${localImages.anuncios.anuncio1})` }}
            >
              {/* Overlay con efecto glass */}
              <div className="clean-glass-overlay"></div>
              
              {/* Decoraciones SVG */}
              <svg className="clean-svg-lines" viewBox="0 0 540 700" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <line x1="450" y1="660" x2="510" y2="660" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="470" y1="645" x2="510" y2="645" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="440" cy="660" r="4" fill="#818cf8"/>
                  <circle cx="460" cy="645" r="3" fill="#4f46e5"/>
                </g>
                <g opacity="0.5">
                  <line x1="30" y1="660" x2="90" y2="660" stroke="#6366f1" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="30" y1="645" x2="70" y2="645" stroke="#818cf8" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="100" cy="660" r="4" fill="#4f46e5"/>
                  <circle cx="80" cy="645" r="3" fill="#6366f1"/>
                </g>
              </svg>
              
              {/* Formas decorativas circulares en esquinas */}
              <div className="clean-circle-decoration top-right grafologia"></div>
              <div className="clean-circle-decoration bottom-left grafologia"></div>
              
              {/* Logo en la esquina */}
              <div className="clean-logo-corner">
                <img
                  src={localImages.icons.logo1}
                  alt="Instituto ISDEP"
                  className="clean-logo-img"
                />
              </div>
              
              {/* Contenido principal */}
              <div className="clean-content">
                <div className="clean-header">
                  <h5 className="clean-category">SEMINARIO PROFESIONAL EN</h5>
                  <h2 className="clean-title">Grafología<br/>Emocional</h2>
                  <p className="clean-subtitle">Descubre los secretos en cada trazo</p>
                </div>
                
                {/* Lista de features con iconos */}
                <div className="clean-features-list">
                  <div className="clean-feature-item grafologia">
                    <div className="clean-icon-box grafologia">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Modalidad online</span>
                  </div>
                  
                  <div className="clean-feature-item grafologia">
                    <div className="clean-icon-box grafologia">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Teoría de Curt A. Honroth</span>
                  </div>
                  
                  <div className="clean-feature-item grafologia">
                    <div className="clean-icon-box grafologia">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Certificado profesional</span>
                  </div>
                </div>
                
                {/* Botón CTA */}
                <button
                  onClick={() => irACursos("Grafología Emocional")}
                  className="clean-cta-button grafologia"
                >
                  MÁS INFORMACIÓN
                </button>
                
                {/* Contacto */}
                <div className="clean-contact-section">
                  <p className="clean-contact-label">Reservá tu lugar</p>
                  <p className="clean-contact-number">11-2331-0461</p>
                </div>
              </div>
            </div>

            {/* ===== NUEVO ANUNCIO 2 - PSICOLOGÍA DISEÑO LIMPIO Y MODERNO ===== */}
            <div 
              className="anuncio-clean anuncio-psicologia-clean"
              style={{ backgroundImage: `url(${localImages.anuncios.anuncio2})` }}
            >
              {/* Overlay con efecto glass */}
              <div className="clean-glass-overlay"></div>
              
              {/* Decoraciones SVG */}
              <svg className="clean-svg-lines" viewBox="0 0 540 700" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <line x1="450" y1="660" x2="510" y2="660" stroke="#10b981" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="470" y1="645" x2="510" y2="645" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="440" cy="660" r="4" fill="#34d399"/>
                  <circle cx="460" cy="645" r="3" fill="#10b981"/>
                </g>
                <g opacity="0.5">
                  <line x1="30" y1="660" x2="90" y2="660" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="30" y1="645" x2="70" y2="645" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="100" cy="660" r="4" fill="#10b981"/>
                  <circle cx="80" cy="645" r="3" fill="#14b8a6"/>
                </g>
              </svg>
              
              {/* Formas decorativas circulares en esquinas */}
              <div className="clean-circle-decoration top-right psicologia"></div>
              <div className="clean-circle-decoration bottom-left psicologia"></div>
              
              {/* Logo en la esquina */}
              <div className="clean-logo-corner">
                <img
                  src={localImages.icons.logo1}
                  alt="Instituto ISDEP"
                  className="clean-logo-img"
                />
              </div>
              
              {/* Contenido principal */}
              <div className="clean-content">
                <div className="clean-header">
                  <h5 className="clean-category">FORMACIÓN PROFESIONAL EN</h5>
                  <h2 className="clean-title">Psicología<br/>Social</h2>
                  <p className="clean-subtitle">Comprender las relaciones humanas</p>
                </div>
                
                {/* Lista de features con iconos */}
                <div className="clean-features-list">
                  <div className="clean-feature-item psicologia">
                    <div className="clean-icon-box psicologia">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Modalidad online</span>
                  </div>
                  
                  <div className="clean-feature-item psicologia">
                    <div className="clean-icon-box psicologia">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span>Duración: 3 años</span>
                  </div>
                  
                  <div className="clean-feature-item psicologia">
                    <div className="clean-icon-box psicologia">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Título: Psicólogo Social</span>
                  </div>
                </div>
                
                {/* Botón CTA */}
                <button
                  onClick={() => irACursos("Psicólogo Social")}
                  className="clean-cta-button psicologia"
                >
                  MÁS INFORMACIÓN
                </button>
                
                {/* Contacto */}
                <div className="clean-contact-section">
                  <p className="clean-contact-label">Reservá tu lugar</p>
                  <p className="clean-contact-number">11-2331-0461</p>
                </div>
              </div>
            </div>
            
            {/* ===== NUEVO ANUNCIO 3 - CRIMINALÍSTICA DISEÑO LIMPIO Y MODERNO ===== */}
            <div 
              className="anuncio-clean anuncio-criminalistica-clean"
              style={{ backgroundImage: `url(${localImages.anuncios.anuncio3})` }}
            >
              {/* Overlay con efecto glass */}
              <div className="clean-glass-overlay"></div>
              
              {/* Decoraciones SVG - Líneas y puntos modernos */}
              <svg className="clean-svg-lines" viewBox="0 0 540 700" xmlns="http://www.w3.org/2000/svg">
                {/* Decoración esquina inferior derecha */}
                <g opacity="0.5">
                  <line x1="450" y1="660" x2="510" y2="660" stroke="#f97316" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="470" y1="645" x2="510" y2="645" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="440" cy="660" r="4" fill="#22d3ee"/>
                  <circle cx="460" cy="645" r="3" fill="#f97316"/>
                </g>
                
                {/* Decoración esquina inferior izquierda */}
                <g opacity="0.5">
                  <line x1="30" y1="660" x2="90" y2="660" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="30" y1="645" x2="70" y2="645" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="100" cy="660" r="4" fill="#f97316"/>
                  <circle cx="80" cy="645" r="3" fill="#3b82f6"/>
                </g>
              </svg>
              
              {/* Formas decorativas circulares en esquinas */}
              <div className="clean-circle-decoration top-right"></div>
              <div className="clean-circle-decoration bottom-left"></div>
              
              {/* Logo en la esquina */}
              <div className="clean-logo-corner">
                <img
                  src={localImages.icons.logo1}
                  alt="Instituto ISDEP"
                  className="clean-logo-img"
                />
                <span className="clean-logo-text">INSTITUTO ISDEP</span>
              </div>
              
              {/* Contenido principal */}
              <div className="clean-content">
                <div className="clean-header">
                  <h5 className="clean-category">CARRERA DE FORMACIÓN PROFESIONAL EN</h5>
                  <h2 className="clean-title">Criminología y<br/>Criminalística</h2>
                  <p className="clean-subtitle">Vení y Formate como un Profesional</p>
                </div>
                
                {/* Lista de features con iconos */}
                <div className="clean-features-list">
                  <div className="clean-feature-item">
                    <div className="clean-icon-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Modalidad a distancia</span>
                  </div>
                  
                  <div className="clean-feature-item">
                    <div className="clean-icon-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span>Duración: {anuncioCriminalistica.duracion}</span>
                  </div>
                  
                  <div className="clean-feature-item">
                    <div className="clean-icon-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Título con validez nacional</span>
                  </div>
                </div>
                
                {/* Botón CTA */}
                <button
                  onClick={() => irACursos("Diplomatura en Criminalística")}
                  className="clean-cta-button"
                >
                  MÁS INFORMACIÓN
                </button>
                
                {/* Contacto */}
                <div className="clean-contact-section">
                  <p className="clean-contact-label">Reservá tu lugar</p>
                  <p className="clean-contact-number">11-2331-0461</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default memo(Anuncios);
