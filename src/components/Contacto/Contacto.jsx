import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";

// Sincronizado con Cursos.jsx
const intereses = [
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
  // Para animaciones entre pasos
  const [stepTransition, setStepTransition] = useState(false);
  // Para animación de entrada/salida del modal
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    interes: intereses[0],
    mensaje: ""
  });
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  // Animación de entrada del modal
  React.useEffect(() => {
    if (modalOpen) {
      setTimeout(() => setModalVisible(true), 10);
    } else {
      setModalVisible(false);
    }
  }, [modalOpen]);

  const validate = () => {
    const newErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    // Validación de email: formato estricto RFC 5322 básico
    if (!form.email.trim()) newErrors.email = "El email es obligatorio.";
    else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(form.email)) newErrors.email = "Email inválido.";
    // Validación de teléfono: solo números y +, mínimo 7 caracteres si no está vacío
    if (form.telefono && !/^\+?\d{7,15}$/.test(form.telefono.replace(/\s+/g, ''))) {
      newErrors.telefono = "Solo números y +, mínimo 7 dígitos.";
    }
    if (!form.interes) newErrors.interes = "Selecciona un interés.";
    // Sanitización básica del mensaje para evitar XSS/inyecciones y links peligrosos
    if (!form.mensaje.trim()) newErrors.mensaje = "El mensaje es obligatorio.";
    else if (/((<|%3C)\s*script|onerror|onload|javascript:|data:|<iframe|<img|<svg|<object|<embed|<link|<style)/i.test(form.mensaje)) {
      newErrors.mensaje = "El mensaje contiene contenido no permitido.";
    }
    // Bloquear links peligrosos (http, https, mailto, javascript, data, ftp)
    else if (/(https?:\/\/|ftp:\/\/|mailto:|javascript:|data:)/i.test(form.mensaje)) {
      newErrors.mensaje = "No se permiten enlaces en el mensaje.";
    }
    // Bloquear insultos, spam o palabras peligrosas
    else if (/(put[ao]|mierd[ao]|idiot[ao]|tont[ao]|estupid[ao]|maldit[ao]|fuck|shit|bastard|asshole|spam|porno|sex|xxx|viagra|casino|dinero|criptomoneda|bitcoin|hack|phish|scam|fraud|fraude|robo|estafa)/i.test(form.mensaje)) {
      newErrors.mensaje = "El mensaje contiene palabras no permitidas.";
    }
    return newErrors;
  };

  // Sincronizar interés si viene de Cursos
  React.useEffect(() => {
    if (selectedInteres && intereses.includes(selectedInteres)) {
      setForm(f => ({ ...f, interes: selectedInteres }));
      setSelectedInteres && setSelectedInteres(null); // Limpiar para futuros clics
    }
  }, [selectedInteres]);

  const handleChange = e => {
    const { name, value } = e.target;
    // Sanitización en tiempo real para teléfono
    if (name === "telefono") {
      // Permitir solo dígitos y +
      const cleanValue = value.replace(/[^\d+]/g, "");
      setForm(f => ({ ...f, [name]: cleanValue }));
    } else if (name === "mensaje") {
      // Limitar longitud y eliminar tags peligrosos y links
      let cleanValue = value.slice(0, 500);
      cleanValue = cleanValue.replace(/<[^>]*>?/gm, "");
      cleanValue = cleanValue.replace(/(https?:\/\/|ftp:\/\/|mailto:|javascript:|data:)/gi, "[enlace bloqueado]");
      setForm(f => ({ ...f, [name]: cleanValue }));
    } else if (name === "nombre") {
      setForm(f => ({ ...f, [name]: value.slice(0, 60) }));
    } else if (name === "email") {
      setForm(f => ({ ...f, [name]: value.slice(0, 60) }));
    } else if (name === "interes") {
      setForm(f => ({ ...f, interes: value }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSending(true);
      emailjs.sendForm(
        "service_ojm2fv8",
        "template_o4hxxec",
        formRef.current,
        "eoadqvqGH1ZaJS43h"
      ).then(
        (result) => {
          setSending(false);
          alert("¡Tu consulta fue enviada con éxito!");
          setForm({ nombre: "", email: "", telefono: "", interes: intereses[0], mensaje: "" });
          setStep(1);
          setModalOpen(false);
        },
        (error) => {
          setSending(false);
          alert("Hubo un error al enviar tu consulta. Intentá nuevamente.");
        }
      );
    }
  };

  return (
    <section id="contacto-section" className="contacto-section" ref={ref}>
      <div className="contacto-card-principal" style={{
        maxWidth: "1100px",
        margin: "0 auto",
        borderRadius: "32px",
        boxShadow: "0 24px 80px rgba(15, 42, 78, 0.13), 0 8px 32px rgba(15, 42, 78, 0.08)",
        border: "2.5px solid #0F2A4E",
        background: "#fff",
        padding: "32px 32px 36px 32px",
        position: "relative"
      }}>
        <div className="contacto-titulo-central" style={{ marginBottom: "2.2rem", paddingTop: "0", paddingLeft: "0", paddingRight: "0" }}>
          Formamos profesionales con vocación y conocimiento
        </div>
        <div className="contacto-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", padding: "0" }}>
          {/* Izquierda: subtítulo y lista */}
          <div className="contacto-info-left" style={{ padding: "0", alignItems: "flex-start" }}>
            <div className="contacto-card-interna" style={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 18px rgba(25, 118, 210, 0.13)",
              border: "1.5px solid #e3eafc",
              padding: "2rem 2rem 1.5rem 2rem",
              marginBottom: "0",
              minHeight: "100%"
            }}>
              <h3 className="contacto-subtitulo" style={{ color: "#B8860B", fontWeight: "700", fontSize: "1.18rem", marginBottom: "12px", textAlign: "left" }}>
                Desde Mar del Plata al país, el Instituto ISDEP ofrece carreras en grafología y más.
              </h3>
              <div className="contacto-separador" style={{ margin: "0 0 18px 0" }}></div>
              <div className="contacto-lista-titulo" style={{ fontWeight: "800", color: "#0F2A4E", fontSize: "1.08rem", marginBottom: "10px" }}>Por qué elegir ISDEP:</div>
              <ul style={{ margin: 0, paddingLeft: "22px", fontSize: "1.05rem", color: "#4a5568" }}>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}><span style={{ display: "inline-block", width: "14px", height: "14px", borderRadius: "50%", background: "linear-gradient(135deg, #B8860B 0%, #f1f3f6 100%)", marginRight: "10px", boxShadow: "0 2px 6px rgba(184, 134, 11, 0.15)" }}></span>+20 años formando profesionales</li>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}><span style={{ display: "inline-block", width: "14px", height: "14px", borderRadius: "50%", background: "linear-gradient(135deg, #B8860B 0%, #f1f3f6 100%)", marginRight: "10px", boxShadow: "0 2px 6px rgba(184, 134, 11, 0.15)" }}></span>Carreras con certificación oficial</li>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}><span style={{ display: "inline-block", width: "14px", height: "14px", borderRadius: "50%", background: "linear-gradient(135deg, #B8860B 0%, #f1f3f6 100%)", marginRight: "10px", boxShadow: "0 2px 6px rgba(184, 134, 11, 0.15)" }}></span>Modalidades presenciales y virtuales</li>
                <li style={{ marginBottom: "0px", display: "flex", alignItems: "center" }}><span style={{ display: "inline-block", width: "14px", height: "14px", borderRadius: "50%", background: "linear-gradient(135deg, #B8860B 0%, #f1f3f6 100%)", marginRight: "10px", boxShadow: "0 2px 6px rgba(184, 134, 11, 0.15)" }}></span>Asesoramiento personalizado</li>
              </ul>
            </div>
          </div>
          {/* Derecha: Card institucional */}
          <div className="contacto-info-right" style={{ justifyContent: "flex-start", alignItems: "center", padding: "0" }}>
            <div className="contacto-card-interna" style={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 18px rgba(25, 118, 210, 0.13)",
              border: "1.5px solid #e3eafc",
              padding: "2rem 2rem 1.5rem 2rem",
              marginBottom: "0",
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              <div className="contacto-institucional-titulo" style={{ fontWeight: "900", color: "#B8860B", fontSize: "1.18rem", marginBottom: "0.3rem", textAlign: "center" }}>¿Qué dice tu escritura sobre vos?</div>
              <div className="contacto-separador" style={{ margin: "0 0 18px 0" }}></div>
              <div className="contacto-institucional-frase" style={{ color: "#1a237e", fontWeight: "700", fontSize: "1.08rem", marginBottom: "8px", textAlign: "center" }}>En ISDEP transformamos esa pregunta en una carrera.</div>
              <div className="contacto-institucional-desc" style={{ color: "#4a5568", fontSize: "1.05rem", marginBottom: "6px", textAlign: "center" }}>
                Nuestro compromiso es acompañarte en un recorrido profesional con base científica, mirada ética y calidez humana.
              </div>
              <div className="contacto-institucional-final" style={{ color: "#0F2A4E", fontWeight: "600", fontSize: "1.05rem", marginTop: "8px", textAlign: "center" }}>
                <span style={{ color: "#4a5568", fontSize: "1.05rem", textAlign: "center", fontWeight: "400" }}>
                  Estudiá grafología, psicografología o pericia caligráfica con quienes hace más de 20 años lo enseñan con pasión.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Botón centrado abajo de las dos secciones */}
        <div style={{ gridColumn: "1 / span 2", display: "flex", justifyContent: "center", marginTop: "28px" }}>
          <button
            className="contacto-btn-modal"
            style={{
              fontWeight: "700",
              fontSize: "1.2rem",
              borderRadius: "14px",
              boxShadow: "0 6px 24px rgba(25, 118, 210, 0.18)",
              background: "#1976d2",
              color: "#fff",
              padding: "1.1rem 2.8rem",
              border: "none",
              outline: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
              cursor: "pointer",
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "370px"
            }}
            aria-label="Solicitar información sobre carreras ISDEP"
            onClick={() => setModalOpen(true)}
            onMouseOver={e => {
              e.currentTarget.style.background = "#1153a4";
              e.currentTarget.style.boxShadow = "0 10px 32px rgba(25, 118, 210, 0.22)";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = "#1976d2";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(25, 118, 210, 0.18)";
              e.currentTarget.style.transform = "scale(1)";
            }}
            onFocus={e => {
              e.currentTarget.style.boxShadow = "0 0 0 3px #B8860B, 0 10px 32px rgba(25, 118, 210, 0.22)";
            }}
            onBlur={e => {
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(25, 118, 210, 0.18)";
            }}
          >
            <span style={{ display: "flex", alignItems: "center", fontSize: "1.35rem", marginRight: "2px" }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="11" cy="11" r="11" fill="#fff" />
                <circle cx="11" cy="11" r="9" fill="#1976d2" />
                <text x="11" y="16" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">i</text>
              </svg>
            </span>
            Solicitar información
          </button>
        </div>
      {/* Modal del formulario */}
      {modalOpen && (
        <div className={`contacto-modal-overlay${modalVisible ? ' visible' : ''}`}>
          <div className={`contacto-modal contacto-modal-anim${modalVisible ? ' visible' : ''}`}>
            <button className="contacto-modal-close" onClick={() => { setModalOpen(false); setStep(1); setModalVisible(false); }} aria-label="Cerrar">×</button>
            {/* Barra de progreso */}
            <div className="contacto-wizard-progress" style={{marginBottom: '18px', marginTop: '2px'}}>
              <div className="contacto-wizard-bar-bg">
                <div className="contacto-wizard-bar" style={{width: `${step * 33.33}%`}}></div>
              </div>
              <div className="contacto-wizard-steps">
                {[1,2,3].map(s => (
                  <span key={s} className={`contacto-wizard-step${step === s ? ' active' : ''}`}>{s}</span>
                ))}
              </div>
            </div>
            <form id="contacto-formulario" className="contacto-form" ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
              <div className={`contacto-wizard-step-content contacto-step-anim${stepTransition ? ' anim' : ''}`}> 
                {/* Paso 1: Nombre y Email */}
                {step === 1 && (
                  <>
                    <label className="contacto-label">
                      Nombre completo:
                      <input
                        type="text"
                        name="nombre"
                        className={`contacto-input${errors.nombre ? " error" : ""}`}
                        value={form.nombre}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                        maxLength={60}
                      />
                      {errors.nombre && <span className="contacto-error">{errors.nombre}</span>}
                    </label>
                    <label className="contacto-label">
                      Email:
                      <input
                        type="email"
                        name="email"
                        className={`contacto-input${errors.email ? " error" : ""}`}
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        maxLength={60}
                      />
                      {errors.email && <span className="contacto-error">{errors.email}</span>}
                    </label>
                    <div className="contacto-form-separador"></div>
                    <button type="button" className="contacto-btn" style={{ marginTop: 8 }} onClick={() => {
                      const stepErrors = {};
                      if (!form.nombre.trim()) stepErrors.nombre = "El nombre es obligatorio.";
                      if (!form.email.trim()) stepErrors.email = "El email es obligatorio.";
                      else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(form.email)) stepErrors.email = "Email inválido.";
                      setErrors(stepErrors);
                      if (Object.keys(stepErrors).length === 0) {
                        setStepTransition(true);
                        setTimeout(() => {
                          setStep(2);
                          setStepTransition(false);
                        }, 250);
                      }
                    }}>Siguiente</button>
                  </>
                )}
                {/* Paso 2: Teléfono e Interés */}
                {step === 2 && (
                  <>
                    <label className="contacto-label">
                      Teléfono (opcional):
                      <input
                        type="tel"
                        name="telefono"
                        className={`contacto-input${errors.telefono ? " error" : ""}`}
                        value={form.telefono}
                        onChange={handleChange}
                        autoComplete="tel"
                        pattern="^\+?\d{7,15}$"
                        maxLength={16}
                        inputMode="tel"
                        placeholder="Ej: +5492234690044"
                      />
                      {errors.telefono && <span className="contacto-error">{errors.telefono}</span>}
                    </label>
                    <label className="contacto-label">
                      Interés principal:
                      <select
                        name="interes"
                        className={`contacto-select${errors.interes ? " error" : ""}`}
                        value={form.interes}
                        onChange={handleChange}
                        required
                      >
                        {intereses.map((op, i) => (
                          <option key={op} value={op}>{op}</option>
                        ))}
                      </select>
                      {errors.interes && <span className="contacto-error">{errors.interes}</span>}
                    </label>
                    <div className="contacto-form-separador"></div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
                      <button type="button" className="contacto-btn" onClick={() => {
                        setStepTransition(true);
                        setTimeout(() => {
                          setStep(1);
                          setStepTransition(false);
                        }, 250);
                      }}>Atrás</button>
                      <button type="button" className="contacto-btn" onClick={() => {
                        const stepErrors = {};
                        if (form.telefono && !/^\+?\d{7,15}$/.test(form.telefono.replace(/\s+/g, ''))) stepErrors.telefono = "Solo números y +, mínimo 7 dígitos.";
                        if (!form.interes) stepErrors.interes = "Selecciona un interés.";
                        setErrors(stepErrors);
                        if (Object.keys(stepErrors).length === 0) {
                          setStepTransition(true);
                          setTimeout(() => {
                            setStep(3);
                            setStepTransition(false);
                          }, 250);
                        }
                      }}>Siguiente</button>
                    </div>
                  </>
                )}
                {/* Paso 3: Mensaje y envío */}
                {step === 3 && (
                  <>
                    <label className="contacto-label">
                      Mensaje:
                      <textarea
                        name="mensaje"
                        className={`contacto-textarea${errors.mensaje ? " error" : ""}`}
                        value={form.mensaje}
                        onChange={handleChange}
                        rows={4}
                        required
                        placeholder="Escribe tu consulta. No se permiten enlaces ni direcciones web."
                      />
                      <span className="contacto-aviso">Por seguridad, no se permiten enlaces ni direcciones web en el mensaje.</span>
                      {errors.mensaje && <span className="contacto-error">{errors.mensaje}</span>}
                    </label>
                    {/* Campos ocultos para MailJS */}
                    <input type="hidden" name="user_name" value={form.nombre} />
                    <input type="hidden" name="user_email" value={form.email} />
                    <input type="hidden" name="user_phone" value={form.telefono} />
                    <input type="hidden" name="user_interest" value={form.interes} />
                    <input type="hidden" name="message" value={form.mensaje} />
                    <div className="contacto-form-separador"></div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
                      <button type="button" className="contacto-btn" onClick={() => {
                        setStepTransition(true);
                        setTimeout(() => {
                          setStep(2);
                          setStepTransition(false);
                        }, 250);
                      }}>Atrás</button>
                      <button
                        type="submit"
                        className="contacto-btn"
                        disabled={sending}
                      >
                        {sending ? "Enviando..." : "Enviar consulta"}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
    </section>
  );
});

export { intereses };
export default Contacto;
