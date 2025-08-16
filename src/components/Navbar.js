// src/components/Navbar.js
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/assets/logo.png" alt="Anaksha Logo" className="logo-image" />
        </div>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')} className="navbar-link">
            Home
          </a>
          <a href="#about" onClick={() => scrollToSection('about')} className="navbar-link">
            About
          </a>
          <a href="#skills" onClick={() => scrollToSection('skills')} className="navbar-link">
            Skills
          </a>
           <a href="#certificates" onClick={() => scrollToSection('certifications')} className="navbar-link">
            Certificates
          </a>
          <a href="#projects" onClick={() => scrollToSection('projects')} className="navbar-link">
            Projects
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="navbar-link">
            Contact
          </a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;