import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { localImages } from "../../utils/localImages";
import "./Navbar.css";

const navItems = [
  { label: "Nuestra Metodología", route: "/nuestra-metodologia" },
  { label: "¿Cómo inscribirme?", route: "/como-inscribirse" },
  { label: "Código de Ética Grafológico", route: "/codigo-etica-grafologico" },
  { label: "Equipo docente", route: "/", section: "equipo-docente" },
  { label: "Anuncios", route: "/", section: "anuncios" },
  { label: "Contacto", route: "/", section: "contacto" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
    
    if (item.route && item.route !== "/") {
      // Navegar a otra página
      navigate(item.route);
    } else if (item.section) {
      // Si estamos en otra página, navegar a home primero
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollToSection: item.section } });
      } else {
        // Si ya estamos en home, hacer scroll directo
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
          </div>
        </div>
        <div className="navbar-subtitle-mobile">
          <div className="subtitle-line">Instituto Superior de</div>
          <div className="subtitle-line">Enseñanza Profesional</div>
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
            </div>
          </div>
          <div className="overlay-subtitle-mobile">
            <div className="subtitle-line">Instituto Superior de</div>
            <div className="subtitle-line">Enseñanza Profesional</div>
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
    </>
  );
};

export default Navbar;