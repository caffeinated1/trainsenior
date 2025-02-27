import React from 'react';
import { useNavigate } from 'react-router-dom';

const CalendlyAuth = () => {
  const navigate = useNavigate();
  
  // These values should match your .env file on the server
  const CLIENT_ID = 'KNYBQ_ULuLQh9915gpM4QxHGEerBKzdKVH8wViXvAeo';
  const REDIRECT_URI = 'http://localhost:5000/auth/callback';
  const CALENDLY_AUTH_URL = 'https://auth.calendly.com/oauth/authorize';
  
  const handleConnect = () => {
    // Clear any existing tokens
    localStorage.removeItem('calendlyTokens');
    
    // Add state parameter to prevent CSRF and force a new auth flow
    const state = Math.random().toString(36).substring(2, 15);
    localStorage.setItem('calendlyAuthState', state);
    
    // Add timestamp to prevent caching
    const timestamp = new Date().getTime();
    
    // Construct the authorization URL with all required parameters
    const authUrl = `${CALENDLY_AUTH_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=${state}&_=${timestamp}`;
    
    console.log('Redirecting to Calendly authorization URL:', authUrl);
    
    // Force a complete reload to clear any cached auth state
    window.location.href = authUrl;
  };
  
  const handleSignUp = () => {
    window.open('https://calendly.com/signup', '_blank');
  };
  
  return (
    <div className="auth-container">
      <h2>Connect Your Calendly Account</h2>
      <p>To book appointments, you need to connect your Calendly account.</p>
      
      <div className="auth-buttons">
        <button onClick={handleConnect} className="connect-button">
          Connect Existing Account
        </button>
        
        <div className="auth-separator">
          <span>OR</span>
        </div>
        
        <button onClick={handleSignUp} className="signup-button">
          Create Calendly Account
        </button>
      </div>
      
      <div className="auth-note">
        <p>Note: You must have a Calendly account before connecting. If you don't have one, please create an account first.</p>
      </div>
    </div>
  );
};

export default CalendlyAuth; 