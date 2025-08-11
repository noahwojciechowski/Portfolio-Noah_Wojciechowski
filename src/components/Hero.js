import React from 'react';
import { Link } from 'react-scroll';
import { FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-up">
            <h1 className="hero-name">Noah Wojciechowski</h1>
            <h2 className="hero-title">Développeur Web en formation – Bachelor CDA</h2>
            <p className="hero-description">
              Étudiant passionné de développement et d'informatique, je conçois des interfaces modernes, 
              performantes et sécurisées.
            </p>
            <div className="hero-buttons" data-aos="zoom-in" data-aos-delay="150">
              <Link 
                to="projets" 
                smooth={true} 
                duration={500}
                className="hero-btn primary"
              >
                Voir mes projets
              </Link>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500}
                className="hero-btn secondary"
              >
                Me contacter
              </Link>
            </div>
            <div className="hero-social" data-aos="fade-up" data-aos-delay="250">
              <a 
                href="https://github.com/NoahWojciechowski" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/noah-wojciechowski" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="hero-image" data-aos="fade-left" data-aos-delay="200">
            <div className="profile-placeholder">
              <div className="profile-initials">NW</div>
            </div>
          </div>
        </div>
        <div className="hero-scroll" data-aos="fade-down" data-aos-delay="300">
          <Link to="competences" smooth={true} duration={500}>
            <FaChevronDown className="scroll-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
