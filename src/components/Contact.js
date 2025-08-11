import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Préparer les données du message
      const messageData = {
        to: 'noahwski@gmail.com',
        from: formData.email,
        subject: `Nouveau message de ${formData.nom} - Portfolio Noah`,
        text: `
          Nom: ${formData.nom}
          Email: ${formData.email}
          
          Message:
          ${formData.message}
        `,
        html: `
          <h3>Nouveau message de ${formData.nom}</h3>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `
      };

      // Envoyer l'email via mailto (solution temporaire)
      const mailtoLink = `mailto:noahwski@gmail.com?subject=${encodeURIComponent(messageData.subject)}&body=${encodeURIComponent(messageData.text)}`;
      window.open(mailtoLink, '_blank');
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ nom: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

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
            <h3>Envoyez-moi un message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nom">
                  <FaUser /> Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                  placeholder="Votre nom complet"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope /> Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <FaComment /> Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Votre message..."
                  rows="5"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Envoyer le message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message">
                  Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement par email.
                </div>
              )}
            </form>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
