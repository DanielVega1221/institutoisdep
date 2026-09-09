/* =====================================================================================
   DATOS DE CARRERAS Y CURSOS DE ISDEP
   Fuente única de datos para:
     - src/components/Cursos/Cursos.jsx  (los dos dropdowns de la sección #cursos)
     - src/pages/FormacionDetallePage.jsx (página de detalle /carreras/:slug y /cursos/:slug)

   ANTERIOR: estos datos vivían dentro del array `cursosData` de Cursos.jsx
   (hoy comentado en ese mismo archivo y conservado intacto en CursosAnterior.jsx).

   CAMPOS NUEVOS respecto de la versión anterior:
     - slug           -> se usa en la URL de la página de detalle
     - tipoFormacion  -> "carrera" | "curso"
     - nombre         -> texto exacto que se muestra en el dropdown
                         (solo se declara cuando difiere de `titulo`)
     - tituloAnterior -> nombre que tenía antes del cambio, para trazabilidad
   ===================================================================================== */

/* -------------------------------------------------------------------------------------
   CARRERAS
   Las 6 carreras que pidió el cliente. Mapeo confirmado:
     Psicología Social                                        <- id 2 (datos intactos)
     Grafología Científica                                    <- id 13 (Psicografología)
     Diplomatura Superior en Psicología Social Psicoanalítica <- nueva (datos estimados)
     Analista en Criminalística                               <- id 3 (Criminalística)
     Diplomatura Profesional en Criminalística y Criminología <- id 16 (+ criminología)
     Tramo Terciario de Técnico Superior en Psicología Social <- nueva (datos estimados)
   ------------------------------------------------------------------------------------- */
