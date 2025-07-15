import React from "react";
import "./SobreNosotros_new.css";

// Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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
  return (
    <section className="sobre-nosotros-main">
      <div className="sobre-nosotros-carousel-outer">
        <div className="sobre-nosotros-carousel">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
              bulletClass: 'carousel-dot',
              bulletActiveClass: 'carousel-dot active',
              renderBullet: (index, className) => {
                return `<button class="${className}" aria-label="Ir al slide ${index + 1}"></button>`;
              },
            }}
            autoplay={autoPlay ? {
              delay: AUTO_PLAY_TIME,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            } : false}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            speed={800}
            loop={true}
            lazy={{
              loadPrevNext: true,
              loadPrevNextAmount: 1,
            }}
            className="carousel-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="carousel-slide">
                  <picture>
                    <source srcSet={slide.webp} type="image/webp" />
                    <img
                      src={slide.img}
                      alt={slide.alt}
                      className="swiper-lazy"
                      loading={index === 0 ? "eager" : "lazy"}
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
                    <div className="swiper-lazy-preloader"></div>
                  </picture>
                  
                  <div className="carousel-overlay">
                    <div className="carousel-content">
                      {typeof slide.text === "string" ? slide.text : slide.text}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="carousel-arrow carousel-arrow-left swiper-button-prev"
            aria-label="Anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button
            className="carousel-arrow carousel-arrow-right swiper-button-next"
            aria-label="Siguiente"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Custom Pagination */}
          <div className="carousel-dots swiper-pagination"></div>
        </div>
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
