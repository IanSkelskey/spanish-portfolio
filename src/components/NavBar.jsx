import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './NavBar.css';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/introduccion', label: 'Introduction' },
  { to: '/objetivos', label: 'Goals' },
  { to: '/asignaciones', label: 'Assignments' },
  { to: '/cultura', label: 'Culture' },
  { to: '/reflecciones', label: 'Reflections' },
  { to: '/plan-accion', label: 'Action Plan' },
];

function NavBar({ onMenuToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  
  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    
    // Notify parent component about menu state change
    if (onMenuToggle) {
      onMenuToggle(newState);
    }
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    
    // Notify parent component about menu state change
    if (onMenuToggle) {
      onMenuToggle(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
        closeMenu();
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    
    // Close menu on ESC key
    function handleEscKey(event) {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    }
    
    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav 
        ref={navRef}
        aria-label="Main navigation" 
        className={isMenuOpen ? 'menu-open' : ''}
      >
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
      
      {/* Overlay for mobile menu background */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu} />}
    </>
  );
}

export default NavBar;
