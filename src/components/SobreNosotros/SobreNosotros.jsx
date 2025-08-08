import React from "react";
import "./SobreNosotros_new.css";

// Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Importar imágenes optimizadas
import logo1 from "../../assets/Logo1.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";

const slides = [
  {
    img: logo1,
    alt: "Logo ISDEP",
    title: "Capacitando Alumnos, Formando Profesionales",
    subtitle: "Vanguardia educativa para un mundo en cambio"
  },
  {
    img: card1,
    alt: "Card 1",
    title: "Integrante de la Asociación Latinoamericana de Grafología",
    subtitle: "Eduardo Marzano. Consultor en Grafopsicología."
  },
  {
    img: card2,
    alt: "Card 2",
    title: "Certificación y Validación Nacional",
    subtitle: "ISDEP Inscripto en la Cámara Argentina de Comercio para su Certificación y Validación Nacional en todo el Territorio Argentino."
  }
];

const AUTO_PLAY_TIME = 5000;

const SobreNosotros = ({ autoPlay = true }) => {
  return (
    <section className="sobre-nosotros-main">
      <div className="sobre-nosotros-carousel-outer">
        <div className="sobre-nosotros-carousel">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
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
            speed={800}
            loop={true}
            className="carousel-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="carousel-slide carousel-slide-horizontal">
                  <div className="carousel-slide-img">
                        <img
                          src={slide.img}
                          alt={slide.alt}
                          loading={index === 0 ? "eager" : "lazy"}
                          className="carousel-img"
                        />
                  </div>
                  <div className="carousel-slide-text">
                    <div className="carousel-content">
                      <span className="carousel-title">{slide.title}</span>
                      {slide.subtitle && <span className="carousel-subtitle">{slide.subtitle}</span>}
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
      
      
    </section>
  );
};

export default SobreNosotros;
