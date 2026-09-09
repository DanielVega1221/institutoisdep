import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { localImages } from "../../utils/localImages";
import MaterialAccessModal from "./MaterialAccessModal";
import "./Navbar.css";

const navItems = [
  // CAMBIO DE ESTA SESIÓN: el item único "Carreras, Diplomaturas y Cursos" (que bajaba
  // scrolleando a la sección #cursos) ahora son dos botones que abren páginas aparte:
  //   ANTERIOR: { label: "Carreras, Diplomaturas y Cursos", route: "/", section: "cursos" },
  { label: "Carreras", route: "/carreras" },
  { label: "Cursos", route: "/cursos" },
  { label: "Nuestra Metodología", route: "/nuestra-metodologia" },
  { label: "Cómo inscribirme", route: "/como-inscribirse" },
  { label: "Plataforma de Pago", action: "payment" },
  { label: "Material de Estudio", action: "material" },
  { label: "Equipo docente", route: "/", section: "equipo-docente" },
  { label: "Avales", route: "/avales" },
  // ANTERIOR (cambio de esta sesión): llevaba a la sección de imágenes promocionales del home,
  // que fue quitada. Se conserva comentado por si el cliente quiere revertir.
  // { label: "Próxima Apertura", route: "/", section: "anuncios" },
  { label: "Contacto", route: "/", section: "contacto" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [materialModalOpen, setMaterialModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleClose = () => setMenuOpen(false);

  const handleLogoClick = () => {
    setMenuOpen(false);
    
    if (location.pathname !== "/") {
      // Si estamos en otra página, navegar a home
      navigate("/");
    } else {
      // Si ya estamos en home, hacer scroll hacia arriba
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (item) => {
    setMenuOpen(false);
    
    if (item.action === "material") {
      // Abrir modal de acceso al material
      setMaterialModalOpen(true);
    } else if (item.action === "payment") {
      // Abrir plataforma de pago en pestaña nueva
      window.open("https://isdep-pagos.web.app", "_blank", "noopener,noreferrer");
    } else if (item.route && item.route !== "/") {
      // Navegar a otra página
      navigate(item.route);
    } else if (item.section) {
      // Si estamos en otra página, navegar a home primero
      if (location.pathname !== "/") {
        // ANTERIOR: navigate("/", { state: { scrollToSection: item.section, expandCursos: item.section === "cursos" } });
        navigate("/", { state: { scrollToSection: item.section } });
      } else {
        // ANTERIOR: la sección de cursos era un acordeón y se disparaba un evento para expandirlo.
        // Ahora la sección muestra dos dropdowns, ya no hace falta expandir nada.
        // if (item.section === "cursos") {
        //   // Disparar evento personalizado para expandir cursos
        //   window.dispatchEvent(new CustomEvent('expandCursos'));
        // }
        setTimeout(() => {
          const element = document.getElementById(item.section);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  };

  return (
    <>
      <header className={`navbar${menuOpen ? ' menu-open' : ''}`}>
        <div className="navbar-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={localImages.icons.logo1} alt="Instituto ISDEP" className="navbar-logo-img" />
          <div className="navbar-subtitle-desktop">
            <div className="subtitle-line">Instituto Superior de</div>
            <div className="subtitle-line">Enseñanza Profesional</div>
            <div className="subtitle-line subtitle-legal">Gestión Educativa Privada SNEP Ley 13047</div>
          </div>
        </div>
        <div className="navbar-subtitle-mobile">
          <div className="subtitle-line">Instituto Superior de</div>
          <div className="subtitle-line">Enseñanza Profesional</div>
          <div className="subtitle-line subtitle-legal">Gestión Educativa Privada SNEP Ley 13047</div>
        </div>
        <button
          className={`navbar-hamburger ${menuOpen ? 'active' : ''}`}
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </header>

      {/* Overlay Menu */}
      <div className={`navbar-overlay ${menuOpen ? 'active' : ''}`}>
        <div className="overlay-header">
          <div className="overlay-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src={localImages.icons.logo1} alt="Instituto ISDEP" />
            <div className="overlay-subtitle">
              <div className="subtitle-line">Instituto Superior de</div>
              <div className="subtitle-line">Enseñanza Profesional</div>
              <div className="subtitle-line subtitle-legal">Gestión Educativa Privada SNEP Ley 13047</div>
            </div>
          </div>
          <div className="overlay-subtitle-mobile">
            <div className="subtitle-line">Instituto Superior de</div>
            <div className="subtitle-line">Enseñanza Profesional</div>
            <div className="subtitle-line subtitle-legal">Gestión Educativa Privada SNEP Ley 13047</div>
          </div>
          <button
            className="close-button"
            onClick={handleClose}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* NUEVO (cambio de esta sesión): cartel informativo de inscripción.
            No es un botón ni navega a ningún lado, es solo texto destacado. */}
        <div className="overlay-aviso-inscripcion" role="status">
          <span className="overlay-aviso-punto" aria-hidden="true"></span>
          <span className="overlay-aviso-texto">
            Está abierta la inscripción para el Ciclo Lectivo 2027
          </span>
        </div>

        <nav className="overlay-nav">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              className="nav-link"
              onClick={() => handleNavClick(item)}
              style={{
                animationDelay: `${0.1 + index * 0.1}s`
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Modal de Acceso al Material */}
      <MaterialAccessModal 
        isOpen={materialModalOpen}
        onClose={() => setMaterialModalOpen(false)}
      />
    </>
  );
};

export default Navbar;