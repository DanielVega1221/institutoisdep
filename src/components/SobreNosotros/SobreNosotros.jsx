import React, { useEffect, useRef, useState } from "react";
import "./SobreNosotros_new.css";

// Importar imágenes optimizadas
import slide1 from "../../assets/optimized/1.jpg";
import slide1WebP from "../../assets/optimized/1.webp";
import slide2 from "../../assets/optimized/2.jpg";
import slide2WebP from "../../assets/optimized/2.webp";
import slide3 from "../../assets/optimized/3.jpg";
import slide3WebP from "../../assets/optimized/3.webp";
import slide4 from "../../assets/optimized/4.jpg";
import slide4WebP from "../../assets/optimized/4.webp";

// Importar imágenes para la sección de stats
import banderita from "../../assets/banderita.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";

const slides = [
  {
    img: slide1,
    webp: slide1WebP,
    alt: "Capacitando Alumnos, Formando Profesionales",
    text: (
      <div style={{ textAlign: "center", fontFamily: "'Merriweather', serif" }}>
        <span style={{
          fontWeight: 900,
          fontSize: "1.35rem",
          color: "#0F2A4E",
          display: "block",
          marginBottom: "0.5em",
          letterSpacing: "0.01em"
        }}>
          Capacitando Alumnos, Formando Profesionales
        </span>
        <span>Creamos trayectorias educativas que unen conocimiento, vocación y compromiso ético.</span>
      </div>
    ),
  },
  {
    img: slide2,
    webp: slide2WebP,
    alt: "Vanguardia Educativa para un Mundo en Cambio",
    text: (
      <div style={{ textAlign: "center", fontFamily: "'Merriweather', serif" }}>
        <span style={{
          fontWeight: 900,
          fontSize: "1.18rem",
          color: "#0F2A4E",
          display: "block",
          marginBottom: "0.5em",
          letterSpacing: "0.01em"
        }}>
          Vanguardia Educativa para un Mundo en Cambio
        </span>
        <span>Integramos tecnología, pensamiento crítico y metodologías modernas para formar líderes preparados.</span>
      </div>
    ),
  },
  {
    img: slide3,
    webp: slide3WebP,
    alt: "Educación Profesional con Proyección Internacional",
    text: (
      <div style={{ textAlign: "center", fontFamily: "'Merriweather', serif" }}>
        <span style={{
          fontWeight: 900,
          fontSize: "1.18rem",
          color: "#0F2A4E",
          display: "block",
          marginBottom: "0.5em",
          letterSpacing: "0.01em"
        }}>
          Educación Profesional con Proyección Internacional
        </span>
        <span>Certificaciones válidas en todo el país y reconocimiento internacional para tu carrera profesional.</span>
      </div>
    ),
  },
  {
    img: slide4,
    webp: slide4WebP,
    alt: "Instituto Superior de Enseñanza Profesional",
    text: (
      <div style={{ textAlign: "center", fontFamily: "'Merriweather', serif" }}>
        <span style={{
          fontWeight: 900,
          fontSize: "1.18rem",
          color: "#0F2A4E",
          display: "block",
          marginBottom: "0.5em",
          letterSpacing: "0.01em"
        }}>
          Instituto Superior de Enseñanza Profesional
        </span>
        <span>Más que un instituto: una comunidad educativa con historia, valores y mirada de futuro.</span>
      </div>
    ),
  },
];

const AUTO_PLAY_TIME = 5000;

