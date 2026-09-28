import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { localImages } from "../../utils/localImages";
import { carrerasData, nombreFormacion } from "../../data/formaciones";
import MaterialAccessModal from "./MaterialAccessModal";
import "./Navbar.css";

const navItems = [
  // CAMBIO DE ESTA SESIÓN: el item único "Carreras, Diplomaturas y Cursos" (que bajaba
  // scrolleando a la sección #cursos) ahora son dos botones que abren páginas aparte:
  //   ANTERIOR: { label: "Carreras, Diplomaturas y Cursos", route: "/", section: "cursos" },
  // "Carreras" ahora además abre un desplegable con todas las carreras (submenu: "carreras").
  { label: "Carreras", route: "/carreras", submenu: "carreras" },
  { label: "Cursos", route: "/cursos" },
  { label: "Nuestra Metodología", route: "/nuestra-metodologia" },
  { label: "Acceso a inscripción", route: "/como-inscribirse" },
  { label: "Plataforma de Pago", action: "payment" },
  { label: "Material de Estudio", action: "material" },
  { label: "Equipo docente", route: "/", section: "equipo-docente" },
  { label: "Avales", route: "/avales" },
  // ANTERIOR (cambio de esta sesión): llevaba a la sección de imágenes promocionales del home,
  // que fue quitada. Se conserva comentado por si el cliente quiere revertir.
  // { label: "Próxima Apertura", route: "/", section: "anuncios" },
  { label: "Contacto", route: "/", section: "contacto" },
];

/* Contenido de los desplegables del menú.
   La clave la define `submenu` en el ítem de navItems: cada entrada es la lista de
   formaciones de src/data/formaciones.js. Para sumar uno nuevo (ej. "cursos") alcanza
   con poner la clave en el ítem y agregar la entrada acá. */
const navSubmenus = {
  carreras: carrerasData,
};

const Chevron = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [materialModalOpen, setMaterialModalOpen] = useState(false);
  const [submenuAbierto, setSubmenuAbierto] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // El desplegable se cierra solo al cambiar de ruta.
  useEffect(() => {
    setSubmenuAbierto(null);
  }, [location.pathname]);

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
    setSubmenuAbierto(null);
  };

  const handleClose = () => {
    setMenuOpen(false);
    setSubmenuAbierto(null);
  };

  const handleSubmenuToggle = (clave) => {
    setSubmenuAbierto((prev) => (prev === clave ? null : clave));
  };

  const handleFormacionClick = (clave, formacion) => {
    setMenuOpen(false);
    setSubmenuAbierto(null);
    navigate(`/${clave}/${formacion.slug}`);
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    setSubmenuAbierto(null);

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
    setSubmenuAbierto(null);

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

        <nav className="overlay-nav">
          {navItems.map((item, index) => {
            const delay = { animationDelay: `${0.1 + index * 0.1}s` };
            const lista = item.submenu ? navSubmenus[item.submenu] : null;

            /* Ítem con desplegable: el botón principal solo abre/cierra la lista.
               Adentro están todas las formaciones (cada una a su página de detalle)
               más un enlace al listado completo del ítem. */
            if (lista) {
              const abierto = submenuAbierto === item.submenu;

              return (
                <div key={item.label} className="nav-group">
                  <button
                    type="button"
                    className={`nav-link nav-link-toggle${abierto ? " abierto" : ""}`}
                    onClick={() => handleSubmenuToggle(item.submenu)}
                    aria-expanded={abierto}
                    aria-controls={`nav-submenu-${item.submenu}`}
                    style={delay}
                  >
                    {item.label}
                    <span className="nav-link-chevron">
                      <Chevron />
                    </span>
                  </button>

                  {abierto && (
                    <div className="nav-submenu" id={`nav-submenu-${item.submenu}`}>
                      <ul className="nav-submenu-lista">
                        {lista.map((formacion, i) => (
                          <li
                            key={formacion.slug}
                            className="nav-submenu-item"
                            style={{ animationDelay: `${0.05 + i * 0.05}s` }}
                          >
                            <button
                              type="button"
                              className="nav-submenu-link"
                              onClick={() => handleFormacionClick(item.submenu, formacion)}
                              title={nombreFormacion(formacion)}
                            >
                              {formacion.emoji && (
                                <span className="nav-submenu-emoji" aria-hidden="true">
                                  {formacion.emoji}
                                </span>
                              )}
                              <span className="nav-submenu-nombre">
                                {nombreFormacion(formacion)}
                              </span>
                              {formacion.estado !== "disponible" && (
                                <span className="nav-submenu-estado">No disponible</span>
                              )}
                            </button>
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        className="nav-submenu-todas"
                        onClick={() => handleNavClick(item)}
                      >
                        Ver todas las {item.label.toLowerCase()}
                        <ArrowRight />
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.label}
                className="nav-link"
                onClick={() => handleNavClick(item)}
                style={delay}
              >
                {item.label}
              </button>
            );
          })}
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