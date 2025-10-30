
import React, { useState, useRef, useEffect } from "react";
import Contacto from "../Contacto/Contacto";
import CursoModal from "./CursoModal";
import "./Cursos.css";
// Usar imágenes locales optimizadas desde localImages
import { localImages } from "../../utils/localImages";

const cursosData = [
  {
    id: 1,
    emoji: "🎓",
    categoria: "CARRERA DE",
    titulo: "Formación Profesional en Psicografología",
    subtitulo: "Formación Profesional en Psicografología Científica",
    tituloAdquirido: "Perito en Psicografología Científica",
    tipo: "Carrera Terciaria",
    duracion: "2 años",
    modalidad: "Presencial",
    inicia: "Marzo",
    miniIntro: "Formate como perito en psicografología científica con validez nacional.",
    descripcion: "Carrera oficial de formación profesional en psicografología científica. Desarrollarás competencias para el análisis grafológico en ámbitos clínicos, educativos, laborales y forenses con metodología científica rigurosa.",
    items: [
      "Certificación oficial con validez nacional",
      "Práctica en laboratorio grafológico equipado",
      "Metodología científica aplicada",
      "Peritajes forenses y clínicos",
      "Acompañamiento docente especializado",
      "Convenios con instituciones públicas y privadas"
    ],
    requisitos: "Título secundario completo",
    salida_laboral: "Perito forense, consultor empresarial, clínica grafológica",
    extra: "Inscripciones abiertas - Cupos limitados para garantizar calidad educativa"
  },
  {
    id: 2,
    emoji: "💭",
    categoria: "SEMINARIO EN",
    titulo: "Grafología Emocional",
    subtitulo: "Seminario Profesional Intensivo",
    tituloAdquirido: "Certificado en Grafología Emocional",
    tipo: "Seminario Profesional",
    duracion: "2 meses",
    modalidad: "Intensivo",
    inicia: "Abril",
    miniIntro: "Seminario especializado en análisis emocional a través de la escritura manuscrita.",
    descripcion: "Seminario profesional que aborda el análisis de aspectos emocionales y psicológicos revelados en la escritura. Técnicas avanzadas para interpretar estados emocionales, patrones conductuales y rasgos de personalidad.",
    items: [
      "Técnicas de Curt A. Honroth",
      "Análisis de trazos emocionales",
      "Interpretación de presión y velocidad",
      "Casos prácticos reales",
      "Certificación profesional",
      "Material didáctico especializado"
    ],
    requisitos: "Conocimientos básicos en grafología (deseable)",
    salida_laboral: "Consultoría emocional, orientación vocacional, recursos humanos",
    extra: "Incluye kit de materiales profesionales y acceso a biblioteca digital"
  },
  {
    id: 3,
    emoji: "👥",
    categoria: "CARRERA DE",
  titulo: "Psicología Social",
  estado: "disponible",
    subtitulo: "Carrera Universitaria en Psicología Social",
    tituloAdquirido: "Psicólogo Social",
    tipo: "Carrera Universitaria",
    duracion: "3 años",
    modalidad: "Online con prácticas presenciales",
    inicia: "Marzo",
    miniIntro: "Carrera universitaria para intervenir profesionalmente en salud, educación, comunidad y organizaciones.",
    descripcion: "Carrera universitaria que forma profesionales capacitados para comprender e intervenir en fenómenos psicosociales. Aborda conformidad, persuasión, discriminación, agresión, relaciones intergrupales y dinámicas comunitarias con enfoque científico y ético.",
    items: [
      "Modalidad online con clases en vivo",
      "Prácticas profesionales supervisadas",
      "Certificación universitaria oficial",
      "Aval del Ministerio de Educación",
      "Acompañamiento tutorial permanente",
      "Enfoque comunitario y grupal",
      "Convenios para prácticas profesionales",
      "Acceso a plataforma virtual 24/7"
    ],
    planEstudios: {
      primer_ano: {
        titulo: "Primer Año",
        tituloObtenido: null,
        materias: [
          "Introducción a la Psicología Social",
          "Bibliografía de Pichón Riviere",
          "Comunicación 1",
          "Psicología General",
          "Filosofía",
          "Dialéctica",
          "Ana Quiroga",
          "Cono Invertido",
          "Psicoanálisis 1",
          "Teoría de Los grupos",
          "Vida Cotidiana 1",
          "Grupo Operativo",
          "Examen Final Grupal - Reelaboración y Presentación",
          "Examen Final Individual Teórico"
        ]
      },
      segundo_ano: {
        titulo: "Segundo Año",
        tituloObtenido: "Al completarlo se obtiene titulo de: Operador Preventivo en Salud Mental",
        materias: [
          "Articulación de Teorías de 1 año",
          "Operador Preventivo en Salud Mental",
          "Sociología",
          "Rol del Observador",
          "Función Práctica del Observador",
          "Técnicas Lúdicas",
          "Psicoanálisis II",
          "Psicología Familiar",
          "Ciclos vitales",
          "Vida cotidiana II",
          "Método Científico",
          "Examen Final Grupal - Reelaboración y Presentación",
          "Examen Final Individual Teórico"
        ]
      },
      tercer_ano: {
        titulo: "Tercer Año",
        tituloObtenido: "Al completarlo se obtiene titulo de: Psicólogo Social",
        materias: [
          "Articulación I",
          "Articulación II",
          "Articulación III",
          "Rol Coordinador",
          "Roles Complementarios",
          "Metodología de coordinación",
          "Función Práctica de coordinación",
          "Proyecto de investigación social",
          "Oratoria",
          "Taller 1: E.S.I",
          "Taller 2: Consumos Problemáticos",
          "Taller 3: Adolescencia",
          "Taller 4: Violencia de Género",
          "Taller 5: Salud Mental y Derechos Humanos",
          "Presentación Proyecto",
          "Examen Final Grupal - Reelaboración y Presentación",
          "Examen Final Individual Teórico"
        ]
      }
    },
    requisitos: "Título secundario completo",
    salida_laboral: "Hospitales, escuelas, ONGs, empresas, centros comunitarios",
    extra: "Cupos limitados - Reservá tu lugar hoy. Financiación disponible y becas por mérito académico"
  },
  {
    id: 4,
    emoji: "🔍",
    categoria: "DIPLOMATURA EN",
  titulo: "Criminalística",
  estado: "disponible",
    subtitulo: "Diplomatura Profesional en Ciencias Forenses",
    tituloAdquirido: "Diplomatura en Criminalística",
    tipo: "Diplomatura Superior",
    duracion: "12 meses",
    modalidad: "Semi-presencial",
    inicia: "Abril",
    miniIntro: "Diplomatura superior en investigación científica del delito y análisis forense.",
    descripcion: "Formación integral en criminalística moderna que integra conocimientos científicos para la investigación del delito. Abarca desde técnicas de laboratorio hasta perfilación criminal y análisis de evidencias con tecnología de vanguardia.",
    items: [
      "Laboratorio forense equipado",
      "Técnicas de investigación científica",
      "Análisis de evidencias físicas",
      "Perfilación criminal avanzada",
      "Tecnología forense actualizada",
      "Convenios con fuerzas de seguridad",
      "Prácticas en casos reales",
      "Certificación reconocida nacionalmente"
    ],
    requisitos: "Título terciario o universitario",
    salida_laboral: "Perito forense, investigador privado, asesor judicial",
    extra: "Incluye acceso a laboratorio forense y biblioteca especializada. Convenio con Poder Judicial"
  },
  {
    id: 5,
    emoji: "🛡️",
    categoria: "SEMINARIO EN",
  titulo: "Detección de Abuso Sexual Infantil",
  estado: "no disponible",
    subtitulo: "Seminario Profesional de Protección Infantil",
    tituloAdquirido: "Certificado en Detección de ASI",
    tipo: "Seminario Especializado",
    duracion: "4 meses",
    modalidad: "Semi-presencial",
    inicia: "Junio",
    miniIntro: "Seminario profesional para la detección temprana y abordaje del abuso sexual infantil.",
    descripcion: "Seminario especializado que capacita profesionales en la detección, evaluación e intervención en casos de abuso sexual infantil. Enfoque multidisciplinario con herramientas de diagnóstico y protocolos de actuación.",
    items: [
      "Indicadores físicos y psicológicos",
      "Técnicas de entrevista especializada",
      "Protocolos de intervención",
      "Marco legal y derechos del niño",
      "Trabajo interdisciplinario",
      "Prevención y detección temprana",
      "Acompañamiento familiar",
      "Supervisión clínica incluida"
    ],
    requisitos: "Profesionales de salud, educación o derecho",
    salida_laboral: "Hospitales, escuelas, juzgados, ONGs de protección infantil",
    extra: "Certificación válida para concursos públicos. Incluye material bibliográfico especializado"
  },
  {
    id: 6,
    emoji: "⚖️",
    categoria: "CURSO EN",
  titulo: "Psicología Social y Criminalística Aplicada",
  estado: "disponible",
    subtitulo: "Curso de Especialización Interdisciplinaria",
    tituloAdquirido: "Especialista en Psicología Social Forense",
    tipo: "Curso de Especialización",
    duracion: "4 meses",
    modalidad: "Online",
    inicia: "Mayo",
    miniIntro: "Especialización en la intersección entre psicología social y investigación criminal.",
    descripcion: "Curso avanzado que integra conocimientos de psicología social con técnicas criminalísticas. Analiza comportamientos grupales en contextos delictivos y desarrolla estrategias de intervención psicosocial en el ámbito forense.",
    items: [
      "Psicología del comportamiento criminal",
      "Dinámicas grupales delictivas",
      "Técnicas de interrogatorio psicológico",
      "Análisis de víctimización",
      "Prevención del delito comunitaria",
      "Peritajes psicosociales",
      "Casos prácticos forenses"
    ],
    requisitos: "Formación en psicología o criminalística",
    salida_laboral: "Perito psicosocial, consultor forense, investigador criminal",
    extra: "Acceso a base de datos de casos reales y simuladores de investigación"
  },
  {
    id: 7,
    emoji: "🔬",
    categoria: "POSGRADO EN",
  titulo: "Tecnografía Pericial Grafológica",
  estado: "disponible",
    subtitulo: "Posgrado Especializado para Peritos",
    tituloAdquirido: "Especialista en Tecnografía Pericial",
    tipo: "Posgrado Especializado",
    duracion: "6 meses",
    modalidad: "Presencial intensivo",
    inicia: "Abril",
    miniIntro: "Posgrado especializado en tecnología aplicada al análisis pericial grafológico.",
    descripcion: "Formación avanzada en el uso de tecnología de última generación para peritajes grafológicos. Combina métodos tradicionales con análisis digital, microscopia forense y software especializado para dictámenes periciales de máxima precisión.",
    items: [
      "Microscopía forense avanzada",
      "Software de análisis digital",
      "Espectrofotometría aplicada",
      "Técnicas de datación de tintas",
      "Análisis de soportes papeleros",
      "Documentos dubitados e indubitados",
      "Informes periciales técnicos",
      "Tecnología de identificación biométrica"
    ],
    requisitos: "Título de perito grafólogo o equivalente",
    salida_laboral: "Perito judicial especializado, consultor técnico, investigador forense",
    extra: "Laboratorio equipado con tecnología europea. Certificación internacional disponible"
  },
  {
    id: 8,
    emoji: "✍️",
    categoria: "CURSO EN",
  titulo: "Análisis de Firmas y Rúbricas",
  estado: "disponible",
    subtitulo: "Curso Técnico Especializado",
    tituloAdquirido: "Especialista en Análisis de Firmas",
    tipo: "Curso Técnico",
    duracion: "3 meses",
    modalidad: "Semi-presencial",
    inicia: "Mayo",
    miniIntro: "Curso técnico especializado en autenticación y análisis forense de firmas y rúbricas.",
    descripcion: "Formación técnica especializada en el análisis científico de firmas manuscritas y rúbricas. Desarrolla competencias para la detección de falsificaciones, análisis de autenticidad y peritajes documentales con metodología forense rigurosa.",
    items: [
      "Técnicas de identificación grafológica",
      "Análisis de falsificaciones",
      "Métodos de comparación científica",
      "Presión, velocidad y ritmo gráfico",
      "Características de identificación personal",
      "Dictámenes periciales especializados",
      "Casos prácticos documentales",
      "Tecnología de análisis digital"
    ],
    requisitos: "Conocimientos básicos en grafología",
    salida_laboral: "Perito calígrafo, consultor bancario, análisis documental",
    extra: "Convenios con entidades bancarias y notariales. Kit de herramientas profesionales incluido"
  },
  {
    id: 9,
    emoji: "🆘",
    categoria: "CURSO DE",
  titulo: "Operador en Primeros Auxilios Psicológicos",
  estado: "no disponible",
    subtitulo: "Capacitación en Intervención de Crisis",
    tituloAdquirido: "Operador en Primeros Auxilios Psicológicos",
    tipo: "Capacitación Oficial",
    duracion: "2 meses",
    modalidad: "Presencial",
    inicia: "Agosto",
    miniIntro: "Capacitación oficial para asistencia emocional inmediata en situaciones de emergencia y crisis.",
    descripcion: "Formación especializada para brindar contención y asistencia psicológica inmediata en situaciones de crisis, emergencias y catástrofes. Desarrolla competencias para la estabilización emocional y derivación apropiada.",
    items: [
      "Técnicas de contención emocional",
      "Protocolo de intervención en crisis",
      "Manejo de situaciones traumáticas",
      "Primeros auxilios psicológicos",
      "Trabajo en equipo interdisciplinario",
      "Autoprotección del operador",
      "Técnicas de comunicación asertiva",
      "Práctica en simulacros reales"
    ],
    requisitos: "Título secundario completo",
    salida_laboral: "Emergencias médicas, bomberos, defensa civil, ONGs",
    extra: "Certificación oficial válida para organismos de emergencia. Incluye kit de primera intervención"
  },
  {
    id: 10,
    emoji: "🧩",
    categoria: "CURSO DE",
  titulo: "Perfilamiento Criminal",
  estado: "disponible",
    subtitulo: "Especialización en Criminal Profiling",
    tituloAdquirido: "Especialista en Perfilamiento Criminal",
    tipo: "Curso Especializado",
    duracion: "6 meses",
    modalidad: "Semi-presencial",
    inicia: "Abril",
    miniIntro: "Especialización en construcción de perfiles psicológicos delictivos y análisis conductual.",
    descripcion: "Formación avanzada en criminal profiling que combina criminología, psicología forense y análisis conductual. Desarrolla competencias para construir perfiles delictivos, analizar escenas del crimen y asistir en investigaciones judiciales.",
    items: [
      "Técnicas de perfilación psicológica",
      "Análisis de escenas del crimen",
      "Tipologías criminales",
      "Psicopatología forense",
      "Métodos de investigación criminal",
      "Análisis de modus operandi",
      "Geografía del delito",
      "Casos prácticos internacionales"
    ],
    requisitos: "Formación en psicología, criminalística o derecho",
    salida_laboral: "Fuerzas de seguridad, consultoría forense, investigación judicial",
    extra: "Acceso a base de casos del FBI. Metodología internacional validada"
  },
  {
    id: 11,
    emoji: "🧾",
    categoria: "CURSO DE",
  titulo: "Grafología Forense",
  estado: "disponible",
    subtitulo: "Especialización en Peritajes Documentales",
    tituloAdquirido: "Perito Grafólogo Forense",
    tipo: "Curso Profesional",
    duracion: "9 meses",
    modalidad: "Presencial",
    inicia: "Marzo",
    miniIntro: "Especialización en análisis forense de manuscritos y peritajes documentales judiciales.",
    descripcion: "Formación profesional especializada en grafología aplicada al ámbito forense. Capacita para realizar peritajes documentales, análisis de autenticidad y dictámenes judiciales con validez legal y metodología científica reconocida.",
    items: [
      "Metodología pericial científica",
      "Análisis de documentos dubitados",
      "Técnicas de laboratorio forense",
      "Dictámenes judiciales",
      "Falsificación documental",
      "Legislación pericial vigente",
      "Presentación en tribunales",
      "Ética profesional pericial"
    ],
    requisitos: "Título en grafología o psicografología",
    salida_laboral: "Perito judicial, consultor legal, investigación documental",
    extra: "Habilitación para actuar como perito de oficio. Laboratorio forense especializado"
  },
  {
    id: 12,
    emoji: "🎨",
    categoria: "CURSO DE",
  titulo: "Análisis de Dibujos Proyectivos",
  estado: "disponible",
    subtitulo: "Especialización en Técnicas Proyectivas",
    tituloAdquirido: "Especialista en Técnicas Proyectivas",
    tipo: "Curso Proyectivo",
    duracion: "4 meses",
    modalidad: "Presencial",
    inicia: "Mayo",
    miniIntro: "Especialización en interpretación psicológica del dibujo infantil, adolescente y adulto.",
    descripcion: "Formación especializada en el análisis e interpretación de dibujos como herramienta proyectiva en evaluación psicológica. Aborda técnicas diagnósticas, terapéuticas y forenses aplicadas a diferentes grupos etarios.",
    items: [
      "Test del dibujo de la familia",
      "Análisis del dibujo libre",
      "Interpretación de colores y formas",
      "Técnicas proyectivas específicas",
      "Aplicación clínica y forense",
      "Evaluación del desarrollo psicomotor",
      "Indicadores de conflicto emocional",
      "Informe psicológico especializado"
    ],
    requisitos: "Formación en psicología o áreas afines",
    salida_laboral: "Consultorios psicológicos, escuelas, hospitales, peritajes",
    extra: "Material didáctico especializado y casos clínicos supervisados incluidos"
  },
  // NUEVOS CURSOS
  {
    id: 13,
    emoji: "🎓",
    categoria: "CARRERA DE",
    titulo: "Formación Profesional en Psicografología",
    subtitulo: "Carrera Profesional en Análisis Psicografológico",
    tituloAdquirido: "Psicografólogo Profesional",
    tipo: "Carrera Profesional",
    duracion: "18 meses",
    modalidad: "Presencial",
    inicia: "Marzo",
    estado: "disponible",
    miniIntro: "Formación integral en psicografología moderna con enfoque científico y aplicación práctica.",
    descripcion: "Carrera profesional que forma especialistas en análisis psicografológico aplicando metodologías científicas actualizadas. Combina teoría psicológica con técnicas grafológicas avanzadas para el análisis de personalidad y comportamiento humano a través de la escritura manuscrita.",
    items: [
      "Fundamentos neuropsicológicos de la escritura",
      "Técnicas de análisis grafológico moderno",
      "Interpretación psicológica avanzada",
      "Metodología científica aplicada",
      "Análisis de casos clínicos reales",
      "Herramientas digitales especializadas",
      "Ética profesional en psicografología",
      "Elaboración de informes técnicos"
    ],
    requisitos: "Título secundario completo. Preferible formación en psicología o ciencias sociales",
    salida_laboral: "Consultoría empresarial, orientación vocacional, peritajes judiciales, clínica privada",
    extra: "Certificación con validez nacional. Convenios con instituciones de salud mental y empresas"
  },
  {
    id: 14,
    emoji: "👥",
    categoria: "CARRERA DE",
    titulo: "Formación Profesional en Psicología Social",
    subtitulo: "Carrera Profesional en Intervención Psicosocial",
    tituloAdquirido: "Técnico en Psicología Social",
    tipo: "Carrera Profesional",
    duracion: "2 años",
    modalidad: "Semi-presencial",
    inicia: "Marzo",
    estado: "disponible",
    miniIntro: "Formación profesional en intervención psicosocial y trabajo comunitario con metodología grupal.",
    descripcion: "Carrera que prepara profesionales especializados en dinámicas grupales, intervención comunitaria y procesos psicosociales. Desarrolla competencias para el trabajo en equipos interdisciplinarios y la promoción de salud mental comunitaria.",
    items: [
      "Teorías de la psicología social moderna",
      "Técnicas de intervención grupal",
      "Metodología de trabajo comunitario",
      "Dinámicas de grupo operativo",
      "Prevención en salud mental",
      "Técnicas de coordinación de equipos",
      "Investigación social aplicada",
      "Prácticas profesionales supervisadas"
    ],
    requisitos: "Título secundario completo",
    salida_laboral: "Centros de salud, organizaciones comunitarias, empresas, municipios, ONGs",
    extra: "Prácticas en instituciones públicas y privadas. Metodología basada en Pichón-Rivière"
  },
  {
    id: 15,
    emoji: "🔍",
    categoria: "CURSO DE",
    titulo: "Detección en Falsificación de Firmas",
    subtitulo: "Especialización en Análisis Documentoscópico",
    tituloAdquirido: "Especialista en Detección de Falsificaciones",
    tipo: "Curso Especializado",
    duracion: "3 meses",
    modalidad: "Presencial intensivo",
    inicia: "Abril",
    estado: "disponible",
    miniIntro: "Curso especializado en técnicas científicas para detectar falsificaciones documentales y de firmas.",
    descripcion: "Formación técnica especializada en métodos científicos para la detección de falsificaciones en documentos y firmas. Utiliza tecnología de vanguardia y metodologías forenses reconocidas internacionalmente para el análisis documentoscópico.",
    items: [
      "Técnicas de análisis microscópico",
      "Identificación de tintas y papeles",
      "Métodos de comparación grafológica",
      "Uso de luz infrarroja y ultravioleta",
      "Software especializado en análisis",
      "Elaboración de informes periciales",
      "Legislación en documentoscopía",
      "Casos prácticos de laboratorio"
    ],
    requisitos: "Formación en grafología, criminalística o áreas afines",
    salida_laboral: "Perito judicial, consultor bancario, investigador privado, asesor notarial",
    extra: "Laboratorio equipado con tecnología europea. Certificación reconocida por el Poder Judicial"
  },
  {
    id: 16,
    emoji: "💭",
    categoria: "CAPACITACIÓN EN",
    titulo: "Capacitación Profesional en Grafología Emocional",
    subtitulo: "Especialización en Análisis Emocional Grafológico",
    tituloAdquirido: "Especialista en Grafología Emocional",
    tipo: "Capacitación Profesional",
    duracion: "4 meses",
    modalidad: "Semi-presencial",
    inicia: "Marzo",
    estado: "disponible",
    miniIntro: "Capacitación avanzada en interpretación de estados emocionales a través del análisis grafológico.",
    descripcion: "Programa de capacitación que profundiza en el análisis de aspectos emocionales revelados en la escritura manuscrita. Integra conocimientos de psicología emocional con técnicas grafológicas especializadas para la evaluación de estados afectivos y patrones emocionales.",
    items: [
      "Neurociencia de las emociones en la escritura",
      "Indicadores grafológicos de estados afectivos",
      "Análisis de presión y velocidad emocional",
      "Detección de estrés y ansiedad en el grafismo",
      "Técnicas de Honroth actualizadas",
      "Interpretación de cambios emocionales",
      "Aplicación terapéutica y clínica",
      "Protocolos de evaluación emocional"
    ],
    requisitos: "Formación básica en grafología o psicología",
    salida_laboral: "Consultoría emocional, centros de salud mental, orientación vocacional, coaching",
    extra: "Incluye kit de materiales de análisis y acceso a biblioteca digital especializada"
  },
  {
    id: 17,
    emoji: "🔬",
    categoria: "DIPLOMATURA EN",
    titulo: "Diplomatura Profesional en Criminalística",
    subtitulo: "Formación Integral en Ciencias Forenses",
    tituloAdquirido: "Técnico en Criminalística",
    tipo: "Diplomatura Profesional",
    duracion: "15 meses",
    modalidad: "Presencial",
    inicia: "Abril",
    estado: "disponible",
    miniIntro: "Diplomatura integral en ciencias forenses con formación práctica en laboratorio especializado.",
    descripcion: "Formación completa en criminalística que abarca todas las áreas de las ciencias forenses modernas. Incluye formación teórica sólida y práctica intensiva en laboratorio equipado con tecnología de última generación para la investigación científica del delito.",
    items: [
      "Balística forense y armamentos",
      "Dactiloscopía y lofoscopía",
      "Química forense y toxicología",
      "Fotografía y planimetría forense",
      "Genética forense y ADN",
      "Accidentología vial",
      "Incendios y explosivos",
      "Antropología forense",
      "Entomología forense",
      "Informática forense básica"
    ],
    requisitos: "Título secundario completo. Preferible formación técnica o universitaria",
    salida_laboral: "Policía científica, poder judicial, consultorías forenses, investigación privada",
    extra: "Laboratorio forense completo. Convenios con fuerzas de seguridad nacionales e internacionales"
  },
  {
    id: 18,
    emoji: "⚖️",
    categoria: "DIPLOMATURA EN",
    titulo: "Diplomatura Superior en Tecnografía Pericial Forense Área Grafológica",
    subtitulo: "Especialización Superior en Peritajes Tecnográficos",
    tituloAdquirido: "Perito Superior en Tecnografía Forense",
    tipo: "Diplomatura Superior",
    duracion: "12 meses",
    modalidad: "Presencial intensivo",
    inicia: "Abril",
    estado: "disponible",
    miniIntro: "Diplomatura superior en tecnología aplicada a peritajes grafológicos con metodología forense avanzada.",
    descripcion: "Formación de élite en tecnografía pericial forense que combina las técnicas grafológicas tradicionales con la más alta tecnología disponible. Dirigida a profesionales que buscan especialización en peritajes de máxima complejidad y precisión científica.",
    items: [
      "Microscopia electrónica aplicada",
      "Espectroscopia infrarroja FTIR",
      "Análisis cromatográfico de tintas",
      "Datación científica de documentos",
      "Software forense especializado",
      "Técnicas de revelado químico",
      "Análisis de soportes y adhesivos",
      "Metodología VSC (Video Spectral Comparator)",
      "Documentos de seguridad y billetes",
      "Presentación pericial en tribunales"
    ],
    requisitos: "Título universitario o terciario en grafología, criminalística o áreas afines",
    salida_laboral: "Perito de máximo nivel, consultor internacional, investigador forense senior",
    extra: "Laboratorio con tecnología europea de última generación. Certificación internacional disponible"
  }
];

