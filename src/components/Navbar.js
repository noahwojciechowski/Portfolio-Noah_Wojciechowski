import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaDownload, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    // Utiliser le fichier placé dans /public/assets
    link.href = '/assets/CV%20NOAH%20WOJCIECHOWSKI.pdf';
    link.download = 'CV-Noah-Wojciechowski.pdf';
    link.rel = 'noopener noreferrer';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            Noah Wojciechowski
          </Link>
        </div>

        <div className="navbar-menu">
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            className="nav-link"
          >
            Accueil
          </Link>
          <Link 
            to="competences" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            className="nav-link"
          >
            Compétences
          </Link>
          <Link 
            to="projets" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            className="nav-link"
          >
            Projets
          </Link>
          <Link 
            to="parcours" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            className="nav-link"
          >
            Parcours
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            className="nav-link"
          >
            Contact
          </Link>
          <button className="cv-button" onClick={handleDownloadCV}>
            <FaDownload /> Télécharger mon CV
          </button>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          onClick={closeMenu}
          className="mobile-nav-link"
        >
          Accueil
        </Link>
        <Link 
          to="competences" 
          smooth={true} 
          duration={500} 
          onClick={closeMenu}
          className="mobile-nav-link"
        >
          Compétences
        </Link>
        <Link 
          to="projets" 
          smooth={true} 
          duration={500} 
          onClick={closeMenu}
          className="mobile-nav-link"
        >
          Projets
        </Link>
        <Link 
          to="parcours" 
          smooth={true} 
          duration={500} 
          onClick={closeMenu}
          className="mobile-nav-link"
        >
          Parcours
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          onClick={closeMenu}
          className="mobile-nav-link"
        >
          Contact
        </Link>
        <button className="mobile-cv-button" onClick={handleDownloadCV}>
          <FaDownload /> Télécharger mon CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
