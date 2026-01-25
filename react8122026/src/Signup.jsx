import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/Auth.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
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
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms';
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
        name: formData.name,
        email: formData.email,
        token: 'demo-token-' + Date.now(),
        joined: new Date().toISOString()
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoading(false);
      
      alert('Account created successfully! Redirecting to login...');
      navigate('/login');
    }, 1500);
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
          <h1>Create Account</h1>
          <p>Join our community of developers</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
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
                placeholder="Create a password"
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
            <small className="form-hint">Must be at least 6 characters</small>
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-input-wrapper">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                title={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>
          
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <span>I agree to the <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link></span>
            </label>
            {errors.agreeTerms && (
              <span className="error-message">{errors.agreeTerms}</span>
            )}
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary btn-block"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        
        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="auth-link">
              Sign in here
            </Link>
          </p>
        </div>
        
        <div className="auth-divider">
          <span>Or sign up with</span>
        </div>
        
        <div className="social-login">
          <a 
            href={socialLoginLinks.google} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn google"
            title="Sign up with Google"
          >
            <span>G</span> Google
          </a>
          <a 
            href={socialLoginLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn github"
            title="Sign up with GitHub"
          >
            <span>⚙️</span> GitHub
          </a>
          <a 
            href={socialLoginLinks.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn facebook"
            title="Sign up with Facebook"
          >
            <span>f</span> Facebook
          </a>
          <a 
            href={socialLoginLinks.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn whatsapp"
            title="Sign up with WhatsApp"
          >
            <span>💬</span> WhatsApp
          </a>
        </div>
        
        <div className="signup-benefits">
          <h3>Benefits of joining:</h3>
          <ul>
            <li>✨ Save your portfolio preferences</li>
            <li>📊 Track your learning progress</li>
            <li>🎯 Receive personalized recommendations</li>
            <li>🤝 Connect with other developers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Signup;