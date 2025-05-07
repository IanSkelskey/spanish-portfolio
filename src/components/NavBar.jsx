import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';

const navLinks = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/introduccion', label: 'Introducción' },
  { to: '/objetivos', label: 'Mis objetivos' },
  { to: '/asignaciones', label: 'Asignaciones' },
  { to: '/cultura', label: 'Cultura' },
  { to: '/reflecciones', label: 'Reflecciones' },
  { to: '/plan-accion', label: 'Plan de acción' },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav aria-label="Main navigation" className={isMenuOpen ? 'menu-open' : ''}>
      <button 
        className="menu-toggle" 
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <span className="menu-icon"></span>
      </button>
      
      <ul className="nav-menu">
        {navLinks.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) => isActive ? 'active' : undefined}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
