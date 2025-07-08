import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';
import VolumeControl from "./components/AudioPlayer/VolumeControl.jsx";
import music from "./assets/Music.mp3";
import ilustracion from "./assets/Ilustracion.png";
import logo from "./assets/Logo1.png";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros.jsx";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [colorBg, setColorBg] = useState("initial"); // "initial" | "second"
  const [showLogo1, setShowLogo1] = useState(true);

  useEffect(() => {
    // Primera frase y logo
    const t1 = setTimeout(() => setActive1(true), 300);
    // Segunda frase, cambia fondo y logo (con animación)
    const t2 = setTimeout(() => {
      setActive2(true);
      setColorBg("second");
      setShowLogo1(false);
    }, 4000);
    // Tercera frase
    const t3 = setTimeout(() => setActive3(true), 6200);
    // Fade out
    const t4 = setTimeout(() => setFadeOut(true), 9700);
    // Ocultar overlay
    const t5 = setTimeout(() => setShowIntro(false), 11500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  const introBgClass = colorBg === "second" ? "intro-bg-second" : "intro-bg-initial";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3f2480] to-white" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {showIntro && (
        <div className={`intro-overlay ${introBgClass}${fadeOut ? " intro-fadeout" : ""}`}>
          <div className="intro-content">
            <div className="intro-logo-wrapper">
              <div
                className={`intro-logo-shadow ${showLogo1 ? "initial" : "second"}`}
              />
              <img
                src={ilustracion}
                alt="ISDEP Ilustración"
                className={`intro-ilustracion${active1 && showLogo1 ? " visible logo-fadein" : ""}${!showLogo1 ? " logo-fadeout" : ""}`}
                style={{ zIndex: showLogo1 ? 2 : 1 }}
              />
              <img
                src={logo}
                alt="ISDEP Logo"
                className={`intro-ilustracion${active1 && !showLogo1 ? " visible logo-fadein" : ""}${showLogo1 ? " logo-fadeout" : ""}`}
                style={{ zIndex: !showLogo1 ? 2 : 1 }}
              />
            </div>
            <div className={`intro-phrase${active1 ? " active" : ""}${colorBg === "second" ? " aurora-text" : ""}`}>
              ¿te acordas cuando buscábamos mejor percepción del hombre y no la letra perfecta?
            </div>
            <div className={`intro-phrase${active2 ? " active" : ""}${colorBg === "second" ? " aurora-text" : ""}`}>
              Bueno, ahora nos renovamos
            </div>
            <div className={`intro-phrase${active3 ? " active" : ""}${colorBg === "second" ? " aurora-text" : ""}`}>
              Un nuevo capítulo en la educación. ISDEP, renovado para formar más que profesionales.
            </div>
          </div>
        </div>
      )}
      <Navbar />
      <SobreNosotros />
      <VolumeControl audioSrc={music} />
      <div style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}

export default App;
