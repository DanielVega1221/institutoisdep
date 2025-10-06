import React from 'react';
import './EquipoDocente.css';
import CloudinaryImage from '../CloudinaryImage';
import { cloudinaryImages } from '../../utils/cloudinaryImages';

const EquipoDocente = () => {
  const docentes = [
    {
<<<<<<< HEAD
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
=======
    id: 1,
    nombre: "Dra. María Elena Rodríguez",
    titulo: "Doctora en Psicología",
    especialidad: "Grafología aplicada a la evaluación de la personalidad",
    experiencia: "15 años de experiencia en investigación y docencia",
    imagen: professorGirl
  },
  {
    id: 2,
    nombre: "Lic. Carlos Alberto Méndez",
    titulo: "Licenciado en Grafología",
    especialidad: "Perito Calígrafo Judicial y Análisis de Escritura Forense",
    experiencia: "12 años de experiencia en el ámbito judicial",
    imagen: profesorImg
  },
  {
    id: 3,
    nombre: "Dra. Ana Patricia Silva",
    titulo: "Doctora en Ciencias de la Educación",
    especialidad: "Metodología de la enseñanza y formación de grafólogos",
    experiencia: "20 años de trayectoria académica",
    imagen: professorGirl
  },
  {
    id: 4,
    nombre: "Prof. Roberto Ariel Vera",
    titulo: "Profesor en Grafotecnia",
    especialidad: "Técnicas avanzadas de análisis grafológico",
    experiencia: "10 años de experiencia en talleres y cursos prácticos",
    imagen: profesorImg
  },
  {
    id: 5,
    nombre: "Lic. Sofía Beatriz Morales",
    titulo: "Licenciada en Psicología",
    especialidad: "Aplicaciones terapéuticas de la grafología",
    experiencia: "14 años de experiencia clínica y docente",
    imagen: professorGirl
  },
  {
    id: 6,
    nombre: "Dr. Alejandro José Fernández",
    titulo: "Doctor en Psicopedagogía",
    especialidad: "Evaluación grafológica en contextos educativos",
    experiencia: "18 años de experiencia en investigación y asesoramiento institucional",
    imagen: profesorImg
  }
>>>>>>> 63ac8b8eee32eca21c0b7e2976054f188bbf6ece
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
