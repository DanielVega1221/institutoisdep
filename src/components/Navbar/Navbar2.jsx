import React, { useState } from "react";
import "./navbar2Style.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo a la izquierda */}
        <div className="navbar-logo">
          <img
            src="src/assets/ilustracion22.png"
            alt="ISDEP Logo"
          />
        </div>

        {/* Desktop nav */}
        <nav className="navbar-links-desktop">
          <a href="#">INICIO</a>
          <span className="navbar-separator" />
          <a href="#">INFORMACIÓN</a>
          <span className="navbar-separator" />
          <a href="#">INSCRIPCIONES 2025</a>
          <span className="navbar-separator" />
          <a href="#">CONTACTO</a>
        </nav>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Abrir menú"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="navbar2-links-mobile"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect y="6" width="28" height="3" rx="1.5" fill="#312e81"/>
            <rect y="13" width="28" height="3" rx="1.5" fill="#312e81"/>
            <rect y="20" width="28" height="3" rx="1.5" fill="#312e81"/>
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="navbar2-links-mobile"
        className={`navbar-links-mobile ${menuOpen ? "active" : ""}`}
      >
        <a href="#" onClick={closeMenu}>INICIO</a>
        <a href="#" onClick={closeMenu}>INFORMACIÓN</a>
        <a href="#" onClick={closeMenu}>INSCRIPCIONES 2025</a>
        <a href="#" onClick={closeMenu}>CONTACTO</a>
      </nav>
    </header>
  );
};

export default Navbar;
