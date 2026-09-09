/* =====================================================================================
   SECCIÓN "CARRERAS, DIPLOMATURAS Y CURSOS" (#cursos)

   CAMBIO DE ESTA SESIÓN:
     ANTES  -> un acordeón ("Ver todos nuestros cursos y carreras") que desplegaba una
               grilla de cards, y cada card abría un modal (CursoModal) con el detalle.
     AHORA  -> la sección se divide en dos dropdowns:
               CARRERAS (acento dorado) y CURSOS (acento azul).
               Solo muestran el nombre; al tocar uno se navega a su propia página:
                 /carreras/:slug   ->  src/pages/FormacionDetallePage.jsx
                 /cursos/:slug     ->  src/pages/FormacionDetallePage.jsx

   CAMBIOS POSTERIORES (también de esta sesión):
     - Los dropdowns están APILADOS (uno encima del otro) y tienen apertura exclusiva:
       abrir uno cierra el otro (evita abrirlos sin querer).
     - El componente se reutiliza como PÁGINA (props solo="carrera"/"curso" + esPagina):
         /carreras ->  solo el panel de carreras  (src/pages/CarrerasPage.jsx)
         /cursos   ->  solo el panel de cursos     (src/pages/CursosPage.jsx)

   DÓNDE ESTÁ LO VIEJO (para revertir):
     - Componente anterior completo (acordeón + cards + modal + datos): ./CursosAnterior.jsx
       (conservado intacto y sin importar en ningún lado).
     - Los datos ahora viven en ../../data/formaciones.js
     - Los estilos del acordeón y de las cards siguen en ./Cursos.css (no se tocaron);
       los estilos nuevos de los dropdowns están al final de ese mismo archivo.

   PARA REVERTIR: en src/pages/HomePage.jsx cambiar el import de Cursos por CursosAnterior
   y descomentar allí el estado focusCarrera / expandCursos junto con sus props.
   ===================================================================================== */

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// ANTERIOR: import CursoModal from "./CursoModal";  (el detalle ahora es una página aparte)
import { carrerasData, cursosData, nombreFormacion } from "../../data/formaciones";
import "./Cursos.css";
// Usar imágenes locales optimizadas desde localImages
import { localImages } from "../../utils/localImages";

/* ANTERIOR: acá estaba declarado el array `cursosData` con las 17 formaciones.
   Se movió a src/data/formaciones.js dividido en carrerasData (6) y cursosData (13).
   La copia original e intacta quedó en ./CursosAnterior.jsx */

const IconoBirrete = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 12L12 8L21 12L12 16L3 12Z" fill="currentColor" stroke="currentColor" strokeWidth="1" />
    <path d="M6 12V16C6 17.1046 8.68629 20 12 20C15.3137 20 18 17.1046 18 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="21" cy="12" r="1.5" fill="currentColor" />
    <path d="M21 13.5L21 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const IconoLibro = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconoFlecha = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconoChevron = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ===== Dropdown de formaciones (carreras o cursos) ===== */
