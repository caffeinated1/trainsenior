import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    // Get service from query params if available
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        service: serviceParam
      }));
    }
  }, [location]);
  
  const services = {
    'personal-training': 'Personal Training',
    'nutrition-advice': 'Nutrition Advice',
    'wellness-coaching': 'Wellness Coaching',
    'rehabilitation-coaching': 'Rehabilitation Coaching',
    'mentalhealth-coaching': 'Mental Health Coaching',
    'online-training': 'Online Training'
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send this data to your server
      console.log('Form submitted:', formData);
      
      // For now, just redirect to thank you page
      navigate('/thank-you', { 
        state: { 
          name: formData.name,
          service: services[formData.service] || formData.service
        } 
      });
    }
  };
  
  const handleEmailContact = () => {
    const subject = encodeURIComponent(`Inquiry about ${services[formData.service] || 'your services'}`);
    const body = encodeURIComponent(`
      Name: ${formData.name}
      Phone: ${formData.phone}
      Service: ${services[formData.service] || formData.service}
      
      ${formData.message}
    `);
    
    window.location.href = `mailto:contact@trainsenior.com?subject=${subject}&body=${body}`;
  };
  
  const handleTextContact = () => {
    const message = encodeURIComponent(`
      Hi, I'm ${formData.name} and I'm interested in ${services[formData.service] || 'your services'}.
      
      ${formData.message}
      
      Please contact me at ${formData.email} or ${formData.phone}.
    `);
    
    // Note: This will only work on mobile devices
    window.location.href = `sms:+15551234567?body=${message}`;
  };
  
  return (
    <div className="contact-page-container">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Fill out the form below to get in touch with us about our services.
      </p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="service">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={errors.service ? 'error' : ''}
          >
            <option value="">Select a service</option>
            {Object.entries(services).map(([id, name]) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
          {errors.service && <span className="error-message">{errors.service}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>
        
        <div className="contact-buttons">
          <Button type="submit" className="submit-button">
            Submit
          </Button>
          
          <div className="alternative-contact">
            <p>Or contact us directly:</p>
            <div className="direct-contact-buttons">
              <Button onClick={handleEmailContact} className="email-button">
                Email Us
              </Button>
              <Button onClick={handleTextContact} className="text-button">
                Text Us
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactPage; 