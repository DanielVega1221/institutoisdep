
import React, { useState, useRef, useEffect } from "react";
import Contacto from "../Contacto/Contacto";
import "./Cursos.css";
import cursosImg from "../../assets/cursos - copia.png";

const cursosData = [
  {
    id: 1,
    titulo: "Formación Profesional en Grafología",
    subtitulo: "Formación Profesional en Grafología",
    tituloAdquirido: "Perito en Psicografología Científica",
    tipo: "Formación Profesional",
    duracion: "2 años",
    miniIntro: "Formate en grafología científica y profesional.",
    descripcion: "Formación completa en grafología científica para aplicar en ámbitos clínicos, educativos y forenses.",
    items: [],
    extra: "",
  },
  {
    id: 2,
    titulo: "Grafología Emocional",
    subtitulo: "Capacitación Profesional",
    tituloAdquirido: "",
    tipo: "Capacitación Profesional",
    duracion: "2 meses",
    miniIntro: "Capacitación intensiva en grafología emocional.",
    descripcion: "Aprendé a analizar la escritura desde una perspectiva emocional y profesional.",
    items: [],
    extra: "",
  },
  {
    id: 3,
    titulo: "Psicología Social",
    subtitulo: "Psicología Social",
    tituloAdquirido: "Psicólogo Social",
    tipo: "Carrera",
    duracion: "3 años",
    miniIntro: "Formate para intervenir en ámbitos de salud, educación, comunidad y organizaciones.",
    descripcion: "La carrera de Psicólogo/a Social examina fenómenos como la conformidad, la persuasión, la discriminación y la agresión, así como las relaciones intergrupales y las normas sociales.",
    items: [
      "Modalidad online con clases en vivo",
      "Certificación oficial",
      "Aval ministerial",
      "Acompañamiento docente permanente",
      "Enfoque grupal comunitario"
    ],
    extra: "Cupos limitados- reservá tu lugar hoy"
  },
  {
    id: 4,
    titulo: "Diplomatura en Criminalística",
    subtitulo: "Formación Profesional",
    tituloAdquirido: "Diplomatura en Criminalística",
    tipo: "Formación Profesional",
    duracion: "12 meses",
    miniIntro: "Sumate al mundo de la investigación científica del delito.",
    descripcion: "Integra conocimientos en criminalística, perfilación, pericias y análisis forense moderno.",
    items: [],
    extra: "",
  },
  {
    id: 5,
    titulo: "Detección de Abuso sexual infantil",
    subtitulo: "Capacitación Profesional",
    tituloAdquirido: "",
    tipo: "Capacitación Profesional",
    duracion: "4 meses",
    miniIntro: "Capacitación profesional en detección de abuso sexual infantil.",
    descripcion: "Aprendé a detectar y abordar situaciones de abuso sexual infantil desde una perspectiva profesional.",
    items: [],
    extra: "",
  },
  {
    id: 6,
    titulo: "Psicología Social y Criminalística Aplicada",
    subtitulo: "Capacitación Profesional",
    tituloAdquirido: "",
    tipo: "Capacitación Profesional",
    duracion: "4 meses",
    miniIntro: "Capacitación en la intersección entre psicología social y criminalística.",
    descripcion: "Formate en la aplicación de la psicología social en el ámbito criminalístico.",
    items: [],
    extra: "",
  },
  {
    id: 7,
    titulo: "Tecnografía Pericial Grafología",
    subtitulo: "Post Grado p/ Peritos",
    tituloAdquirido: "",
    tipo: "Post Grado p/ Peritos",
    duracion: "Consultar",
    miniIntro: "Especialización en tecnografía pericial aplicada a la grafología.",
    descripcion: "Consultá por esta formación avanzada para peritos en grafología.",
    items: [],
    extra: "",
  },
  {
    id: 8,
    titulo: "Análisis de Firmas y Rúbricas",
    subtitulo: "Capacitación Profesional",
    tituloAdquirido: "",
    tipo: "Capacitación Profesional",
    duracion: "Consultar",
    miniIntro: "Capacitación profesional en análisis de firmas y rúbricas.",
    descripcion: "Aprendé a analizar firmas y rúbricas desde una perspectiva técnica y profesional.",
    items: [],
    extra: "",
  },
  {
    id: 9,
    titulo: "Operador en Primeros Auxilios Psicológicos",
    subtitulo: "Capacitación Profesional",
    tituloAdquirido: "",
    tipo: "Capacitación Profesional",
    duracion: "Consultar",
    miniIntro: "Formate para asistir emocionalmente en situaciones de emergencia.",
    descripcion: "Capacitación profesional para operar en primeros auxilios psicológicos.",
    items: [],
    extra: "",
  },
  {
    id: 10,
    emoji: "🧩",
    titulo: "Perfilamiento Criminal",
    subtitulo: "Perfilamiento Criminal",
    tituloAdquirido: "Especialista en Perfilamiento Criminal",
    tipo: "Curso especializado",
    duracion: "4 a 6 meses",
    miniIntro: "Aprendé a identificar patrones conductuales y construir perfiles delictivos.",
    descripcion: "Capacitación técnica en criminal profiling, enfocado en criminología, tipologías y análisis psicológico.",
    items: [],
    extra: "",
  },
  {
    id: 11,
    emoji: "🧾",
    titulo: "Grafología Forense",
    subtitulo: "Grafología Forense",
    tituloAdquirido: "Perito Grafólogo/a Forense",
    tipo: "Curso profesional",
    duracion: "6 a 9 meses",
    miniIntro: "Capacitate en el análisis legal de manuscritos y documentos gráficos.",
    descripcion: "Especialización en pericias grafológicas para determinar autenticidad, autoría y falsificación.",
    items: [],
    extra: ""
  },
  {
    id: 12,
    emoji: "🎨",
    titulo: "Análisis de Dibujos",
    subtitulo: "Análisis de Dibujos",
    tituloAdquirido: "Especialista en Análisis de Dibujos Proyectivos",
    tipo: "Curso proyectivo",
    duracion: "3 a 4 meses",
    miniIntro: "Aprendé a interpretar gráficamente el mundo interno de niños, adolescentes y adultos.",
    descripcion: "Aplicación psicológica del dibujo en procesos diagnósticos, terapéuticos y forenses.",
    items: [],
    extra: ""
  }
];

