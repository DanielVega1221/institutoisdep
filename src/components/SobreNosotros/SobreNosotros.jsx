import React, { useEffect, useRef, useState } from "react";
import "./SobreNosotros.css";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png"; // nuevo import

const slides = [
  {
    img: slide1,
    alt: "Equipo ISDEP",
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
          Eduardo Marzano
        </span>
        <span>Perito en Psicografología</span>
        <br />
        <span>Consultor en GrafoPsicología</span>
        <br />
        <span>Grafólogo</span>
        <br />
        <span>Investigador en Técnicas Proyectivas</span>
      </div>
    ),
  },
  {
    img: slide2,
    alt: "Aula ISDEP",
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
          Miembro de la Asociación Latinoamericana de Grafología (ALGRA)
        </span>
        <span role="img" aria-label="Globo">🌎</span> Comprometido con el estudio y la divulgación de la grafología a nivel internacional.
      </div>
    ),
  },
  {
    img: slide3,
    alt: "Graduados ISDEP",
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
          Perfilado Forense
        </span>
        La perfilación forense es un proceso que combina elementos científicos y Técnicos para reconstruir el funcionamiento mental de un delincuente desconocido y establecer un perfil de sus características.
      </div>
    ),
  },
  {
    img: slide4,
    alt: "ISDEP y Cámara Argentina",
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
          ISDEP y Cámara Argentina
        </span>
        <span>📜 Certificación y Validación Nacional en todo el territorio argentino.<br />
        💼 Compromiso con la excelencia profesional y la capacitación certificada.</span>
      </div>
    ),
  },
];

const AUTO_PLAY_TIME = 5000;

const SobreNosotros = () => {
  const [active, setActive] = useState(0);
  const [animDirection, setAnimDirection] = useState("next");
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setAnimDirection("next");
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_TIME);
    return () => clearTimeout(timerRef.current);
  }, [active]);

  const goTo = (idx) => {
    clearTimeout(timerRef.current);
    setAnimDirection(idx > active ? "next" : "prev");
    setActive(idx);
  };

  const prevSlide = () => goTo((active - 1 + slides.length) % slides.length);
  const nextSlide = () => goTo((active + 1) % slides.length);

  return (
    <section className="sobre-nosotros-main">
      <div className="sobre-nosotros-carousel-outer">
        <div className="sobre-nosotros-carousel">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={prevSlide}
            aria-label="Anterior"
          >
            &#8592;
          </button>
          <div className={`carousel-card carousel-anim-${animDirection}`} key={active}>
            <div className="carousel-img-wrapper">
              {slides[active].img ? (
                <img
                  src={slides[active].img}
                  alt={slides[active].alt}
                  className="carousel-img-adapt"
                />
              ) : (
                <div className="carousel-img-placeholder" />
              )}
            </div>
            <div className="carousel-text-wrapper">
              <div className="carousel-text carousel-text-adapt">
                <p>
                  {typeof slides[active].text === "string"
                    ? slides[active].text
                    : slides[active].text}
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={nextSlide}
            aria-label="Siguiente"
          >
            &#8594;
          </button>
        </div>
        <div className="carousel-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot${active === idx ? " active" : ""}`}
              onClick={() => goTo(idx)}
              aria-label={`Ir al slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="sobre-nosotros-cert-card">
        Contamos con certificados de validez nacional e internacional, lo que te permite ejercer profesionalmente tanto en el país como el exterior
      </div>
    </section>
  );
};

export default SobreNosotros;
