import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Banner from '../components/Banner/Banner';
import Inicio from '../components/Inicio/Inicio';
import SobreNosotros from '../components/SobreNosotros/SobreNosotros';
import Cursos from '../components/Cursos/Cursos';
import Anuncios from '../components/Anuncios/Anuncios';
import EquipoDocente from '../components/EquipoDocente/EquipoDocente';
import Contacto from '../components/Contacto/Contacto';
import { localImages } from "../utils/localImages";
import { useLocation } from 'react-router-dom';

// Variable global para controlar si la intro ya se mostró en esta "navegación"
// Se resetea solo con recarga completa de la página (F5)
let hasShownIntroInThisNavigation = false;

const HomePage = () => {
  // Verificar si es la primera vez que se monta HomePage en esta navegación
  const isFirstMount = useRef(!hasShownIntroInThisNavigation);
  
  const [showIntro, setShowIntro] = useState(isFirstMount.current);
  const [logoVisible, setLogoVisible] = useState(false);
  const [phraseVisible, setPhraseVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [focusCarrera, setFocusCarrera] = useState(null);
  const [expandCursos, setExpandCursos] = useState(false);
  const contactoRef = React.useRef(null);
  const cursosRef = React.useRef(null);
  const anunciosRef = React.useRef(null);
  const equipoDocenteRef = React.useRef(null);
  const location = useLocation();

  // Función para manejar click en anuncios y navegar a cursos
  const handleAnuncioClick = (carreraName) => {
    // Primero hacer scroll a la sección de cursos después de 0.5s
    setTimeout(() => {
      if (cursosRef.current) {
        cursosRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 500);
    
    // Luego establecer el foco en la carrera después de 1s (tiempo para que se abra el acordeón)
    setTimeout(() => {
      setFocusCarrera(carreraName);
    }, 1000);
  };

  // Manejar scroll desde navegación
  useEffect(() => {
    if (location.state?.scrollToSection) {
      // Si la sección es cursos, señalar que debe expandirse
      if (location.state.expandCursos) {
        setExpandCursos(true);
      }
      
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500); // Dar tiempo para que la página se renderice
    }
  }, [location.state]);

  // Escuchar evento personalizado para expandir cursos
  useEffect(() => {
    const handleExpandCursos = () => {
      setExpandCursos(true);
    };
    
    window.addEventListener('expandCursos', handleExpandCursos);
    
    return () => {
      window.removeEventListener('expandCursos', handleExpandCursos);
    };
  }, []);

  useEffect(() => {
    // Solo ejecutar la animación si es la primera vez en esta navegación
    if (isFirstMount.current && showIntro) {
      console.log('🎬 Iniciando animación de intro');
      // Resetear estados
      setLogoVisible(false);
      setPhraseVisible(false);
      setFadeOut(false);
      
      const t1 = setTimeout(() => {
        console.log('✨ Mostrando logo');
        setLogoVisible(true);
      }, 500);
      const t2 = setTimeout(() => {
        console.log('✨ Mostrando frase');
        setPhraseVisible(true);
      }, 1500);
      const t3 = setTimeout(() => {
        console.log('👋 Iniciando fade out');
        setFadeOut(true);
      }, 4000);
      const t4 = setTimeout(() => {
        console.log('✅ Finalizando intro');
        setShowIntro(false);
        hasShownIntroInThisNavigation = true; // Marcar como visto para esta navegación
      }, 5000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
  }, [showIntro]);

  return (
    <>
      {showIntro && isFirstMount.current && ReactDOM.createPortal(
        <div 
          className={`intro-overlay intro-bg-professional${fadeOut ? " intro-fadeout" : ""}`}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            width: '100vw',
            height: '100vh'
          }}
        >
          <div className="intro-content">
            <div className="intro-logo-wrapper">
              <img
                src={localImages.icons.logo1}
                alt="ISDEP Logo"
                className={`intro-logo${logoVisible ? " visible" : ""}`}
              />
            </div>
            <div className={`intro-phrase-single${phraseVisible ? " active" : ""}`}>
              Capacitando Alumnos, Formando Profesionales
            </div>
          </div>
        </div>,
        document.body
      )}
      
      <Banner />
      <Inicio />
      {/* Espaciador para el alto del Navbar fijo */}
      <div style={{ height: 80 }} />
      <SobreNosotros />
      <section ref={anunciosRef} id="anuncios">
        <Anuncios onAnuncioClick={handleAnuncioClick} />
      </section>
      <section ref={cursosRef} id="cursos">
        <Cursos 
          focusCarrera={focusCarrera}
          setFocusCarrera={setFocusCarrera}
          expandCursos={expandCursos}
          setExpandCursos={setExpandCursos}
        />
      </section>
      <section ref={equipoDocenteRef} id="equipo-docente">
        <EquipoDocente />
      </section>
      <section ref={contactoRef} id="contacto">
        <Contacto ref={contactoRef} />
      </section>
    </>
  );
};

export default HomePage;