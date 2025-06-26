import React, { useEffect, useState } from "react";
import "./LoadingScreenStyle.css";

const LoadingScreen = ({ show, onFinish }) => {
  const [visible, setVisible] = useState(show);
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      setShowContent(false);
      setFadeOut(false);

      // Mostrar el contenido después de 5 segundos
      const timer1 = setTimeout(() => setShowContent(true), 5000);

      // Fade out después de 10 segundos
      const timer2 = setTimeout(() => {
        setFadeOut(true);
        // Llama a onFinish después del fade out (0.8s)
        setTimeout(() => {
          setVisible(false);
          setShowContent(false);
          setFadeOut(false);
          if (onFinish) onFinish();
        }, 800);
      }, 10000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      setVisible(false);
      setShowContent(false);
      setFadeOut(false);
    }
  }, [show, onFinish]);

  if (!visible) return null;

  return (
    <div className={`loading-overlay${fadeOut ? " fade-out" : " fade-in"}`}>
      {showContent && (
        <div className="loading-content">
          <span className="loading-icon">
            <svg
              width="60"
              height="60"
              viewBox="0 0 50 50"
              className="gear-spin"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <circle cx="25" cy="25" r="20" stroke="#fff" strokeWidth="6" opacity="0.2"/>
                <path
                  d="M25 7v6M25 37v6M43 25h-6M13 25H7M36.77 13.23l-4.24 4.24M17.47 32.53l-4.24 4.24M36.77 36.77l-4.24-4.24M17.47 17.47l-4.24-4.24"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </span>
          <span className="loading-text">Cargando nuevo estilo</span>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;