const Cursos = ({ setSelectedInteres, contactoRef, focusCarrera, setFocusCarrera }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);
  const cardTitleRefs = useRef({});
  const [pendingFocus, setPendingFocus] = useState(null);
  const [selectedCurso, setSelectedCurso] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Minimizar acordeón si la sección sale de pantalla
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isExpanded) {
          setIsExpanded(false);
        }
      },
      { threshold: 0.01 }
    );
    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, [isExpanded]);

  // Para scroll y auto-selección
  const handleSolicitarInfo = (titulo) => {
    setSelectedInteres(titulo);
    setTimeout(() => {
      if (contactoRef && contactoRef.current) {
        contactoRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  // Funciones para el modal
  const handleVerMas = (curso) => {
    setSelectedCurso(curso);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCurso(null);
  };

  // Enfocar card cuando focusCarrera cambia
  useEffect(() => {
    if (focusCarrera) {
      if (!isExpanded) {
        setTimeout(() => {
          setIsExpanded(true);
          setPendingFocus(focusCarrera);
        }, 1000); // 1 segundo de delay antes de expandir el acordeón
      } else {
        setPendingFocus(focusCarrera);
      }
    }
  }, [focusCarrera, isExpanded, setFocusCarrera]);

  // Cuando el acordeón se expande y hay un pendingFocus, hacer scroll a la card
  useEffect(() => {
    if (isExpanded && pendingFocus) {
      setTimeout(() => {
        // Buscar ref por todas las claves posibles
        let ref = cardTitleRefs.current[pendingFocus];
        if (!ref) {
          // Buscar por título o título adquirido
          Object.keys(cardTitleRefs.current).forEach(key => {
            if (key.includes(pendingFocus) || pendingFocus.includes(key)) {
              ref = cardTitleRefs.current[key];
            }
          });
        }
        
        const focusKey = pendingFocus;
        console.log('Buscando:', focusKey, 'Encontrado ref:', !!ref);
        console.log('Refs disponibles:', Object.keys(cardTitleRefs.current));
        
        if (ref) {
          // Hacer scroll para asegurar visibilidad
          ref.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          console.log('No se encontró ref para:', focusKey);
        }
        
        setPendingFocus(null);
        if (setFocusCarrera) setFocusCarrera(null);
      }, 1500);
    }
  }, [isExpanded, pendingFocus, setFocusCarrera]);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const getTipoColor = (tipo) => {
    const colors = {
      'Carrera Terciaria': '#1e3a8a',  // Azul institucional principal
      'Seminario': '#2d5a87',          // Azul institucional secundario
      'Especialización': '#3182ce',    // Azul claro institucional
      'Diplomatura': '#B8860B',        // Dorado institucional
      'Certificación': '#0F2A4E',      // Azul marino institucional
      'Curso': '#2d5a87'               // Azul secundario
    };
    return colors[tipo] || '#1e3a8a';
  };

  // Render
  return (
    <section 
      className={`cursos-section ${isExpanded ? 'accordion-expanded' : ''}`}
      ref={sectionRef}
      style={{
        '--cursos-bg-image': `url(${localImages.banners.fondoParaCursos})`
      }}
    >
      {/* Efectos de fondo sutiles sin animación */}
      <div className="cursos-bg-effects">
        <div className="cursos-particles"></div>
        <div className="cursos-gradient-overlay"></div>
      </div>
      
      <div className="cursos-container">
        {/* Hero Section Compacto */}
        <div className="cursos-hero-section">
          <div className="cursos-hero-content">
            <div className="cursos-hero-main">
              <div className="cursos-hero-left">
                <div className="cursos-hero-badge">
                  <span className="hero-badge-icon">🏆</span>
                  <span>Instituto Líder en Formación Profesional</span>
                </div>
                
                <h1 className="cursos-hero-title">
                  Transformá tu futuro con
                  <span className="hero-title-highlight"> carreras que marcan la diferencia</span>
                </h1>
                
                <p className="cursos-hero-subtitle">
                  Formación profesional de excelencia con <strong>validez nacional</strong> y 
                  <strong> reconocimiento internacional</strong>. Tu éxito profesional comienza aquí.
                </p>

                {/* Badges de credibilidad compactos */}
                <div className="cursos-credibility-badges">
                  <div className="cred-badge">
                    <span className="cred-icon">📜</span>
                    <span>Certificación Nacional</span>
                  </div>
                  <div className="cred-badge">
                    <span className="cred-icon">💼</span>
                    <span>Salida Laboral Garantizada</span>
                  </div>
                </div>
              </div>
              
              <div className="cursos-hero-right">
                {/* Estadísticas compactas */}
                <div className="cursos-stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">+850</div>
                    <div className="stat-label">Graduados</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Inserción Laboral</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">25+</div>
                    <div className="stat-label">Años</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Avalado</div>
                  </div>
                </div>
                
                {/* CTA compacto */}
                <div className="cursos-hero-cta">
                  <div className="hero-cta-text">
                    <h3>¿Listo para cambiar tu vida?</h3>
                    <p>Descubrí nuestras carreras</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Acordeón */}
        <div className="accordion-container">
          <button 
            className={`accordion-trigger ${isExpanded ? 'expanded' : ''}`}
            onClick={toggleAccordion}
            aria-expanded={isExpanded}
          >
            <span className="accordion-text">
              {isExpanded ? 'Ocultar cursos y carreras' : 'Ver todos nuestros cursos y carreras'}
            </span>
            <svg 
              className={`accordion-arrow ${isExpanded ? 'rotated' : ''}`} 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none"
            >
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Cards container */}
          <div className={`cards-container ${isExpanded ? 'expanded' : ''}`}>
            <div className="cards-grid">
              {cursosData.map((curso) => (
                <div
                  key={curso.id}
                  className="curso-card"
                  style={{ '--delay': `${curso.id * 0.15}s` }}
                >
                  {/* Banner de curso con icono */}
                  <div className="curso-card-banner">
                    <div 
                      className="curso-card-banner-bg"
                      style={{ backgroundImage: `url(${localImages.banners.cursosBanner})` }}
                    >
                      <div className="curso-card-banner-overlay"></div>
                      {/* Icono flotante en el banner */}
                      <div className="banner-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                          {/* Base del birrete */}
                          <path d="M3 12L12 8L21 12L12 16L3 12Z" fill="rgba(255,255,255,0.9)" stroke="rgba(255,255,255,0.9)" strokeWidth="1"/>
                          {/* Top del birrete */}
                          <path d="M6 12V16C6 17.1046 8.68629 20 12 20C15.3137 20 18 17.1046 18 16V12" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round"/>
                          {/* Borla */}
                          <circle cx="21" cy="12" r="1.5" fill="rgba(255,255,255,0.9)"/>
                          <path d="M21 13.5L21 15" stroke="rgba(255,255,255,0.9)" strokeWidth="1" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <div className="card-content-wrapper">
                      {/* Header simplificado */}
                      <div className="card-header-simple">
                        <div className="card-title-container-simple">
                          <span className="card-categoria-simple">{curso.categoria}</span>
                          <h3 className="card-titulo-simple">{curso.titulo}</h3>
                        </div>
                      </div>

                      {/* Badges esenciales + estado */}
                      <div className="card-badges-simple" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="tipo-badge-simple" style={{ backgroundColor: getTipoColor(curso.tipo) }}>
                          {curso.tipo}
                        </span>
                        <span className="duracion-badge-simple">{curso.duracion}</span>
                        <span className="inicia-badge-simple">Inicia: {curso.inicia}</span>
                        <span className={`estado-badge-simple ${curso.estado === 'disponible' ? 'estado-disponible' : 'estado-no-disponible'}`}>{curso.estado === 'disponible' ? 'Disponible' : 'No disponible'}</span>
                      </div>

                    {/* Intro resumida */}
                    <div className="card-intro-simple">
                      <p>{curso.miniIntro}</p>
                    </div>

                    {/* Botones */}
                    <div className="card-buttons-simple">
                      <button className="card-button-ver-mas" onClick={() => handleVerMas(curso)}>
                        <span>Ver más detalles</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                      <button 
                        className="card-button-solicitar"
                        onClick={() => handleSolicitarInfo(curso.titulo)}
                        disabled={curso.estado !== 'disponible'}
                        style={curso.estado !== 'disponible' ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
                      >
                        <span>{curso.estado === 'disponible' ? 'Consultar' : 'No disponible'}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    </div> {/* Cierre de card-content-wrapper */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal del curso */}
      <CursoModal 
        curso={selectedCurso}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSolicitarInfo={handleSolicitarInfo}
      />
    </section>
  );
};

export default Cursos;
