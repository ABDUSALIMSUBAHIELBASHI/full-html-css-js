import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../b.jpeg';
import './styles/Home.css';

function Home() {
  return (
    <div className="page home-page">
      {/* Animated Background */}
      <div className="animated-bg-home">
        <div className="blob-home blob-home-1"></div>
        <div className="blob-home blob-home-2"></div>
        <div className="blob-home blob-home-3"></div>
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge">👨‍💻 Welcome to My Portfolio</div>
          <h1 className="hero-title">Crafting Digital Excellence</h1>
          <p className="hero-subtitle">Full-Stack Developer | React Specialist | UI/UX Enthusiast</p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary btn-glow">Explore My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
          <div className="floating-badges">
            <span className="tech-badge">React</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">Modern Web</span>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="profile-image" 
            />
            <div className="glow-ring"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>50+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card">
          <h3>30+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-card">
          <h3>2+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>Satisfaction Rate</p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Showcase of my best work</p>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon">🎨</div>
            <h3>E-Commerce Platform</h3>
            <p>Modern shopping experience with React & Node.js</p>
            <Link to="https://gooodidae.netlify.app/" className="project-lin">View Project →</Link>
          </div>
          <div className="project-card">
            <div className="project-icon">📱</div>
            <h3>Mobile App Dashboard</h3>
            <p>Real-time analytics dashboard for mobile apps</p>
            <Link to="https://quranjshtmlcss.netlify.app/" className="project-link">View Project →</Link>
          </div>
          <div className="project-card">
            <div className="project-icon">🚀</div>
            <h3>SaaS Platform</h3>
            <p>Scalable cloud-based solution for businesses</p>
            <Link to="https://abdusalimsubahielbashi.github.io/my-Portfolio/" className="project-link">View Project →</Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-showcase">
        <h2>Tech Stack</h2>
        <div className="skills-grid">
          <div className="skill-showcase">
            <span className="skill-icon">⚛️</span>
            <span>React</span>
          </div>
          <div className="skill-showcase">
            <span className="skill-icon">🟨</span>
            <span>JavaScript</span>
          </div>
          <div className="skill-showcase">
            <span className="skill-icon">🎨</span>
            <span>CSS/Design</span>
          </div>
          <div className="skill-showcase">
            <span className="skill-icon">🗄️</span>
            <span>Backend</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready for Your Next Project?</h2>
          <p>Let's collaborate and create something extraordinary together!</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-glow">Start a Project</Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;