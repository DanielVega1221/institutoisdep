import React from "react";
import "./Footer.css";
import { cloudinaryImages } from "../../utils/cloudinaryImages";


const Footer = () => (
  <footer className="footer-main">
    <div className="footer-content">
      {/* Columna izquierda: Identidad institucional */}
      <div className="footer-col footer-col-left">
        <div className="footer-title">ISDEP - Instituto Superior de Enseñanza Profesional</div>
        <div className="footer-info">Catamarca 2336</div>
        <div className="footer-info">Teléfono fijo: 469 0044</div>
        <div className="footer-info">Mar del Plata, Buenos Aires</div>
        <div className="footer-info">Argentina</div>
        <div className="footer-info">Inscripto bajo Ley 13.046, Artículo 2, Inciso C</div>
      </div>
      {/* Columna central: Call to action */}
      <div className="footer-col footer-col-center">
        <div className="footer-cta-title">Hablemos de tu futuro</div>
        <div className="footer-cta-question">¿Querés más información?</div>
        <div className="footer-cta-question">¿Tenés dudas sobre nuestras carreras o modalidades?</div>
        <div className="footer-cta-desc">
          Escribinos y te ayudamos a elegir la formación que mejor se adapta a vos.
        </div>
        <button
          className="footer-contact-btn"
          type="button"
          onClick={() => {
            const section = document.getElementById('contacto-section');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }}
        >
          Contactar
        </button>
      </div>
      {/* Columna derecha: Redes sociales */}
      <div className="footer-col footer-col-right">
        <div className="footer-social-title">Seguinos en nuestras redes</div>
        <div className="footer-social-icons footer-social-icons-centered">
          <a href="https://wa.me/5492236741300" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.13 1.6 5.92L0 24l6.25-1.63A11.97 11.97 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 22c-1.7 0-3.36-.44-4.8-1.28l-.34-.2-3.72.97.99-3.62-.22-.36A9.97 9.97 0 1 1 22 12c0 5.52-4.48 10-10 10Zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.02 2.81 1.16 3 .14.19 2.01 3.06 4.89 4.17.68.23 1.21.37 1.62.47.68.17 1.3.15 1.79.09.55-.07 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33Z" fill="currentColor"/></svg>
          </a>
          <a href="https://www.facebook.com/ISDEP" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            {/* Facebook F clásico, centrado */}
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M13.5 8.5V7.5C13.5 6.94772 13.9477 6.5 14.5 6.5H16V4H14.5C12.8431 4 11.5 5.34315 11.5 7V8.5H10V11H11.5V20H14.5V11H16L16.5 8.5H14.5Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
        <div className="footer-logo-centered">
          <img src={cloudinaryImages.icons.logo1} alt="ISDEP Logo" />
          <div className="footer-logo-subtitle">Instituto Superior de Enseñanza Profesional</div>
        </div>
      </div>
    </div>
    <div className="footer-divider" />
    <div className="footer-legal">
      Todos los derechos reservados © 2025 ISDEP
    </div>
  </footer>
);

export default Footer;
