import React from 'react';
import './EquipoDocente.css';
import CloudinaryImage from '../CloudinaryImage';
import { cloudinaryImages } from '../../utils/cloudinaryImages';

const EquipoDocente = () => {
  const docentes = [
    {
      id: 1,
      nombre: "Dr. María Elena Rodríguez",
      titulo: "Doctora en Psicología Clínica",
      especialidad: "Especialista en Terapia Cognitivo-Conductual",
      experiencia: "15 años de experiencia",
      cloudinaryId: "instituto-isdep/profesores/profesor-girl",
      fallbackImage: cloudinaryImages.people.profesorGirl
    },
    {
      id: 2,
      nombre: "Lic. Carlos Alberto Mendez",
      titulo: "Licenciado en Grafología",
      especialidad: "Perito Calígrafo Judicial",
      experiencia: "12 años de experiencia",
      cloudinaryId: "instituto-isdep/profesores/profesor",
      fallbackImage: cloudinaryImages.people.profesor
    },
    {
      id: 3,
      nombre: "Dra. Ana Patricia Silva",
      titulo: "Doctora en Educación",
      especialidad: "Especialista en Metodología de la Enseñanza",
      experiencia: "20 años de experiencia",
      cloudinaryId: "instituto-isdep/profesores/profesor-girl",
      fallbackImage: cloudinaryImages.people.profesorGirl
    },
    {
      id: 4,
      nombre: "Prof. Roberto Ariel Vera",
      titulo: "Profesor en Artes Visuales",
      especialidad: "Ilustración y Diseño Gráfico",
      experiencia: "8 años de experiencia",
      cloudinaryId: "instituto-isdep/profesores/profesor",
      fallbackImage: cloudinaryImages.people.profesor
    },
    {
      id: 5,
      nombre: "Lic. Sofía Beatriz Morales",
      titulo: "Licenciada en Musicoterapia",
      especialidad: "Terapia Musical para Adultos Mayores",
      experiencia: "10 años de experiencia",
      cloudinaryId: "instituto-isdep/profesores/profesor-girl",
      fallbackImage: cloudinaryImages.people.profesorGirl
    },
    {
      id: 6,
      nombre: "Dr. Alejandro José Fernández",
      titulo: "Doctor en Psicología Educacional",
      especialidad: "Evaluación y Diagnóstico Psicopedagógico",
      experiencia: "18 años de experiencia",
      cloudinaryId: "instituto-isdep/profesores/profesor",
      fallbackImage: cloudinaryImages.people.profesor
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
            <div className="docentes-grid">
              {docentes.map((docente) => (
                <div key={docente.id} className="docente-card">
                  <div className="docente-image-container">
                    <CloudinaryImage
                      src={docente.fallbackImage}
                      fallbackSrc={docente.fallbackImage}
                      alt={docente.nombre}
                      className="docente-image"
                    />
                    <div className="image-overlay"></div>
                  </div>
                  
                  <div className="docente-info">
                    <div className="info-content">
                      <div className="info-header">
                        <h3 className="docente-nombre">{docente.nombre}</h3>
                      </div>
                      <p className="docente-titulo">{docente.titulo}</p>
                      <p className="docente-especialidad">{docente.especialidad}</p>
                    </div>
                    <div className="experiencia-container">
                      <span className="docente-experiencia">{docente.experiencia}</span>
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
