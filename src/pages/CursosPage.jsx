import React from "react";
import { Helmet } from "react-helmet-async";
import Cursos from "../components/Cursos/Cursos";
import { cursosData, nombreFormacion } from "../data/formaciones";

// NUEVO (cambio de esta sesión): página /cursos.
// Reutiliza la sección de Cursos mostrando solo el panel de cursos.
const CursosPage = () => {
  const totalDisponibles = cursosData.filter((f) => f.estado === "disponible").length;

  return (
    <>
      <Helmet>
        <title>Cursos - ISDEP | Instituto Superior de Enseñanza Profesional</title>
        <meta
          name="description"
          content={`Conocé los ${totalDisponibles} cursos de ISDEP: ${cursosData
            .map((f) => nombreFormacion(f))
            .join(", ")}. Capacitaciones, seminarios y diplomaturas online.`}
        />
        <link rel="canonical" href="https://www.isdep.com.ar/cursos" />
        <meta property="og:title" content="Cursos - ISDEP" />
        <meta property="og:description" content="Capacitaciones, seminarios y diplomaturas de ISDEP en grafología, criminalística y ciencias forenses. Cursada online." />
        <meta property="og:url" content="https://www.isdep.com.ar/cursos" />
      </Helmet>
      <Cursos solo="curso" esPagina />
    </>
  );
};

export default CursosPage;