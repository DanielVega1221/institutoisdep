import React, { useState } from "react";
import ilustracion22 from "../../assets/ilustracion22.png";
import "./navbar4Style.css"; // Asegúrate de que este archivo existe en la misma carpeta

const NavbarElegante = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-elegante">
      <div className="navbar-elegante-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src={ilustracion22}
            alt="ISDEP Logo"
            className="navbar-logo-img"
          />
        </div>

        {/* Desktop nav */}
        <nav className="navbar-links-desktop">
          <a href="#">Quienes somos</a>
          <a href="#">Carreras</a>
          <a href="#">Opiniones</a>
          <a href="#">Contacto</a>
        </nav>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          aria-controls="navbar4-links-mobile"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect y="6" width="28" height="3" rx="1.5" fill="#0f172a" />
            <rect y="13" width="28" height="3" rx="1.5" fill="#0f172a" />
            <rect y="20" width="28" height="3" rx="1.5" fill="#0f172a" />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="navbar4-links-mobile"
        className={`navbar-links-mobile ${menuOpen ? "active" : ""}`}
      >
        <a href="#" onClick={closeMenu}>Quienes somos</a>
        <a href="#" onClick={closeMenu}>Carreras</a>
        <a href="#" onClick={closeMenu}>Opiniones</a>
        <a href="#" onClick={closeMenu}>Contacto</a>
      </nav>
    </header>
  );
};

export default NavbarElegante;
