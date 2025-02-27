import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed

const LandingPage = () => {
  const [service, setService] = useState('');

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/book-appointment', { serviceId: service });
      console.log('Booking successful:', response.data);
      // Implement UI feedback here, like showing a confirmation message
    } catch (error) {
      console.error('Error booking the appointment:', error);
      // Handle errors, possibly by displaying an error message to the user
    }
  };

  return (
    <div className="landing-page-container">
      <form onSubmit={handleSubmit}>
        <select id="service-select" value={service} onChange={handleServiceChange}>
          <option value="">Select a service...</option>
          <option value="personal-training">Personal Training</option>
          <option value="nutrition-advice">Nutrition Advice</option>
          <option value="wellness-coaching">Wellness Coaching</option>
          <option value="rehabilitation-coaching">Rehabilitation Coaching</option>
          <option value="mentalhealth-coaching">Mental Health Coaching</option>
          <option value="online-training">Online Training</option>
        </select>
        <button type="submit">Book Consultation</button>
      </form>
    </div>
  );
};

export default LandingPage; 