import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [service, setService] = useState('Nutrition Advice');
  
  const handleServiceChange = (event) => {
    setService(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!service) {
      alert('Please select a service');
      return;
    }
    
    // Format the message for SMS
    const phoneNumber = '7868040689';
    const textMessage = encodeURIComponent(`I would like to book a consultation for ${service}.`);
    
    // Open SMS app with pre-filled message
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = `sms:${phoneNumber}?body=${textMessage}`;
    } else {
      // Fallback for desktop - open a mailto link
      const subject = encodeURIComponent(`Consultation Request: ${service}`);
      window.location.href = `mailto:trainseniorsonline@gmail.com?subject=${subject}&body=${textMessage}`;
    }
  };
  
  return (
    <div className="landing-page">
      <div className="top-menu">
        <Link to="/about" className="menu-link">About</Link>
        <Link to="/resources" className="menu-link">Resources</Link>
      </div>
      
      <div className="content">
        <div className="title-container">
          <h1 className="title">TrainSenior™</h1>
        </div>
        
        <h2 className="tagline">Strength. Mobility. Longevity.</h2>
        
        <form onSubmit={handleSubmit} className="booking-form">
          <select 
            value={service} 
            onChange={handleServiceChange}
            className="service-select"
          >
            <option value="Nutrition Advice">Nutrition Advice</option>
            <option value="Personal Training">Personal Training</option>
            <option value="Wellness Coaching">Wellness Coaching</option>
            <option value="Rehabilitation Coaching">Rehabilitation Coaching</option>
            <option value="Mental Health Coaching">Mental Health Coaching</option>
            <option value="Online Training">Online Training</option>
          </select>
          
          <button type="submit" className="book-button">
            Book Consultation
          </button>
        </form>
      </div>
      
      <footer className="footer">
        <p>© 2025 trainsenior.com Made for Grandma 👵 and Grandpa 👴 ❤️</p>
      </footer>
    </div>
  );
};

export default LandingPage; 