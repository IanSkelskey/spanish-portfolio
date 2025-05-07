import { useState, useEffect } from 'react';
import './Header.css';
import NavBar from './NavBar';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  
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
  
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Navigation */}
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
