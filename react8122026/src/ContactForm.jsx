import React, { useState } from 'react';
import './styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'salimabdu759@gmail.com',
      link: 'mailto:salimabdu759@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+250739390715',
      link: 'tel:0735281339'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'kigali,RWANDA',
      link: '#'
    },
    {
      icon: '⏰',
      title: 'Available Time',
      value: 'Monday - Friday, 9AM - 6PM',
      link: '#'
    }
  ];

  return (
    <div className="page contact-page">
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Let's discuss your project and how I can help you achieve your goals</p>
      </section>

      <section className="contact-content">
        <div className="contact-grid">
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact-info-card"
                  target={info.link.startsWith('mailto') || info.link.startsWith('tel') ? '_self' : '_blank'}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-media">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-card">
              <h2>Send Me a Message</h2>
              {isSubmitted && (
                <div className="success-message">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=""
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-block"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <h2>Quick Response Time</h2>
        <p>I aim to respond to all inquiries within 24 hours</p>
        <div className="response-stats">
          <div className="stat">
            <h3>24hrs</h3>
            <p>Average Response</p>
          </div>
          <div className="stat">
            <h3>95%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;