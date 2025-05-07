import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>
          © {new Date().getFullYear()} Spanish Portfolio &middot; Hecho con <span aria-label="heart">💙</span> y <span aria-label="mate">🧉</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
