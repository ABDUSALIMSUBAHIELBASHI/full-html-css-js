import React from 'react';
import './styles/Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2023 - Present",
      description: "Leading frontend development team, building scalable React applications and mentoring junior developers.",
      skills: ["React", "TypeScript", "Redux", "CSS-in-JS"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "Jun 2021 - Dec 2022",
      description: "Developed and maintained full-stack web applications using React and Node.js. Improved performance by 40%.",
      skills: ["React", "Node.js", "MongoDB", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "StartUp Hub",
      period: "Jan 2021 - May 2021",
      description: "Built responsive web interfaces and fixed bugs. Collaborated with designers and backend developers.",
      skills: ["HTML5", "CSS3", "JavaScript", "React Basics"]
    }
  ];

  return (
    <div className="page experience-page">
      <section className="experience-hero">
        <h1>Professional Experience</h1>
        <p>My journey in web development and tech industry</p>
      </section>

      <section className="experience-timeline">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <p className="period">📅 {exp.period}</p>
                  <p className="description">{exp.description}</p>
                  <div className="skills-tags">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="achievements-section">
        <h2>Key Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <h3>Performance Optimization</h3>
            <p>Improved website loading time by 60% using code splitting and lazy loading</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">👥</div>
            <h3>Team Leadership</h3>
            <p>Led a team of 5 developers and successfully delivered 3 major projects</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">💡</div>
            <h3>Innovation</h3>
            <p>Implemented new design patterns and best practices across projects</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;