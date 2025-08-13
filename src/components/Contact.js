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

            <div className="mobility-note">
              <h4>Mobilité</h4>
              <p>
                Je n'ai pas le permis de conduire, mais je peux me déplacer facilement en
                transports en commun (Bus, Tramway, TER).
              </p>
            </div>

            <div className="contact-availability">
              <h4>Disponibilité</h4>
              <p>
                Je recherche une alternance à partir de septembre 2025 pour mon Bachelor CDA. 
                Disponible pour des entretiens et des opportunités de collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* CTA section removed as requested */}
      </div>
    </section>
  );
};

export default Contact;
