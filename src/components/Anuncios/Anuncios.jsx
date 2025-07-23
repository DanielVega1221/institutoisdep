import React, { useState } from "react";
import "./Anuncios.css";

const anunciosData = [
  {
    titulo: "Inscripciones abiertas 2025",
    descripcion: "Ya podés anotarte a nuestras carreras y cursos para el ciclo lectivo 2025. Cupos limitados, inscribite hoy y asegurá tu lugar en ISDEP.",
  },
  {
    titulo: "Nueva carrera: Psicología Social",
    descripcion: "Sumamos la carrera de Psicología Social con título oficial y validez nacional. Consultá por becas y modalidades de cursada.",
  },
  {
    titulo: "Certificados internacionales",
    descripcion: "Nuestros egresados pueden solicitar certificados con validez internacional para ejercer en el exterior. Informate en Secretaría Académica.",
  },
];

const Anuncios = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ titulo: "", descripcion: "" });

  const openModal = (anuncio) => {
    setModalData(anuncio);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <section className="anuncios-section">
      <div className="anuncios-card">
        <h2 className="anuncios-title">Anuncios</h2>
        <p className="anuncios-desc">Novedades importantes, inscripciones y comunicados institucionales.</p>
        <div className="anuncios-cards-grid">
          {anunciosData.map((anuncio, idx) => (
            <button
              key={idx}
              className="anuncio-card"
              onClick={() => openModal(anuncio)}
              aria-label={`Ver anuncio: ${anuncio.titulo}`}
            >
              <span className="anuncio-titulo">{anuncio.titulo}</span>
            </button>
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className="anuncios-modal-overlay" onClick={closeModal}>
          <div className="anuncios-modal" onClick={e => e.stopPropagation()}>
            <div className="anuncio-modal-icon">
              {/* Icono de noticia, SVG campana */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 10-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 006 19h12a1 1 0 00.71-1.71L18 16z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="anuncio-modal-titulo">{modalData.titulo}</h3>
            <div className="anuncio-modal-sep" />
            <p className="anuncio-modal-desc">{modalData.descripcion}</p>
            <button className="anuncio-modal-close" onClick={closeModal} aria-label="Cerrar">Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Anuncios;
