import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/NoahWojciechowski',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/noah-wojciechowski',
      color: '#0077b5'
    }
  ];

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Noah Wojciechowski</h3>
            <p>Développeur Web en formation – Bachelor CDA</p>
            <p>Passionné par le développement web, l'informatique, les réseaux et la cybersécurité</p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>📧 Noahwski@gmail.com</p>
            <p>📱 07 68 64 11 65</p>
          </div>

          <div className="footer-section">
            <h4>Suivez-moi</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p>
              © {currentYear} Noah Wojciechowski – Tous droits réservés
            </p>
            <p className="footer-made-with">
              Fait avec <FaHeart className="heart-icon" /> en React.js
            </p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Accueil</a>
            <a href="#competences">Compétences</a>
            <a href="#projets">Projets</a>
            <a href="#parcours">Parcours</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
