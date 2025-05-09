import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-links">
          <Link to="/">Inicio</Link>
          <Link to="/introduccion">Introducción</Link>
          <Link to="/objetivos">Objetivos</Link>
          <Link to="/asignaciones">Asignaciones</Link>
          <Link to="/cultura">Cultura</Link>
          <Link to="/reflecciones">Reflecciones</Link>
          <Link to="/plan-accion">Plan de Acción</Link>
        </div>
        <div className="footer-copyright">
          <span>© {new Date().getFullYear()}  Spanish Portfolio</span>
          <span>•</span>
          <span>Hecho con <span aria-label="heart">💙</span> y <span aria-label="mate">🧉</span></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
