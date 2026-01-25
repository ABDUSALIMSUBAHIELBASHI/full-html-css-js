
// ...rest of your Login code stays the same
function Signup() {
  // ...rest of your code
}

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/Auth.css';

// ...rest of your Login code stays the same

function Login({ setIsLoggedIn, setUser }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      const userData = {
        email: formData.email,
        name: formData.email.split('@')[0],
        token: 'demo-token-' + Date.now()
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoggedIn(true);
      setUser(userData);
      setIsLoading(false);
      
      navigate('/');
    }, 1000);
  };

  const socialLoginLinks = {
    google: 'https://accounts.google.com/signin',
    github: 'https://github.com/login',
    facebook: 'https://www.facebook.com/login',
    whatsapp: 'https://web.whatsapp.com'
  };

  return (
    <div className="page auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your account to continue</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          
          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="#" className="forgot-password">
              Forgot password?
            </Link>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary btn-block"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="auth-link">
              Sign up here
            </Link>
          </p>
        </div>
        
        <div className="auth-divider">
          <span>Or continue with</span>
        </div>
        
        <div className="social-login">
          <a 
            href={socialLoginLinks.google} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn google"
            title="Sign in with Google"
          >
            <span>G</span> Google
          </a>
          <a 
            href={socialLoginLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn github"
            title="Sign in with GitHub"
          >
            <span>⚙️</span> GitHub
          </a>
          <a 
            href={socialLoginLinks.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn facebook"
            title="Sign in with Facebook"
          >
            <span>f</span> Facebook
          </a>
          <a 
            href={socialLoginLinks.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn whatsapp"
            title="Sign in with WhatsApp"
          >
            <span>💬</span> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;