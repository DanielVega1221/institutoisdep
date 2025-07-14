import React, { useState } from "react";
import "./Cursos.css";

const cursosData = [
  {
    id: 1,
    emoji: "🎓",
    titulo: "Psicografología",
    subtitulo: "Formación Profesional en Psicografología",
    tipo: "Carrera técnica",
    duracion: "1 a 2 años",
    miniIntro: "Explorá el universo de la escritura como herramienta de evaluación psicológica y profesional.",
    descripcion: "Formación completa en análisis grafológico para aplicar en ámbitos clínicos, educativos y forenses."
  },
  {
    id: 2,
    emoji: "🕵️",
    titulo: "Ciencias Criminalistas",
    subtitulo: "Diplomatura en Ciencias Criminalistas",
    tipo: "Diplomatura",
    duracion: "8 a 12 meses",
    miniIntro: "Sumate al mundo de la investigación científica del delito desde una perspectiva profesional.",
    descripcion: "Integra conocimientos en criminalística, perfilación, pericias y análisis forense moderno."
  },
  {
    id: 3,
    emoji: "🧩",
    titulo: "Perfilamiento Criminal",
    subtitulo: "Perfilamiento Criminal",
    tipo: "Curso especializado",
    duracion: "4 a 6 meses",
    miniIntro: "Aprendé a identificar patrones conductuales y construir perfiles delictivos.",
    descripcion: "Capacitación técnica en criminal profiling, enfocado en criminología, tipologías y análisis psicológico."
  },
  {
    id: 4,
    emoji: "🧠",
    titulo: "Psicología Social",
    subtitulo: "Psicología Social (3 años)",
    tipo: "Carrera terciaria",
    duracion: "3 años",
    miniIntro: "Descubrí cómo la sociedad moldea la conducta humana desde una mirada integradora.",
    descripcion: "Formación profesional en intervención grupal, comunitaria y organizacional con enfoque social."
  },
  {
    id: 5,
    emoji: "🧾",
    titulo: "Grafología Forense",
    subtitulo: "Grafología Forense",
    tipo: "Curso profesional",
    duracion: "6 a 9 meses",
    miniIntro: "Capacitate en el análisis legal de manuscritos y documentos gráficos.",
    descripcion: "Especialización en pericias grafológicas para determinar autenticidad, autoría y falsificación."
  },
  {
    id: 6,
    emoji: "✒️",
    titulo: "Firmas y Rúbricas",
    subtitulo: "Firmas y Rúbricas",
    tipo: "Curso intensivo",
    duracion: "2 a 3 meses",
    miniIntro: "Explorá el valor simbólico y legal de las firmas en la identidad escrita.",
    descripcion: "Estudio detallado de la rúbrica y firma como reflejo psíquico y objeto de análisis técnico."
  },
  {
    id: 7,
    emoji: "🆘",
    titulo: "Primeros Auxilios Psicológicos",
    subtitulo: "Operador en Primeros Auxilios Psicológicos",
    tipo: "Curso de intervención",
    duracion: "3 a 5 meses",
    miniIntro: "Formate para contener y asistir emocionalmente en situaciones de emergencia.",
    descripcion: "Técnicas prácticas de contención, estabilización emocional y derivación segura."
  },
  {
    id: 8,
    emoji: "🎨",
    titulo: "Análisis de Dibujos",
    subtitulo: "Análisis de Dibujos",
    tipo: "Curso proyectivo",
    duracion: "3 a 4 meses",
    miniIntro: "Aprendé a interpretar gráficamente el mundo interno de niños, adolescentes y adultos.",
    descripcion: "Aplicación psicológica del dibujo en procesos diagnósticos, terapéuticos y forenses."
  }
];

const Cursos = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const getTipoColor = (tipo) => {
    switch (tipo) {
      case "Carrera técnica":
        return "#2E8B57";
      case "Carrera terciaria":
        return "#0F2A4E";
      case "Diplomatura":
        return "#B8860B";
      case "Curso especializado":
        return "#8B4513";
      case "Curso profesional":
        return "#4682B4";
      case "Curso intensivo":
        return "#CD853F";
      case "Curso de intervención":
        return "#9932CC";
      case "Curso proyectivo":
        return "#FF6347";
      default:
        return "#666";
    }
  };

  return (
    <section className="cursos-section">
      <div className="cursos-container">
        {/* Título general */}
        <div className="cursos-header">
          <div className="cursos-title-wrapper">
            <svg className="cursos-icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="currentColor"/>
            </svg>
            <h2 className="cursos-title">Conocé nuestras carreras y cursos</h2>
          </div>
          <div className="cursos-title-line"></div>
        </div>

        {/* Acordeón */}
        <div className="accordion-container">
          <button 
            className={`accordion-trigger ${isExpanded ? 'expanded' : ''}`}
            onClick={toggleAccordion}
            aria-expanded={isExpanded}
          >
            <span className="accordion-text">
              {isExpanded ? 'Ocultar carreras y cursos' : 'Ver todas nuestras carreras y cursos'}
            </span>
            <svg 
              className={`accordion-arrow ${isExpanded ? 'rotated' : ''}`} 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none"
            >
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Cards container */}
          <div className={`cards-container ${isExpanded ? 'expanded' : ''}`}>
            <div className="cards-grid">
              {cursosData.map((curso) => (
                <div 
                  key={curso.id} 
                  className="curso-card"
                  style={{ '--delay': `${curso.id * 0.15}s` }}
                >
                  <div className="card-content">
                    <div className="card-emoji">{curso.emoji}</div>
                    
                    <div className="card-header">
                      <h3 className="card-titulo">{curso.titulo}</h3>
                      <div className="card-badges">
                        <span 
                          className="tipo-badge"
                          style={{ backgroundColor: getTipoColor(curso.tipo) }}
                        >
                          {curso.tipo}
                        </span>
                        <span className="duracion-badge">
                          {curso.duracion}
                        </span>
                      </div>
                    </div>
                    
                    <div className="card-mini-intro">
                      <p>{curso.miniIntro}</p>
                    </div>
                    
                    <div className="card-descripcion-container">
                      <p className="card-descripcion">{curso.descripcion}</p>
                    </div>

                    <button className="card-button">
                      <span>Solicitá más información</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cursos;
