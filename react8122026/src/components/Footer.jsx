import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="footer-container">
        <div className="footer-section">
          <div className="section-header">
            <h3>AbduSalim</h3>
          </div>
          <p>Full-Stack Developer & Creative Problem Solver</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub" className="social-icon github">
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-icon linkedin">
              <span>LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter" className="social-icon twitter">
              <span>Twitter</span>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/education">Education</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul className="footer-links">
            <li><a href="mailto:salimabdu759@gmail.com">Email</a></li>
            <li><a href="tel:+1234567890">Phone</a></li>
            <li><a href="/contact">Contact Form</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter-section">
          <h4>Newsletter</h4>
          <p className="newsletter-subtitle">Get exclusive tips and updates delivered to your inbox</p>
          <div className="newsletter-wrapper">
            <form className="newsletter-form">
              <div className="input-wrapper">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                  required
                />
                <svg className="mail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <button type="submit" className="subscribe-btn">
                <span>Subscribe</span>
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
            <p className="newsletter-note">✓ No spam, unsubscribe anytime</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} AbduSalim. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;