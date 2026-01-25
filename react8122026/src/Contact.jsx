import React, { useState } from "react";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact-page">
      <div className="background-animation"></div>
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="contact-container">
        <div className="contact-header">
          <div className="header-content">
            <h1 className="header-title">Let's Connect</h1>
            <p className="header-subtitle">Have a project in mind or want to work together? I'd love to hear from you!</p>
            <div className="header-line"></div>
          </div>
        </div>

        <div className="contact-wrapper">
          {/* Contact Info Cards */}
          <div className="contact-cards-section">
            <h2 className="section-title">Contact Information</h2>
            <div className="contact-cards-grid">
              <div className="contact-card card-email">
                <div className="card-icon">📧</div>
                <h3>Email</h3>
                <p className="card-value">abdusalim@example.com</p>
                <a href="mailto:abdusalim@example.com" className="card-link">Send Email</a>
              </div>

              <div className="contact-card card-phone">
                <div className="card-icon">📞</div>
                <h3>Phone</h3>
                <p className="card-value">+1 (555) 123-4567</p>
                <a href="tel:+15551234567" className="card-link">Call Now</a>
              </div>

              <div className="contact-card card-location">
                <div className="card-icon">📍</div>
                <h3>Location</h3>
                <p className="card-value">San Francisco, CA</p>
                <a href="#" className="card-link">View Map</a>
              </div>

              <div className="contact-card card-time">
                <div className="card-icon">⏰</div>
                <h3>Availability</h3>
                <p className="card-value">Mon-Fri, 9AM-6PM</p>
                <a href="#" className="card-link">Schedule Call</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="section-title">Send a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={errors.subject ? "input-error" : ""}
                />
                {errors.subject && <span className="error-text">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  className={errors.message ? "input-error" : ""}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button type="submit" className="submit-btn">
                <span className="btn-text">Send Message</span>
                <span className="btn-icon">→</span>
              </button>
            </form>

            {submitted && (
              <div className="success-message">
                <span className="success-icon">✓</span>
                <div className="success-content">
                  <p className="success-title">Message Sent Successfully!</p>
                  <p className="success-text">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="contact-social-section">
          <h2 className="section-title">Follow Me</h2>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn github-btn" title="GitHub">
              <span className="social-icon">🍙</span>
              <span className="social-text">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn" title="LinkedIn">
              <span className="social-icon">💼</span>
              <span className="social-text">LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn twitter-btn" title="Twitter">
              <span className="social-icon">𝕏</span>
              <span className="social-text">Twitter</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn instagram-btn" title="Instagram">
              <span className="social-icon">📷</span>
              <span className="social-text">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
