import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import InstitucionPage from './pages/InstitucionPage';
import InscripcionPage from './pages/InscripcionPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="nuestra-metodologia" element={<InstitucionPage />} />
          <Route path="como-inscribirse" element={<InscripcionPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
