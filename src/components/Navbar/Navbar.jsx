import React, { useState } from "react";
import logo from "../../assets/Logo1.png";
import "./Navbar.css";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Informacion", href: "#" },
  { label: "Cursos", href: "#" },
  { label: "Contacto", href: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const handleClose = () => setMenuOpen(false);

  return (
    <header className="custom-navbar" style={{ minHeight: 110, height: 110 }}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <div className="navbar-logo-subtitle">Instituto Superior de Enseñanza Profesional</div>
      </div>
      {/* Desktop links */}
      <nav className="navbar-links">
        {navItems.map((item, idx) => (
          <React.Fragment key={item.label}>
            <a className="navbar-link" href={item.href}>
              {item.label}
            </a>
            {idx < navItems.length - 1 && <span className="navbar-separator" />}
          </React.Fragment>
        ))}
      </nav>
      {/* Hamburger button */}
      <button
        className="navbar-hamburger"
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        aria-controls="navbar-mobile-menu"
        onClick={handleToggle}
        type="button"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect y="7" width="32" height="3.5" rx="1.5" fill="#0B1F3A" />
          <rect y="14" width="32" height="3.5" rx="1.5" fill="#0B1F3A" />
          <rect y="21" width="32" height="3.5" rx="1.5" fill="#0B1F3A" />
        </svg>
      </button>
      {/* Mobile menu */}
      <nav
        id="navbar-mobile-menu"
        className={`navbar-mobile-menu${menuOpen ? " active" : ""}`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            className="navbar-link"
            href={item.href}
            onClick={handleClose}
          >
            {item.label}
          </a>
        ))}
      </nav>
      {/* Overlay for closing menu on click outside */}
      {menuOpen && (
        <div
          className="navbar-mobile-overlay"
          onClick={handleClose}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;
