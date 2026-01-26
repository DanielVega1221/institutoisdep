import React, { useState } from "react";
import "./Contacto.css";

const Contacto = React.forwardRef((props, ref) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "Campo obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "Campo obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.telefono.trim()) newErrors.telefono = "Campo obligatorio";
    if (!formData.mensaje.trim()) newErrors.mensaje = "Campo obligatorio";
    return newErrors;
  };

  const generateWhatsAppMessage = () => {
    return `*═══════════════════════*
*      CONSULTA GENERAL*
*        ISDEP - Instituto*
*═══════════════════════*

* DATOS DE CONTACTO*
─────────────────────

 *Nombre:* ${formData.nombre}
 *Email:* ${formData.email}
 *Teléfono:* ${formData.telefono}


* CONSULTA*
─────────────────────

${formData.mensaje}


*═══════════════════════*
 _Consulta generada desde www.institutoisdep.com.ar_`;
  };

  const generateEmailBody = () => {
    return `═══════════════════════════════════════════════════
              CONSULTA GENERAL - ISDEP
              Instituto de Estudios Superiores
═══════════════════════════════════════════════════


 DATOS DE CONTACTO
───────────────────────────────────────────────────

  Nombre:       ${formData.nombre}
  Email:        ${formData.email}
  Teléfono:     ${formData.telefono}


 CONSULTA
───────────────────────────────────────────────────

${formData.mensaje}


═══════════════════════════════════════════════════

Consulta generada desde: www.institutoisdep.com.ar
Fecha: ${new Date().toLocaleDateString('es-AR')}

═══════════════════════════════════════════════════`;
  };

  const handleSubmit = (e, method) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);

    if (method === "whatsapp") {
      const message = encodeURIComponent(generateWhatsAppMessage());
      const whatsappUrl = `https://wa.me/5492236741300?text=${message}`;
      window.open(whatsappUrl, "_blank");
      setSending(false);
      setModalOpen(false);
      resetForm();
    } else if (method === "email") {
      const subject = encodeURIComponent(`Consulta - ${formData.nombre}`);
      const body = encodeURIComponent(generateEmailBody());
      const mailtoUrl = `mailto:isdep@hotmail.com.ar?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
      setSending(false);
      setModalOpen(false);
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: ""
    });
    setErrors({});
  };

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

        <button className="contacto-btn-abrir" onClick={() => setModalOpen(true)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.2"/>
            <path d="M10 7V13M7 10H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Hacer una consulta
        </button>
      </div>

      {/* Modal del formulario simplificado */}
      {modalOpen && (
        <div className="contacto-modal-overlay" onClick={(e) => {
          if (e.target.className === "contacto-modal-overlay") {
            setModalOpen(false);
            resetForm();
          }
        }}>
          <div className="contacto-modal">
            <button 
              className="contacto-modal-close" 
              onClick={() => {
                setModalOpen(false);
                resetForm();
              }}
              aria-label="Cerrar"
            >
              ×
            </button>

            <h3 className="contacto-modal-titulo">Hacenos tu consulta</h3>
            <p className="contacto-modal-subtitulo">Completá el formulario y te responderemos a la brevedad</p>

            <form className="contacto-form">
              {/* Datos básicos */}
              <div className="contacto-form-section">
                <h4 className="contacto-form-section-titulo">Datos de Contacto</h4>
                
                <div className="contacto-form-group">
                  <label className="contacto-label">
                    Nombre Completo <span className="contacto-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    className={`contacto-input ${errors.nombre ? "error" : ""}`}
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                  />
                  {errors.nombre && <span className="contacto-error">{errors.nombre}</span>}
                </div>

                <div className="contacto-form-group">
                  <label className="contacto-label">
                    Correo Electrónico <span className="contacto-required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`contacto-input ${errors.email ? "error" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                  {errors.email && <span className="contacto-error">{errors.email}</span>}
                </div>

                <div className="contacto-form-group">
                  <label className="contacto-label">
                    Teléfono <span className="contacto-required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    className={`contacto-input ${errors.telefono ? "error" : ""}`}
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+54 9 11 1234-5678"
                  />
                  {errors.telefono && <span className="contacto-error">{errors.telefono}</span>}
                </div>

                <div className="contacto-form-group">
                  <label className="contacto-label">
                    Tu Consulta <span className="contacto-required">*</span>
                  </label>
                  <textarea
                    name="mensaje"
                    className={`contacto-input contacto-textarea ${errors.mensaje ? "error" : ""}`}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribí aquí tu consulta o duda..."
                    rows="5"
                  />
                  {errors.mensaje && <span className="contacto-error">{errors.mensaje}</span>}
                </div>
              </div>

              {/* Botones de envío */}
              <div className="contacto-form-actions">
                <button
                  type="button"
                  className="contacto-btn-enviar contacto-btn-whatsapp"
                  onClick={(e) => handleSubmit(e, "whatsapp")}
                  disabled={sending}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {sending ? "Enviando..." : "Enviar por WhatsApp"}
                </button>

                <button
                  type="button"
                  className="contacto-btn-enviar contacto-btn-email"
                  onClick={(e) => handleSubmit(e, "email")}
                  disabled={sending}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8L10.89 13.26C11.5 13.67 12.5 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {sending ? "Enviando..." : "Enviar por Email"}
                </button>
              </div>

              <p className="contacto-form-nota">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Podés enviar tu consulta por WhatsApp o Email para una respuesta rápida y personalizada.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
});

export default Contacto;
