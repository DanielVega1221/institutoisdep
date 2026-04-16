import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Helmet } from 'react-helmet-async';
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

  const isdepProvider = { "@type": "Organization", "name": "ISDEP - Instituto Superior de Enseñanza Profesional", "url": "https://www.institutoisdep.com" };

  const coursesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Cursos y Carreras - ISDEP",
    "url": "https://www.institutoisdep.com/#cursos",
    "itemListElement": [
      { name: "Grafología Emocional", description: "Seminario especializado en análisis emocional a través de la escritura manuscrita.", credential: "Certificado en Grafología Emocional", duration: "P2M", mode: "online" },
      { name: "Formación Profesional en Psicología Social", description: "Carrera para intervenir profesionalmente en salud, educación, comunidad y organizaciones en el marco de la ley 26.206 y concordantes de Salud Mental.", credential: "Psicólogo Social", duration: "P3Y", mode: "online" },
      { name: "Criminalística", description: "Diplomatura superior en investigación científica del delito y análisis forense.", credential: "Diplomatura en Criminalística", duration: "P12M", mode: "online" },
      { name: "Detección de Abuso Sexual Infantil", description: "Seminario profesional para la detección temprana y abordaje del abuso sexual infantil.", credential: "Certificado en Detección de ASI", duration: "P4M", mode: "online" },
      { name: "Psicología Social y Criminalística Aplicada", description: "Especialización en la intersección entre psicología social e investigación criminal.", credential: "Especialista en Psicología Social Forense", duration: "P4M", mode: "online" },
      { name: "Tecnografía Pericial Grafológica", description: "Posgrado especializado en tecnología aplicada al análisis pericial grafológico.", credential: "Especialista en Tecnografía Pericial", duration: "P6M", mode: "onsite" },
      { name: "Análisis de Firmas y Rúbricas", description: "Curso técnico especializado en autenticación y análisis forense de firmas y rúbricas.", credential: "Especialista en Análisis de Firmas", duration: "P3M", mode: "online" },
      { name: "Especialista en Primeros Auxilios Psicológicos", description: "Capacitación oficial para asistencia emocional inmediata en situaciones de emergencia y crisis.", credential: "Especialista en Primeros Auxilios Psicológicos", duration: "P2M", mode: "online" },
      { name: "Acompañante Terapéutico", description: "Formación integral para el acompañamiento terapéutico de personas con padecimientos mentales y adicciones.", credential: "Acompañante Terapéutico Matriculado", duration: "P12M", mode: "online" },
      { name: "Perfilamiento Criminal", description: "Especialización en construcción de perfiles psicológicos delictivos y análisis conductual.", credential: "Especialista en Perfilamiento Criminal", duration: "P6M", mode: "online" },
      { name: "Grafología Forense", description: "Especialización en análisis forense de manuscritos y peritajes documentales judiciales.", credential: "Perito Grafólogo Forense", duration: "P9M", mode: "online" },
      { name: "Análisis de Dibujos Proyectivos", description: "Especialización en interpretación psicológica del dibujo infantil, adolescente y adulto.", credential: "Especialista en Técnicas Proyectivas", duration: "P4M", mode: "online" },
      { name: "Formación Profesional en Psicografología", description: "Formación integral en psicografología moderna con enfoque científico y aplicación práctica.", credential: "Perito en Psicografología", duration: "P2Y", mode: "online" },
      { name: "Detección en Falsificación en Firmas", description: "Curso especializado en técnicas científicas para detectar falsificaciones documentales y de firmas.", credential: "Especialista en Detección en Falsificaciones", duration: "P3M", mode: "onsite" },
      { name: "Capacitación Profesional en Grafología Emocional", description: "Capacitación avanzada en interpretación de estados emocionales a través del análisis grafológico.", credential: "Especialista en Grafología Emocional", duration: "P4M", mode: "online" },
      { name: "Diplomatura Profesional en Criminalística", description: "Diplomatura integral en ciencias forenses con formación práctica en laboratorio especializado.", credential: "Técnico en Criminalística", duration: "P15M", mode: "online" },
      { name: "Diplomatura Superior en Tecnografía Pericial Forense: Área Grafológica", description: "Diplomatura superior en tecnología aplicada a peritajes grafológicos con metodología forense avanzada.", credential: "Perito Superior en Tecnografía Forense", duration: "P12M", mode: "onsite" },
    ].map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Course",
        "name": c.name,
        "description": c.description,
        "educationalCredentialAwarded": c.credential,
        "timeToComplete": c.duration,
        "inLanguage": "es",
        "provider": isdepProvider,
        "hasCourseInstance": { "@type": "CourseInstance", "courseMode": c.mode }
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>ISDEP - Instituto Superior de Enseñanza Profesional</title>
        <meta name="description" content="ISDEP forma expertos en Grafología, Grafología Forense, Ciencias Criminalistas y Perfilamiento Criminal. Cursada online con título avalado por ALGRA. Inscribíte hoy." />
        <link rel="canonical" href="https://www.institutoisdep.com/" />
        <meta property="og:title" content="ISDEP - Instituto Superior de Enseñanza Profesional" />
        <meta property="og:description" content="Formaciones en Grafología, Criminalística y Ciencias Forenses. Cursada online, título oficial avalado por ALGRA." />
        <meta property="og:url" content="https://www.institutoisdep.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ISDEP - Instituto Superior de Enseñanza Profesional",
          "url": "https://www.institutoisdep.com",
          "logo": "https://res.cloudinary.com/dlcuy0ky7/image/upload/f_auto,q_auto:good,w_400,h_400,c_limit/institutoisdep/icons/icons/Logo1",
          "description": "Instituto especializado en Grafología, Grafología Forense, Ciencias Criminalistas y Perfilamiento Criminal. Cursada online con título avalado por ALGRA.",
          "email": "consultasisdep@proton.me",
          "knowsAbout": ["Grafología", "Grafología Forense", "Criminalística", "Perfilamiento Criminal", "Ciencias Criminalistas", "Psicología Social", "Primeros Auxilios Psicológicos"],
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Título de formación profesional",
            "recognizedBy": {
              "@type": "Organization",
              "name": "ALGRA - Asociación Latinoamericana de Grafología"
            }
          }
        })}</script>        <script type="application/ld+json">{JSON.stringify(coursesJsonLd)}</script>      </Helmet>
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