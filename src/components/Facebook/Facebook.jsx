import React, { useState, useEffect, useRef } from "react";
import "./Facebook.css";

const FACEBOOK_URL = `https://www.facebook.com/plugins/page.php?
  href=https%3A%2F%2Fwww.facebook.com%2Fcocacolaar
  &tabs=timeline
  &width=500
  &height=600
  &small_header=true
  &adapt_container_width=true
  &hide_cover=false
  &show_facepile=false`
  .replace(/\s+/g, "");

const Facebook = () => {
  const [error, setError] = useState(false);
  const scrollWrapperRef = useRef(null);

  const handleIframeError = () => setError(true);

  useEffect(() => {
    const onResize = () => {
      if (window.FB && window.FB.XFBML) {
        window.FB.XFBML.parse();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Forzar scroll inicial del wrapper (no del iframe, que está bloqueado por CORS)
  useEffect(() => {
    const el = scrollWrapperRef.current;
    if (el) {
      el.scrollTop = 1; // forzamos posición inicial ≠ 0
    }
  }, []);

  // Prevenir que vuelva a scrollTop 0 (esto mantiene la posición "desbloqueada")
  const handleScroll = () => {
    const el = scrollWrapperRef.current;
    if (el && el.scrollTop === 0) {
      el.scrollTop = 1;
    }
  };

  return (
    <section className="facebook-section">
      <div className="facebook-card">
        <h2 className="facebook-title">Últimas novedades en Facebook</h2>
        <div
          className="facebook-scroll-wrapper"
          ref={scrollWrapperRef}
          onScroll={handleScroll}
        >
          <div className="facebook-iframe-container">
            {!error ? (
              <iframe
                title="Facebook Page"
                src={FACEBOOK_URL}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "block",
                  borderRadius: "12px",
                  pointerEvents: "auto",
                  touchAction: "auto",
                  WebkitOverflowScrolling: "touch",
                  transform: "translateY(-1px)", // forzamos que no arranque justo en el top visual
                }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                onError={handleIframeError}
              ></iframe>
            ) : (
              <div className="facebook-error">
                <p>No se puede mostrar el feed de Facebook por motivos de privacidad o configuración de la página.</p>
                <p>Cuando el cliente habilite el acceso público, aquí aparecerán las novedades.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facebook;