const PanelFormaciones = ({ tipo, titulo, bajada, lista, abierto, onToggle, onSeleccionar }) => {
  const idLista = `lista-${tipo}`;

  return (
    <div className={`formacion-panel formacion-panel-${tipo}${abierto ? " abierto" : ""}`}>
      <button
        type="button"
        className="formacion-panel-trigger"
        onClick={onToggle}
        aria-expanded={abierto}
        aria-controls={idLista}
      >
        <span className="formacion-panel-icono">
          {tipo === "carrera" ? <IconoBirrete /> : <IconoLibro />}
        </span>
        <span className="formacion-panel-texto">
          <span className="formacion-panel-titulo">{titulo}</span>
          <span className="formacion-panel-bajada">{bajada}</span>
        </span>
        <span className="formacion-panel-contador">{lista.length}</span>
        <span className={`formacion-panel-chevron${abierto ? " rotado" : ""}`}>
          <IconoChevron />
        </span>
      </button>

      <div className="formacion-panel-lista" id={idLista} hidden={!abierto}>
        <ul className="formacion-lista">
          {lista.map((item, index) => (
            <li key={item.slug} className="formacion-lista-item" style={{ "--delay": `${index * 0.05}s` }}>
              <button
                type="button"
                className="formacion-item"
                onClick={() => onSeleccionar(item)}
                title={nombreFormacion(item)}
              >
                <span className="formacion-item-indice">{String(index + 1).padStart(2, "0")}</span>
                <span className="formacion-item-nombre">{nombreFormacion(item)}</span>
                {item.estado !== "disponible" && (
                  <span className="formacion-item-estado">No disponible</span>
                )}
                <span className="formacion-item-flecha">
                  <IconoFlecha />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ===== Sección / página de formaciones =====
   Se reutiliza en:
     - Home (sección #cursos): sin props -> muestra los dos dropdowns apilados.
     - /carreras y /cursos (páginas aparte): con solo="carrera"|"curso" + esPagina
       -> muestra un único panel, botón "Volver al inicio" y enlace al otro listado. */
const Cursos = ({ solo = null, esPagina = false }) => {
  const navigate = useNavigate();
  const [panelesAbiertos, setPanelesAbiertos] = useState({ carrera: false, curso: false });

  useEffect(() => {
    if (esPagina) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [esPagina]);

  // CAMBIO DE ESTA SESIÓN: apertura EXCLUSIVA - abrir un panel cierra el otro.
  const togglePanel = (tipo) => {
    setPanelesAbiertos((prev) => ({ carrera: false, curso: false, [tipo]: !prev[tipo] }));
  };

  const irADetalle = (esCarrera, item) => {
    navigate(`/${esCarrera ? "carrera" : "curso"}s/${item.slug}`);
  };

  const mostrarPanel = (tipo) => !solo || solo === tipo;

  // Hero adaptado por tipo de listado
  const heroTitle = !solo || solo === "carrera"
    ? "Transformá tu futuro con"
    : "Impulsá tu carrera con";
  const heroHighlight = !solo || solo === "carrera"
    ? " carreras que marcan la diferencia"
    : " cursos de especialización";
  const heroSubtitle = !solo || solo === "carrera"
    ? "Formación profesional de excelencia en grafología, criminalística y ciencias forenses. Tu desarrollo profesional comienza aquí."
    : "Capacitaciones, seminarios y diplomaturas de actualización profesional en grafología, criminalística y ciencias forenses.";

  return (
    <section
      className={`cursos-section${esPagina ? " cursos-section--pagina" : ""}`}
      style={{
        "--cursos-bg-image": `url(${localImages.banners.fondoParaCursos})`,
      }}
    >
      {/* Efectos de fondo sutiles sin animación */}
      <div className="cursos-bg-effects">
        <div className="cursos-particles"></div>
        <div className="cursos-gradient-overlay"></div>
      </div>

      <div className="cursos-container">
        {/* Hero Section Compacto (sin cambios respecto de la versión anterior) */}
        <div className="cursos-hero-section">
          <div className="cursos-hero-content">
            <div className="cursos-hero-main">
              <div className="cursos-hero-left">
                {esPagina && (
                  <Link to="/" className="formaciones-volver">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Volver al inicio
                  </Link>
                )}
                {/* El H1 va solo cuando es página (evita duplicar el H1 del home). */}
                {esPagina ? (
                  <h1 className="cursos-hero-title">
                    {heroTitle}
                    <span className="hero-title-highlight">{heroHighlight}</span>
                  </h1>
                ) : (
                  <h2 className="cursos-hero-title">
                    {heroTitle}
                    <span className="hero-title-highlight">{heroHighlight}</span>
                  </h2>
                )}

                <p className="cursos-hero-subtitle">
                  {heroSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== NUEVO: dos dropdowns, carreras y cursos por separado ===== */}
        {/* NOTA PENDIENTE CLIENTE: la bajada "Títulos oficiales con validez nacional" se
            mantiene según lo pedido por marca, pero 2 de las 6 carreras son nuevas
            (id 18 y 19): validar ese claim con el cliente antes de publicar. */}
        <div className="formaciones-grid">
          {mostrarPanel("carrera") && (
            <PanelFormaciones
              tipo="carrera"
              titulo="Carreras"
              bajada="Títulos oficiales con validez nacional"
              lista={carrerasData}
              abierto={panelesAbiertos.carrera}
              onToggle={() => togglePanel("carrera")}
              onSeleccionar={(item) => irADetalle(true, item)}
            />
          )}
          {mostrarPanel("curso") && (
            <PanelFormaciones
              tipo="curso"
              titulo="Cursos"
              bajada="Capacitaciones, seminarios y diplomaturas"
              lista={cursosData}
              abierto={panelesAbiertos.curso}
              onToggle={() => togglePanel("curso")}
              onSeleccionar={(item) => irADetalle(false, item)}
            />
          )}
        </div>

        <p className="formaciones-ayuda">
          Elegí una opción del listado para ver toda la información de la formación.
        </p>

        {esPagina && (
          <p className="formaciones-otro-lista">
            {solo === "carrera" ? (
              <>
                ¿Buscás una capacitación corta?{" "}
                <Link to="/cursos">Ver todos los cursos →</Link>
              </>
            ) : (
              <>
                ¿Buscás una carrera con título oficial?{" "}
                <Link to="/carreras">Ver todas las carreras →</Link>
              </>
            )}
          </p>
        )}
      </div>

      {/* ANTERIOR: acá iban el acordeón (accordion-container), la grilla de cards
          (cards-container / cards-grid) y el <CursoModal />.
          Todo eso quedó conservado en ./CursosAnterior.jsx */}
    </section>
  );
};

export default Cursos;
