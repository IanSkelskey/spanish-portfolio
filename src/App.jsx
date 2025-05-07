import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return <h2>Bienvenidos a mi ePortfolio de Español</h2>;
}
function Introduccion() {
  return <h2>Introducción / Acerca de mí</h2>;
}
function Objetivos() {
  return <h2>Mis objetivos / Vision Board</h2>;
}
function Asignaciones() {
  return <h2>Asignaciones / Proyectos</h2>;
}
function Cultura() {
  return <h2>Cultura</h2>;
}
function Reflecciones() {
  return <h2>Reflecciones finales</h2>;
}
function PlanAccion() {
  return <h2>Plan de acción</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/introduccion">Introducción</Link></li>
          <li><Link to="/objetivos">Mis objetivos</Link></li>
          <li><Link to="/asignaciones">Asignaciones/Proyectos</Link></li>
          <li><Link to="/cultura">Cultura</Link></li>
          <li><Link to="/reflecciones">Reflecciones finales</Link></li>
          <li><Link to="/plan-accion">Plan de acción</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
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
