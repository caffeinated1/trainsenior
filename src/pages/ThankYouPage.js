import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/ThankYouPage.css';

const ThankYouPage = () => {
  const location = useLocation();
  const { name = 'there', service = 'our services' } = location.state || {};
  
  return (
    <div className="thank-you-container">
      <h1>Thank You!</h1>
      <p className="thank-you-message">
        Hi {name}, thank you for your interest in {service}. We've received your inquiry and will get back to you as soon as possible.
      </p>
      <p className="contact-info">
        If you need immediate assistance, please call us at <strong>(555) 123-4567</strong> or email us at <strong>contact@trainsenior.com</strong>.
      </p>
      <Link to="/">
        <Button className="home-button">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default ThankYouPage; 