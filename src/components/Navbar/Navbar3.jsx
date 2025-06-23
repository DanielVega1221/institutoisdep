import React, { useState } from "react";
import ilustracion22 from "../../assets/ilustracion22.png";
import "./navbar3Style.css";

const Navbar3 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar3">
      <div className="navbar3-container">
        {/* Logo con imagen */}
        <div className="navbar3-logo">
          <img
            src={ilustracion22}
            alt="ISDEP Logo"
            className="navbar3-logo-img"
          />
        </div>

        {/* Enlaces desktop */}
        <nav className="navbar3-links-desktop">
          <a href="#">Quienes somos</a>
          <a href="#">Carreras</a>
          <a href="#">Opiniones</a>
          <a href="#">Contacto</a>
        </nav>

        {/* Botón hamburguesa */}
        <button
          className="navbar3-toggle"
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          aria-controls="navbar3-links-mobile"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect y="6" width="28" height="3" rx="1.5" fill="#312e81" />
            <rect y="13" width="28" height="3" rx="1.5" fill="#312e81" />
            <rect y="20" width="28" height="3" rx="1.5" fill="#312e81" />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="navbar3-links-mobile"
        className={`navbar3-links-mobile ${menuOpen ? "active" : ""}`}
      >
        <a href="#" onClick={closeMenu}>Quienes somos</a>
        <a href="#" onClick={closeMenu}>Carreras</a>
        <a href="#" onClick={closeMenu}>Opiniones</a>
        <a href="#" onClick={closeMenu}>Contacto</a>
      </nav>
    </header>
  );
};

export default Navbar3;
