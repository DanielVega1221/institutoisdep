import React from "react";
import { Helmet } from 'react-helmet-async';
import ComoInscribirse from '../components/ComoInscribirse/ComoInscribirse';

const InscripcionPage = () => {
  return (
    <>
      <Helmet>
        <title>Inscripción - ISDEP | Solicitá tu Formación en Grafología y Forense</title>
        <meta name="description" content="Completá el formulario de inscripción en ISDEP. Elegí tu formación: Grafología, Ciencias Criminalistas, Perfilamiento Criminal, Análisis de Dibujos y más. Cursada online." />
        <link rel="canonical" href="https://www.isdep.com.ar/como-inscribirse" />
        <meta property="og:title" content="Inscripción - ISDEP" />
        <meta property="og:description" content="Iniciá tu proceso de inscripción en ISDEP. Formaciones en Grafología Forense, Criminalística, Perfilamiento Criminal y más." />
        <meta property="og:url" content="https://www.isdep.com.ar/como-inscribirse" />
      </Helmet>
      <ComoInscribirse />
    </>
  );
};

export default InscripcionPage;
