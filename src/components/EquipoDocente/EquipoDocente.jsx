import React from 'react';
import './EquipoDocente.css';

const EquipoDocente = () => {
  const docentes = [
    {
      id: 1,
      nombre: "Alberto Antonio Domínguez Aguilera",
      titulo: "Técnico Superior en Grafología",
      especialidad: "Tit. Of. Nro. 506087",
      experiencia: ""
    },
    {
      id: 2,
      nombre: "Laura Emilce Ramírez",
      titulo: "Psicóloga Social",
      especialidad: "Técnica Superior en AT - Formación Universitaria",
      experiencia: ""
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
                    {docente.experiencia && (
                      <div className="experiencia-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span>{docente.experiencia}</span>
                      </div>
                    )}
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
