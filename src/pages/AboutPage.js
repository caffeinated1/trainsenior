import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutPage.css';

const AboutPage = () => {
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
    <div className="about-page">
      <div className="top-menu">
        <Link to="/" className="menu-link">Home</Link>
        <Link to="/about" className="menu-link active">About</Link>
        <Link to="/resources" className="menu-link">Resources</Link>
      </div>
      
      <div className="about-content">
        <div className="title-container">
          <h1 className="about-title">About TrainSenior™</h1>
          <p className="subtitle">A wellness company</p>
        </div>
        
        <div className="services-explanation">
          <div className="service-item">
            <h2>Personal Training</h2>
            <p>One-on-one training sessions tailored to your specific needs and goals. Our trainers specialize in senior fitness and understand the unique challenges and opportunities that come with aging.</p>
          </div>
          
          <div className="service-item">
            <h2>Nutrition Advice</h2>
            <p>Personalized nutrition guidance to support your health goals. We focus on practical, sustainable eating habits that provide the nutrients needed for energy, muscle maintenance, and overall wellbeing.</p>
          </div>
          
          <div className="service-item">
            <h2>Wellness Coaching</h2>
            <p>Holistic approach to improve your overall quality of life. We address physical activity, nutrition, stress management, sleep, and social connections to help you thrive in your golden years.</p>
          </div>
          
          <div className="service-item">
            <h2>Rehabilitation Coaching</h2>
            <p>Specialized support for recovery from injuries or surgeries. Our coaches work alongside your healthcare providers to help you regain strength, mobility, and confidence.</p>
          </div>
          
          <div className="service-item">
            <h2>Mental Health Coaching</h2>
            <p>Support for emotional wellbeing through exercise, mindfulness, and stress reduction techniques. We believe in the powerful connection between physical activity and mental health.</p>
          </div>
          
          <div className="service-item">
            <h2>Online Training</h2>
            <p>Virtual sessions that bring expert guidance to your home. Perfect for those who prefer to exercise in familiar surroundings or have limited transportation options.</p>
          </div>
        </div>
        
        <div className="consultation-section">
          <h2 className="consultation-heading">Ready to get started?</h2>
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
      </div>
      
      <footer className="footer">
        <p>© 2025 trainsenior.com Made for Grandma 👵 and Grandpa 👴 ❤️</p>
      </footer>
    </div>
  );
};

export default AboutPage; 