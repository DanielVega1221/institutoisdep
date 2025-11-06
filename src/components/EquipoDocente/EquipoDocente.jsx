import React from 'react';
import './EquipoDocente.css';

const EquipoDocente = () => {
  const docentes = [
    {
      id: 1,
      nombre: "Dr. María Elena Rodríguez",
      titulo: "Doctora en Psicología Clínica",
      especialidad: "Especialista en Terapia Cognitivo-Conductual",
      experiencia: "15 años de experiencia"
    },
    {
      id: 2,
      nombre: "Lic. Carlos Alberto Mendez",
      titulo: "Licenciado en Grafología",
      especialidad: "Perito Calígrafo Judicial",
      experiencia: "12 años de experiencia"
    },
    {
      id: 3,
      nombre: "Dra. Ana Patricia Silva",
      titulo: "Doctora en Educación",
      especialidad: "Especialista en Metodología de la Enseñanza",
      experiencia: "20 años de experiencia"
    },
    {
      id: 4,
      nombre: "Prof. Roberto Ariel Vera",
      titulo: "Profesor en Artes Visuales",
      especialidad: "Ilustración y Diseño Gráfico",
      experiencia: "8 años de experiencia"
    },
    {
      id: 5,
      nombre: "Lic. Sofía Beatriz Morales",
      titulo: "Licenciada en Musicoterapia",
      especialidad: "Terapia Musical para Adultos Mayores",
      experiencia: "10 años de experiencia"
    },
    {
      id: 6,
      nombre: "Dr. Alejandro José Fernández",
      titulo: "Doctor en Psicología Educacional",
      especialidad: "Evaluación y Diagnóstico Psicopedagógico",
      experiencia: "18 años de experiencia"
    }
  ];

  return (
    <section className="equipo-docente">
      <div className="container">
        <div className="main-card">
          <div className="card-header">
            <h2 className="section-title">Nuestro Equipo Docente</h2>
            <p className="section-subtitle">
              Profesionales altamente calificados comprometidos con la excelencia educativa
            </p>
          </div>
          
          <div className="card-content">
            <div className="docentes-lista">
              {docentes.map((docente, index) => (
                <div key={docente.id} className="docente-item" style={{ '--delay': `${index * 0.1}s` }}>
                  <div className="docente-left">
                    <div className="docente-avatar">
                      <span className="avatar-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                    <div className="docente-info-main">
                      <h3 className="docente-nombre">{docente.nombre}</h3>
                      <p className="docente-titulo">{docente.titulo}</p>
                      <p className="docente-especialidad">{docente.especialidad}</p>
                    </div>
                  </div>
                  <div className="docente-right">
                    <div className="experiencia-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span>{docente.experiencia}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="section-footer">
              <div className="footer-quote">
                <p className="footer-text">
                  Cada uno de nuestros docentes aporta su experiencia y pasión por la enseñanza, 
                  garantizando una formación integral y de calidad.
                </p>
                <div className="quote-signature">— Instituto ISDEP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipoDocente;
