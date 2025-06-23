import React, { useState } from "react";
import Navbar1 from './components/Navbar/Navbar1.jsx';
import Navbar2 from './components/Navbar/Navbar2.jsx';
import Navbar3 from './components/Navbar/Navbar3.jsx';
import Navbar4 from './components/Navbar/Navbar4.jsx';
import LoadingScreen from './components/Loading/LoadingScreen.jsx';
import VolumeControl from './components/AudioPlayer/VolumeControl.jsx';
import music from './assets/Music.mp3'; // <--- AQUÍ es donde importas el archivo de música

const navbars = [Navbar1, Navbar2, Navbar3, Navbar4];

function App() {
  const [navbarIndex, setNavbarIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pendingChange, setPendingChange] = useState(false);
  const [spinnerVisible, setSpinnerVisible] = useState(false);

  // Mueve el botón fuera del overlay absoluto para que el navbar sea siempre interactivo
  const handleChangeStyle = () => {
    if (loading) return;
    setLoading(true);
    setPendingChange(true);
    setSpinnerVisible(true);
  };

  const handleLoadingPhase = (phase) => {
    if (phase === "content" && pendingChange) {
      setNavbarIndex((prev) => (prev + 1) % navbars.length);
      setPendingChange(false);
    }
  };

  const handleLoadingFinish = () => {
    setSpinnerVisible("fadeout");
    setTimeout(() => {
      setLoading(false);
      setSpinnerVisible(false);
    }, 400);
  };

  const NavbarComponent = navbars[navbarIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3f2480] to-white" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Navbar SIEMPRE arriba */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavbarComponent />
      </div>

      {/* Botón centrado SOLO ocupa el espacio necesario */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        left: 0,
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2, // Si el navbar tiene z-index 999, pon aquí menos (ej: 10)
        pointerEvents: "none" // <--- SOLO el wrapper, el botón sí debe ser interactivo
      }}>
        <button
          onClick={handleChangeStyle}
          disabled={loading}
          style={{
            pointerEvents: "auto", // <--- El botón sí es clickeable
            padding: "1rem 2.5rem",
            fontSize: "1.3rem",
            borderRadius: "2rem",
            background: "#312e81",
            color: "#fff",
            border: "none",
            boxShadow: "0 2px 12px #0002",
            fontFamily: "'DM Serif Display', serif",
            cursor: "pointer",
            transition: "background 0.2s",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <span
            className={`spinner-placeholder`}
            style={{
              display: "inline-flex",
              width: 18,
              height: 18,
              alignItems: "center",
              justifyContent: "center",
              transition: "opacity 0.4s, transform 0.4s"
            }}
          >
            {spinnerVisible && (
              <span className={`spinner${spinnerVisible === "fadeout" ? " spinner-fadeout" : ""}`} />
            )}
          </span>
          cambio de estilo
        </button>
      </div>

      {/* Pantalla de carga */}
      {loading && (
        <LoadingScreen
          show={loading}
          onPhaseChange={handleLoadingPhase}
          onFinish={handleLoadingFinish}
        />
      )}
      <VolumeControl audioSrc={music} />
    </div>
  );
}

export default App;
