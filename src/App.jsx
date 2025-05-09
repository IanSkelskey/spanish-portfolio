import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Import page components
import Home from './pages/Inicio';
import Introduccion from './pages/Introduccion';
import Goals from './pages/Objetivos';
import Assignments from './pages/Asignaciones';
import Culture from './pages/Cultura';
import Reflections from './pages/Reflecciones';
import ActionPlan from './pages/PlanAccion';

function App() {
  return (
    <Router basename="/spanish-portfolio">
      <div className="app-container">
        <Header />
        <main className="main-content">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/introduccion" element={<Introduccion />} />
              <Route path="/objetivos" element={<Goals />} />
              <Route path="/asignaciones" element={<Assignments />} />
              <Route path="/cultura" element={<Culture />} />
              <Route path="/reflecciones" element={<Reflections />} />
              <Route path="/plan-accion" element={<ActionPlan />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
