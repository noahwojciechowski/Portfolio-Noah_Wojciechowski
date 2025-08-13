import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Parcours.css';

const Parcours = () => {
  const parcoursScolaire = [
    {
      id: 1,
      periode: "2025–2026",
      formation: "Bachelor CDA (Concepteur Développeur d'Applications)",
      ecole: "La Joliverie",
      statut: "Admis",
      description: "Formation en alternance pour devenir concepteur développeur d'applications"
    },
    {
      id: 2,
      periode: "2023–2025",
      formation: "BTS CIEL (Cybersécurité, Informatique et Réseaux, Électronique et Logiciels)",
      ecole: "St-Félix La Salle, Nantes",
      statut: "Titulaire",
      description: "Formation technique en informatique, réseaux et cybersécurité"
    },
    {
      id: 3,
      periode: "2023",
      formation: "Baccalauréat STI2D – Option SIN (Systèmes d'Information et Numérique)",
      ecole: "St-Félix La Salle",
      statut: "Titulaire",
      description: "Baccalauréat technologique spécialisé dans les systèmes d'information"
    },
    {
      id: 4,
      periode: "2020",
      formation: "Brevet des Collèges",
      ecole: "Ste Philomène",
      statut: "Titulaire",
      description: "Diplôme national du brevet"
    }
  ];

  const experiences = [
    {
      id: 1,
      periode: "2024",
      entreprise: "ASI",
      poste: "Stagiaire en informatique",
      description: "Déploiement de PC, création de scripts de connexion, gestion des GPO (Group Policy Objects)",
      competences: ["Déploiement", "Scripts", "GPO", "Windows Server"]
    },
    {
      id: 2,
      periode: "2021",
      entreprise: "Atlantique Habitation",
      poste: "Stagiaire en maintenance informatique",
      description: "Réparation PC, installation d'OS (Linux, Debian, Ubuntu, Windows)",
      competences: ["Maintenance", "Linux", "Windows", "Installation OS"]
    }
  ];

  return (
    <section id="parcours" className="parcours">
      <div className="parcours-container">
        <div className="section-header">
          <h2 className="section-title">Mon Parcours</h2>
          <p className="section-subtitle">
            Mon parcours académique et mes expériences professionnelles
          </p>
        </div>

        <div className="parcours-content">
          <div className="parcours-section">
            <h3 className="section-subtitle formation-heading">
              <FaGraduationCap className="section-icon" />
              Formation
            </h3>
            <div className="timeline">
              {parcoursScolaire.map((formation, index) => (
                <div
                  key={formation.id}
                  className="timeline-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                >
                  <div className="timeline-marker">
                    <FaCalendarAlt />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="formation-title">{formation.formation}</h4>
                      <span className="formation-periode">{formation.periode}</span>
                    </div>
                    <div className="formation-details">
                      <p className="formation-ecole">
                        <FaMapMarkerAlt /> {formation.ecole}
                      </p>
                      <span className={`formation-statut ${formation.statut.toLowerCase()}`}>
                        {formation.statut}
                      </span>
                    </div>
                    <p className="formation-description">{formation.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="parcours-section">
            <h3 className="section-subtitle experiences-heading">
              <FaBriefcase className="section-icon" />
              Expériences Professionnelles
            </h3>
            <div className="experiences-grid">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className="experience-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                >
                  <div className="experience-header">
                    <h4 className="experience-poste">{experience.poste}</h4>
                    <span className="experience-periode">{experience.periode}</span>
                  </div>
                  <h5 className="experience-entreprise">{experience.entreprise}</h5>
                  <p className="experience-description">{experience.description}</p>
                  <div className="experience-competences">
                    <h6>Compétences développées :</h6>
                    <div className="competences-tags">
                      {experience.competences.map((competence, index) => (
                        <span key={index} className="competence-tag">
                          {competence}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="parcours-cta" data-aos="fade-up" data-aos-delay="200">
            <div className="cta-content">
              <h4>Recherche d'alternance</h4>
              <p>
                Je recherche une alternance à partir de septembre 2025 pour mon Bachelor CDA. 
                Passionné par le développement web et la cybersécurité, je suis prêt à m'investir 
                dans des projets innovants.
              </p>
              <a href="#contact" className="cta-button">
                Me contacter pour une opportunité
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parcours;
