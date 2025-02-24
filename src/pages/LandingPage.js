import React from 'react';
import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js

const LandingPage = () => {
  return (
    <div style={{ fontSize: '1.5em', color: '#333', padding: '20px' }}>
      <h1>Welcome to Train Senior</h1>
      <p>Your gateway to senior personal training services and easy video training.</p>
      <nav>
        <ul>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/booking">Book a Session</Link></li>
          <li><Link to="/video-call">Start a Video Call</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage; 