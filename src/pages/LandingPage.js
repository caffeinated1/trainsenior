import React from 'react';
import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js

const LandingPage = () => {
  return (
    <div style={{ fontSize: '1.5em', color: '#333', padding: '20px' }}>
      <h1>Welcome to SeniorConnect</h1>
      <p>Your gateway to senior care services and easy video calling.</p>
      <nav>
        <ul>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/video-call">Start a Video Call</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage; 