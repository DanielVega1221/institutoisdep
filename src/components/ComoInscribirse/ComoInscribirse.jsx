import React from "react";
import "./ComoInscribirse.css";
import {
  CreditCardIcon,
  DocumentCheckIcon,
  UserPlusIcon,
  CheckCircleIcon,
  BankIcon,
  MercadoPagoIcon,
  UploadIcon,
  ClipboardIcon
} from "./InscripcionIcons";

const ComoInscribirse = () => {
  return (
    <section className="como-inscribirse">
      {/* Hero Section */}
      <div className="inscripcion-hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-icon"><UserPlusIcon /></span>
              <span>Proceso Simple y Rápido</span>
            </div>
            <h1 className="hero-title">
              ¿Cómo <span className="hero-highlight">Inscribirte?</span>
            </h1>
            <p className="hero-subtitle">
              Seguí estos sencillos pasos para comenzar tu formación profesional en ISDEP
            </p>
          </div>
        </div>
      </div>

      {/* Pasos de Inscripción */}
      <div className="pasos-section">
        <div className="section-container">
          <div className="pasos-timeline">
            
            {/* Paso 1 */}
            <div className="paso-item">
              <div className="paso-number">
                <span>1</span>
              </div>
              <div className="paso-content">
                <div className="paso-icon">
                  <CreditCardIcon />
                </div>
                <h2 className="paso-title">Seleccioná el Medio de Pago</h2>
                <p className="paso-description">
                  Elegí la opción que más te convenga para realizar tu pago
                </p>
                
                <div className="medios-pago-grid">
                  <div className="medio-pago-card">
                    <div className="medio-icon">
                      <BankIcon />
                    </div>
                    <h3>Transferencia Bancaria</h3>
                    <p>Realizá una transferencia directa a nuestra cuenta bancaria</p>
                    <div className="medio-badge">Sin comisiones adicionales</div>
                  </div>
                  
                  <div className="medio-pago-card">
                    <div className="medio-icon mercadopago">
                      <MercadoPagoIcon />
                    </div>
                    <h3>Mercado Pago</h3>
                    <p>Pago online seguro con link de Mercado Pago</p>
                    <div className="medio-badge">Pago inmediato</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="paso-item">
              <div className="paso-number">
                <span>2</span>
              </div>
              <div className="paso-content">
                <div className="paso-icon">
                  <DocumentCheckIcon />
                </div>
                <h2 className="paso-title">Realizá el Pago</h2>
                <p className="paso-description">
                  Completá la transacción usando el medio de pago seleccionado
                </p>
                
                <div className="info-box">
                  <CheckCircleIcon />
                  <div>
                    <strong>Importante:</strong> Guardá el comprobante de pago que te proporcionan 
                    al finalizar la transacción. Lo vas a necesitar en el siguiente paso.
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="paso-item">
              <div className="paso-number">
                <span>3</span>
              </div>
              <div className="paso-content">
                <div className="paso-icon">
                  <UploadIcon />
                </div>
                <h2 className="paso-title">Compartí tu Información</h2>
                <p className="paso-description">
                  Para registrar tu pago, envianos la siguiente información
                </p>
                
                <div className="documentos-requeridos">
                  <div className="documento-item">
                    <div className="documento-icon">
                      <ClipboardIcon />
                    </div>
                    <div className="documento-info">
                      <h4>Comprobante de Pago</h4>
                      <p>Captura de pantalla o PDF del comprobante de tu transacción</p>
                    </div>
                  </div>
                  
                  <div className="documento-item">
                    <div className="documento-icon">
                      <UserPlusIcon />
                    </div>
                    <div className="documento-info">
                      <h4>Datos Personales</h4>
                      <ul className="datos-lista">
                        <li><CheckCircleIcon /> Nombre y Apellido completo</li>
                        <li><CheckCircleIcon /> DNI o Número de Identificación</li>
                        <li><CheckCircleIcon /> Dirección de Email</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="contacto-box">
                  <h4>¿Dónde enviar la información?</h4>
                  <p>Podés enviarnos todos los datos por WhatsApp al:</p>
                  <a 
                    href="https://wa.me/5492236741300" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    223 674 1300
                  </a>
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="paso-item">
              <div className="paso-number">
                <span>4</span>
              </div>
              <div className="paso-content">
                <div className="paso-icon success">
                  <CheckCircleIcon />
                </div>
                <h2 className="paso-title">¡Listo! Accedé a tu Curso</h2>
                <p className="paso-description">
                  Una vez que recibamos y verifiquemos tu información
                </p>
                
                <div className="success-box">
                  <div className="success-icon">
                    <CheckCircleIcon />
                  </div>
                  <div className="success-content">
                    <h3>Te enviaremos las credenciales de acceso</h3>
                    <p>
                      Recibirás por email o WhatsApp una clave de acceso personal que te 
                      permitirá ingresar al material del curso desde nuestra página web.
                    </p>
                  </div>
                </div>

                <div className="beneficios-acceso">
                  <h4>Con tu clave de acceso obtenés:</h4>
                  <div className="beneficios-grid">
                    <div className="beneficio-item">
                      <CheckCircleIcon />
                      <span>Material de estudio completo</span>
                    </div>
                    <div className="beneficio-item">
                      <CheckCircleIcon />
                      <span>Acceso a clases virtuales en vivo</span>
                    </div>
                    <div className="beneficio-item">
                      <CheckCircleIcon />
                      <span>Grabaciones de todas las clases</span>
                    </div>
                    <div className="beneficio-item">
                      <CheckCircleIcon />
                      <span>Soporte de docentes especializados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Sección de ayuda */}
      <div className="ayuda-section">
        <div className="section-container">
          <div className="ayuda-content">
            <h2>¿Tenés alguna duda?</h2>
            <p>
              Estamos aquí para ayudarte en cada paso del proceso de inscripción. 
              No dudes en contactarnos por cualquier consulta.
            </p>
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

    </section>
  );
};

export default ComoInscribirse;
