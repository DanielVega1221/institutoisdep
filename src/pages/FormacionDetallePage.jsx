import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getFormacion, nombreFormacion } from "../data/formaciones";
import "./FormacionDetallePage.css";

// Colores institucionales según el tipo de formación (mismo criterio que el modal anterior).
// NUEVO (cambio de esta sesión): se agregaron los tipos que aparecen en los datos reales y
// un fallback por tipo de formación: dorado para carreras/diplomaturas, azul para cursos.
const getTipoColor = (tipo, tipoFormacion) => {
  const dorado = "#B8860B";
  const azul = "#1e3a8a";
  const colors = {
    "Carrera Terciaria": azul,
    "Carrera Profesional": azul,
    "Tecnicatura Terciaria": azul,
    "Diplomatura": dorado,
    "Diplomatura Superior": dorado,
    "Diplomatura Profesional": dorado,
    "Seminario": "#2d5a87",
    "Seminario Profesional": "#2d5a87",
    "Seminario Especializado": "#3182ce",
    "Especialización": "#3182ce",
    "Posgrado Especializado": "#0F2A4E",
    "Certificación": "#0F2A4E",
    "Curso": "#2d5a87",
    "Curso Técnico": "#2d5a87",
    "Curso Profesional": "#2d5a87",
    "Curso Especializado": "#3182ce",
    "Curso Proyectivo": "#3182ce",
    "Curso de Especialización": "#3182ce",
    "Capacitación Oficial": "#2d5a87",
    "Capacitación Profesional": "#2d5a87",
  };
  if (colors[tipo]) return colors[tipo];
  return tipoFormacion === "carrera" ? dorado : azul;
};

