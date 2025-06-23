import React, { useState } from "react";
import ilustracion22 from "../../assets/ilustracion22.png";
import "./navbar1Style.css";

const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar1-wrapper">
      <div className="navbar1-background">
        <nav className="navbar1-container">
          {/* Logo a la izquierda */}
          <div className="navbar1-logo">
            <img
              src={ilustracion22}
              alt="ISDEP Logo"
              className="navbar1-logo-img"
            />
          </div>

          {/* Links desktop */}
          <div className="navbar1-links-desktop">
            <a href="#quienes">Quiénes somos</a>
            <a href="#carreras">Carreras</a>
            <a href="#duracion">Duración</a>
            <a href="#contacto">Contacto</a>
          </div>

          {/* Botón hamburguesa */}
          <button
            className="navbar1-toggle"
            onClick={toggleMenu}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            aria-controls="navbar1-links-mobile"
            type="button"
            tabIndex={0}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect y="6" width="28" height="3" rx="1.5" fill="#312e81" />
              <rect y="13" width="28" height="3" rx="1.5" fill="#312e81" />
              <rect y="20" width="28" height="3" rx="1.5" fill="#312e81" />
            </svg>
          </button>
        </nav>

        {/* Menú mobile */}
        <nav
          id="navbar1-links-mobile"
          className={`navbar1-links-mobile${menuOpen ? " active" : ""}`}
        >
          <a href="#quienes" onClick={closeMenu}>
            Quiénes somos
          </a>
          <a href="#carreras" onClick={closeMenu}>
            Carreras
          </a>
          <a href="#duracion" onClick={closeMenu}>
            Duración
          </a>
          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar1;
