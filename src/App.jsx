import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Import page components
import Inicio from './pages/Inicio';
import Introduccion from './pages/Introduccion';
import Objetivos from './pages/Objetivos';
import Asignaciones from './pages/Asignaciones';
import Cultura from './pages/Cultura';
import Reflecciones from './pages/Reflecciones';
import PlanAccion from './pages/PlanAccion';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/introduccion">Introducción</NavLink></li>
          <li><NavLink to="/objetivos">Mis objetivos</NavLink></li>
          <li><NavLink to="/asignaciones">Asignaciones/Proyectos</NavLink></li>
          <li><NavLink to="/cultura">Cultura</NavLink></li>
          <li><NavLink to="/reflecciones">Reflecciones finales</NavLink></li>
          <li><NavLink to="/plan-accion">Plan de acción</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/introduccion" element={<Introduccion />} />
        <Route path="/objetivos" element={<Objetivos />} />
        <Route path="/asignaciones" element={<Asignaciones />} />
        <Route path="/cultura" element={<Cultura />} />
        <Route path="/reflecciones" element={<Reflecciones />} />
        <Route path="/plan-accion" element={<PlanAccion />} />
      </Routes>
    </Router>
  );
}

export default App;
