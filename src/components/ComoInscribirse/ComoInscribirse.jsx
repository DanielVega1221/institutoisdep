import React, { useState } from "react";
import "./ComoInscribirse.css";

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

const ComoInscribirse = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    dia: "",
    mes: "",
    anio: "",
    email: "",
    telefono: "",
    pais: "",
    ciudad: "",
    profesion: "",
    formacionSolicitada: formacionesDisponibles[0],
    tieneConocimientosPrevios: false
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sendingStage, setSendingStage] = useState(""); // "connecting", "sending", "processing"
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

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

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    
    // Agregar los nuevos archivos a los existentes (sin duplicados)
    setSelectedFiles(prev => {
      const existingNames = prev.map(f => f.name);
      const filesToAdd = newFiles.filter(f => !existingNames.includes(f.name));
      const combined = [...prev, ...filesToAdd];
      
      // Limitar a 5 archivos máximo
      if (combined.length > 5) {
        return combined.slice(0, 5);
      }
      return combined;
    });
    
    // Limpiar el input para permitir seleccionar el mismo archivo nuevamente si se elimina
    e.target.value = '';
    
    if (errors.images) {
      setErrors(prev => ({ ...prev, images: "" }));
    }
  };

  const removeFile = (index) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validate = () => {
    const newErrors = {};
    
    // Nombre (2-50 caracteres, solo letras)
    if (!formData.nombre.trim()) {
      newErrors.nombre = "Campo obligatorio";
    } else if (formData.nombre.length < 2 || formData.nombre.length > 50) {
      newErrors.nombre = "Debe tener entre 2 y 50 caracteres";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.nombre)) {
      newErrors.nombre = "Solo puede contener letras";
    }
    
    // Apellido (2-50 caracteres, solo letras)
    if (!formData.apellido.trim()) {
      newErrors.apellido = "Campo obligatorio";
    } else if (formData.apellido.length < 2 || formData.apellido.length > 50) {
      newErrors.apellido = "Debe tener entre 2 y 50 caracteres";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.apellido)) {
      newErrors.apellido = "Solo puede contener letras";
    }
    
    // DNI (6-12 dígitos, solo números)
    if (!formData.dni.trim()) {
      newErrors.dni = "Campo obligatorio";
    } else if (!/^[0-9]{6,12}$/.test(formData.dni)) {
      newErrors.dni = "Debe tener entre 6 y 12 dígitos";
    }
    
    // Fecha de nacimiento (18-100 años)
    if (!formData.dia || !formData.mes || !formData.anio) {
      newErrors.fechaNacimiento = "La fecha de nacimiento es obligatoria";
    } else {
      const dia = parseInt(formData.dia);
      const mes = parseInt(formData.mes);
      const anio = parseInt(formData.anio);
      
      // Validar que los valores sean válidos
      if (dia < 1 || dia > 31) {
        newErrors.fechaNacimiento = "Día inválido";
      } else if (mes < 1 || mes > 12) {
        newErrors.fechaNacimiento = "Mes inválido";
      } else if (anio < 1900 || anio > new Date().getFullYear()) {
        newErrors.fechaNacimiento = "Año inválido";
      } else {
        // Crear fecha y validar edad
        const fechaNacimiento = new Date(anio, mes - 1, dia);
        const today = new Date();
        const age = today.getFullYear() - fechaNacimiento.getFullYear();
        const monthDiff = today.getMonth() - fechaNacimiento.getMonth();
        const dayDiff = today.getDate() - fechaNacimiento.getDate();
        
        const edadReal = monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;
        
        if (edadReal < 18 || edadReal > 100) {
          newErrors.fechaNacimiento = "Debes tener entre 18 y 100 años";
        }
      }
    }
    
    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Campo obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    
    // Teléfono (8-20 caracteres)
    if (!formData.telefono.trim()) {
      newErrors.telefono = "Campo obligatorio";
    } else if (formData.telefono.length < 8 || formData.telefono.length > 20) {
      newErrors.telefono = "Debe tener entre 8 y 20 caracteres";
    } else if (!/^[0-9+\s()-]+$/.test(formData.telefono)) {
      newErrors.telefono = "Formato inválido (solo números, +, -, (), espacios)";
    }
    
    // País (2-50 caracteres, solo letras)
    if (!formData.pais.trim()) {
      newErrors.pais = "Campo obligatorio";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.pais)) {
      newErrors.pais = "Solo puede contener letras";
    }
    
    // Ciudad (2-50 caracteres, solo letras)
    if (!formData.ciudad.trim()) {
      newErrors.ciudad = "Campo obligatorio";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.ciudad)) {
      newErrors.ciudad = "Solo puede contener letras";
    }
    
    // Profesión (2-100 caracteres)
    if (!formData.profesion.trim()) {
      newErrors.profesion = "Campo obligatorio";
    } else if (formData.profesion.length < 2 || formData.profesion.length > 100) {
      newErrors.profesion = "Debe tener entre 2 y 100 caracteres";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);
    setSendingStage("connecting");
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // Configurar la URL del backend
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
      
      // Simular un pequeño delay para mostrar el estado de conexión
      await new Promise(resolve => setTimeout(resolve, 500));
      setSendingStage("sending");
      
      // Crear FormData para enviar al backend (que espera multipart/form-data)
      const formDataToSend = new FormData();
      
      // Construir fecha en formato YYYY-MM-DD
      const fechaNacimiento = `${formData.anio}-${String(formData.mes).padStart(2, '0')}-${String(formData.dia).padStart(2, '0')}`;
      
      Object.keys(formData).forEach(key => {
        // Saltear los campos de fecha individuales
        if (key === 'dia' || key === 'mes' || key === 'anio') {
          return;
        }
        
        // Convertir booleanos a string para FormData
        const value = typeof formData[key] === 'boolean' 
          ? formData[key].toString() 
          : formData[key];
        formDataToSend.append(key, value);
      });
      
      // Agregar la fecha completa
      formDataToSend.append('fechaNacimiento', fechaNacimiento);
      
      // Agregar imágenes si hay alguna seleccionada
      if (selectedFiles.length > 0) {
        console.log(`📎 Adjuntando ${selectedFiles.length} archivo(s):`);
        selectedFiles.forEach((file, index) => {
          formDataToSend.append('images', file);
          console.log(`  ${index + 1}. ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB, ${file.type})`);
        });
      } else {
        console.log('📎 No hay archivos para adjuntar');
      }

      // Debug: verificar qué se está enviando
      console.log('📋 Datos del formulario:');
      for (let [key, value] of formDataToSend.entries()) {
        if (value instanceof File) {
          console.log(`  ${key}: [File] ${value.name} (${(value.size / 1024).toFixed(2)} KB)`);
        } else {
          console.log(`  ${key}: ${value}`);
        }
      }
      
      // Crear AbortController para timeout de 90 segundos
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 90000);
      
      const response = await fetch(`${backendUrl}/api/inscripcion`, {
        method: 'POST',
        body: formDataToSend,
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      setSendingStage("processing");

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok && data.success) {
        setSuccessMessage("¡Inscripción enviada exitosamente! Nos pondremos en contacto contigo pronto.");
        
        // Limpiar el formulario
        setFormData({
          nombre: "",
          apellido: "",
          dni: "",
          dia: "",
          mes: "",
          anio: "",
          email: "",
          telefono: "",
          pais: "",
          ciudad: "",
          profesion: "",
          formacionSolicitada: formacionesDisponibles[0],
          tieneConocimientosPrevios: false
        });
        setSelectedFiles([]);
        
        // Scroll hacia arriba para mostrar el mensaje
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        console.error('Error del backend:', data);
        const errorMsg = data.errors 
          ? Object.values(data.errors).flat().join(', ')
          : (data.message || "Error al enviar la inscripción. Por favor, intenta nuevamente.");
        setErrorMessage(errorMsg);
      }
    } catch (error) {
      console.error('Error:', error);
      
      if (error.name === 'AbortError') {
        setErrorMessage("El servidor tardó demasiado en responder. Por favor, intenta nuevamente en unos minutos.");
      } else if (error.message.includes('fetch')) {
        setErrorMessage("Error de conexión. Por favor, verifica tu conexión a internet e intenta nuevamente.");
      } else {
        setErrorMessage("Error al enviar la inscripción. Por favor, intenta nuevamente.");
      }
    } finally {
      setSending(false);
      setSendingStage("");
    }
  };

  return (
    <section className="como-inscribirse">
      <div className="inscripcion-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Solicitud de <span className="hero-highlight">Inscripción</span>
            </h1>
            <p className="hero-subtitle">
              Completá el formulario para iniciar tu proceso de inscripción en ISDEP
            </p>
          </div>
        </div>
      </div>

      <div className="formulario-inscripcion-section">
        <div className="formulario-container">
          <div className="formulario-card">
            <div className="formulario-header">
              <div className="formulario-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <h2 className="formulario-titulo">Formulario de Inscripción</h2>
              <p className="formulario-subtitulo">
                Completá todos los campos para procesar tu solicitud
              </p>
              
              {successMessage && (
                <div className="alert alert-success">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {successMessage}
                </div>
              )}
              
              {errorMessage && (
                <div className="alert alert-error">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {errorMessage}
                </div>
              )}
            </div>

            <form className="inscripcion-form-page" onSubmit={handleSubmit}>
              <div className="form-section">
                <h3 className="form-section-titulo">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Datos Personales
                </h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      Nombre <span className="form-required">*</span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      className={`form-input ${errors.nombre ? "error" : ""}`}
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                    />
                    {errors.nombre && <span className="form-error">{errors.nombre}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Apellido <span className="form-required">*</span>
                    </label>
                    <input
                      type="text"
                      name="apellido"
                      className={`form-input ${errors.apellido ? "error" : ""}`}
                      value={formData.apellido}
                      onChange={handleChange}
                      placeholder="Tu apellido"
                    />
                    {errors.apellido && <span className="form-error">{errors.apellido}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      DNI <span className="form-required">*</span>
                    </label>
                    <input
                      type="text"
                      name="dni"
                      className={`form-input ${errors.dni ? "error" : ""}`}
                      value={formData.dni}
                      onChange={handleChange}
                      placeholder="12345678"
                    />
                    <p className="form-helper">6 a 12 dígitos, solo números</p>
                    {errors.dni && <span className="form-error">{errors.dni}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Fecha de Nacimiento <span className="form-required">*</span>
                    </label>
                    <div className="form-row form-date-group">
                      <div className="form-date-field">
                        <label className="form-date-label">Día</label>
                        <select
                          name="dia"
                          className={`form-input form-select ${errors.fechaNacimiento ? "error" : ""}`}
                          value={formData.dia}
                          onChange={handleChange}
                        >
                          <option value="">--</option>
                          {Array.from({length: 31}, (_, i) => i + 1).map(d => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="form-date-field">
                        <label className="form-date-label">Mes</label>
                        <select
                          name="mes"
                          className={`form-input form-select ${errors.fechaNacimiento ? "error" : ""}`}
                          value={formData.mes}
                          onChange={handleChange}
                        >
                          <option value="">--</option>
                          <option value="1">Enero</option>
                          <option value="2">Febrero</option>
                          <option value="3">Marzo</option>
                          <option value="4">Abril</option>
                          <option value="5">Mayo</option>
                          <option value="6">Junio</option>
                          <option value="7">Julio</option>
                          <option value="8">Agosto</option>
                          <option value="9">Septiembre</option>
                          <option value="10">Octubre</option>
                          <option value="11">Noviembre</option>
                          <option value="12">Diciembre</option>
                        </select>
                      </div>
                      
                      <div className="form-date-field">
                        <label className="form-date-label">Año</label>
                        <select
                          name="anio"
                          className={`form-input form-select ${errors.fechaNacimiento ? "error" : ""}`}
                          value={formData.anio}
                          onChange={handleChange}
                        >
                          <option value="">----</option>
                          {Array.from({length: 83}, (_, i) => new Date().getFullYear() - 18 - i).map(y => (
                            <option key={y} value={y}>{y}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <p className="form-helper">Debes tener entre 18 y 100 años</p>
                    {errors.fechaNacimiento && <span className="form-error">{errors.fechaNacimiento}</span>}
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-titulo">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8L10.89 13.26C11.5 13.67 12.5 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Datos de Contacto
                </h3>
                
                <div className="form-group">
                  <label className="form-label">
                    Correo Electrónico <span className="form-required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`form-input ${errors.email ? "error" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Teléfono <span className="form-required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    className={`form-input ${errors.telefono ? "error" : ""}`}
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+54 9 11 1234-5678"
                  />
                  <p className="form-helper">Incluye código de área (ej: +54 9 11 1234-5678)</p>
                  {errors.telefono && <span className="form-error">{errors.telefono}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      País <span className="form-required">*</span>
                    </label>
                    <input
                      type="text"
                      name="pais"
                      className={`form-input ${errors.pais ? "error" : ""}`}
                      value={formData.pais}
                      onChange={handleChange}
                      placeholder="Argentina"
                    />
                    {errors.pais && <span className="form-error">{errors.pais}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Ciudad <span className="form-required">*</span>
                    </label>
                    <input
                      type="text"
                      name="ciudad"
                      className={`form-input ${errors.ciudad ? "error" : ""}`}
                      value={formData.ciudad}
                      onChange={handleChange}
                      placeholder="Buenos Aires"
                    />
                    {errors.ciudad && <span className="form-error">{errors.ciudad}</span>}
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-titulo">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12L12 8L21 12L12 16L3 12Z" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
                    <path d="M6 12V16C6 17.1046 8.68629 20 12 20C15.3137 20 18 17.1046 18 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Información Académica
                </h3>
                
                <div className="form-group">
                  <label className="form-label">
                    Profesión/Ocupación <span className="form-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="profesion"
                    className={`form-input ${errors.profesion ? "error" : ""}`}
                    value={formData.profesion}
                    onChange={handleChange}
                    placeholder="Ej: Psicólogo, Estudiante, etc."
                  />
                  {errors.profesion && <span className="form-error">{errors.profesion}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Formación Solicitada <span className="form-required">*</span>
                  </label>
                  <select
                    name="formacionSolicitada"
                    className="form-input form-select"
                    value={formData.formacionSolicitada}
                    onChange={handleChange}
                  >
                    {formacionesDisponibles.map((formacion) => (
                      <option key={formacion} value={formacion}>
                        {formacion}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label-checkbox">
                    <input
                      type="checkbox"
                      name="tieneConocimientosPrevios"
                      checked={formData.tieneConocimientosPrevios}
                      onChange={handleChange}
                      className="form-checkbox"
                    />
                    <span className="checkbox-label-text">
                      Tengo conocimientos previos en el área
                    </span>
                  </label>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Títulos Educativos <span className="form-optional">(opcional)</span>
                  </label>
                  <p className="form-helper">Adjuntá fotos de tus títulos o certificados (máximo 5 archivos, 5MB cada uno)</p>
                  <input
                    type="file"
                    id="images"
                    name="images"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="form-input-file"
                  />
                  <label htmlFor="images" className="form-file-label">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 8L12 3M12 3L7 8M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {selectedFiles.length > 0 ? `${selectedFiles.length} archivo(s) seleccionado(s)` : 'Seleccionar archivos'}
                  </label>
                  {errors.images && <span className="form-error">{errors.images}</span>}
                  
                  {selectedFiles.length > 0 && (
                    <div className="selected-files-list">
                      {selectedFiles.map((file, index) => (
                        <div key={index} className="file-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13 2V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="file-name">{file.name}</span>
                          <span className="file-size">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="file-remove"
                            aria-label="Eliminar archivo"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="form-btn form-btn-email"
                  disabled={sending}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8L10.89 13.26C11.5 13.67 12.5 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {sending ? "Enviando..." : "Enviar Inscripción"}
                </button>
                
                {sending && (
                  <div className="sending-progress">
                    <div className="progress-bar-container">
                      <div className={`progress-bar progress-${sendingStage}`}></div>
                    </div>
                    <div className="sending-stages">
                      <div className={`stage ${sendingStage === 'connecting' ? 'active' : sendingStage === 'sending' || sendingStage === 'processing' ? 'completed' : ''}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>Conectando al servidor...</span>
                      </div>
                      <div className={`stage ${sendingStage === 'sending' ? 'active' : sendingStage === 'processing' ? 'completed' : ''}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                        </svg>
                        <span>Enviando datos...</span>
                      </div>
                      <div className={`stage ${sendingStage === 'processing' ? 'active' : ''}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span>Procesando solicitud...</span>
                      </div>
                    </div>
                    <p className="sending-info-note">
                      🔐 <strong>Conexión segura establecida.</strong> Procesando tu solicitud en nuestros servidores. Este proceso puede tomar unos momentos.
                    </p>
                  </div>
                )}
              </div>

              <p className="form-nota">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Nos pondremos en contacto contigo a la brevedad.</span>
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="ayuda-section">
        <div className="section-container">
          <div className="ayuda-content">
            <h2>¿Tenés alguna duda?</h2>
            <p>
              Estamos aquí para ayudarte en cada paso del proceso de inscripción. 
              No dudes en contactarnos por cualquier consulta.
            </p>
            <div className="ayuda-buttons">
              <a 
                href="https://wa.me/5492236741300" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-contacto"
              >
                Contactanos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoInscribirse;
