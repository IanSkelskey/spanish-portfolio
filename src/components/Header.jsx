import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';
import NavBar from './NavBar';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll event listener to enhance header on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Add scrolled class after scrolling 30px
      const isScrolled = window.scrollY > 30;
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
  
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo and title */}
        <Link to="/" className="header-logo-link">
          <span className="header-logo" aria-hidden="true">🇦🇷</span>
          <h1 className="header-title">Mi Portfolio de Español</h1>
        </Link>
        
        {/* Navigation */}
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
