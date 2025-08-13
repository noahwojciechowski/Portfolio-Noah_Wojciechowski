import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';
import './Navbar.css';
import cvFile from '../assets/CV_NOAH_WOJCIECHOWSKI.pdf';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {};

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    // En prod (Vercel), servez le PDF depuis /public pour éviter les rewrites SPA
    const publicCvPath = '/CV_NOAH_WOJCIECHOWSKI.pdf';
    link.href = process.env.NODE_ENV === 'production' ? publicCvPath : cvFile;
    link.download = 'CV-Noah-Wojciechowski.pdf';
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

        <button className="cv-button mobile-only" onClick={handleDownloadCV}>
          <FaDownload /> Télécharger mon CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
