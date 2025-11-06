import React from "react";
import "./NuestraInstitucion.css";
import {
  BuildingIcon,
  TargetIcon,
  TeacherIcon,
  TrophyIcon,
  SparklesIcon,
  BookOpenIcon,
  MicroscopeIcon,
  UsersIcon,
  LightbulbIcon,
  BuildingModernIcon,
  ComputerIcon,
  GlobeIcon,
  BoltIcon,
  HandshakeIcon,
  SeedlingIcon,
  GraduationCapIcon,
  EarthIcon,
  SearchIcon,
  FlaskIcon,
  LibraryIcon,
  CheckCircleIcon
} from "./InstitucionIcons";

const NuestraInstitucion = () => {
  return (
    <section className="nuestra-institucion">
      {/* Hero Section */}
      <div className="institucion-hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-icon"><BuildingIcon /></span>
              <span>Excelencia Educativa desde 1999</span>
            </div>
            <h1 className="hero-title">
              Nuestra <span className="hero-highlight">Institución</span>
            </h1>
            <p className="hero-subtitle">
              Formando profesionales con metodología innovadora, valores sólidos y 
              compromiso con la excelencia académica.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Años</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">850+</div>
                <div className="stat-label">Graduados</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Inserción</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sobre Nuestro Instituto */}
      <div className="institucion-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Sobre Nuestro Instituto</h2>
            <p className="section-subtitle">
              Una institución comprometida con la formación integral de profesionales
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-main">
              <div className="about-text">
                <h3>¿Quiénes Somos?</h3>
                <p>
                  El Instituto Superior de Enseñanza Profesional (ISDEP) es una institución educativa 
                  líder en formación especializada, con más de 25 años de trayectoria en la excelencia académica. 
                  Nos especializamos en carreras técnicas y profesionales que responden a las demandas del 
                  mercado laboral actual.
                </p>
                <p>
                  Nuestro compromiso va más allá de la transmisión de conocimientos: formamos profesionales 
                  íntegros, con pensamiento crítico y habilidades prácticas que los distinguen en sus campos 
                  de especialización.
                </p>
              </div>
              
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <TargetIcon />
                  </div>
                  <div className="feature-content">
                    <h4>Enfoque Práctico</h4>
                    <p>Metodología orientada a la aplicación real de conocimientos</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <TeacherIcon />
                  </div>
                  <div className="feature-content">
                    <h4>Docentes Expertos</h4>
                    <p>Profesionales en actividad con amplia experiencia académica</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <TrophyIcon />
                  </div>
                  <div className="feature-content">
                    <h4>Reconocimiento Oficial</h4>
                    <p>Certificaciones con validez nacional e internacional</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <SparklesIcon />
                  </div>
                  <div className="feature-content">
                    <h4>Innovación Constante</h4>
                    <p>Actualización permanente de programas y metodologías</p>
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
                  <li>Talleres prácticos especializados con material profesional</li>
                  <li>Análisis de casos reales del ámbito forense y pericial</li>
                  <li>Proyectos integradores que abarcan múltiples disciplinas</li>
                  <li>Simulaciones profesionales con situaciones del mercado laboral</li>
                  <li>Ejercicios de resolución de problemas complejos</li>
                  <li>Prácticas supervisadas en entornos controlados</li>
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
                  <li>Investigación aplicada con metodología científica rigurosa</li>
                  <li>Metodología basada en evidencia empírica contrastada</li>
                  <li>Laboratorios especializados con equipamiento profesional</li>
                  <li>Tecnología de vanguardia en análisis pericial</li>
                  <li>Actualización constante según nuevos descubrimientos</li>
                  <li>Bibliografía actualizada y papers científicos</li>
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
                  <li>Grupos de estudio dirigidos por docentes especializados</li>
                  <li>Proyectos interdisciplinarios entre diferentes carreras</li>
                  <li>Mentorías entre pares para reforzar conocimientos</li>
                  <li>Networking profesional con egresados y profesionales activos</li>
                  <li>Foros de discusión y análisis de casos grupales</li>
                  <li>Presentaciones públicas y defensa de trabajos</li>
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

      {/* Modalidades de Cursada */}
      <div className="cursada-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Modalidades de Cursada</h2>
            <p className="section-subtitle">
              Flexibilidad para adaptarse a tu ritmo de vida y objetivos profesionales
            </p>
          </div>
          
          <div className="cursada-grid">
            <div className="cursada-card">
              <div className="cursada-icon">
                <BuildingModernIcon />
              </div>
              <h3>Presencial</h3>
              <p>
                Clases en nuestras modernas instalaciones con acceso directo a laboratorios, 
                biblioteca especializada y interacción cara a cara con docentes y compañeros.
              </p>
              <div className="cursada-features">
                <div className="feature"><CheckCircleIcon /> Laboratorios equipados</div>
                <div className="feature"><CheckCircleIcon /> Biblioteca física</div>
                <div className="feature"><CheckCircleIcon /> Networking directo</div>
                <div className="feature"><CheckCircleIcon /> Supervisión personalizada</div>
              </div>
            </div>
            
            <div className="cursada-card">
              <div className="cursada-icon">
                <ComputerIcon />
              </div>
              <h3>Semi-presencial</h3>
              <p>
                Combina lo mejor de ambos mundos: clases presenciales para prácticas y 
                laboratorios, complementadas con contenido teórico online.
              </p>
              <div className="cursada-features">
                <div className="feature"><CheckCircleIcon /> Flexibilidad horaria</div>
                <div className="feature"><CheckCircleIcon /> Prácticas presenciales</div>
                <div className="feature"><CheckCircleIcon /> Contenido digital</div>
                <div className="feature"><CheckCircleIcon /> Tutorías virtuales</div>
              </div>
            </div>
            
            <div className="cursada-card">
              <div className="cursada-icon">
                <GlobeIcon />
              </div>
              <h3>Online</h3>
              <p>
                Acceso completo a la formación desde cualquier lugar, con clases en vivo, 
                material interactivo y seguimiento personalizado.
              </p>
              <div className="cursada-features">
                <div className="feature"><CheckCircleIcon /> Acceso 24/7</div>
                <div className="feature"><CheckCircleIcon /> Clases en vivo</div>
                <div className="feature"><CheckCircleIcon /> Material multimedia</div>
                <div className="feature"><CheckCircleIcon /> Grabaciones disponibles</div>
              </div>
            </div>
            
            <div className="cursada-card intensive">
              <div className="cursada-icon">
                <BoltIcon />
              </div>
              <h3>Intensivo</h3>
              <p>
                Programas acelerados para profesionales que buscan especializarse 
                rápidamente sin comprometer la calidad académica.
              </p>
              <div className="cursada-features">
                <div className="feature"><CheckCircleIcon /> Duración optimizada</div>
                <div className="feature"><CheckCircleIcon /> Contenido concentrado</div>
                <div className="feature"><CheckCircleIcon /> Ideal para profesionales</div>
                <div className="feature"><CheckCircleIcon /> Certificación rápida</div>
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

      {/* Instalaciones y Recursos */}
      <div className="instalaciones-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Instalaciones y Recursos</h2>
            <p className="section-subtitle">
              Espacios diseñados para potenciar tu aprendizaje y desarrollo profesional
            </p>
          </div>
          
          <div className="instalaciones-grid">
            <div className="instalacion-item">
              <div className="instalacion-icon">
                <FlaskIcon />
              </div>
              <h3>Laboratorios Especializados</h3>
              <p>Equipamiento de última generación para prácticas profesionales</p>
            </div>
            
            <div className="instalacion-item">
              <div className="instalacion-icon">
                <LibraryIcon />
              </div>
              <h3>Biblioteca Digital</h3>
              <p>Acceso a recursos bibliográficos actualizados y especializados</p>
            </div>
            
            <div className="instalacion-item">
              <div className="instalacion-icon">
                <ComputerIcon />
              </div>
              <h3>Aulas Tecnológicas</h3>
              <p>Espacios multimedia para una experiencia educativa moderna</p>
            </div>
            
            <div className="instalacion-item">
              <div className="instalacion-icon">
                <BuildingModernIcon />
              </div>
              <h3>Campus Moderno</h3>
              <p>Instalaciones cómodas y funcionales para el aprendizaje</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestraInstitucion;