import React from "react";
import "./Anuncios.css";

import imagen1 from "../../assets/imagen1.jpeg";
import imagen3 from "../../assets/imagen3.png";
import logo1 from "../../assets/Logo1.png";
import grafologiaImg from "../../assets/GrafologiaEmocional.png";
import curtImg from "../../assets/curt.png";


const anuncio2 = {
  carrera: "Grafología Emocional",
  titulo: "Perito en Psicografología",
  duracion: "2 meses"
};

const anuncio1 = {
  carrera: "Psicología Social",
  titulo: "Psicólogo Social",
  duracion: "3 años"
};

const anuncio3 = {
  carrera: "Criminalística",
  titulo: "Diplomatura en Criminalística",
  duracion: "1 año"
};

const Anuncios = ({ irACursos }) => {
  return (
    <>
      <section className="anuncios-section">
        <div className="anuncios-card-container" style={{ marginBottom: '6rem' }}>
          
          <div className="anuncios-list">
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
                    <h3 className="anuncio-titulo-overlay-text" style={{ color: '#fff', marginBottom: '0.7rem', marginTop: 0 }}>{anuncio1.carrera}</h3>
                    <h4 className="anuncio-subtitulo-overlay-text" style={{ color: '#fff', marginTop: 0 }}>{anuncio1.titulo}</h4>
                    <div className="anuncio-duracion" style={{fontWeight:600, color:'#fff', marginTop:'1rem', fontSize:'1.1rem'}}>Duración: {anuncio1.duracion}</div>
                    <button
                      onClick={() => irACursos('Psicólogo Social')}
                      style={{
                        marginTop: '1.2rem',
                        background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '24px',
                        padding: '0.7rem 2rem',
                        fontWeight: 'bold',
                        fontSize: '1.05rem',
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
            {/* Card grande dividida en dos secciones */}
            <div className="anuncio-card-grafologia">
              <div className="anuncio-card-grafologia-img-wrapper">
                <div
                  className="anuncio-card-grafologia-img-bg"
                  style={{ backgroundImage: `url(${grafologiaImg})` }}
                  aria-label="Grafología Emocional"
                />
              </div>
              <div className="anuncio-card-grafologia-content anuncio-card-grafologia-content-split">
                <div className="anuncio-card-grafologia-content-left">
                  <h2 className="anuncio-card-grafologia-title">Duda la mente, tiembla la mano</h2>
                  <p className="anuncio-card-grafologia-text">Dictado por Alberto Antonio Domínguez Aguilera.</p>
                  <p className="anuncio-card-grafologia-text">Técnico Superior en Grafología. Tit. Of. Nro. 506087.</p>
                </div>
                <div className="anuncio-card-grafologia-content-right">
                  <div className="anuncio-card-grafologia-curt-card">
                    <img src={curtImg} alt="Curt" className="anuncio-card-grafologia-curt-img" />
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
                <h3 className="anuncio-titulo-alt-full" style={{ color: '#1976d2', fontSize: '2rem', fontWeight: 800, marginBottom: '0.7rem', letterSpacing: '0.5px', textAlign: 'center' }}>{anuncio3.carrera}</h3>
                <h4 className="anuncio-subtitulo-alt-full" style={{ color: '#0d2346', fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.2rem', textAlign: 'center' }}>{anuncio3.titulo}</h4>
                <div className="anuncio-duracion-alt-full" style={{ color: '#1565c0', fontWeight: 700, fontStyle: 'italic', marginBottom: '1.5rem', display: 'block', fontSize: '1.15rem' }}>Duración: {anuncio3.duracion}</div>
                <button
                  onClick={() => irACursos('Diplomatura en Criminalística')}
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
