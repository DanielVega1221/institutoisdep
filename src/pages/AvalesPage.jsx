import React from 'react';
import { Helmet } from 'react-helmet-async';
import './AvalesPage.css';

const AvalesPage = () => {
  return (
    <div className="avales-page">
      <Helmet>
        <title>Avales - ISDEP | Instituto Superior de Enseñanza Profesional</title>
        <meta name="description" content="Conocé los avales y reconocimientos de ISDEP: entidades y asociaciones profesionales que respaldan nuestras formaciones en grafología, criminalística y ciencias forenses." />
        <link rel="canonical" href="https://www.isdep.com.ar/avales" />
        <meta property="og:title" content="Avales - ISDEP" />
        <meta property="og:description" content="Avales y entidades que respaldan las formaciones de ISDEP en grafología, criminalística y ciencias forenses." />
        <meta property="og:url" content="https://www.isdep.com.ar/avales" />
      </Helmet>
      <div className="avales-hero">
        <h1 className="avales-title">Avales</h1>
        <p className="avales-subtitle">Próximamente</p>
      </div>
    </div>
  );
};

export default AvalesPage;
