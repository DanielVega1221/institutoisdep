import React, { useState } from "react";
import "./Contacto.css";

const formacionesDisponibles = [
  "Psicografología",
  "Ciencias Criminalistas",
  "Perfilamiento Criminal",
  "Psicología Social",
  "Grafología Forense",
  "Firmas y Rúbricas",
  "Primeros Auxilios Psicológicos",
  "Análisis de Dibujos",
  "Otro (consultar)"
];

const Contacto = React.forwardRef(({ selectedInteres, setSelectedInteres }, ref) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    fechaNacimiento: "",
    email: "",
    telefono: "",
    pais: "",
    ciudad: "",
    profesion: "",
    formacionSolicitada: formacionesDisponibles[0]
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  // Sincronizar interés si viene de Cursos
  React.useEffect(() => {
    if (selectedInteres && formacionesDisponibles.includes(selectedInteres)) {
      setFormData(prev => ({ ...prev, formacionSolicitada: selectedInteres }));
      setSelectedInteres && setSelectedInteres(null);
    }
  }, [selectedInteres, setSelectedInteres]);

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
    if (!formData.apellido.trim()) newErrors.apellido = "Campo obligatorio";
    if (!formData.dni.trim()) newErrors.dni = "Campo obligatorio";
    if (!formData.fechaNacimiento) newErrors.fechaNacimiento = "Campo obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "Campo obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.telefono.trim()) newErrors.telefono = "Campo obligatorio";
    if (!formData.pais.trim()) newErrors.pais = "Campo obligatorio";
    if (!formData.ciudad.trim()) newErrors.ciudad = "Campo obligatorio";
    if (!formData.profesion.trim()) newErrors.profesion = "Campo obligatorio";
    return newErrors;
  };

  const generateWhatsAppMessage = () => {
    return `*SOLICITUD DE INSCRIPCIÓN - ISDEP*

*Datos Personales:*
• Nombre: ${formData.nombre}
• Apellido: ${formData.apellido}
• DNI: ${formData.dni}
• Fecha de Nacimiento: ${formData.fechaNacimiento}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}

*Ubicación:*
• País: ${formData.pais}
• Ciudad: ${formData.ciudad}

*Información Académica:*
• Profesión/Ocupación: ${formData.profesion}
• Formación Solicitada: ${formData.formacionSolicitada}

_Adjuntaré fotografías de mis títulos educativos para completar la solicitud._`;
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
      // Preparado para implementar envío por email
      alert("La funcionalidad de envío por email estará disponible próximamente.");
      setSending(false);
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: "",
      apellido: "",
      dni: "",
      fechaNacimiento: "",
      email: "",
      telefono: "",
      pais: "",
      ciudad: "",
      profesion: "",
      formacionSolicitada: formacionesDisponibles[0]
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
          Solicitar información
        </button>
      </div>

      {/* Modal del formulario */}
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

            <h3 className="contacto-modal-titulo">Solicitud de información</h3>
            <p className="contacto-modal-subtitulo">Completá tus datos para que podamos contactarte</p>

            <form className="contacto-form">
              {/* Datos Personales */}
              <div className="contacto-form-section">
                <h4 className="contacto-form-section-titulo">Datos Personales</h4>
                
                <div className="contacto-form-row">
                  <div className="contacto-form-group">
                    <label className="contacto-label">
                      Nombre <span className="contacto-required">*</span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      className={`contacto-input ${errors.nombre ? "error" : ""}`}
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                    />
                    {errors.nombre && <span className="contacto-error">{errors.nombre}</span>}
                  </div>

                  <div className="contacto-form-group">
                    <label className="contacto-label">
                      Apellido <span className="contacto-required">*</span>
                    </label>
                    <input
                      type="text"
                      name="apellido"
                      className={`contacto-input ${errors.apellido ? "error" : ""}`}
                      value={formData.apellido}
                      onChange={handleChange}
                      placeholder="Tu apellido"
                    />
                    {errors.apellido && <span className="contacto-error">{errors.apellido}</span>}
                  </div>
                </div>

                <div className="contacto-form-row">
                  <div className="contacto-form-group">
                    <label className="contacto-label">
                      DNI <span className="contacto-required">*</span>
                    </label>
                    <input
                      type="text"
                      name="dni"
                      className={`contacto-input ${errors.dni ? "error" : ""}`}
                      value={formData.dni}
                      onChange={handleChange}
                      placeholder="12345678"
                    />
                    {errors.dni && <span className="contacto-error">{errors.dni}</span>}
                  </div>

                  <div className="contacto-form-group">
                    <label className="contacto-label">
                      Fecha de Nacimiento <span className="contacto-required">*</span>
                    </label>
                    <input
                      type="date"
                      name="fechaNacimiento"
                      className={`contacto-input ${errors.fechaNacimiento ? "error" : ""}`}
                      value={formData.fechaNacimiento}
                      onChange={handleChange}
                    />
                    {errors.fechaNacimiento && <span className="contacto-error">{errors.fechaNacimiento}</span>}
                  </div>
                </div>
              </div>

              {/* Datos de Contacto */}
              <div className="contacto-form-section">
                <h4 className="contacto-form-section-titulo">Datos de Contacto</h4>
                
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

                <div className="contacto-form-row">
                  <div className="contacto-form-group">
                    <label className="contacto-label">
                      País <span className="contacto-required">*</span>
                    </label>
                    <input
                      type="text"
                      name="pais"
                      className={`contacto-input ${errors.pais ? "error" : ""}`}
                      value={formData.pais}
                      onChange={handleChange}
                      placeholder="Argentina"
                    />
                    {errors.pais && <span className="contacto-error">{errors.pais}</span>}
                  </div>

                  <div className="contacto-form-group">
                    <label className="contacto-label">
                      Ciudad <span className="contacto-required">*</span>
                    </label>
                    <input
                      type="text"
                      name="ciudad"
                      className={`contacto-input ${errors.ciudad ? "error" : ""}`}
                      value={formData.ciudad}
                      onChange={handleChange}
                      placeholder="Mar del Plata"
                    />
                    {errors.ciudad && <span className="contacto-error">{errors.ciudad}</span>}
                  </div>
                </div>
              </div>

              {/* Información Académica */}
              <div className="contacto-form-section">
                <h4 className="contacto-form-section-titulo">Información Académica</h4>
                
                <div className="contacto-form-group">
                  <label className="contacto-label">
                    Profesión/Ocupación actual <span className="contacto-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="profesion"
                    className={`contacto-input ${errors.profesion ? "error" : ""}`}
                    value={formData.profesion}
                    onChange={handleChange}
                    placeholder="Ej: Estudiante, Psicólogo, Abogado, etc."
                  />
                  {errors.profesion && <span className="contacto-error">{errors.profesion}</span>}
                </div>

                <div className="contacto-form-group">
                  <label className="contacto-label">
                    Formación Solicitada <span className="contacto-required">*</span>
                  </label>
                  <select
                    name="formacionSolicitada"
                    className="contacto-input contacto-select"
                    value={formData.formacionSolicitada}
                    onChange={handleChange}
                  >
                    {formacionesDisponibles.map(formacion => (
                      <option key={formacion} value={formacion}>{formacion}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Aviso importante */}
              <div className="contacto-aviso-importante">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div>
                  <strong>Documentación requerida:</strong>
                  <p>Al enviar tu solicitud, te pediremos que adjuntes fotografías de tus títulos educativos (secundario completo y estudios superiores si los tuvieras) para validar tu inscripción.</p>
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
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.477 0 0 4.477 0 10c0 1.89.525 3.66 1.438 5.168L0 20l4.938-1.297A9.959 9.959 0 0010 20c5.523 0 10-4.477 10-10S15.523 0 10 0z" fill="currentColor"/>
                    <path d="M14.5 13.3c-.2.6-.9 1.1-1.5 1.2-.4.1-.9.1-2.9-.6-2.5-1-4.1-3.6-4.2-3.8-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .4.3.2.4.6 1.5.6 1.6.1.1.1.2 0 .4-.1.1-.1.2-.2.3l-.3.3c-.1.1-.2.2-.1.4.1.2.5.9 1.1 1.5.8.7 1.4 1 1.6 1.1.2.1.3.1.4-.1.1-.2.5-.5.6-.7.1-.2.3-.2.5-.1l1.3.6c.2.1.3.1.4.2.1.3.1.7-.1 1z" fill="#fff"/>
                  </svg>
                  Enviar por WhatsApp
                </button>

                <button
                  type="button"
                  className="contacto-btn-enviar contacto-btn-email"
                  onClick={(e) => handleSubmit(e, "email")}
                  disabled={true}
                  title="Próximamente disponible"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4h16v12H2V4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 4l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Enviar por Email (Próximamente)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
});

export { formacionesDisponibles };
export default Contacto;
