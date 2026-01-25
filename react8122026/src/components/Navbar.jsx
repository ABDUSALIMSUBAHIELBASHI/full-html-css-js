import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isLoggedIn, user, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user');
    navigate('/');
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-icon">💻</span>
          <span className="logo-text">AbduSalim</span>
        </Link>

        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-link" onClick={() => setMenuOpen(false)}>Experience</Link>
          </li>
          <li className="nav-item">
            <Link to="/education" className="nav-link" onClick={() => setMenuOpen(false)}>Education</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>

        <div className="nav-buttons">
          {isLoggedIn ? (
            <div className="user-menu">
              <span className="user-name">👤 {user?.name}</span>
              <button 
                className="btn btn-secondary btn-small"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline btn-small">Login</Link>
              <Link to="/signup" className="btn btn-primary btn-small">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;