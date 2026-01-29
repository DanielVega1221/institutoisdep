import React, { useState, useEffect } from "react";
import "./InscripcionModal.css";

const formacionesDisponibles = [
  "Psicografología",
  "Ciencias Criminalistas",
  "Perfilamiento Criminal",
  "Psicología Social",
  "Grafología Forense",
  "Firmas y Rúbricas",
  "Primeros Auxilios Psicológicos",
  "Análisis de Dibujos",
  "Grafología Emocional",
  "Criminalística",
  "Otro (consultar)"
];

const InscripcionModal = ({ 
  isOpen, 
  onClose, 
  cursoPreseleccionado = null,
  mostrarDropdown = false // Si es true, muestra dropdown; si es false, muestra el curso preseleccionado
}) => {
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
    formacionSolicitada: cursoPreseleccionado || formacionesDisponibles[0],
    tieneConocimientosPrevios: false
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  // Actualizar cuando cambia el curso preseleccionado
  useEffect(() => {
    if (cursoPreseleccionado) {
      setFormData(prev => ({ 
        ...prev, 
        formacionSolicitada: cursoPreseleccionado 
      }));
    }
  }, [cursoPreseleccionado]);

  // Resetear formulario al cerrar
  useEffect(() => {
    if (!isOpen) {
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
        formacionSolicitada: cursoPreseleccionado || formacionesDisponibles[0],
        tieneConocimientosPrevios: false
      });
      setErrors({});
    }
  }, [isOpen, cursoPreseleccionado]);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
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
    return `*═══════════════════════*
*   SOLICITUD DE INSCRIPCIÓN*
*        ISDEP - Instituto*
*═══════════════════════*

* DATOS PERSONALES*
─────────────────────

 *Nombre Completo:*
   ${formData.nombre} ${formData.apellido}

 *DNI:* ${formData.dni}

 *Fecha de Nacimiento:*
   ${formData.fechaNacimiento}

 *Email:* ${formData.email}

 *Teléfono:* ${formData.telefono}


* UBICACIÓN*
─────────────────────

 *País:* ${formData.pais}
 *Ciudad:* ${formData.ciudad}


* INFORMACIÓN ACADÉMICA*
─────────────────────

 *Profesión/Ocupación:*
   ${formData.profesion}

 *Formación Solicitada:*
   ${formData.formacionSolicitada}

 *Conocimientos Previos:*
   ${formData.tieneConocimientosPrevios ? 'Sí' : 'No'}


*═══════════════════════*

 _Adjuntaré fotografías de mis títulos educativos para completar la solicitud._

 _Solicitud generada automáticamente desde www.institutoisdep.com.ar_`;
  };

  const generateEmailBody = () => {
    return `═══════════════════════════════════════════════════
        SOLICITUD DE INSCRIPCIÓN - ISDEP
              Instituto de Estudios Superiores
═══════════════════════════════════════════════════


 DATOS PERSONALES
───────────────────────────────────────────────────

  Nombre Completo:    ${formData.nombre} ${formData.apellido}
  DNI:                ${formData.dni}
  Fecha Nacimiento:   ${formData.fechaNacimiento}
  Email:              ${formData.email}
  Teléfono:           ${formData.telefono}


 UBICACIÓN
───────────────────────────────────────────────────

  País:               ${formData.pais}
  Ciudad:             ${formData.ciudad}


 INFORMACIÓN ACADÉMICA
───────────────────────────────────────────────────

  Profesión/Ocupación:    ${formData.profesion}
  Formación Solicitada:   ${formData.formacionSolicitada}
  Conocimientos Previos:  ${formData.tieneConocimientosPrevios ? 'Sí' : 'No'}


═══════════════════════════════════════════════════

NOTA: Adjuntaré fotografías de mis títulos educativos 
para completar la solicitud de inscripción.

Solicitud generada desde: www.institutoisdep.com.ar
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
      onClose();
      resetForm();
    } else if (method === "email") {
      const subject = encodeURIComponent(`Solicitud de Inscripción - ${formData.nombre} ${formData.apellido}`);
      const body = encodeURIComponent(generateEmailBody());
      const mailtoUrl = `mailto:isdep@hotmail.com.ar?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
      setSending(false);
      onClose();
      resetForm();
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
      formacionSolicitada: cursoPreseleccionado || formacionesDisponibles[0]
    });
    setErrors({});
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="inscripcion-modal-overlay" onClick={handleBackdropClick}>
      <div className="inscripcion-modal">
        <button 
          className="inscripcion-modal-close" 
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        <div className="inscripcion-modal-header">
          <div className="inscripcion-modal-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="inscripcion-modal-titulo">Solicitud de Inscripción</h3>
          <p className="inscripcion-modal-subtitulo">
            Completá tus datos para inscribirte en: <strong>{formData.formacionSolicitada}</strong>
          </p>
        </div>

        <form className="inscripcion-form">
          {/* Datos Personales */}
          <div className="inscripcion-form-section">
            <h4 className="inscripcion-form-section-titulo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Datos Personales
            </h4>
            
            <div className="inscripcion-form-row">
              <div className="inscripcion-form-group">
                <label className="inscripcion-label">
                  Nombre <span className="inscripcion-required">*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  className={`inscripcion-input ${errors.nombre ? "error" : ""}`}
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                />
                {errors.nombre && <span className="inscripcion-error">{errors.nombre}</span>}
              </div>

              <div className="inscripcion-form-group">
                <label className="inscripcion-label">
                  Apellido <span className="inscripcion-required">*</span>
                </label>
                <input
                  type="text"
                  name="apellido"
                  className={`inscripcion-input ${errors.apellido ? "error" : ""}`}
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Tu apellido"
                />
                {errors.apellido && <span className="inscripcion-error">{errors.apellido}</span>}
              </div>
            </div>

            <div className="inscripcion-form-row">
              <div className="inscripcion-form-group">
                <label className="inscripcion-label">
                  DNI <span className="inscripcion-required">*</span>
                </label>
                <input
                  type="text"
                  name="dni"
                  className={`inscripcion-input ${errors.dni ? "error" : ""}`}
                  value={formData.dni}
                  onChange={handleChange}
                  placeholder="12345678"
                />
                {errors.dni && <span className="inscripcion-error">{errors.dni}</span>}
              </div>

              <div className="inscripcion-form-group">
                <label className="inscripcion-label">
                  Fecha de Nacimiento <span className="inscripcion-required">*</span>
                </label>
                <input
                  type="date"
                  name="fechaNacimiento"
                  className={`inscripcion-input ${errors.fechaNacimiento ? "error" : ""}`}
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                />
                {errors.fechaNacimiento && <span className="inscripcion-error">{errors.fechaNacimiento}</span>}
              </div>
            </div>
          </div>

          {/* Datos de Contacto */}
          <div className="inscripcion-form-section">
            <h4 className="inscripcion-form-section-titulo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L10.89 13.26C11.5 13.67 12.5 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Datos de Contacto
            </h4>
            
            <div className="inscripcion-form-group">
              <label className="inscripcion-label">
                Correo Electrónico <span className="inscripcion-required">*</span>
              </label>
              <input
                type="email"
                name="email"
                className={`inscripcion-input ${errors.email ? "error" : ""}`}
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
              />
              {errors.email && <span className="inscripcion-error">{errors.email}</span>}
            </div>

            <div className="inscripcion-form-group">
              <label className="inscripcion-label">
                Teléfono <span className="inscripcion-required">*</span>
              </label>
              <input
                type="tel"
                name="telefono"
                className={`inscripcion-input ${errors.telefono ? "error" : ""}`}
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+54 9 11 1234-5678"
              />
              {errors.telefono && <span className="inscripcion-error">{errors.telefono}</span>}
            </div>

            <div className="inscripcion-form-row">
              <div className="inscripcion-form-group">
                <label className="inscripcion-label">
                  País <span className="inscripcion-required">*</span>
                </label>
                <input
                  type="text"
                  name="pais"
                  className={`inscripcion-input ${errors.pais ? "error" : ""}`}
                  value={formData.pais}
                  onChange={handleChange}
                  placeholder="Argentina"
                />
                {errors.pais && <span className="inscripcion-error">{errors.pais}</span>}
              </div>

              <div className="inscripcion-form-group">
                <label className="inscripcion-label">
                  Ciudad <span className="inscripcion-required">*</span>
                </label>
                <input
                  type="text"
                  name="ciudad"
                  className={`inscripcion-input ${errors.ciudad ? "error" : ""}`}
                  value={formData.ciudad}
                  onChange={handleChange}
                  placeholder="Buenos Aires"
                />
                {errors.ciudad && <span className="inscripcion-error">{errors.ciudad}</span>}
              </div>
            </div>
          </div>

          {/* Información Académica */}
          <div className="inscripcion-form-section">
            <h4 className="inscripcion-form-section-titulo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 12L12 8L21 12L12 16L3 12Z" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
                <path d="M6 12V16C6 17.1046 8.68629 20 12 20C15.3137 20 18 17.1046 18 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Información Académica
            </h4>
            
            <div className="inscripcion-form-group">
              <label className="inscripcion-label">
                Profesión/Ocupación <span className="inscripcion-required">*</span>
              </label>
              <input
                type="text"
                name="profesion"
                className={`inscripcion-input ${errors.profesion ? "error" : ""}`}
                value={formData.profesion}
                onChange={handleChange}
                placeholder="Ej: Psicólogo, Estudiante, etc."
              />
              {errors.profesion && <span className="inscripcion-error">{errors.profesion}</span>}
            </div>

            <div className="inscripcion-form-group">
              <label className="inscripcion-label">
                Formación Solicitada <span className="inscripcion-required">*</span>
              </label>
              {mostrarDropdown ? (
                <select
                  name="formacionSolicitada"
                  className="inscripcion-input inscripcion-select"
                  value={formData.formacionSolicitada}
                  onChange={handleChange}
                >
                  {formacionesDisponibles.map((formacion) => (
                    <option key={formacion} value={formacion}>
                      {formacion}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  name="formacionSolicitada"
                  className="inscripcion-input inscripcion-input-readonly"
                  value={formData.formacionSolicitada}
                  readOnly
                  disabled
                />
              )}
            </div>

            <div className="inscripcion-form-group">
              <label className="inscripcion-label-checkbox">
                <input
                  type="checkbox"
                  name="tieneConocimientosPrevios"
                  checked={formData.tieneConocimientosPrevios}
                  onChange={handleChange}
                  className="inscripcion-checkbox"
                />
                <span className="checkbox-label-text">
                  Tengo conocimientos previos en el área
                </span>
              </label>
            </div>
          </div>

          {/* Botones de envío */}
          <div className="inscripcion-form-actions">
            <button
              type="button"
              className="inscripcion-btn inscripcion-btn-whatsapp"
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
              className="inscripcion-btn inscripcion-btn-email"
              onClick={(e) => handleSubmit(e, "email")}
              disabled={sending}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L10.89 13.26C11.5 13.67 12.5 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              {sending ? "Enviando..." : "Enviar por Email"}
            </button>
          </div>

          <p className="inscripcion-form-nota">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Podés enviar tu solicitud por WhatsApp o Email. Recordá adjuntar fotos de tus títulos educativos para completar el proceso.
          </p>
        </form>
      </div>
    </div>
  );
};

export default InscripcionModal;
