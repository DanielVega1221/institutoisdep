import React from "react";
import "./Contacto.css";

const Contacto = React.forwardRef((props, ref) => {

  return (
    <section id="contacto-section" className="contacto-section" ref={ref}>
      <div className="contacto-container">
        <h2 className="contacto-titulo">Formamos profesionales con vocación y conocimiento</h2>
        
        <div className="contacto-grid">
          {/* Card Izquierda */}
          <div className="contacto-card">
            <h3 className="contacto-card-titulo">Por qué elegir ISDEP</h3>
            <div className="contacto-divider"></div>
            <ul className="contacto-lista">
              <li>+20 años formando profesionales</li>
              <li>Formación 100% virtual y flexible</li>
              <li>Material didáctico profesional</li>
              <li>Seguimiento y asesoramiento personalizado</li>
            </ul>
          </div>

          {/* Card Derecha */}
          <div className="contacto-card">
            <h3 className="contacto-card-titulo-alt">¿Qué dice tu escritura sobre vos?</h3>
            <div className="contacto-divider"></div>
            <p className="contacto-descripcion">
              En ISDEP transformamos esa pregunta en una carrera. Nuestro compromiso es acompañarte en un 
              recorrido profesional con base científica, mirada ética y calidez humana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contacto;
