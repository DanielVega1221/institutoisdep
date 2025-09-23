import React from "react";
import "./Anuncios.css";

import logo1 from "../../assets/Logo1.png";
import imagen3 from "../../assets/imagen3.png";
import grafologiaImg from "../../assets/GrafologiaEmocional.png";
import curtImg from "../../assets/curt.png";

const anuncio3 = {
  carrera: "Criminalística",
  titulo: "Diplomatura en Criminalística",
  duracion: "1 año",
};

const anuncio1 = {
  carrera: "Psicología Social",
  titulo: "Psicólogo Social",
  tituloIntermedio: "Operador Preventivo en Salud Mental",
  tituloFinal: "Psicólogo Social",
  duracion: "3 años",
};



const Anuncios = ({ irACursos }) => {
  return (
    <>
      <section className="anuncios-section">
        <div className="anuncios-card-container anuncios-card-container-spaced">
          <div className="anuncios-list">
            {/* Anuncio 1 - Psicología Social (Old Style) */}
            <div className="anuncio-card">
              <div className="anuncio-img-wrapper">
                <img src={imagen3} alt="Imagen anuncio" className="anuncio-img" />
                <div className="anuncio-logo-wrapper">
                  <div className="anuncio-logo-circle">
                    <img src={logo1} alt="Logo" className="anuncio-logo-img" />
                  </div>
                </div>
              </div>
              <div className="anuncio-info-wrapper">
                <div className="anuncio-info-card">
                  <h3 className="anuncio-titulo-overlay-text anuncio-titulo-overlay-text-white">{anuncio1.carrera}</h3>
                  <div className="anuncio-titulos-info">
                    <div className="anuncio-titulo-intermedio">
                      <strong>Título Intermedio:</strong> {anuncio1.tituloIntermedio}
                    </div>
                    <div className="anuncio-titulo-final">
                      <strong>Título Final:</strong> {anuncio1.tituloFinal}
                    </div>
                  </div>
                  <div className="anuncio-duracion">Duración: {anuncio1.duracion}</div>
                  <button
                    onClick={() => irACursos('Psicólogo Social')}
                    className="anuncio-boton-principal"
                  >
                    Más info
                  </button>
                </div>
              </div>
            </div>

            {/* Anuncio 2 - Grafología (Old Style) */}
            {/* Card grande dividida en dos secciones */}
            <div className="anuncio-card-grafologia">
              <div className="anuncio-card-grafologia-img-wrapper">
                <div
                  className="anuncio-card-grafologia-img-bg anuncio-card-grafologia-img-bg-grafologia"
                  style={{ '--bg-image': `url(${grafologiaImg})` }}
                  aria-label="Grafología Emocional"
                />
              </div>
              <div className="anuncio-card-grafologia-content anuncio-card-grafologia-content-centered">
                <h2 className="anuncio-card-grafologia-title-centered">Duda la mente, tiembla la mano</h2>
                <h3 className="anuncio-card-grafologia-profesor-title">Dictado por Alberto Antonio Domínguez Aguilera</h3>
                <p className="anuncio-card-grafologia-profesor-subtitle">Técnico Superior en Grafología. Tit. Of. Nro. 506087.</p>
                <div className="anuncio-card-grafologia-curt-container">
                  <img src={curtImg} alt="Curt" className="anuncio-card-grafologia-curt-img-centered" />
                </div>
              </div>
            </div>
            
            
            {/* Anuncio 1 - Diseño Poster Psicología Social */}
            <div className="anuncio-card-psicologia">
              <div className="anuncio-card-psicologia-content">
                <div className="anuncio-psicologia-content-main">
                  <h3 className="anuncio-titulo-psicologia">
                    FORMACIÓN PROFESIONAL EN <span className="titulo-highlight">Psicología Social</span>
                  </h3>
                  <h4 className="anuncio-subtitulo-psicologia">
                    "Comprender las relaciones humanas"
                  </h4>
                  <p className="anuncio-descripcion-psicologia">
                    Especialízate en el análisis del comportamiento humano en contextos sociales. Técnicas avanzadas de intervención comunitaria y psicología aplicada.
                  </p>
                  <div className="anuncio-titulos-psicologia">
                    <div className="anuncio-titulo-info-psicologia">
                      <strong>Título Intermedio:</strong> {anuncio1.tituloIntermedio}
                    </div>
                    <div className="anuncio-titulo-info-psicologia">
                      <strong>Título Final:</strong> {anuncio1.tituloFinal}
                    </div>
                  </div>
                  <div className="anuncio-especialidades-psicologia">
                    <div className="anuncio-especialidad-tag">
                      • Intervención Comunitaria
                    </div>
                    <div className="anuncio-especialidad-tag">
                      • Psicología Aplicada
                    </div>
                  </div>
                </div>
                <div className="anuncio-psicologia-sidebar">
                  <div className="anuncio-logo-circle-psicologia">
                    <img
                      src={logo1}
                      alt="Logo ISDEP"
                      className="anuncio-logo-img-psicologia"
                    />
                  </div>
                  <h5 className="anuncio-cta-psicologia">Comienza Tu Carrera</h5>
                  <div className="anuncio-duracion-psicologia">
                    Duración: {anuncio1.duracion}
                  </div>
                  <button
                    onClick={() => irACursos("Psicólogo Social")}
                    className="anuncio-boton-psicologia"
                  >
                    Inscribite Ahora
                  </button>
                </div>
              </div>
            </div>
            
            {/* Anuncio 5 - Diseño Poster/Flyer Criminalística */}
            <div className="anuncio-card-criminalistica">
              <div className="anuncio-card-criminalistica-content">
                {/* Sección Izquierda - Contenido Principal */}
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

                {/* Sección Derecha - Call to Action */}
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
                    Duración: {anuncio3.duracion}
                  </div>
                  <button
                    onClick={() => irACursos("Diplomatura en Criminalística")}
                    className="anuncio-boton-criminalistica"
                  >
                    Inscribite Ahora
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Anuncios;
