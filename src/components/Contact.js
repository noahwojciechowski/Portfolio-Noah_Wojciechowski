import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'Noahwski@gmail.com',
      link: 'mailto:Noahwski@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Téléphone',
      value: '07 68 64 11 65',
      link: 'tel:0768641165'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Adresse',
      value: '31 Rue Philippe Noiret, 44220 Couëron',
      link: 'https://maps.google.com/?q=31+Rue+Philippe+Noiret,+44220+Couëron'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Intéressé par mon profil ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <h3>Mes Coordonnées</h3>
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.label}</h4>
                    <a 
                      href={info.link} 
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="contact-link"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-availability">
              <h4>Disponibilité</h4>
              <p>
                Je recherche une alternance à partir de septembre 2025 pour mon Bachelor CDA. 
                Disponible pour des entretiens et des opportunités de collaboration.
              </p>
            </div>
          </div>

          <div className="contact-form-container" data-aos="fade-left" data-aos-delay="150">
            <h3>Me contacter directement</h3>
            <div className="contact-direct-card">
              <div className="direct-row">
                <FaEnvelope />
                <a href="mailto:Noahwski@gmail.com" className="direct-link">Noahwski@gmail.com</a>
              </div>
              <div className="direct-row">
                <FaPhone />
                <a href="tel:0768641165" className="direct-link">07 68 64 11 65</a>
              </div>
              <p className="direct-hint">Cliquez pour ouvrir votre application d'email ou passer un appel.</p>
            </div>
          </div>
        </div>

        <div className="contact-cta" data-aos="fade-up" data-aos-delay="200">
          <div className="cta-content">
            <h4>Prêt à collaborer ?</h4>
            <p>
              Que ce soit pour une alternance, un projet freelance ou simplement pour échanger 
              sur le développement web et la cybersécurité, je suis toujours ouvert aux nouvelles opportunités.
            </p>
            <div className="cta-buttons">
              <a href="mailto:Noahwski@gmail.com" className="cta-button primary">
                <FaEnvelope /> Envoyer un email
              </a>
              <a href="tel:0768641165" className="cta-button secondary">
                <FaPhone /> Appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