const SobreNosotros = ({ autoPlay = true }) => {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState(0);
  const [animDirection, setAnimDirection] = useState("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set([0])); // Precargar primera imagen
  const timerRef = useRef();

  // Precargar imágenes adyacentes
  const preloadAdjacentImages = (currentIndex) => {
    const nextIndex = (currentIndex + 1) % slides.length;
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    
    setLoadedImages(prev => new Set([...prev, currentIndex, nextIndex, prevIndex]));
  };

  useEffect(() => {
    preloadAdjacentImages(active);
  }, [active]);

  // Auto-play effect con pausa
  useEffect(() => {
    if (!autoPlay || isPaused || isTransitioning) return;
    
    timerRef.current = setTimeout(() => {
      // Activar transición automática (siempre hacia adelante)
      setPrevActive(active);
      setAnimDirection("next");
      setIsTransitioning(true);
      setActive((prev) => (prev + 1) % slides.length);
      
      // Terminar transición después de la animación
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }, AUTO_PLAY_TIME);
    
    return () => clearTimeout(timerRef.current);
  }, [active, autoPlay, isPaused, isTransitioning]);

  // Handlers para pausa al hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    // El timer se reiniciará automáticamente por el useEffect
  };

  const goTo = (idx) => {
    if (isTransitioning || idx === active) return;
    
    clearTimeout(timerRef.current);
    setPrevActive(active);
    setAnimDirection(idx > active ? "next" : "prev");
    setIsTransitioning(true);
    setActive(idx);
    
    // Terminar transición después de la animación
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  const prevSlide = () => {
    setIsPaused(true); // Pausar autoplay temporalmente
    goTo((active - 1 + slides.length) % slides.length);
    // Reanudar autoplay después de un momento
    setTimeout(() => setIsPaused(false), 1000);
  };
  
  const nextSlide = () => {
    setIsPaused(true); // Pausar autoplay temporalmente
    goTo((active + 1) % slides.length);
    // Reanudar autoplay después de un momento
    setTimeout(() => setIsPaused(false), 1000);
  };

  return (
    <section className="sobre-nosotros-main">
      <div className="sobre-nosotros-carousel-outer">
        <div 
          className="sobre-nosotros-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={prevSlide}
            aria-label="Anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="carousel-slide-container">
            {/* Slide que sale (solo durante transición) */}
            {isTransitioning && (
              <div 
                className={`carousel-slide carousel-anim-${animDirection}-exit`} 
                key={`exit-${prevActive}`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1
                }}
              >
                <picture>
                  <source srcSet={slides[prevActive].webp} type="image/webp" />
                  <img
                    src={slides[prevActive].img}
                    alt={slides[prevActive].alt}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </picture>
                
                <div className="carousel-overlay">
                  <div className="carousel-content">
                    {typeof slides[prevActive].text === "string"
                      ? slides[prevActive].text
                      : slides[prevActive].text}
                  </div>
                </div>
              </div>
            )}
            
            {/* Slide que entra */}
            <div 
              className={`carousel-slide ${isTransitioning ? `carousel-anim-${animDirection}` : ''}`} 
              key={`enter-${active}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: isTransitioning ? 2 : 1
              }}
            >
              <picture>
                <source srcSet={slides[active].webp} type="image/webp" />
                <img
                  src={slides[active].img}
                  alt={slides[active].alt}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  loading={active === 0 ? "eager" : "lazy"}
                />
              </picture>
              
              <div className="carousel-overlay">
                <div className="carousel-content">
                  {typeof slides[active].text === "string"
                    ? slides[active].text
                    : slides[active].text}
                </div>
              </div>
            </div>
          </div>
          
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={nextSlide}
            aria-label="Siguiente"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="carousel-dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot${active === idx ? " active" : ""}`}
                onClick={() => {
                  setIsPaused(true); // Pausar autoplay temporalmente
                  goTo(idx);
                  // Reanudar autoplay después de un momento
                  setTimeout(() => setIsPaused(false), 1000);
                }}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="sobre-nosotros-cert-card">
        Contamos con certificados de validez nacional e internacional, lo que te permite ejercer profesionalmente tanto en el país como el exterior
      </div>
      
      {/* Sección de estadísticas */}
      <div className="sobre-nosotros-stats">
        <div className="stats-item">
          <div className="stats-icon">
            <img src={card1} alt="ALGRA" />
          </div>
          <div className="stats-content">
            <div className="stats-title">Miembros de ALGRA</div>
            <div className="stats-description">
              Formamos parte de la Asociación Latinoamericana de Grafología, promoviendo la investigación y el desarrollo de la disciplina en toda la región.
            </div>
          </div>
        </div>
        
        <div className="stats-divider"></div>
        
        <div className="stats-item">
          <div className="stats-icon">
            <img src={card2} alt="Cámara Argentina" />
          </div>
          <div className="stats-content">
            <div className="stats-title">Avalados por la Cámara Argentina</div>
            <div className="stats-description">
              Contamos con el respaldo de entidades profesionales que certifican la calidad y seriedad de nuestra formación educativa.
            </div>
          </div>
        </div>
        
        <div className="stats-divider"></div>
        
        <div className="stats-item">
          <div className="stats-icon">
            <img src={banderita} alt="Argentina" />
          </div>
          <div className="stats-content">
            <div className="stats-title">Certificación Oficial en todo el Territorio Argentino</div>
            <div className="stats-description">
              Nuestros títulos tienen validez nacional y reconocimiento en el exterior, permitiendo ejercer profesionalmente sin límites.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