export const carrerasData = [
  {
    id: 2,
    slug: "psicologia-social",
    tipoFormacion: "carrera",
    tituloAnterior: "Formación Profesional en Psicología Social",
    emoji: "👥",
    categoria: "CARRERA DE",
    titulo: "Psicología Social",
    estado: "disponible",
    subtitulo: "Carrera en Psicología Social",
    tituloAdquirido: "Psicólogo Social",
    tipo: "Carrera Profesional",
    duracion: "3 años",
    modalidad: "Online - Google Meet",
    inicia: "Marzo",
    miniIntro: "Carrera para intervenir profesionalmente en salud, educación, comunidad y organizaciones en el marco de la ley 26.206 y concordantes de Salud Mental.",
    descripcion: "Carrera que forma profesionales capacitados para comprender e intervenir en fenómenos psicosociales en el marco de la ley 26.206 y concordantes de Salud Mental. Aborda conformidad, persuasión, discriminación, agresión, relaciones intergrupales y dinámicas comunitarias con enfoque científico y ético.",
    items: [
      "Modalidad online con clases en vivo",
      "Material bibliográfico completo",
      "Acompañamiento tutorial permanente",
      "Enfoque comunitario y grupal",
      "Estudio de casos reales supervisados",
      "Acceso a plataforma virtual 24/7",
      "Recursos didácticos actualizados"
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
        tituloObtenido: "Al completarlo se obtiene el título de: Operador Preventivo en Salud Mental",
        materias: [
          "Articulación de Teorías de 1 año",
          "Operador Preventivo en Salud Mental",
          "Sociología",
          "Rol del Observador",
          "Función y Aplicación del Observador",
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
        tituloObtenido: "Al completarlo se obtiene el título de: Psicólogo Social",
        materias: [
          "Articulación I",
          "Articulación II",
          "Articulación III",
          "Rol Coordinador",
          "Roles Complementarios",
          "Metodología de coordinación",
          "Función y Aplicación de coordinación",
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
    // DATOS ESTIMADOS A MODO DE MUESTRA - REVISAR CON EL CLIENTE
    id: 13,
    slug: "grafologia-cientifica",
    tipoFormacion: "carrera",
    tituloAnterior: "Formación Profesional en Psicografología",
    emoji: "🎓",
    categoria: "CARRERA DE",
    titulo: "Grafología Científica",
    subtitulo: "Carrera Profesional en Grafología Científica",
    tituloAdquirido: "Perito en Grafología Científica",
    tipo: "Carrera Profesional",
    duracion: "2 años",
    modalidad: "Online - Google Meet",
    inicia: "Marzo",
    estado: "disponible",
    miniIntro: "Formación integral en grafología científica, con metodología de investigación y aplicación práctica en el análisis de la escritura manuscrita.",
    descripcion: "Carrera profesional que forma especialistas en el análisis científico de la escritura manuscrita. Combina los fundamentos de la psicología de la escritura con técnicas grafológicas avanzadas y metodología de investigación, para la interpretación de la personalidad, el comportamiento humano y la elaboración de informes técnicos.",
    items: [
      "Fundamentos neuropsicológicos de la escritura",
      "Técnicas de análisis grafológico moderno",
      "Interpretación psicológica avanzada",
      "Metodología científica aplicada",
      "Análisis de casos clínicos reales",
      "Herramientas digitales especializadas",
      "Ética profesional en grafología",
      "Elaboración de informes técnicos"
    ],
    /* PENDIENTE CLIENTE: plan de estudios TENTATIVO - validar con el cliente el contenido
       real de la carrera (este item no tenía plan un plan en los datos anteriores). */
    planEstudios: {
      primer_ano: {
        titulo: "Primer Año",
        tituloObtenido: null,
        materias: [
          "Fundamentos de Grafología General",
          "Bases Neuropsicológicas de la Escritura",
          "Morfología del Gesto Gráfico",
          "Historia de la Grafología Científica",
          "Introducción a la Psicología de la Personalidad",
          "Metodología de la Investigación I",
          "Taller de Práctica Grafológica I",
          "Examen Final Grupal - Reelaboración y Presentación"
        ]
      },
      segundo_ano: {
        titulo: "Segundo Año",
        tituloObtenido: "Al completarlo se obtiene el título de: Perito en Grafología Científica",
        materias: [
          "Psicopatología y Grafología",
          "Técnicas Avanzadas de Análisis Grafológico (Curt A. Honroth)",
          "Grafopatología",
          "Informe Pericial Grafológico",
          "Metodología de la Investigación II",
          "Taller de Práctica Grafológica II",
          "Ética y Deontología Profesional",
          "Trabajo Final Integrador"
        ]
      }
    },
    requisitos: "Secundario completo. Preferible formación en psicología o ciencias sociales",
    salida_laboral: "Consultoría empresarial, orientación vocacional, peritajes judiciales, clínica privada",
    extra: "Material didáctico completo y acceso a recursos profesionales especializados"
  },
  {
    // CARRERA NUEVA - DATOS ESTIMADOS A MODO DE MUESTRA - REVISAR CON EL CLIENTE
    id: 18,
    slug: "diplomatura-superior-en-psicologia-social-psicoanalitica",
    tipoFormacion: "carrera",
    emoji: "🧠",
    categoria: "DIPLOMATURA SUPERIOR EN",
    nombre: "Diplomatura Superior en Psicología Social Psicoanalítica",
    titulo: "Psicología Social Psicoanalítica",
    subtitulo: "Diplomatura Superior de Posgrado",
    tituloAdquirido: "Diplomado Superior en Psicología Social Psicoanalítica",
    tipo: "Diplomatura Superior",
    duracion: "1 año",
    modalidad: "Online - Google Meet",
    inicia: "Abril",
    estado: "disponible",
    miniIntro: "Diplomatura superior que articula el psicoanálisis con la psicología social para el abordaje de los fenómenos grupales, institucionales y comunitarios.",
    descripcion: "Formación de posgrado que profundiza la articulación entre el psicoanálisis y la psicología social de Enrique Pichon Rivière. Aborda la constitución del sujeto, los procesos grupales e institucionales y las modalidades de intervención en el campo de la salud mental, con una fuerte orientación a la práctica profesional supervisada.",
    items: [
      "Psicoanálisis y psicología social: articulaciones teóricas",
      "Concepto de sujeto, inconsciente y vínculo",
      "Teoría y técnica del grupo operativo",
      "Esquema conceptual, referencial y operativo",
      "Instituciones: subjetividad y procesos organizacionales",
      "Clínica de lo social y dispositivos de intervención",
      "Psicoanálisis y comunidad: territorio y lazos sociales",
      "Taller de práctica profesional supervisada",
      "Trabajo final integrador de campo"
    ],
    planEstudios: {
      primer_cuatrimestre: {
        titulo: "Primer Cuatrimestre",
        tituloObtenido: null,
        materias: [
          "Fundamentos del Psicoanálisis",
          "Psicología Social Psicoanalítica I",
          "Teoría del Vínculo y Grupo Operativo",
          "Subjetividad y Cultura",
          "Taller de Práctica I",
          "Examen Final Grupal - Reelaboración y Presentación"
        ]
      },
      segundo_cuatrimestre: {
        titulo: "Segundo Cuatrimestre",
        tituloObtenido: "Al completarlo se obtiene el título de: Diplomado Superior en Psicología Social Psicoanalítica",
        materias: [
          "Psicología Social Psicoanalítica II",
          "Clínica de las Instituciones",
          "Dispositivos Grupales y Comunitarios",
          "Psicoanálisis y Salud Mental",
          "Taller de Práctica II",
          "Trabajo Final Integrador",
          "Examen Final Individual Teórico"
        ]
      }
    },
    requisitos: "Título terciario o universitario, o formación previa en Psicología Social, Salud Mental o Ciencias Sociales",
    salida_laboral: "Instituciones educativas y de salud, coordinación de grupos y dispositivos institucionales, consultoría organizacional, investigación social",
    extra: "Cupos limitados. Incluye seminario de integración final con presentación de trabajo de campo supervisado"
  },
  {
    // DATOS ESTIMADOS A MODO DE MUESTRA - REVISAR CON EL CLIENTE
    id: 3,
    slug: "analista-en-criminalistica",
    tipoFormacion: "carrera",
    tituloAnterior: "Criminalística (Diplomatura en Criminalística)",
    emoji: "🔍",
    categoria: "CARRERA DE",
    titulo: "Analista en Criminalística",
    estado: "disponible",
    subtitulo: "Carrera en Ciencias Forenses",
    tituloAdquirido: "Analista en Criminalística",
    tipo: "Carrera Profesional",
    duracion: "12 meses",
    modalidad: "Online - Google Meet",
    inicia: "Abril",
    miniIntro: "Carrera orientada a la investigación científica del delito, el análisis forense y el tratamiento de la evidencia.",
    descripcion: "Formación integral en criminalística moderna que integra conocimientos científicos para la investigación del delito. Abarca desde técnicas de laboratorio hasta perfilación criminal y análisis de evidencias con tecnología de vanguardia.",
    items: [
      "Laboratorio forense equipado",
      "Técnicas de investigación científica",
      "Análisis de evidencias físicas",
      "Perfilación criminal avanzada",
      "Tecnología forense actualizada",
      "Estudio de casos reales documentados",
      "Material didáctico profesional",
      "Metodología científica aplicada"
    ],
    /* PENDIENTE CLIENTE: plan de estudios TENTATIVO - validar con el cliente el contenido
       real de la carrera (este item no tenía plan en los datos anteriores). */
    planEstudios: {
      primer_ano: {
        titulo: "Año Único",
        tituloObtenido: "Al completarlo se obtiene el título de: Analista en Criminalística",
        materias: [
          "Introducción a la Criminalística",
          "Escena del Crimen y Levantamiento de Rastros",
          "Técnicas de Laboratorio Forense",
          "Análisis de Evidencias Físicas",
          "Balística Forense",
          "Dactiloscopía y Lofoscopía",
          "Documentología Forense",
          "Perfilación Criminal",
          "Medicina Legal y Tanatología",
          "Informática Forense Básica",
          "Taller de Casos Reales Documentados",
          "Examen Final Integrador"
        ]
      }
    },
    requisitos: "Título terciario o universitario",
    salida_laboral: "Perito forense, investigador privado, asesor judicial",
    // PENDIENTE CLIENTE: validar el claim "Convenio con Poder Judicial" (dato estimado).
    extra: "Incluye acceso a laboratorio forense y biblioteca especializada. Convenio con Poder Judicial"
  },
  {
    // DATOS ESTIMADOS A MODO DE MUESTRA - REVISAR CON EL CLIENTE (se sumó el área de Criminología)
    id: 16,
    slug: "diplomatura-profesional-en-criminalistica-y-criminologia",
    tipoFormacion: "carrera",
    tituloAnterior: "Diplomatura Profesional en Criminalística",
    emoji: "🔬",
    categoria: "DIPLOMATURA PROFESIONAL EN",
    nombre: "Diplomatura Profesional en Criminalística y Criminología",
    titulo: "Criminalística y Criminología",
    subtitulo: "Formación Integral en Ciencias Forenses",
    // PENDIENTE CLIENTE: título tentativo (el dato anterior decía "Técnico en Criminalística y Criminología").
    tituloAdquirido: "Diplomado en Criminalística y Criminología",
    tipo: "Diplomatura Profesional",
    duracion: "15 meses",
    modalidad: "Online - Google Meet",
    inicia: "Abril",
    estado: "disponible",
    miniIntro: "Diplomatura integral en ciencias forenses y criminología, con formación práctica en laboratorio especializado.",
    descripcion: "Formación completa en criminalística que abarca todas las áreas de las ciencias forenses modernas, incorporando además el estudio criminológico del fenómeno delictivo. Incluye formación teórica sólida y práctica intensiva en laboratorio equipado con tecnología de última generación para la investigación científica del delito.",
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
      "Informática forense básica",
      "Criminología: teorías de la criminalidad y control social",
      "Victimología y sociología criminal",
      "Prevención del delito y políticas de seguridad"
    ],
    /* PENDIENTE CLIENTE: plan de estudios TENTATIVO - validar con el cliente el contenido
       real de la diplomatura (este item no tenía plan en los datos anteriores). */
    planEstudios: {
      primer_cuatrimestre: {
        titulo: "Primer Cuatrimestre",
        tituloObtenido: null,
        materias: [
          "Introducción a la Criminalística",
          "Balística Forense y Armamentos",
          "Dactiloscopía y Lofoscopía",
          "Documentología y Grafotecnia",
          "Accidentología Vial",
          "Introducción a la Criminología",
          "Examen Final Grupal - Reelaboración y Presentación"
        ]
      },
      segundo_cuatrimestre: {
        titulo: "Segundo Cuatrimestre",
        tituloObtenido: "Al completarlo se obtiene el título de: Diplomado en Criminalística y Criminología",
        materias: [
          "Química Forense y Toxicología",
          "Genética Forense y ADN",
          "Fotografía y Planimetría Forense",
          "Antropología y Entomología Forense",
          "Informática Forense",
          "Criminología: Teorías de la Criminalidad y Control Social",
          "Victimología y Sociología Criminal",
          "Prevención del Delito y Políticas de Seguridad",
          "Práctica de Laboratorio y Trabajo Final"
        ]
      }
    },
    requisitos: "Secundario completo. Preferible formación técnica o superior",
    salida_laboral: "Policía científica, poder judicial, consultorías forenses, investigación privada",
    extra: "Laboratorio forense completo. Material didáctico actualizado y recursos profesionales"
  },
  {
    // CARRERA NUEVA - DATOS ESTIMADOS A MODO DE MUESTRA - REVISAR CON EL CLIENTE
    id: 19,
    slug: "tramo-terciario-de-tecnico-superior-en-psicologia-social",
    tipoFormacion: "carrera",
    emoji: "📘",
    categoria: "TRAMO TERCIARIO DE",
    nombre: "Tramo Terciario de Técnico Superior en Psicología Social",
    titulo: "Técnico Superior en Psicología Social",
    subtitulo: "Tramo de Articulación Terciaria",
    tituloAdquirido: "Técnico Superior en Psicología Social",
    tipo: "Tecnicatura Terciaria",
    duracion: "2 años",
    modalidad: "Bimodal - Online y encuentros presenciales",
    inicia: "Marzo",
    estado: "disponible",
    miniIntro: "Tramo terciario de articulación para completar la formación de Técnico Superior en Psicología Social en el nivel de educación superior.",
    descripcion: "Tramo de articulación destinado a completar el recorrido formativo en el nivel terciario, otorgando el título de Técnico Superior en Psicología Social. Profundiza la teoría de la psicología social, la coordinación de grupos y la intervención en instituciones, incorporando la práctica profesional supervisada y la elaboración de proyectos sociales.",
    items: [
      "Articulación con trayectos formativos previos (sujeta a equivalencias)",
      "Cursada bimodal: clases online en vivo y encuentros presenciales",
      "Práctica profesional supervisada en instituciones",
      "Coordinación de grupos y dispositivos institucionales",
      "Formulación y evaluación de proyectos sociales",
      "Acompañamiento tutorial permanente",
      "Material bibliográfico completo",
      "Acceso a plataforma virtual 24/7"
    ],
    planEstudios: {
      primer_ano: {
        titulo: "Primer Año del Tramo",
        tituloObtenido: null,
        materias: [
          "Psicología Social III",
          "Teoría y Técnica de Grupos",
          "Coordinación de Grupos",
          "Instituciones y Subjetividad",
          "Metodología de la Investigación Social",
          "Psicología Social Comunitaria",
          "Práctica Profesional Supervisada I",
          "Examen Final Grupal - Reelaboración y Presentación"
        ]
      },
      segundo_ano: {
        titulo: "Segundo Año del Tramo",
        tituloObtenido: "Al completarlo se obtiene el título de: Técnico Superior en Psicología Social",
        materias: [
          "Intervención en Crisis y Emergencias Sociales",
          "Salud Mental y Derechos Humanos",
          "Formulación de Proyectos Sociales",
          "Ética y Deontología Profesional",
          "Práctica Profesional Supervisada II",
          "Trabajo Final Integrador",
          "Examen Final Individual Teórico"
        ]
      }
    },
    requisitos: "Título secundario completo. Se reconocen trayectos formativos previos en Psicología Social sujetos a equivalencias",
    salida_laboral: "Instituciones educativas, de salud y comunitarias, ONGs, dispositivos grupales, programas sociales y organizaciones del ámbito público y privado",
    extra: "Cupos limitados. Consultá por el régimen de equivalencias según tu formación previa"
  }
];

/* -------------------------------------------------------------------------------------
   CURSOS
   Son los items que quedaban en el array anterior y que NO pasaron a ser carreras
   (ids 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17).
   Se conservan con sus datos originales, incluidos los de estado "no disponible".
   ------------------------------------------------------------------------------------- */
export const cursosData = [
  {
    id: 1,
    slug: "grafologia-emocional",
    tipoFormacion: "curso",
    emoji: "💭",
    categoria: "SEMINARIO EN",
    titulo: "Grafología Emocional",
    subtitulo: "Seminario Profesional Intensivo",
    tituloAdquirido: "Certificado en Grafología Emocional",
    tipo: "Seminario Profesional",
    duracion: "2 meses",
    modalidad: "Online - Google Meet",
    inicia: "Abril",
    estado: "disponible",
    miniIntro: "Seminario especializado en análisis emocional a través de la escritura manuscrita.",
    descripcion: "Seminario profesional que aborda el análisis de aspectos emocionales y psicológicos revelados en la escritura. Técnicas avanzadas para interpretar estados emocionales, patrones conductuales y rasgos de personalidad.",
    items: [
      "Técnicas de Curt A. Honroth",
      "Análisis de trazos emocionales",
      "Interpretación de presión y velocidad",
      "Casos prácticos reales",
      "Material didáctico especializado",
      "Biblioteca digital especializada"
    ],
    requisitos: "Conocimientos básicos en grafología (deseable)",
    salida_laboral: "Consultoría emocional, orientación vocacional, recursos humanos",
    extra: "Incluye kit de materiales profesionales y acceso a biblioteca digital"
  },
  {
    id: 4,
    slug: "deteccion-de-abuso-sexual-infantil",
    tipoFormacion: "curso",
    emoji: "🛡️",
    categoria: "SEMINARIO EN",
    titulo: "Detección de Abuso Sexual Infantil",
    estado: "no disponible",
    subtitulo: "Seminario Profesional de Protección Infantil",
    tituloAdquirido: "Certificado en Detección de ASI",
    tipo: "Seminario Especializado",
    duracion: "4 meses",
    modalidad: "Online - Google Meet",
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
    extra: "Incluye material bibliográfico especializado y kit de recursos profesionales"
  },
  {
    id: 5,
    slug: "psicologia-social-y-criminalistica-aplicada",
    tipoFormacion: "curso",
    emoji: "⚖️",
    categoria: "CURSO EN",
    titulo: "Psicología Social y Criminalística Aplicada",
    estado: "no disponible",
    subtitulo: "Curso de Especialización Interdisciplinaria",
    tituloAdquirido: "Especialista en Psicología Social Forense",
    tipo: "Curso de Especialización",
    duracion: "4 meses",
    modalidad: "Online - Google Meet",
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
    id: 6,
    slug: "tecnografia-pericial-grafologica",
    tipoFormacion: "curso",
    emoji: "🔬",
    categoria: "POSGRADO EN",
    titulo: "Tecnografía Pericial Grafológica",
    estado: "no disponible",
    subtitulo: "Posgrado Especializado para Peritos",
    tituloAdquirido: "Especialista en Tecnografía Pericial",
    tipo: "Posgrado Especializado",
    duracion: "6 meses",
    modalidad: "Presencial",
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
    extra: "Laboratorio equipado con tecnología europea. Material didáctico especializado"
  },
  {
    id: 7,
    slug: "analisis-de-firmas-y-rubricas",
    tipoFormacion: "curso",
    emoji: "✍️",
    categoria: "CURSO EN",
    titulo: "Análisis de Firmas y Rúbricas",
    estado: "disponible",
    subtitulo: "Curso Técnico Especializado",
    tituloAdquirido: "Especialista en Análisis de Firmas",
    tipo: "Curso Técnico",
    duracion: "3 meses",
    modalidad: "Online - Google Meet",
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
    extra: "Kit de herramientas profesionales incluido y material didáctico especializado"
  },
  {
    id: 8,
    slug: "especialista-en-primeros-auxilios-psicologicos",
    tipoFormacion: "curso",
    emoji: "🆘",
    categoria: "CURSO DE",
    titulo: "Especialista en Primeros Auxilios Psicológicos",
    estado: "disponible",
    subtitulo: "Capacitación en Intervención de Crisis",
    tituloAdquirido: "Especialista en Primeros Auxilios Psicológicos",
    tipo: "Capacitación Oficial",
    duracion: "2 meses",
    modalidad: "Online - Google Meet",
    inicia: "Marzo",
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
      "Ejercicios de aplicación profesional"
    ],
    requisitos: "Secundario completo",
    salida_laboral: "Emergencias médicas, bomberos, defensa civil, ONGs",
    extra: "Incluye kit de primera intervención y material didáctico completo"
  },
  {
    id: 9,
    slug: "acompanante-terapeutico",
    tipoFormacion: "curso",
    emoji: "🤝",
    categoria: "CURSO DE",
    titulo: "Acompañante Terapéutico",
    estado: "disponible",
    subtitulo: "Formación Profesional en Acompañamiento Terapéutico",
    tituloAdquirido: "Acompañante Terapéutico Matriculado",
    tipo: "Curso Profesional",
    duracion: "12 meses",
    modalidad: "Online - Google Meet",
    inicia: "Marzo",
    miniIntro: "Formación integral para el acompañamiento terapéutico de personas con padecimientos mentales y adicciones.",
    descripcion: "Curso profesional que prepara acompañantes terapéuticos capacitados para trabajar en equipos interdisciplinarios de salud mental. Desarrolla competencias para el acompañamiento de personas con diversas patologías, promoviendo su autonomía e inclusión social.",
    items: [
      "Psicopatología y salud mental",
      "Técnicas de acompañamiento terapéutico",
      "Trabajo en equipo interdisciplinario",
      "Intervención en crisis",
      "Adicciones y consumos problemáticos",
      "Trastornos del neurodesarrollo",
      "Acompañamiento en discapacidad",
      "Marco legal y derechos del paciente",
      "Estrategias de contención emocional",
      "Ética y responsabilidad profesional",
      "Técnicas de comunicación terapéutica"
    ],
    requisitos: "Secundario completo",
    salida_laboral: "Hospitales, clínicas psiquiátricas, centros de día, comunidades terapéuticas, domicilios particulares, centros de rehabilitación",
    extra: "Material didáctico completo y recursos profesionales especializados"
  },
  {
    id: 10,
    slug: "perfilamiento-criminal",
    tipoFormacion: "curso",
    emoji: "🧩",
    categoria: "CURSO DE",
    titulo: "Perfilamiento Criminal",
    estado: "no disponible",
    subtitulo: "Especialización en Criminal Profiling",
    tituloAdquirido: "Especialista en Perfilamiento Criminal",
    tipo: "Curso Especializado",
    duracion: "6 meses",
    modalidad: "Online - Google Meet",
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
    extra: "Estudio de casos internacionales documentados. Metodología científica actualizada"
  },
  {
    id: 11,
    slug: "grafologia-forense",
    tipoFormacion: "curso",
    emoji: "🧾",
    categoria: "CURSO DE",
    titulo: "Grafología Forense",
    estado: "no disponible",
    subtitulo: "Especialización en Peritajes Documentales",
    tituloAdquirido: "Perito Grafólogo Forense",
    tipo: "Curso Profesional",
    duracion: "9 meses",
    modalidad: "Online - Google Meet",
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
    extra: "Laboratorio forense especializado. Material didáctico profesional"
  },
  {
    id: 12,
    slug: "analisis-de-dibujos-proyectivos",
    tipoFormacion: "curso",
    emoji: "🎨",
    categoria: "CURSO DE",
    titulo: "Análisis de Dibujos Proyectivos",
    estado: "no disponible",
    subtitulo: "Especialización en Técnicas Proyectivas",
    tituloAdquirido: "Especialista en Técnicas Proyectivas",
    tipo: "Curso Proyectivo",
    duracion: "4 meses",
    modalidad: "Online - Google Meet",
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
  {
    id: 14,
    slug: "deteccion-en-falsificacion-en-firmas",
    tipoFormacion: "curso",
    emoji: "🔍",
    categoria: "CURSO DE",
    titulo: "Detección en Falsificación en Firmas",
    subtitulo: "Especialización en Análisis Documentoscópico",
    tituloAdquirido: "Especialista en Detección en Falsificaciones",
    tipo: "Curso Especializado",
    duracion: "3 meses",
    modalidad: "Presencial",
    inicia: "Abril",
    estado: "no disponible",
    miniIntro: "Curso especializado en técnicas científicas para detectar falsificaciones documentales y de firmas.",
    descripcion: "Durante la exposición se abordan los conceptos clave para comprender qué es una firma, cuáles son sus requisitos de autenticidad y cómo distinguir entre firmas auténticas, no auténticas, dubitadas e indubitadas. A partir de allí, se estudian los distintos tipos de falsificación -con y sin imitación, por calco, de memoria, por mano libre ejercitada y autofalsificación-, ilustrados con ejemplos comparativos.",
    items: [],
    requisitos: "Formación en grafología, criminalística o áreas afines",
    salida_laboral: "Perito judicial, consultor bancario, investigador privado, asesor notarial",
    extra: "Laboratorio equipado con tecnología europea. Material didáctico especializado"
  },
  {
    id: 15,
    slug: "capacitacion-profesional-en-grafologia-emocional",
    tipoFormacion: "curso",
    emoji: "💭",
    categoria: "CAPACITACIÓN EN",
    titulo: "Capacitación Profesional en Grafología Emocional",
    subtitulo: "Especialización en Análisis Emocional Grafológico",
    tituloAdquirido: "Especialista en Grafología Emocional",
    tipo: "Capacitación Profesional",
    duracion: "4 meses",
    modalidad: "Online - Google Meet",
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
    slug: "diplomatura-superior-en-tecnografia-pericial-forense-area-grafologica",
    tipoFormacion: "curso",
    emoji: "⚖️",
    categoria: "DIPLOMATURA EN",
    titulo: "Diplomatura Superior en Tecnografía Pericial Forense: Área Grafológica",
    subtitulo: "Especialización Superior en Peritajes Tecnográficos",
    tituloAdquirido: "Perito Superior en Tecnografía Forense",
    tipo: "Diplomatura Superior",
    duracion: "12 meses",
    modalidad: "Presencial",
    inicia: "Abril",
    estado: "no disponible",
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
    requisitos: "Formación superior en grafología, criminalística o áreas afines",
    salida_laboral: "Perito de máximo nivel, consultor internacional, investigador forense senior",
    extra: "Laboratorio con tecnología europea de última generación. Material didáctico de nivel superior"
  }
];

/* ===== Helpers ===== */

// Nombre para mostrar en el dropdown (las carreras pueden tener un nombre completo distinto del titulo)
export const nombreFormacion = (item) => item?.nombre || item?.titulo || "";

// Búsqueda por tipo + slug para la página de detalle
export const getFormacion = (tipo, slug) => {
  const lista = tipo === "carrera" ? carrerasData : cursosData;
  return lista.find((item) => item.slug === slug) || null;
};

export default { carrerasData, cursosData, nombreFormacion, getFormacion };
