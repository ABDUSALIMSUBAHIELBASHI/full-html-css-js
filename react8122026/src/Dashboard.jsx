import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Dashboard.css';

function Dashboard({ user }) {
  const [stats, setStats] = useState({
    profileViews: 245,
    contactMessages: 12,
    projectsCompleted: 8,
    skillsCertified: 15
  });

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, action: 'Updated portfolio project', time: '2 hours ago', icon: '🔄', type: 'update' },
    { id: 2, action: 'Received new message from Tech Company', time: '1 day ago', icon: '✉️', type: 'message' },
    { id: 3, action: 'Completed React Advanced Course', time: '3 days ago', icon: '✅', type: 'achievement' },
    { id: 4, action: 'Profile viewed 15 times', time: '1 week ago', icon: '👁️', type: 'view' },
  ]);

  const [upcomingGoals, setUpcomingGoals] = useState([
    { id: 1, goal: 'Learn TypeScript basics', deadline: '2026-03-15', progress: 30, category: 'Learning' },
    { id: 2, goal: 'Build 3 React projects', deadline: '2026-04-30', progress: 50, category: 'Projects' },
    { id: 3, goal: 'Contribute to open source', deadline: '2026-05-15', progress: 10, category: 'Open Source' },
  ]);

  const [profileCompletion, setProfileCompletion] = useState(85);

  if (!user) {
    return (
      <div className="page dashboard-page">
        <div className="not-logged-in">
          <h2>Please log in to view your dashboard</h2>
          <Link to="/login" className="btn btn-primary">Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page dashboard-page">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>Welcome back, <span className="user-highlight">{user.name}!</span></h1>
          <p>Track your portfolio progress and achievements</p>
        </div>
        <div className="header-icon">👨‍💻</div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card stat-views">
          <div className="stat-icon">👁️</div>
          <div className="stat-info">
            <h3>{stats.profileViews}</h3>
            <p>Profile Views</p>
          </div>
        </div>
        <div className="stat-card stat-messages">
          <div className="stat-icon">✉️</div>
          <div className="stat-info">
            <h3>{stats.contactMessages}</h3>
            <p>Messages</p>
          </div>
        </div>
        <div className="stat-card stat-projects">
          <div className="stat-icon">🚀</div>
          <div className="stat-info">
            <h3>{stats.projectsCompleted}</h3>
            <p>Projects Done</p>
          </div>
        </div>
        <div className="stat-card stat-skills">
          <div className="stat-icon">🎯</div>
          <div className="stat-info">
            <h3>{stats.skillsCertified}</h3>
            <p>Skills</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="content-left">
          <div className="dashboard-section recent-activity-section">
            <div className="section-header">
              <h2>📊 Recent Activity</h2>
              <Link to="#" className="view-all">View All →</Link>
            </div>
            <div className="activity-list">
              {recentActivity.map(activity => (
                <div key={activity.id} className={`activity-item activity-${activity.type}`}>
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-content">
                    <p className="activity-action">{activity.action}</p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-section learning-goals-section">
            <div className="section-header">
              <h2>🎓 Learning Goals</h2>
              <Link to="/education" className="view-all">Edit →</Link>
            </div>
            <div className="goals-list">
              {upcomingGoals.map(goal => (
                <div key={goal.id} className="goal-item">
                  <div className="goal-header">
                    <div>
                      <h4>{goal.goal}</h4>
                      <span className="goal-category">{goal.category}</span>
                    </div>
                    <span className="deadline">Due: {goal.deadline}</span>
                  </div>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{goal.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="content-right">
          <div className="dashboard-section profile-completion-section">
            <div className="section-header">
              <h2>⭐ Profile Completion</h2>
            </div>
            <div className="completion-container">
              <div className="completion-circle">
                <svg viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="90" className="circle-bg"></circle>
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="90" 
                    className="circle-progress"
                    style={{
                      strokeDasharray: `${2 * Math.PI * 90}`,
                      strokeDashoffset: `${2 * Math.PI * 90 * (1 - profileCompletion / 100)}`
                    }}
                  ></circle>
                </svg>
                <div className="circle-content">
                  <span className="percentage">{profileCompletion}%</span>
                  <span className="label">Complete</span>
                </div>
              </div>
              <p className="completion-text">Complete your profile to attract more opportunities</p>
              <Link to="/about" className="btn btn-primary">Edit Profile</Link>
            </div>
          </div>

          <div className="dashboard-section quick-actions-section">
            <div className="section-header">
              <h2>⚡ Quick Actions</h2>
            </div>
            <div className="quick-actions">
              <Link to="/contact" className="action-btn action-contact">
                <span className="action-icon">📝</span>
                <div className="action-text">
                  <span className="action-title">Contact Info</span>
                  <span className="action-desc">Update details</span>
                </div>
              </Link>
              <Link to="/experience" className="action-btn action-experience">
                <span className="action-icon">💼</span>
                <div className="action-text">
                  <span className="action-title">Add Experience</span>
                  <span className="action-desc">New job</span>
                </div>
              </Link>
              <Link to="/education" className="action-btn action-education">
                <span className="action-icon">🎓</span>
                <div className="action-text">
                  <span className="action-title">Add Certification</span>
                  <span className="action-desc">New skill</span>
                </div>
              </Link>
              <button className="action-btn action-export">
                <span className="action-icon">📤</span>
                <div className="action-text">
                  <span className="action-title">Export Portfolio</span>
                  <span className="action-desc">PDF</span>
                </div>
              </button>
            </div>
          </div>

          <div className="dashboard-section recent-messages-section">
            <div className="section-header">
              <h2>💬 Messages</h2>
              <span className="message-badge">3</span>
            </div>
            <div className="messages-content">
              <p className="messages-count">You have 3 unread messages</p>
              <Link to="/contact" className="btn btn-secondary">View Messages</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;