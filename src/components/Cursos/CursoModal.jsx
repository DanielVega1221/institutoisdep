import React, { useEffect } from 'react';
import './CursoModal.css';

const CursoModal = ({ curso, isOpen, onClose, onSolicitarInfo }) => {
  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      // Guardar el scroll actual
      const scrollY = window.scrollY;
      
      // Bloquear scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Cleanup al cerrar
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        // Restaurar la posición del scroll
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen || !curso) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSolicitarInfo = () => {
    onSolicitarInfo(curso.titulo);
    onClose();
  };

  return (
    <div className="curso-modal-backdrop" onClick={handleBackdropClick}>
      <div className="curso-modal">
        <div className="curso-modal-header">
          <div className="modal-header-content">
            <div className="modal-icon-header">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M3 12L12 8L21 12L12 16L3 12Z" fill="white" stroke="white" strokeWidth="1"/>
                <path d="M6 12V16C6 17.1046 8.68629 20 12 20C15.3137 20 18 17.1046 18 16V12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="21" cy="12" r="1.5" fill="white"/>
                <path d="M21 13.5L21 15" stroke="white" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="modal-title-container">
              <span className="modal-categoria">{curso.categoria}</span>
              <h2 className="modal-titulo">{curso.titulo}</h2>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="curso-modal-content">
          {/* Badges mejorados con iconos */}
          <div className="modal-badges">
            <span className="modal-tipo-badge" style={{ backgroundColor: getTipoColor(curso.tipo) }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              {curso.tipo}
            </span>
            <span className="modal-duracion-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              {curso.duracion}
            </span>
            <span className="modal-modalidad-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 10C21 16.075 12 21 12 21S3 16.075 3 10C3 6.13401 6.13401 3 10 3H14C17.866 3 21 6.13401 21 10Z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
              {curso.modalidad}
            </span>
          </div>

          {/* Título adquirido */}
          {curso.tituloAdquirido && (
            <div className="modal-titulo-adquirido">
              <div className="modal-titulo-text">
                <span className="modal-titulo-label">Título que obtenés:</span>
                <span className="modal-titulo-value">{curso.tituloAdquirido}</span>
              </div>
            </div>
          )}

          {/* Intro */}
          <div className="modal-intro">
            <p>{curso.miniIntro}</p>
          </div>

          {/* Descripción */}
          <div className="modal-descripcion">
            <p>{curso.descripcion}</p>
          </div>

          {/* Contenido del curso mejorado */}
          {curso.items && curso.items.length > 0 && (
            <div className="modal-contenido">
              <h3 className="modal-contenido-titulo">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L13.09 8.26L20 9L14 14L16 22L12 19L8 22L10 14L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
                Contenido del curso:
              </h3>
              <ul className="modal-contenido-lista">
                {curso.items.map((item, idx) => (
                  <li key={idx} className="modal-contenido-item" style={{ '--delay': `${idx * 0.1}s` }}>
                    <span className="modal-item-check">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="currentColor"/>
                        <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Información adicional */}
          <div className="modal-info-grid">
            {curso.requisitos && (
              <div className="modal-info-item">
                <span className="modal-info-icon">📋</span>
                <div className="modal-info-content">
                  <span className="modal-info-label">Requisitos:</span>
                  <span className="modal-info-value">{curso.requisitos}</span>
                </div>
              </div>
            )}
            {curso.salida_laboral && (
              <div className="modal-info-item">
                <span className="modal-info-icon">💼</span>
                <div className="modal-info-content">
                  <span className="modal-info-label">Salida laboral:</span>
                  <span className="modal-info-value">{curso.salida_laboral}</span>
                </div>
              </div>
            )}
          </div>

          {/* Extra */}
          {curso.extra && (
            <div className="modal-extra">
              <p className="modal-extra-text">{curso.extra}</p>
            </div>
          )}
        </div>

        <div className="curso-modal-footer">
          <div className="modal-footer-content">
            <div className="modal-cta-section">
              <h4 className="modal-cta-title">¿Te interesa este curso?</h4>
              <p className="modal-cta-subtitle">Solicitá información sin compromiso</p>
            </div>
            <button className="modal-action-btn" onClick={handleSolicitarInfo}>
              <span className="modal-btn-icon-left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
              <span className="modal-btn-text">Solicitá más información</span>
              <span className="modal-btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Función auxiliar para colores institucionales
const getTipoColor = (tipo) => {
  const colors = {
    'Carrera Terciaria': '#1e3a8a',  // Azul institucional principal
    'Seminario': '#2d5a87',          // Azul institucional secundario
    'Especialización': '#3182ce',    // Azul claro institucional
    'Diplomatura': '#B8860B',        // Dorado institucional
    'Certificación': '#0F2A4E',      // Azul marino institucional
    'Curso': '#2d5a87'               // Azul secundario
  };
  return colors[tipo] || '#1e3a8a';
};

export default React.memo(CursoModal);