// Acordeón del Plan de Estudios (versión anterior: vivía dentro de CursoModal.jsx)
const PlanEstudiosAccordion = ({ planEstudios }) => {
  const [expandedYear, setExpandedYear] = useState(null);

  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <div className="fd-plan-estudios">
      <h3 className="fd-plan-estudios-titulo">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
        </svg>
        Plan de Estudios
      </h3>

      <div className="fd-plan-accordion">
        {Object.entries(planEstudios).map(([key, anio]) => (
          <div key={key} className="fd-plan-year">
            <button
              type="button"
              className={`fd-plan-year-header ${expandedYear === key ? "expanded" : ""}`}
              onClick={() => toggleYear(key)}
              aria-expanded={expandedYear === key}
            >
              <div className="fd-plan-year-header-content">
                <h4 className="fd-plan-year-title">{anio.titulo}</h4>
                {anio.tituloObtenido && (
                  <span className="fd-plan-year-badge">{anio.tituloObtenido}</span>
                )}
              </div>
              <svg
                className={`fd-plan-year-arrow ${expandedYear === key ? "rotated" : ""}`}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={`fd-plan-materias ${expandedYear === key ? "expanded" : ""}`}>
              <ul className="fd-materias-lista">
                {anio.materias.map((materia, idx) => (
                  <li key={idx} className="fd-materia-item">
                    <span className="fd-materia-bullet">•</span>
                    <span className="fd-materia-nombre">{materia}</span>
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

const FormacionNoEncontrada = ({ tipo }) => (
  <div className="formacion-detalle-page">
    <div className="fd-container">
      <div className="fd-card fd-no-encontrada">
        <h1 className="fd-no-encontrada-titulo">Formación no encontrada</h1>
        <p className="fd-no-encontrada-texto">
          No encontramos {tipo === "carrera" ? "la carrera" : "el curso"} que estás buscando.
        </p>
        <Link to="/" className="fd-btn-volver">Volver al inicio</Link>
      </div>
    </div>
  </div>
);

const FormacionDetallePage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // El tipo de formación se define por la ruta: /carreras/:slug o /cursos/:slug
  const tipo = location.pathname.startsWith("/carreras") ? "carrera" : "curso";
  const formacion = getFormacion(tipo, slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug, tipo]);

  if (!formacion) {
    return <FormacionNoEncontrada tipo={tipo} />;
  }

  const disponible = formacion.estado === "disponible";
  const nombrePagina = `${nombreFormacion(formacion)} - ISDEP`;
  const urlCanonica = `https://www.isdep.com.ar/${tipo}s/${formacion.slug}`;

  const handleIrAInscripcion = () => {
    navigate("/como-inscribirse");
  };

  // CAMBIO DE ESTA SESIÓN: "Volver" lleva a la página del listado correspondiente
  // (/carreras o /cursos). ANTERIOR: navigate("/", { state: { scrollToSection: "cursos" } });
  const handleVolver = () => {
    navigate(`/${tipo}s`);
  };

  return (
    <div className={`formacion-detalle-page fd-tipo-${tipo}`}>
      <Helmet>
        <title>{nombrePagina}</title>
        <meta name="description" content={formacion.miniIntro} />
        <link rel="canonical" href={urlCanonica} />
        <meta property="og:title" content={nombrePagina} />
        <meta property="og:description" content={formacion.miniIntro} />
        <meta property="og:url" content={urlCanonica} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": nombreFormacion(formacion),
          "description": formacion.descripcion,
          "url": urlCanonica,
          "educationalCredentialAwarded": formacion.tituloAdquirido,
          "timeToComplete": formacion.duracion,
          "inLanguage": "es",
          "provider": {
            "@type": "Organization",
            "name": "ISDEP - Instituto Superior de Enseñanza Profesional",
            "url": "https://www.isdep.com.ar",
          },
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": formacion.modalidad === "Presencial" ? "onsite" : "online",
          },
        })}</script>
      </Helmet>

      {/* ===== Encabezado ===== */}
      <header className="fd-hero">
        <div className="fd-hero-inner">
          <button type="button" className="fd-btn-volver fd-btn-volver-hero" onClick={handleVolver}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{tipo === "carrera" ? "Volver a carreras" : "Volver a cursos"}</span>
          </button>

          <div className="fd-hero-texto">
            <div className="fd-hero-kickers">
              <span className={`fd-tipo-badge fd-tipo-badge-${tipo}`}>
                {tipo === "carrera" ? "Carrera" : "Curso"}
              </span>
              <span className="fd-categoria">{formacion.categoria}</span>
            </div>
            <h1 className="fd-hero-titulo">{nombreFormacion(formacion)}</h1>
            {formacion.subtitulo && <p className="fd-hero-subtitulo">{formacion.subtitulo}</p>}
          </div>

          <div className="fd-hero-badges">
            <span className="fd-badge" style={{ backgroundColor: getTipoColor(formacion.tipo, formacion.tipoFormacion) }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor" />
              </svg>
              {formacion.tipo}
            </span>
            <span className="fd-badge fd-badge-light">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {formacion.duracion}
            </span>
            <span className="fd-badge fd-badge-light">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 10C21 16.075 12 21 12 21S3 16.075 3 10C3 6.13401 6.13401 3 10 3H14C17.866 3 21 6.13401 21 10Z" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
              </svg>
              {formacion.modalidad}
            </span>
            <span className="fd-badge fd-badge-light">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Inicia: {formacion.inicia}
            </span>
            <span className={`fd-badge-estado ${disponible ? "estado-disponible" : "estado-no-disponible"}`}>
              {disponible ? "Disponible" : "No disponible"}
            </span>
          </div>
        </div>
      </header>

      {/* ===== Contenido ===== */}
      <div className="fd-container">
        <div className="fd-card">
          {formacion.tituloAdquirido && (
            <div className="fd-titulo-adquirido">
              <span className="fd-titulo-adquirido-label">Título que obtenés:</span>
              <span className="fd-titulo-adquirido-value">{formacion.tituloAdquirido}</span>
            </div>
          )}

          <div className="fd-intro">
            <p>{formacion.miniIntro}</p>
          </div>

          <div className="fd-descripcion">
            <p>{formacion.descripcion}</p>
          </div>

          {formacion.items && formacion.items.length > 0 && (
            <div className="fd-contenido">
              <h3 className="fd-seccion-titulo">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L13.09 8.26L20 9L14 14L16 22L12 19L8 22L10 14L4 9L10.91 8.26L12 2Z" fill="currentColor" />
                </svg>
                Contenido {tipo === "carrera" ? "de la carrera" : "del curso"}:
              </h3>
              <ul className="fd-contenido-lista">
                {formacion.items.map((item, idx) => (
                  <li key={idx} className="fd-contenido-item">
                    <span className="fd-item-check">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="currentColor" />
                        <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {formacion.planEstudios && (
            <PlanEstudiosAccordion planEstudios={formacion.planEstudios} />
          )}

          <div className="fd-info-grid">
            {formacion.requisitos && (
              <div className="fd-info-item">
                <span className="fd-info-icon">📋</span>
                <div className="fd-info-content">
                  <span className="fd-info-label">Requisitos:</span>
                  <span className="fd-info-value">{formacion.requisitos}</span>
                </div>
              </div>
            )}
            {formacion.salida_laboral && (
              <div className="fd-info-item">
                <span className="fd-info-icon">💼</span>
                <div className="fd-info-content">
                  <span className="fd-info-label">Salida laboral:</span>
                  <span className="fd-info-value">{formacion.salida_laboral}</span>
                </div>
              </div>
            )}
          </div>

          {formacion.extra && (
            <div className="fd-extra">
              <p className="fd-extra-text">{formacion.extra}</p>
            </div>
          )}
        </div>

        {/* ===== CTA de inscripción ===== */}
        <div className="fd-cta">
          <div className="fd-cta-texto">
            <h4 className="fd-cta-titulo">
              {tipo === "carrera" ? "¿Te interesa esta carrera?" : "¿Te interesa este curso?"}
            </h4>
            <p className="fd-cta-subtitulo">Completá el formulario de inscripción</p>
          </div>
          <button
            type="button"
            className="fd-cta-btn"
            onClick={handleIrAInscripcion}
            disabled={!disponible}
            style={!disponible ? { opacity: 0.6, cursor: "not-allowed" } : {}}
          >
            <span className="fd-cta-btn-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <span>{disponible ? "Ir al formulario de inscripción" : "No disponible"}</span>
            <span className="fd-cta-btn-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormacionDetallePage;
