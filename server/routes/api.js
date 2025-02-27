const express = require('express');
const router = express.Router();

// Simple endpoint to receive contact form submissions
router.post('/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !phone || !service) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  
  // In a real application, you would:
  // 1. Store the contact in a database
  // 2. Send an email notification
  // 3. Send an SMS notification
  
  console.log('Contact form submission:', {
    name,
    email,
    phone,
    service,
    message
  });
  
  // Simulate a delay to mimic processing
  setTimeout(() => {
    res.json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });
  }, 1000);
});

module.exports = router; 