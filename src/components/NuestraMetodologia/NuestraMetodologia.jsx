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
                    <h4>Plataforma Google Meet</h4>
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
              Requisitos y normativas de estudios
            </p>
          </div>
          
          <div className="normativa-text-content">
            <p><strong>No es requisito tener otras formaciones ni otros conocimientos para ninguna Formación de este Instituto.</strong></p>
            
            <p>Es fundamental contar con una PC de escritorio o notebook.</p>
            
            <p>Tener conocimiento del uso de las herramientas de Google Meet.</p>
            
            <p>Para participar de las clases: teóricas y grupo operativo, puede conectarse desde cualquier dispositivo que tenga conexión a internet.</p>
            
            <p>Es obligatoria la asistencia a clases, teniendo en cuenta que se cursa una vez por semana, el alumno asume el compromiso de presentismo del 75% de participación y cumplir con los trabajos Prácticos y Teóricos.</p>
            
            <p>Es requisito abonar la cuota del 1 al 10 de cada mes y haber leído el reglamento, los aumentos son semestrales y están sujetos a aumentos si fuera necesario.</p>
            
            <p>Luego de la inscripción el alumno ingresa en un grupo de Whatsapp donde aguarda el día de la fecha de inicio de la cursada.</p>
            
            <p>Unos minutos antes de la clase se publicará el link para que pueda acceder.</p>
            
            <p>El sistema verifica automáticamente tu presentismo.</p>
            
            <p>La comunicación con Administración, Centro de Alumnos, Coordinación y Profesores debe estar disponible por parte del alumno.</p>
            
            <p>Para obtener el título y las certificaciones el alumno deberá haber participado en todas las clases, realizado todos los trabajos prácticos y presentaciones que los profesores le soliciten, el examen final y contar con los pagos correspondientes.</p>
            
            <p><strong>El título y certificaciones tienen un valor aparte que se informa de forma actualizada al momento de solicitarlos.</strong></p>
          </div>

          {/* Información adicional sobre Google Meet */}
          <div className="zoom-info">
            <div className="zoom-header">
              <ComputerIcon />
              <h3>Google Meet - Nuestra Aula Virtual</h3>
            </div>
            <div className="zoom-content">
              <p>
                Utilizamos <strong>Google Meet</strong> como nuestra plataforma de clases virtuales. 
                Esta herramienta profesional de Google nos permite ofrecer:
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
                  <span>Pizarra colaborativa Jamboard para demostraciones en vivo</span>
                </div>
                <div className="zoom-feature">
                  <CheckCircleIcon />
                  <span>Compartir pantalla para visualizar material didáctico</span>
                </div>
                <div className="zoom-feature">
                  <CheckCircleIcon />
                  <span>Salas de trabajo grupal (breakout rooms) para actividades colaborativas</span>
                </div>
                <div className="zoom-feature">
                  <CheckCircleIcon />
                  <span>Grabación de clases guardadas en Google Drive para revisión posterior</span>
                </div>
                <div className="zoom-feature">
                  <CheckCircleIcon />
                  <span>Chat en vivo para preguntas y participación</span>
                </div>
                <div className="zoom-feature">
                  <CheckCircleIcon />
                  <span>Acceso desde cualquier dispositivo (PC, tablet, smartphone) sin instalar software</span>
                </div>
              </div>
              <div className="zoom-nota">
                <strong>Nota importante:</strong> No necesitas tener experiencia previa con Google Meet. 
                Al inicio del curso te brindaremos una guía completa y soporte técnico para que 
                puedas aprovechar al máximo todas las funcionalidades de la plataforma. Solo necesitas una cuenta de Google.
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