const Cursos = ({ setSelectedInteres, contactoRef, focusCarrera, setFocusCarrera }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);
  const cardTitleRefs = useRef({});
  const [pendingFocus, setPendingFocus] = useState(null);
  const [bouncing, setBouncing] = useState(null);

  // Minimizar acordeón si la sección sale de pantalla
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isExpanded) {
          setIsExpanded(false);
        }
      },
      { threshold: 0.01 }
    );
    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, [isExpanded]);

  // Para scroll y auto-selección
  const handleSolicitarInfo = (titulo) => {
    setSelectedInteres(titulo);
    setTimeout(() => {
      if (contactoRef && contactoRef.current) {
        contactoRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  // Enfocar card cuando focusCarrera cambia
  useEffect(() => {
    if (focusCarrera) {
      if (!isExpanded) {
        setTimeout(() => {
          setIsExpanded(true);
          setPendingFocus(focusCarrera);
        }, 1000); // 1 segundo de delay antes de expandir el acordeón
      } else {
        setPendingFocus(focusCarrera);
      }
    }
  }, [focusCarrera, isExpanded, setFocusCarrera]);

  // Cuando el acordeón se expande y hay un pendingFocus, hacer scroll a la card
  useEffect(() => {
    if (isExpanded && pendingFocus) {
      setTimeout(() => {
        // Buscar ref por todas las claves posibles
        let ref = cardTitleRefs.current[pendingFocus];
        if (!ref) {
          // Buscar por título o título adquirido
          Object.keys(cardTitleRefs.current).forEach(key => {
            if (key.includes(pendingFocus) || pendingFocus.includes(key)) {
              ref = cardTitleRefs.current[key];
            }
          });
        }
        
        const focusKey = pendingFocus;
        console.log('Buscando:', focusKey, 'Encontrado ref:', !!ref);
        console.log('Refs disponibles:', Object.keys(cardTitleRefs.current));
        
        if (ref) {
          // Siempre hacer scroll primero para asegurar visibilidad
          ref.scrollIntoView({ behavior: "smooth", block: "center" });
          
          // Luego hacer bounce
          setTimeout(() => {
            setBouncing(focusKey);
            setTimeout(() => {
              setBouncing(current => (current === focusKey ? null : current));
            }, 1200);
          }, 1000);
        } else {
          console.log('No se encontró ref para:', focusKey);
          // Hacer bounce de todos modos
          setBouncing(focusKey);
          setTimeout(() => {
            setBouncing(current => (current === focusKey ? null : current));
          }, 1200);
        }
        
        setPendingFocus(null);
        if (setFocusCarrera) setFocusCarrera(null);
      }, 1500);
    }
  }, [isExpanded, pendingFocus, setFocusCarrera]);

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

  // Render
  return (
    <section className="cursos-section" ref={sectionRef}>
      <div className="cursos-container">
        {/* Título general */}
        <div className="cursos-header">
          <div className="cursos-title-wrapper">
            <svg className="cursos-icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="currentColor"/>
            </svg>
            <h2 className="cursos-title">Conocé nuestros cursos y carreras</h2>
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
              {isExpanded ? 'Ocultar cursos y carreras' : 'Ver todos nuestros cursos y carreras'}
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
                  <div className="curso-card-img-wrapper">
                    <img src={cursosImg} alt="Curso" className="curso-card-img" />
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <h3
                        className="card-titulo"
                        ref={el => {
                          if (el) {
                            cardTitleRefs.current[curso.titulo] = el;
                            cardTitleRefs.current[curso.tituloAdquirido] = el;
                          }
                        }}
                      >
                        {curso.titulo}
                      </h3>
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
                    {/* Subtítulo extra: Título adquirido */}
                    {curso.tituloAdquirido && (
                      <div className="card-titulo-adquirido">
                        <span><strong>Título:</strong> {curso.tituloAdquirido}</span>
                      </div>
                    )}
                    <div className="card-mini-intro">
                      <p>{curso.miniIntro}</p>
                    </div>
                    <div className="card-descripcion-container">
                      <p className="card-descripcion">{curso.descripcion}</p>
                      {curso.items && curso.items.length > 0 && (
                        <div className="card-items-container">
                          <ul className="card-items">
                            {curso.items.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {curso.extra && (
                        <div className="card-extra">
                          <p>
                            {curso.extra.split('\n').map((line, idx) => (
                              <React.Fragment key={idx}>
                                {line}
                                {idx < curso.extra.split('\n').length - 1 && <br />}
                              </React.Fragment>
                            ))}
                          </p>
                        </div>
                      )}
                    </div>
                    <button className="card-button" onClick={() => handleSolicitarInfo(curso.titulo)}>
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
