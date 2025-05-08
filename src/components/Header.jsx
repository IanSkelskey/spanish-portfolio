import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavBar from './NavBar';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Add scroll event listener to enhance header on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Add scrolled class after scrolling 20px
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Set body overflow when menu opens (prevent scrolling)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Handle menu state from NavBar
  const handleMenuToggle = (isOpen) => {
    setMenuOpen(isOpen);
  };
  
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Site logo/title */}
        <Link to="/" className="site-logo">
          <img src="/spanish-portfolio/logo.svg" alt="Portfolio logo" />
          <h2 className="site-title">Español Portfolio</h2>
        </Link>
        
        {/* Navigation container for extensibility */}
        <div className="nav-container">
          <NavBar onMenuToggle={handleMenuToggle} />
          {/* Space for future additions like language selector or theme toggle */}
        </div>
      </div>
      
      {/* Menu overlay for mobile - removed as now handled within NavBar */}
    </header>
  );
}

export default Header;
