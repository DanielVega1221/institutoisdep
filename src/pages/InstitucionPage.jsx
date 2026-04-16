import React from "react";
import { Helmet } from 'react-helmet-async';
import NuestraMetodologia from '../components/NuestraMetodologia/NuestraMetodologia';

const InstitucionPage = () => {
  return (
    <>
      <Helmet>
        <title>Nuestra Metodología - ISDEP | Método de Estudio y Valores</title>
        <meta name="description" content="Conoce la metodología de ISDEP: una clase semanal, seguimiento personalizado, normativa de estudios clara y valores institucionales sólidos. Formación online de calidad." />
        <link rel="canonical" href="https://www.institutoisdep.com/nuestra-metodologia" />
        <meta property="og:title" content="Nuestra Metodología - ISDEP" />
        <meta property="og:description" content="Sistema educativo diseñado para garantizar tu éxito profesional con flexibilidad, calidad académica y seguimiento personalizado." />
        <meta property="og:url" content="https://www.institutoisdep.com/nuestra-metodologia" />
      </Helmet>
      <NuestraMetodologia />
    </>
  );
};

export default InstitucionPage;