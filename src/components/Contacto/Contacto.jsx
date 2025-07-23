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
      // Enviar con emailjs
      emailjs.sendForm(
        "service_ojm2fv8", // Service ID
        "template_o4hxxec", // Template ID
        formRef.current,
        "eoadqvqGH1ZaJS43h" // Public Key
      ).then(
        (result) => {
          setSending(false);
          alert("¡Tu consulta fue enviada con éxito!");
          setForm({ nombre: "", email: "", telefono: "", interes: intereses[0], mensaje: "" });
        },
        (error) => {
          setSending(false);
          alert("Hubo un error al enviar tu consulta. Intentá nuevamente.");
        }
      );
    }
  };

  return (
    <section className="contacto-section" ref={ref}>
      <div className="contacto-container contacto-grid">
        {/* Sección izquierda: Información institucional */}
        <div className="contacto-info-left">
          <h2 className="contacto-titulo">Formamos profesionales con vocación y conocimiento</h2>
          <h3 className="contacto-subtitulo">Desde Mar del Plata al país, el Instituto ISDEP ofrece carreras en grafología y más.</h3>
          <div className="contacto-separador"></div>
          <div className="contacto-lista">
            <div className="contacto-lista-titulo">Por qué elegir ISDEP:</div>
            <ul>
              <li>+20 años formando profesionales</li>
              <li>Carreras con certificación oficial</li>
              <li>Modalidades presenciales y virtuales</li>
              <li>Asesoramiento personalizado</li>
            </ul>
          </div>
          <div className="contacto-separador"></div>
          <div className="contacto-direccion">
            <div className="contacto-direccion-titulo">Dirección y contacto:</div>
            <div>Catamarca 2336, Mar del Plata, Buenos Aires</div>
            <div>Tel: 469 0044</div>
            <div>info@isdep.edu.ar</div>
            <div>Inscripto bajo Ley 13.046, Art. 2, Licencia C</div>
          </div>
        </div>
        {/* Sección derecha: Formulario */}
        <div className="contacto-info-right">
          <form className="contacto-form" ref={formRef} onSubmit={handleSubmit} autoComplete="off">
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
            <div className="contacto-form-separador"></div>
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
            <button
              type="submit"
              className="contacto-btn"
              disabled={sending}
            >
              {sending ? "Enviando..." : "🔵 Quiero más información"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export { intereses };
export default Contacto;
