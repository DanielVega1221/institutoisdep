import React from "react";
import "./Anuncios.css";
import imagen1 from "../../assets/imagen1.jpeg";
import imagen2 from "../../assets/imagen2.jpeg";
import imagen3 from "../../assets/imagen3.png";
import logo1 from "../../assets/Logo1.png";


const anuncio2 = {
  titulo: "Nuevo Curso: Grafologia cientifica",
  subtitulo: "Logra el titulo de perito en psicografología",
  descripcion: "Un curso práctico para quienes desean llevar la grafología al ámbito profesional o personal.",
  info: "Duración: 2 meses",
  items: [
    "Análisis profundo de firmas y rúbricas",
    "Gestos tipo y su significado psicológico",
    "Compatibilidad entre perfiles escritos",
    "Aplicaciones forenses y laborales"
  ]
};

const anuncio1 = {
  titulo: "Psicología Social",
  subtitulo: "Nueva carrera",
  descripcion:
    "La Psicología Social es una rama de la psicología que estudia cómo los pensamientos, sentimientos y comportamientos de las personas son influenciados por la presencia real, imaginada o implícita de otros individuos. ",
  info: "Inscripciones abiertas en marzo y agosto", 
  items: [
    "Título oficial: Psicólogo Social",
    "Duración: 3 años"
  ]
};


const anuncio3 = {
  titulo: "Diplomatura en Criminalística",
  subtitulo: "Nueva propuesta académica",
  descripcion:
    "Contamos con una Diplomatura en Criminalística orientada a quienes buscan formarse en técnicas de investigación, análisis de la escena del crimen y pericias forenses. Modalidad flexible y docentes con experiencia en el campo.",
  info: "Inscripciones abiertas todo el año",
  items: [
    "Análisis de la escena del crimen",
    "Técnicas de recolección y preservación de evidencias",
    "Grafología y documentología forense",
    "Pericias caligráficas y dactiloscópicas",
    "Modalidad virtual y presencial"
  ]
};

const Anuncios = () => {
  return (
    <>
      <section className="anuncios-section">
        <div className="anuncios-card-container" style={{ marginBottom: '6rem' }}>
          
          <div className="anuncios-list">
            {/* Anuncio 1 - Primer estilo */}
            <div>
              <div className="anuncio-card">
                <div className="anuncio-img-wrapper">
                  <img src={imagen2} alt="Imagen anuncio" className="anuncio-img" />
                  <div className="anuncio-logo-wrapper">
                    <div className="anuncio-logo-circle">
                      <img src={logo1} alt="Logo" className="anuncio-logo-img" />
                    </div>
                  </div>
                </div>
                <div className="anuncio-info-wrapper">
                  <div className="anuncio-info-card">
                    <h3 className="anuncio-titulo-overlay-text" style={{ color: '#fff', marginBottom: '0.7rem', marginTop: 0 }}>{anuncio1.subtitulo}</h3>
                    <h4 className="anuncio-subtitulo-overlay-text" style={{ color: '#fff', marginTop: 0 }}>{anuncio1.titulo}</h4>
                    <p className="anuncio-descripcion">{anuncio1.descripcion}</p>
                    {anuncio1.items && (
                      <ul className="anuncio-items">
                        {anuncio1.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    <span className="anuncio-datos">{anuncio1.info}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Anuncio 2 - Segundo estilo */}
            <div>
              <div className="anuncio-card-alt-full" style={{ marginTop: '2rem' }}>
                <div className="anuncio-img-bg-alt" style={{ backgroundImage: `url(${imagen1})` }}>
                  <div className="anuncio-content-alt">
                    <h3 className="anuncio-titulo-alt-full">{anuncio2.titulo}</h3>
                    <h4 className="anuncio-subtitulo-alt-full">{anuncio2.subtitulo}</h4>
                    <p className="anuncio-descripcion-alt-full">{anuncio2.descripcion}</p>
                    {anuncio2.items && (
                      <ul className="anuncio-items-alt-full">
                        {anuncio2.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    <span className="anuncio-datos-alt-full">{anuncio2.info}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Anuncio 3 - Diplomatura en Criminalística */}
            <div>
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
                    <h3 className="anuncio-titulo-overlay-text" style={{ color: '#fff', marginBottom: '0.7rem', marginTop: 0 }}>{anuncio3.subtitulo}</h3>
                    <h4 className="anuncio-subtitulo-overlay-text" style={{ color: '#fff', marginTop: 0 }}>{anuncio3.titulo}</h4>
                    <p className="anuncio-descripcion">{anuncio3.descripcion}</p>
                    {anuncio3.items && (
                      <ul className="anuncio-items">
                        {anuncio3.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    <span className="anuncio-datos">{anuncio3.info}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Anuncio 4 - Nuevo diseño de borde a borde */}
            <div className="anuncio-card-alt-full" style={{
              marginTop: '2rem',
              background: 'linear-gradient(90deg, #e3f2fd 0%, #bbdefb 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '340px',
              border: '2.5px solid #1976d2',
              borderRadius: '0',
              boxShadow: '0 2px 16px rgba(25, 118, 210, 0.08)',
              width: '100vw',
              marginLeft: 'calc(-50vw + 50%)',
              marginRight: 'calc(-50vw + 50%)'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.95)',
                borderRadius: '32px',
                boxShadow: '0 8px 32px rgba(25, 118, 210, 0.10)',
                padding: '2.5rem 3.5rem',
                maxWidth: '600px',
                width: '100%',
                margin: '2rem auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '2.5px solid #B8860B',
                boxSizing: 'border-box',
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1rem auto',
                  borderRadius: '50%',
                  background: 'linear-gradient(180deg, #f5ede2 0%, #42a5f5 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)'
                }}>
                  <img src={logo1} alt="Logo ISDEP" style={{ width: '54px', height: '54px', objectFit: 'contain', borderRadius: '50%' }} />
                </div>
                <h3 className="anuncio-titulo-alt-full" style={{ color: '#1976d2', fontSize: '2rem', fontWeight: 800, marginBottom: '0.7rem', letterSpacing: '0.5px', textAlign: 'center' }}>{anuncio2.titulo}</h3>
                <h4 className="anuncio-subtitulo-alt-full" style={{ color: '#0d2346', fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.2rem', textAlign: 'center' }}>{anuncio2.subtitulo}</h4>
                <p className="anuncio-descripcion-alt-full" style={{ color: '#0d2346', fontSize: '1.1rem', marginBottom: '1.2rem', fontFamily: 'Georgia, serif' }}>{anuncio2.descripcion}</p>
                {anuncio2.items && (
                  <ul className="anuncio-items-alt-full" style={{ color: '#1976d2', textAlign: 'left', margin: '0 auto 1.2rem auto', maxWidth: '400px', fontSize: '1.05rem', fontWeight: 500 }}>
                    {anuncio2.items.map((item, i) => (
                      <li key={i} style={{ marginBottom: '0.3rem' }}>{item}</li>
                    ))}
                  </ul>
                )}
                <span className="anuncio-datos-alt-full" style={{ color: '#1565c0', fontWeight: 700, fontStyle: 'italic', marginBottom: '1.5rem', display: 'block', fontSize: '1.05rem' }}>{anuncio2.info}</span>
                <button
                  style={{
                    marginTop: '0.5rem',
                    background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '24px',
                    padding: '0.9rem 2.5rem',
                    fontWeight: 'bold',
                    fontSize: '1.15rem',
                    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.15)',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #1565c0 0%, #1976d2 100%)'}
                  onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)'}
                >
                  Más info
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};


export default Anuncios;
