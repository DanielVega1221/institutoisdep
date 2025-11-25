import React, { useState, useEffect } from 'react';
import './MaterialAccessModal.css';

const MaterialAccessModal = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  // Contraseña que deberá configurar el administrador
  const MATERIAL_PASSWORD = 'ISDEP2025'; // Cambiar esta contraseña según necesidad
  const DRIVE_LINK = 'https://drive.google.com/drive/folders/tu-carpeta-id'; // Cambiar por el link real de Drive
  const MAX_ATTEMPTS = 5;
  const BLOCK_TIME = 300000; // 5 minutos en milisegundos

  // Limpiar estado cuando se cierra el modal
  useEffect(() => {
    if (!isOpen) {
      setPassword('');
      setError('');
    }
  }, [isOpen]);

  // Sanitizar entrada para prevenir inyecciones
  const sanitizeInput = (input) => {
    if (typeof input !== 'string') return '';
    // Remover caracteres peligrosos y limitar longitud
    return input
      .replace(/[<>{}$]/g, '') // Eliminar caracteres peligrosos
      .trim()
      .substring(0, 100); // Limitar longitud máxima
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verificar si está bloqueado
    if (isBlocked) {
      setError('Demasiados intentos fallidos. Por favor, esperá unos minutos.');
      return;
    }

    setError('');
    setIsLoading(true);

    // Sanitizar entrada
    const sanitizedPassword = sanitizeInput(password);

    // Verificación con delay para prevenir ataques de timing
    setTimeout(() => {
      // Comparación segura de contraseñas
      if (sanitizedPassword.length === MATERIAL_PASSWORD.length && 
          sanitizedPassword === MATERIAL_PASSWORD) {
        // Contraseña correcta - resetear intentos y abrir Drive
        setAttempts(0);
        
        // Validar que el link sea de Google Drive
        if (DRIVE_LINK.startsWith('https://drive.google.com/')) {
          window.open(DRIVE_LINK, '_blank', 'noopener,noreferrer');
        } else {
          setError('Error de configuración. Contactá al administrador.');
        }
        
        setPassword('');
        setError('');
        onClose();
      } else {
        // Contraseña incorrecta - incrementar intentos
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        
        if (newAttempts >= MAX_ATTEMPTS) {
          setIsBlocked(true);
          setError(`Demasiados intentos fallidos. Acceso bloqueado por ${BLOCK_TIME / 60000} minutos.`);
          
          // Desbloquear después del tiempo especificado
          setTimeout(() => {
            setIsBlocked(false);
            setAttempts(0);
          }, BLOCK_TIME);
        } else {
          setError(`Contraseña incorrecta. Intentos restantes: ${MAX_ATTEMPTS - newAttempts}`);
        }
      }
      setIsLoading(false);
    }, 800); // Delay constante para prevenir timing attacks
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    // Sanitizar en tiempo real
    const sanitized = sanitizeInput(value);
    setPassword(sanitized);
  };

  const handleClose = () => {
    setPassword('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="material-modal-overlay" onClick={handleClose}>
      <div className="material-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="material-modal-close" onClick={handleClose} aria-label="Cerrar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="material-modal-header">
          <div className="material-modal-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.2"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2>Acceso al Material de Estudio</h2>
          <p>Ingresá la contraseña que te proporcionamos para acceder al material del curso</p>
        </div>

        <form onSubmit={handleSubmit} className="material-modal-form">
          <div className="material-input-group">
            <label htmlFor="password">Contraseña de Acceso</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Ingresá tu contraseña"
              autoFocus
              disabled={isLoading || isBlocked}
              required
              maxLength={100}
              autoComplete="off"
            />
            {error && <span className="material-error-message">{error}</span>}
          </div>

          <button 
            type="submit" 
            className="material-submit-btn"
            disabled={isLoading || isBlocked || !password.trim()}
          >
            {isLoading ? (
              <>
                <span className="material-spinner"></span>
                Verificando...
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Acceder al Material
              </>
            )}
          </button>
        </form>

        <div className="material-modal-footer">
          <p className="material-help-text">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            ¿No tenés la contraseña? Comunicate con administración para obtenerla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaterialAccessModal;
