import React from "react";
import "./NuestraMetodologia.css";
import {
  TargetIcon,
  BookOpenIcon,
  MicroscopeIcon,
  UsersIcon,
  LightbulbIcon,
  ComputerIcon,
  BoltIcon,
  HandshakeIcon,
  SeedlingIcon,
  GraduationCapIcon,
  EarthIcon,
  SearchIcon,
  CheckCircleIcon
} from "./MetodologiaIcons";

const NuestraMetodologia = () => {
  return (
    <section className="nuestra-metodologia">
      {/* Hero Section */}
      <div className="metodologia-hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-icon"><BookOpenIcon /></span>
              <span>Metodología Probada y Efectiva</span>
            </div>
            <h1 className="hero-title">
              Nuestra <span className="hero-highlight">Metodología</span>
            </h1>
            <p className="hero-subtitle">
              Un sistema educativo diseñado para garantizar tu éxito profesional 
              con flexibilidad, calidad académica y seguimiento personalizado.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">1 clase </div>
                <div className="stat-label">por semana</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Virtual</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Acceso</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Método de Estudio */}
      <div className="metodologia-section-intro">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Método de Estudio</h2>
            <p className="section-subtitle">
              Cómo funcionan nuestras clases y qué esperar de tu formación
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-main">
              <div className="about-text">
                <h3>¿Cómo Estudiar en ISDEP?</h3>
                <p>
                  Nuestro método de estudio está diseñado para brindarte la máxima flexibilidad sin 
                  comprometer la calidad académica. Las clases se dictan una vez por semana en formato 
                  virtual, permitiéndote estudiar desde cualquier lugar mientras mantienes tus actividades 
                  laborales y personales.
                </p>
                <p>
                  Utilizamos tecnología de videoconferencia profesional que garantiza una experiencia 
                  educativa interactiva y de alta calidad, con seguimiento personalizado de tu progreso 
                  académico y apoyo constante de nuestros docentes.
                </p>
              </div>
              
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <ComputerIcon />
                  </div>
                  <div className="feature-content">
                    <h4>Plataforma Zoom</h4>
                    <p>Clases en vivo con audio y video de alta calidad</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <BoltIcon />
                  </div>
                  <div className="feature-content">
                    <h4>Una Vez por Semana</h4>
                    <p>Clases semanales que se adaptan a tu ritmo de vida</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <CheckCircleIcon />
                  </div>
                  <div className="feature-content">
                    <h4>Normativa Clara</h4>
                    <p>Condiciones de estudio transparentes y accesibles</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <BookOpenIcon />
                  </div>
                  <div className="feature-content">
                    <h4>Material Incluido</h4>
                    <p>Acceso a recursos digitales y bibliografía especializada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metodología de Enseñanza */}
      <div className="metodologia-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Nuestra Metodología</h2>
            <p className="section-subtitle">
              Un enfoque pedagógico innovador que garantiza el aprendizaje efectivo
            </p>
          </div>
          
          <div className="metodologia-content">
            <div className="metodologia-grid">
              <div className="metodologia-card">
                <div className="card-icon">
                  <BookOpenIcon />
                </div>
                <h3>Aprendizaje Activo</h3>
                <p>
                  Promovemos la participación directa del estudiante en su proceso de aprendizaje 
                  a través de casos prácticos, análisis de situaciones reales y proyectos aplicados 
                  que simulan escenarios profesionales auténticos.
                </p>
                <ul>
                  <li>Análisis de casos reales del ámbito profesional</li>
                  <li>Proyectos integradores que abarcan múltiples disciplinas</li>
                  <li>Simulaciones virtuales de situaciones del mercado laboral</li>
                  <li>Ejercicios de resolución de problemas complejos</li>
                  <li>Actividades interactivas durante las clases en vivo</li>
                  <li>Material multimedia y recursos digitales actualizados</li>
                </ul>
              </div>
              
              <div className="metodologia-card">
                <div className="card-icon">
                  <MicroscopeIcon />
                </div>
                <h3>Enfoque Científico</h3>
                <p>
                  Basamos nuestra enseñanza en evidencia científica y metodologías probadas, 
                  garantizando que nuestros estudiantes dominen las técnicas más actuales y 
                  validadas por la comunidad científica internacional.
                </p>
                <ul>
                  <li>Metodología basada en evidencia empírica contrastada</li>
                  <li>Contenidos actualizados con los últimos avances científicos</li>
                  <li>Recursos digitales y herramientas profesionales online</li>
                  <li>Actualización constante según nuevos descubrimientos</li>
                  <li>Bibliografía actualizada y papers científicos de acceso digital</li>
                  <li>Demostraciones virtuales de técnicas y procedimientos</li>
                </ul>
              </div>
              
              <div className="metodologia-card">
                <div className="card-icon">
                  <UsersIcon />
                </div>
                <h3>Aprendizaje Colaborativo</h3>
                <p>
                  Fomentamos el trabajo en equipo y el intercambio de experiencias, 
                  preparando a nuestros estudiantes para el mundo profesional real donde 
                  la colaboración interdisciplinaria es fundamental.
                </p>
                <ul>
                  <li>Grupos de estudio virtuales dirigidos por docentes especializados</li>
                  <li>Proyectos colaborativos en plataformas digitales</li>
                  <li>Mentorías online entre pares para reforzar conocimientos</li>
                  <li>Networking profesional virtual con egresados y profesionales activos</li>
                  <li>Foros de discusión y análisis de casos grupales en tiempo real</li>
                  <li>Presentaciones virtuales y defensa de trabajos por videoconferencia</li>
                </ul>
              </div>
              
              <div className="metodologia-card">
                <div className="card-icon">
                  <LightbulbIcon />
                </div>
                <h3>Pensamiento Crítico</h3>
                <p>
                  Desarrollamos la capacidad de análisis, evaluación y síntesis, 
                  formando profesionales capaces de tomar decisiones fundamentadas y 
                  cuestionar supuestos para llegar a conclusiones sólidas.
                </p>
                <ul>
                  <li>Análisis de casos complejos con múltiples variables</li>
                  <li>Debates académicos dirigidos sobre temas controversiales</li>
                  <li>Evaluación crítica de información y fuentes bibliográficas</li>
                  <li>Resolución de problemas mediante metodologías estructuradas</li>
                  <li>Desarrollo de hipótesis y su validación empírica</li>
                  <li>Argumentación lógica y fundamentación de conclusiones</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Normativa de Estudios */}
      <div className="cursada-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Normativa de Estudios</h2>
            <p className="section-subtitle">
              Condiciones y requisitos que el instituto establece para garantizar tu formación exitosa
            </p>
          </div>
          
          <div className="normativa-grid">
            <div className="normativa-card">
              <div className="normativa-icon">
                <CheckCircleIcon />
              </div>
              <h3>Asistencias</h3>
              <p className="normativa-description">
                Se requiere un mínimo de 75% de asistencia a las clases virtuales para 
                mantener la regularidad en el curso. Las asistencias se registran automáticamente 
                al momento de ingresar a la sala de Zoom.
              </p>
              <div className="normativa-details">
                <div className="detail-item">
                  <span className="detail-label">Mínimo requerido:</span>
                  <span className="detail-value">75% de asistencia</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Registro:</span>
                  <span className="detail-value">Automático en plataforma</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Justificaciones:</span>
                  <span className="detail-value">Con certificado válido</span>
                </div>
              </div>
            </div>
            
            <div className="normativa-card">
              <div className="normativa-icon">
                <BookOpenIcon />
              </div>
              <h3>Trabajos Prácticos</h3>
              <p className="normativa-description">
                Los trabajos prácticos son obligatorios y deben entregarse en las fechas establecidas. 
                Cada curso incluye entre 3 y 5 trabajos prácticos que evalúan la comprensión y aplicación 
                de los contenidos desarrollados.
              </p>
              <div className="normativa-details">
                <div className="detail-item">
                  <span className="detail-label">Cantidad:</span>
                  <span className="detail-value">3 a 5 por curso</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Entrega:</span>
                  <span className="detail-value">Plataforma digital</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Aprobación:</span>
                  <span className="detail-value">Nota mínima 7/10</span>
                </div>
              </div>
            </div>
            
            <div className="normativa-card">
              <div className="normativa-icon">
                <BoltIcon />
              </div>
              <h3>Días y Horarios</h3>
              <p className="normativa-description">
                Las clases se dictan una vez por semana en horario fijo establecido al inicio del curso. 
                Los horarios están diseñados para adaptarse a diferentes zonas horarias y compromisos laborales, 
                ofreciendo opciones de mañana, tarde y noche.
              </p>
              <div className="normativa-details">
                <div className="detail-item">
                  <span className="detail-label">Frecuencia:</span>
                  <span className="detail-value">1 vez por semana</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Duración:</span>
                  <span className="detail-value">2 a 3 horas por clase</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Plataforma:</span>
                  <span className="detail-value">Zoom Professional</span>
                </div>
              </div>
            </div>
            
            <div className="normativa-card highlight">
              <div className="normativa-icon">
                <TargetIcon />
              </div>
              <h3>Faltas Toleradas</h3>
              <p className="normativa-description">
                El instituto permite un máximo de 25% de inasistencias sin perder la regularidad. 
                Esto equivale a 3 faltas en un curso de 12 clases o 2 faltas en un curso de 8 clases. 
                Las faltas justificadas no afectan la regularidad.
              </p>
              <div className="normativa-details">
                <div className="detail-item">
                  <span className="detail-label">Máximo permitido:</span>
                  <span className="detail-value">25% de inasistencias</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Recuperación:</span>
                  <span className="detail-value">Clases grabadas disponibles</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Consecuencia:</span>
                  <span className="detail-value">Pérdida de regularidad</span>
                </div>
              </div>
            </div>
          </div>

          {/* Información adicional sobre Zoom */}
          <div className="zoom-info">
            <div className="zoom-header">
              <ComputerIcon />
              <h3>Plataforma Zoom - Nuestra Aula Virtual</h3>
            </div>
            <div className="zoom-content">
              <p>
                Utilizamos <strong>Zoom Professional</strong> como nuestra plataforma de clases virtuales. 
                Esta herramienta profesional nos permite ofrecer:
              </p>
              <div className="zoom-features">
                <div className="zoom-feature">
                  <CheckCircleIcon />
                  <span>Video HD para una experiencia visual de calidad</span>
                </div>
                <div className="zoom-feature">
                  <CheckCircleIcon />
                  <span>Audio cristalino para escuchar claramente las explicaciones</span>
                </div>
                <div className="zoom-feature">
                  <CheckCircleIcon />
                  <span>Pizarra interactiva para demostraciones en vivo</span>
                </div>
                <div className="zoom-feature">
                  <CheckCircleIcon />
                  <span>Compartir pantalla para visualizar material didáctico</span>
                </div>
                <div className="zoom-feature">
                  <CheckCircleIcon />
                  <span>Salas de trabajo grupal para actividades colaborativas</span>
                </div>
                <div className="zoom-feature">
                  <CheckCircleIcon />
                  <span>Grabación de clases para revisión posterior</span>
                </div>
                <div className="zoom-feature">
                  <CheckCircleIcon />
                  <span>Chat en vivo para preguntas y participación</span>
                </div>
                <div className="zoom-feature">
                  <CheckCircleIcon />
                  <span>Acceso desde cualquier dispositivo (PC, tablet, smartphone)</span>
                </div>
              </div>
              <div className="zoom-nota">
                <strong>Nota importante:</strong> No necesitas tener experiencia previa con Zoom. 
                Al inicio del curso te brindaremos una guía completa y soporte técnico para que 
                puedas aprovechar al máximo todas las funcionalidades de la plataforma.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nuestros Valores */}
      <div className="valores-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Nuestros Valores</h2>
            <p className="section-subtitle">
              Los principios que guían nuestra misión educativa y forman el carácter de nuestros estudiantes
            </p>
          </div>
          
          <div className="valores-content">
            <div className="valores-grid">
              <div className="valor-card">
                <div className="valor-icon">
                  <TargetIcon />
                </div>
                <h3>Excelencia</h3>
                <p>
                  Buscamos la perfección en cada aspecto de la formación, desde la calidad 
                  de nuestros programas hasta el acompañamiento de cada estudiante.
                </p>
              </div>
              
              <div className="valor-card">
                <div className="valor-icon">
                  <HandshakeIcon />
                </div>
                <h3>Integridad</h3>
                <p>
                  Actuamos con honestidad, transparencia y ética en todas nuestras 
                  actividades académicas y profesionales.
                </p>
              </div>
              
              <div className="valor-card">
                <div className="valor-icon">
                  <SeedlingIcon />
                </div>
                <h3>Innovación</h3>
                <p>
                  Nos adaptamos constantemente a los cambios del mundo profesional, 
                  incorporando nuevas tecnologías y metodologías.
                </p>
              </div>
              
              <div className="valor-card">
                <div className="valor-icon">
                  <GraduationCapIcon />
                </div>
                <h3>Compromiso</h3>
                <p>
                  Estamos dedicados al éxito de cada estudiante, brindando apoyo 
                  personalizado durante toda su formación.
                </p>
              </div>
              
              <div className="valor-card">
                <div className="valor-icon">
                  <EarthIcon />
                </div>
                <h3>Responsabilidad Social</h3>
                <p>
                  Formamos profesionales conscientes de su impacto en la sociedad 
                  y comprometidos con el bien común.
                </p>
              </div>
              
              <div className="valor-card">
                <div className="valor-icon">
                  <SearchIcon />
                </div>
                <h3>Rigor Académico</h3>
                <p>
                  Mantenemos altos estándares de calidad en nuestros programas, 
                  garantizando una formación sólida y reconocida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default NuestraMetodologia;