import React from 'react';
import './styles/Education.css';

function Education() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Tech University",
      year: "2019 - 2023",
      description: "Specialized in Web Development and Software Engineering with focus on modern frameworks and technologies.",
      gpa: "3.8/4.0"
    },
    {
      id: 2,
      degree: "Diploma in Web Development",
      institution: "Code Academy",
      year: "2021 - 2022",
      description: "Intensive bootcamp covering frontend and backend development, databases, and deployment.",
      gpa: "A"
    },
    {
      id: 3,
      degree: "Advanced React & Node.js",
      institution: "Udemy & Coursera",
      year: "2022 - 2023",
      description: "Completed multiple advanced courses in modern JavaScript frameworks and backend development.",
      gpa: "A+"
    }
  ];

  const certifications = [
    "AWS Certified Developer - Associate",
    "Google Cloud Professional Developer",
    "Advanced JavaScript Developer",
    "Full Stack Development Certification",
    "React Advanced Patterns",
    "MongoDB Certification"
  ];

  return (
    <div className="page education-page">
      <section className="education-hero">
        <h1>Education & Certifications</h1>
        <p>Continuous learning and professional development</p>
      </section>

      <section className="education-content">
        <h2>Educational Background</h2>
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
              </div>
              <p className="year">📚 {edu.year}</p>
              <p className="description">{edu.description}</p>
              <div className="gpa-badge">{edu.gpa}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="certifications-section">
        <h2>Professional Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-icon">🎖️</div>
              <p>{cert}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-development">
        <h2>Skills Development</h2>
        <div className="skills-categories">
          <div className="skill-category">
            <h3>💻 Programming Languages</h3>
            <div className="skill-items">
              <div className="skill-item">
                <span>JavaScript</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>React</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Node.js</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>🗄️ Databases</h3>
            <div className="skill-items">
              <div className="skill-item">
                <span>MongoDB</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '88%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>PostgreSQL</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '82%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>MySQL</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>🛠️ Tools & Technologies</h3>
            <div className="skill-items">
              <div className="skill-item">
                <span>Git & GitHub</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '92%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Docker</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span>AWS</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '78%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;