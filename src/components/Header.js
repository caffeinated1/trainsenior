import React from 'react';
import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js

const Header = () => {
  return (
    <header style={{ backgroundColor: '#f8f9fa', padding: '10px' }}>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/video-call">Video Call</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 