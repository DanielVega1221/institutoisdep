import React from "react";
import "./Anuncios.css";
import imagen from "../../assets/imagen.jpg";
import logo1 from "../../assets/Logo1.png";

const anuncios = [

  {
    titulo: "Nuevo Curso: Grafología Aplicada",
    subtitulo: "Profundizá en técnicas de análisis grafológico",
    descripcion: "Un curso práctico para quienes desean llevar la grafología al ámbito profesional o personal.",
    info: "Duración: 2 meses",
    items: [
      "Análisis profundo de firmas y rúbricas",
      "Gestos tipo y su significado psicológico",
      "Compatibilidad entre perfiles escritos",
      "Aplicaciones forenses y laborales"
    ]
  }
];
const Anuncios = () => {
  return (
    <>
      <section className="anuncios-section">
        <div className="anuncios-card-container" style={{ marginBottom: '6rem' }}>
          <h2 className="anuncios-titulo">Anuncios</h2>
          <div className="anuncios-list">
            {anuncios.map((anuncio, idx) => (
              <div className="anuncio-card" key={idx}>
                <div className="anuncio-img-wrapper">
                  <img src={imagen} alt="Imagen anuncio" className="anuncio-img" />
                  <div className="anuncio-logo-wrapper">
                    <div className="anuncio-logo-circle">
                      <img src={logo1} alt="Logo" className="anuncio-logo-img" />
                    </div>
                  </div>
                </div>
                <div className="anuncio-info-wrapper">
                  <div className="anuncio-info-card">
                    <h3 className="anuncio-titulo">{anuncio.titulo}</h3>
                    <h4 className="anuncio-subtitulo">{anuncio.subtitulo}</h4>
                    <p className="anuncio-descripcion">{anuncio.descripcion}</p>
                    {anuncio.items && (
                      <ul className="anuncio-items">
                        {anuncio.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    <span className="anuncio-datos">{anuncio.info}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="anuncios-section-alt">
        <div className="anuncios-card-container">
          <h2 className="anuncios-titulo">Anuncios (Versión Alternativa)</h2>
          <div className="anuncios-list-alt">
            {anuncios.map((anuncio, idx) => (
              <div className="anuncio-card-alt-full" key={idx}>
                <div className="anuncio-img-bg-alt" style={{ backgroundImage: `url(${imagen})` }}>
                  <div className="anuncio-content-alt">
                    <h3 className="anuncio-titulo-alt-full">{anuncio.titulo}</h3>
                    <h4 className="anuncio-subtitulo-alt-full">{anuncio.subtitulo}</h4>
                    <p className="anuncio-descripcion-alt-full">{anuncio.descripcion}</p>
                    {anuncio.items && (
                      <ul className="anuncio-items-alt-full">
                        {anuncio.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    <span className="anuncio-datos-alt-full">{anuncio.info}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


export default Anuncios;
