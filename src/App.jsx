import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import InstitucionPage from './pages/InstitucionPage';
import InscripcionPage from './pages/InscripcionPage';
import AvalesPage from './pages/AvalesPage';
import CarrerasPage from './pages/CarrerasPage';
import CursosPage from './pages/CursosPage';
import FormacionDetallePage from './pages/FormacionDetallePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="nuestra-metodologia" element={<InstitucionPage />} />
          <Route path="como-inscribirse" element={<InscripcionPage />} />
          <Route path="avales" element={<AvalesPage />} />
          {/* NUEVO: páginas que listan solo carreras y solo cursos (cambio de esta sesión) */}
          <Route path="carreras" element={<CarrerasPage />} />
          <Route path="cursos" element={<CursosPage />} />
          {/* NUEVO: página de detalle por carrera y por curso (antes se veía en un modal) */}
          <Route path="carreras/:slug" element={<FormacionDetallePage />} />
          <Route path="cursos/:slug" element={<FormacionDetallePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
