import React, { useState } from "react";
import logo from "../../assets/Logo1.png";
import "./Navbar.css";

const navItems = [
  { label: "Equipo docente" },
  { label: "Anuncios" },
  { label: "Cursos" },
  { label: "Contacto" },
];

const Navbar = ({ handleNav }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleClose = () => setMenuOpen(false);

  const handleNavClick = (label) => {
    setMenuOpen(false);
    setTimeout(() => {
      if (handleNav) handleNav(label);
    }, 500);
  };

  return (
    <>
      <header className={`navbar${menuOpen ? ' menu-open' : ''}`}>
        <div className="navbar-logo">
          <img src={logo} alt="Instituto ISDEP" className="navbar-logo-img" />
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
          <div className="overlay-logo">
            <img src={logo} alt="Instituto ISDEP" />
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
              onClick={() => handleNavClick(item.label)}
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