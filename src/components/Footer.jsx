import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/introduccion">Introduction</Link>
          <Link to="/objetivos">Goals</Link>
          <Link to="/asignaciones">Assignments</Link>
          <Link to="/cultura">Culture</Link>
          <Link to="/reflecciones">Reflections</Link>
          <Link to="/plan-accion">Action Plan</Link>
        </div>
        <div className="footer-copyright">
          <span>© {new Date().getFullYear()} Spanish Portfolio</span>
          <span>•</span>
          <span>Made with <span aria-label="heart">💙</span> and <span aria-label="mate">🧉</span></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
