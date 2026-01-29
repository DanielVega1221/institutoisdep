import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CursoModal.css';

const CursoModal = ({ curso, isOpen, onClose }) => {
  const navigate = useNavigate();
  
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

  const handleIrAInscripcion = () => {
    onClose();
    // Navegar a la página de inscripción
    navigate('/como-inscribirse');
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
          <div className="modal-badges" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
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
            <span className={`estado-badge-modal ${curso.estado === 'disponible' ? 'estado-disponible' : 'estado-no-disponible'}`}>{curso.estado === 'disponible' ? 'Disponible' : 'No disponible'}</span>
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

          {/* Plan de Estudios - Solo para cursos que lo tengan */}
          {curso.planEstudios && (
            <PlanEstudiosAccordion planEstudios={curso.planEstudios} />
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
          {/* ...el resto del contenido... */}
        </div>

        {/* Footer con botón de inscripción */}
        <div className="curso-modal-footer">
          <div className="modal-footer-content">
            <div className="modal-cta-section">
              <h4 className="modal-cta-title">¿Te interesa esta carrera?</h4>
              <p className="modal-cta-subtitle">Completá el formulario de inscripción</p>
            </div>
            <button 
              className="modal-action-btn"
              onClick={handleIrAInscripcion}
              disabled={curso.estado !== 'disponible'}
              style={curso.estado !== 'disponible' ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
            >
              <span className="modal-btn-icon-left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="modal-btn-text">{curso.estado === 'disponible' ? 'Ir al formulario de inscripción' : 'No disponible'}</span>
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

// Componente para el Plan de Estudios con acordeones
const PlanEstudiosAccordion = ({ planEstudios }) => {
  const [expandedYear, setExpandedYear] = useState(null);

  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <div className="modal-plan-estudios">
      <h3 className="modal-plan-estudios-titulo">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
        </svg>
        Plan de Estudios
      </h3>
      
      <div className="plan-estudios-accordion">
        {Object.entries(planEstudios).map(([key, año]) => (
          <div key={key} className="plan-estudios-year">
            <button 
              className={`plan-estudios-year-header ${expandedYear === key ? 'expanded' : ''}`}
              onClick={() => toggleYear(key)}
            >
              <div className="year-header-content">
                <h4 className="year-title">{año.titulo}</h4>
                {año.tituloObtenido && (
                  <span className="year-titulo-badge">
                    📜 {año.tituloObtenido}
                  </span>
                )}
              </div>
              <svg 
                className={`year-arrow ${expandedYear === key ? 'rotated' : ''}`}
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none"
              >
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={`plan-estudios-materias ${expandedYear === key ? 'expanded' : ''}`}>
              <ul className="materias-lista">
                {año.materias.map((materia, idx) => (
                  <li key={idx} className="materia-item" style={{ '--delay': `${idx * 0.05}s` }}>
                    <span className="materia-bullet">•</span>
                    <span className="materia-nombre">{materia}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CursoModal);