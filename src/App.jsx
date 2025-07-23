import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';
import VolumeControl from "./components/AudioPlayer/VolumeControl.jsx";
import music from "./assets/Music.mp3";
import ilustracion from "./assets/Ilustracion.png";
import logo from "./assets/Logo1.png";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros.jsx";
import Cursos from "./components/Cursos/Cursos.jsx";
import LoadingScreen from "./components/Loading/LoadingScreen.jsx";
import Anuncios from "./components/Anuncios/Anuncios.jsx";
import Contacto from "./components/Contacto/Contacto.jsx";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [colorBg, setColorBg] = useState("initial");
  const [showLogo1, setShowLogo1] = useState(true);
  // Estado global para integración Cursos -> Contacto
  const [selectedInteres, setSelectedInteres] = useState(null);
  const contactoRef = React.useRef(null);
  const cursosRef = React.useRef(null);
  const anunciosRef = React.useRef(null);

  // Scroll handler para Navbar
  const handleNav = (section) => {
    let ref = null;
    if (section === "Cursos") ref = cursosRef;
    if (section === "Contacto") ref = contactoRef;
    if (section === "Anuncios") ref = anunciosRef;
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const t1 = setTimeout(() => setActive1(true), 300);
    const t2 = setTimeout(() => {
      setActive2(true);
      setColorBg("second");
      setShowLogo1(false);
    }, 4000);
    const t3 = setTimeout(() => setActive3(true), 6200);
    const t4 = setTimeout(() => setFadeOut(true), 9700);
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
    <div className="app-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0, padding: 0, width: "100%" }}>
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
              ¿Te acordas cuando buscábamos mejor percepción del hombre y no la letra perfecta?
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
      <Navbar handleNav={handleNav} />
      <SobreNosotros />
      <section ref={cursosRef}>
        <Cursos setSelectedInteres={setSelectedInteres} contactoRef={contactoRef} />
      </section>
      <section ref={contactoRef}>
        <Contacto ref={contactoRef} selectedInteres={selectedInteres} setSelectedInteres={setSelectedInteres} />
      </section>
      <section ref={anunciosRef}>
        <Anuncios />
      </section>
      <VolumeControl audioSrc={music} />
      <div style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}

export default App;
