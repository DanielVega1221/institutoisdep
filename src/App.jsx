import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';
import VolumeControl from "./components/AudioPlayer/VolumeControl.jsx";
import music from "./assets/Music.mp3";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Primera frase
    const t1 = setTimeout(() => setActive1(true), 300);
    // Segunda frase
    const t2 = setTimeout(() => setActive2(true), 3000);
    // Tercera frase
    const t3 = setTimeout(() => setActive3(true), 5200);
    // Fade out
    const t4 = setTimeout(() => setFadeOut(true), 8700);
    // Ocultar overlay
    const t5 = setTimeout(() => setShowIntro(false), 9500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3f2480] to-white" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {showIntro && (
        <div className={`intro-overlay${fadeOut ? " intro-fadeout" : ""}`}>
          <div className="intro-content">
            <div className={`intro-phrase${active1 ? " active" : ""}`}>
              ¿te acordas cuando buscábamos mejor percepción del hombre y no la letra perfecta?
            </div>
            <div className={`intro-phrase${active2 ? " active" : ""}`}>
              Bueno, ahora nos renovamos
            </div>
            <div className={`intro-phrase${active3 ? " active" : ""}`}>
              Un nuevo capítulo en la educación. ISDEP, renovado para formar más que profesionales.
            </div>
          </div>
        </div>
      )}
      <Navbar />
      <VolumeControl audioSrc={music} />
      <div style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}

export default App;
