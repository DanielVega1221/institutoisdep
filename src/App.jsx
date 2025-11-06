import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import InstitucionPage from './pages/InstitucionPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="nuestra-institucion" element={<InstitucionPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
