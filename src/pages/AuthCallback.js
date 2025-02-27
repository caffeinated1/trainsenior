import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const AuthCallback = () => {
  const [status, setStatus] = useState('Processing...');
  const [error, setError] = useState(null);
  const [debug, setDebug] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Clear any existing tokens first to ensure a fresh start
    localStorage.removeItem('calendlyTokens');
    
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    const errorParam = queryParams.get('error');
    const state = queryParams.get('state');
    
    // Store debug info
    setDebug({
      code: code ? `${code.substring(0, 10)}...` : 'none',
      error: errorParam,
      state: state,
      url: window.location.href
    });
    
    if (errorParam) {
      setError(`Authorization error: ${errorParam}`);
      setStatus('Failed');
      return;
    }
    
    if (!code) {
      setError('No authorization code received');
      setStatus('Failed');
      return;
    }
    
    // Add a timestamp to prevent caching
    const timestamp = new Date().getTime();
    
    // Exchange the code for an access token
    console.log('Sending code to server for token exchange');
    
    axios.post(`http://localhost:5000/auth/token?_=${timestamp}`, { code }, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    })
      .then(response => {
        console.log('Token exchange successful');
        
        // Verify we have the required tokens
        if (!response.data.access_token) {
          throw new Error('No access token received from server');
        }
        
        // Store the tokens in localStorage
        localStorage.setItem('calendlyTokens', JSON.stringify(response.data));
        setStatus('Successfully connected to Calendly!');
        
        // Update debug info
        setDebug(prev => ({
          ...prev,
          tokenReceived: true,
          accessTokenLength: response.data.access_token.length,
          refreshTokenLength: response.data.refresh_token?.length || 0
        }));
        
        // Check if there was a selected service before authentication
        const selectedService = localStorage.getItem('selectedService');
        
        // Redirect back to the main page after a short delay
        setTimeout(() => {
          if (selectedService) {
            // Clear the stored service
            localStorage.removeItem('selectedService');
            // Redirect back to the landing page to complete the booking
            navigate('/', { replace: true });
          } else {
            navigate('/', { replace: true });
          }
        }, 1500);
      })
      .catch(error => {
        console.error('Error exchanging code for token:', error);
        setError(error.response?.data?.message || error.message);
        setStatus('Failed');
        
        // Update debug info
        setDebug(prev => ({
          ...prev,
          tokenReceived: false,
          errorMessage: error.message,
          responseError: error.response?.data
        }));
      });
  }, [location, navigate]);
  
  return (
    <div className="callback-container">
      <h2>Calendly Authorization</h2>
      <p>{status}</p>
      {error && <p className="error-message">Error: {error}</p>}
      {status === 'Failed' && (
        <button onClick={() => navigate('/connect-calendly')} className="retry-button">
          Try Again
        </button>
      )}
      
      <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
        <details>
          <summary>Debug Info (click to expand)</summary>
          <pre>{JSON.stringify(debug, null, 2)}</pre>
        </details>
      </div>
    </div>
  );
};

export default AuthCallback; 