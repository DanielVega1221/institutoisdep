import React from "react";
import "./Anuncios.css";
import imagen from "../../assets/imagen.jpg";
import logo1 from "../../assets/Logo1.png";

const anuncio1 = {
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
};

const anuncio2 = {
  titulo: "Nueva carrera",
  subtitulo: "Psicología Social - Duración: 3 años",
  descripcion:
    "La Psicología Social es una rama de la psicología que estudia cómo los pensamientos, sentimientos y comportamientos de las personas son influenciados por la presencia real, imaginada o implícita de otros individuos. Examina fenómenos como la conformidad, la obediencia, la persuasión, la agresión, los prejuicios y la discriminación. Además, explora cómo las interacciones sociales, las normas, las relaciones intergrupales y el entorno social influyen en el comportamiento humano y en la percepción de uno mismo y de los demás. El rol del psicólogo social es multifacético: puede intervenir en ámbitos educativos, comunitarios, institucionales y de salud, desarrollando proyectos de prevención, promoción y transformación social, facilitando procesos de cambio y desarrollo humano, y promoviendo el bienestar y la integración social.",
  info: "Inscripción abierta 2025",
  items: [
    "Título oficial: Psicólogo/a Social",
    "Docentes especializados en psicología social",
  ]
};
const Anuncios = () => {
  return (
    <>
      <section className="anuncios-section">
        <div className="anuncios-card-container" style={{ marginBottom: '6rem' }}>
          <h2 className="anuncios-titulo">Anuncios</h2>
          <div className="anuncios-list">
            {/* Anuncio 1 - Primer estilo */}
            <div>
              <div className="anuncio-card">
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
                    <h3 className="anuncio-titulo">{anuncio1.titulo}</h3>
                    <h4 className="anuncio-subtitulo">{anuncio1.subtitulo}</h4>
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
                <div className="anuncio-img-bg-alt" style={{ backgroundImage: `url(${imagen})` }}>
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
          </div>
        </div>
      </section>
    </>
  );
};


export default Anuncios;
