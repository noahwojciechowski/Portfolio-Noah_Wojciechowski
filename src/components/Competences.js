import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaPhp, FaReact, FaNodeJs, 
  FaDatabase, FaServer, FaNetworkWired, FaShieldAlt, FaRobot, FaRocket 
} from 'react-icons/fa';
import { SiSymfony, SiMysql, SiVirtualbox, SiDebian, SiUbuntu, SiKalilinux } from 'react-icons/si';
import { FaWindows } from 'react-icons/fa';
import './Competences.css';

const Competences = () => {
  const competences = {
    langages: [
      { name: 'HTML', icon: <FaHtml5 />, color: '#e34f26' },
      { name: 'CSS', icon: <FaCss3Alt />, color: '#1572b6' },
      { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
      { name: 'Python', icon: <FaPython />, color: '#3776ab' },
      { name: 'Java', icon: <FaJava />, color: '#007396' },
      { name: 'PHP', icon: <FaPhp />, color: '#777bb4' }
    ],
    frameworks: [
      { name: 'React', icon: <FaReact />, color: '#61dafb' },
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Symfony', icon: <SiSymfony />, color: '#000000' }
    ],
    bases: [
      { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' }
    ],
    reseaux: [
      { name: 'VirtualBox', icon: <SiVirtualbox />, color: '#183a61' },
      { name: 'Windows Server', icon: <FaWindows />, color: '#0078d4' },
      { name: 'Debian', icon: <SiDebian />, color: '#a81d33' },
      { name: 'Ubuntu', icon: <SiUbuntu />, color: '#e95420' },
      { name: 'Kali Linux', icon: <SiKalilinux />, color: '#557c93' },
      { name: 'Configuration réseau', icon: <FaNetworkWired />, color: '#2c3e50' }
    ],
    autres: [
      { name: 'Bases de données web', icon: <FaDatabase />, color: '#f39c12' },
      { name: 'Chatbot IA', icon: <FaRobot />, color: '#9b59b6' },
      { name: 'Cybersécurité', icon: <FaShieldAlt />, color: '#e74c3c' },
      { name: 'Drone Python', icon: <FaRocket />, color: '#27ae60' }
    ]
  };

  return (
    <section id="competences" className="competences">
      <div className="competences-container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Compétences Techniques</h2>
          <p className="section-subtitle">
            Un éventail de technologies et outils que j'utilise pour créer des solutions innovantes
          </p>
        </div>

          <div className="competences-grid">
          <div className="competence-category">
            <h3 className="category-title">
              <FaJs className="category-icon" />
              Langages & Frameworks
            </h3>
            <div className="skills-grid">
              {competences.langages.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                  style={{ '--skill-color': skill.color }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 40}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
              {competences.frameworks.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                  style={{ '--skill-color': skill.color }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 40 + 200}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="competence-category" data-aos="fade-up" data-aos-delay="100">
            <h3 className="category-title">
              <FaDatabase className="category-icon" />
              SGBD
            </h3>
            <div className="skills-grid">
              {competences.bases.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                  style={{ '--skill-color': skill.color }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 40}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="competence-category" data-aos="fade-up" data-aos-delay="200">
            <h3 className="category-title">
              <FaServer className="category-icon" />
              Réseaux / OS / Outils
            </h3>
            <div className="skills-grid">
              {competences.reseaux.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                  style={{ '--skill-color': skill.color }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 40}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="competence-category" data-aos="fade-up" data-aos-delay="300">
            <h3 className="category-title">
              <FaShieldAlt className="category-icon" />
              Autres Compétences
            </h3>
            <div className="skills-grid">
              {competences.autres.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                  style={{ '--skill-color': skill.color }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 40}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="competences-description">
          <div className="description-card">
            <h4>Expertise Technique</h4>
            <p>
              Ma formation en BTS CIEL et mon admission en Bachelor CDA m'ont permis d'acquérir 
              une solide base technique couvrant le développement web, la gestion de bases de données, 
              la configuration réseau et la cybersécurité.
            </p>
          </div>
          <div className="description-card">
            <h4>Projets Pratiques</h4>
            <p>
              J'ai développé des applications web complètes, créé des chatbots IA pour la cybersécurité, 
              et programmé des drones avec Python, démontrant ma capacité à maîtriser de nouvelles technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;
