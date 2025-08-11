import React from 'react';
import { FaReact, FaPhp, FaDatabase, FaNodeJs } from 'react-icons/fa';
import { SiSymfony, SiMysql, SiTypescript } from 'react-icons/si';
import './Projets.css';
import projetFullstackImg from '../assets/images/react.png';
import projetSymfonyImg from '../assets/images/panier.png';
import chatbotImg from '../assets/images/chatbot.png';
import droneImg from '../assets/images/drone.png';

const Projets = () => {
  const projets = [
    {
      id: 1,
      title: "Application Web Fullstack",
      description: "Application web interactive avec base de données, développée avec React, JavaScript, Node.js et MySQL. Interface utilisateur moderne et responsive avec gestion complète des données.",
      technologies: [
        { name: 'React', icon: <FaReact />, color: '#61dafb' },
        { name: 'JavaScript', icon: <FaNodeJs />, color: '#f7df1e' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' }
      ],
      github: "https://github.com/NoahWojciechowski/projet-fullstack",
      demo: "#",
      image: projetFullstackImg
    },
    {
      id: 2,
      title: "Plateforme Web PHP/Symfony",
      description: "Plateforme web complète reliée à une base de données MySQL, développée avec PHP/Symfony. Interface utilisateur intuitive avec architecture MVC robuste.",
      technologies: [
        { name: 'PHP', icon: <FaPhp />, color: '#777bb4' },
        { name: 'Symfony', icon: <SiSymfony />, color: '#000000' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
        { name: 'Database', icon: <FaDatabase />, color: '#f39c12' }
      ],
      github: "https://github.com/NoahWojciechowski/projet-symfony",
      demo: "#",
      image: projetSymfonyImg
    },
    {
      id: 3,
      title: "Chatbot IA Cybersécurité",
      description: "Chatbot de sensibilisation à la cybersécurité développé avec React, TypeScript, Node.js et MySQL. Interface moderne, logique côté serveur et persistance des données.",
      technologies: [
        { name: 'React', icon: <FaReact />, color: '#61dafb' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' }
      ],
      github: "https://github.com/NoahWojciechowski/chatbot-cybersecurite",
      demo: "#",
      image: chatbotImg
    },
    {
      id: 4,
      title: "Drone Programmateur Python",
      description: "Drone programmé avec Python pour des missions automatisées. Contrôle de vol, navigation GPS et traitement d'images en temps réel.",
      technologies: [
        { name: 'Python', icon: <FaPhp />, color: '#3776ab' },
        { name: 'Drone', icon: <FaDatabase />, color: '#27ae60' },
        { name: 'GPS', icon: <FaDatabase />, color: '#2c3e50' }
      ],
      github: "https://github.com/NoahWojciechowski/drone-python",
      demo: "#",
      image: droneImg
    }
  ];

  return (
    <section id="projets" className="projets">
      <div className="projets-container">
        <div className="section-header">
          <h2 className="section-title">Mes Projets</h2>
          <p className="section-subtitle">
            Découvrez mes réalisations techniques et mes compétences en développement
          </p>
        </div>

        <div className="projets-grid">
          {projets.map((projet, index) => (
            <div
              key={projet.id}
              className="projet-card"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="projet-image">
                <img src={projet.image} alt={projet.title} data-aos="zoom-in" data-aos-delay={index * 120 + 80} />
              </div>
              
              <div className="projet-content">
                <h3 className="projet-title">{projet.title}</h3>
                <p className="projet-description">{projet.description}</p>
                
                <div className="projet-technologies">
                  <h4>Technologies utilisées :</h4>
                  <div className="technologies-list">
                    {projet.technologies.map((tech, index) => (
                      <div 
                        key={index} 
                        className="technology-item"
                        style={{ '--tech-color': tech.color }}
                      >
                        <span className="tech-icon">{tech.icon}</span>
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projets-cta">
          <p>Intéressé par mon travail ? N'hésitez pas à me contacter pour discuter de vos projets !</p>
          <a href="#contact" className="cta-button">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projets;
