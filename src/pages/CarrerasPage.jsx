import React from "react";
import { Helmet } from "react-helmet-async";
import Cursos from "../components/Cursos/Cursos";
import { carrerasData, nombreFormacion } from "../data/formaciones";

// NUEVO (cambio de esta sesión): página /carreras.
// Reutiliza la sección de Cursos mostrando solo el panel de carreras.
const CarrerasPage = () => {
  const totalDisponibles = carrerasData.filter((f) => f.estado === "disponible").length;

  return (
    <>
      <Helmet>
        <title>Carreras - ISDEP | Instituto Superior de Enseñanza Profesional</title>
        <meta
          name="description"
          content={`Conocé las ${totalDisponibles} carreras de ISDEP: ${carrerasData
            .map((f) => nombreFormacion(f))
            .join(", ")}. Cursada online con título oficial.`}
        />
        <link rel="canonical" href="https://www.isdep.com.ar/carreras" />
        <meta property="og:title" content="Carreras - ISDEP" />
        <meta property="og:description" content="Tecnicaturas, carreras y diplomaturas superiores de ISDEP. Cursada online con título oficial." />
        <meta property="og:url" content="https://www.isdep.com.ar/carreras" />
      </Helmet>
      <Cursos solo="carrera" esPagina />
    </>
  );
};

export default CarrerasPage;