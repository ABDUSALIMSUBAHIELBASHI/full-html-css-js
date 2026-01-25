import React from 'react';
import './styles/About.css';

function About() {
  return (
    <div className="page about-page">
      {/* Animated Background */}
      <div className="animated-bg-about">
        <div className="blob-about blob-about-1"></div>
        <div className="blob-about blob-about-2"></div>
        <div className="blob-about blob-about-3"></div>
        <div className="particle-about particle-about-1"></div>
        <div className="particle-about particle-about-2"></div>
        <div className="particle-about particle-about-3"></div>
      </div>

      <section className="about-hero">
        <div className="hero-content-about">
          <h1>About Me</h1>
          <p>Learn more about my journey and expertise</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-grid">
          <div className="about-card">
            <h2>🎓 Education</h2>
            <p>
              I completed my studies in Computer Science with a focus on web development. 
              I'm constantly learning new technologies and best practices to stay ahead in this fast-paced industry.
            </p>
          </div>

          <div className="about-card">
            <h2>💼 Experience</h2>
            <p>
              With 2+ years of professional experience, I've worked with startups and established companies, 
              building scalable web applications and leading technical teams.
            </p>
          </div>

          <div className="about-card">
            <h2>🎯 Specialties</h2>
            <p>
              React, JavaScript, Node.js, MongoDB, and modern web design. 
              I excel at creating beautiful, responsive, and user-friendly interfaces.
            </p>
          </div>

          <div className="about-card">
            <h2>🚀 Mission</h2>
            <p>
              My mission is to create digital solutions that make a difference. 
              I believe in writing clean code and delivering exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <h2>My Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-item">
            <h3>Frontend Development</h3>
            <ul>
              <li>React & React Hooks</li>
              <li>HTML5 & CSS3</li>
              <li>JavaScript ES6+</li>
              <li>Responsive Design</li>
              <li>UI/UX Implementation</li>
            </ul>
          </div>

          <div className="expertise-item">
            <h3>Backend Development</h3>
            <ul>
              <li>Node.js & Express</li>
              <li>RESTful APIs</li>
              <li>Database Design</li>
              <li>Authentication</li>
              <li>Server Deployment</li>
            </ul>
          </div>

          <div className="expertise-item">
            <h3>Tools & Technologies</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Webpack & Babel</li>
              <li>MongoDB & SQL</li>
              <li>Docker & Linux</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;