import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <div className="app-container">
        <Header />
        <main className="main-content">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/introduccion" element={<Introduccion />} />
              <Route path="/objetivos" element={<Objetivos />} />
              <Route path="/asignaciones" element={<Asignaciones />} />
              <Route path="/cultura" element={<Cultura />} />
              <Route path="/reflecciones" element={<Reflecciones />} />
              <Route path="/plan-accion" element={<PlanAccion />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
