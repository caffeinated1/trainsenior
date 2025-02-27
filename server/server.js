require('dotenv').config();
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const app = express();

console.log('Environment check:');
console.log('CALENDLY_CLIENT_ID exists:', !!process.env.CALENDLY_CLIENT_ID);
console.log('CALENDLY_CLIENT_SECRET exists:', !!process.env.CALENDLY_CLIENT_SECRET);
console.log('CALENDLY_REDIRECT_URI exists:', !!process.env.CALENDLY_REDIRECT_URI);

// Configure CORS to allow requests from your frontend
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json()); // Middleware to parse JSON bodies

// API routes
app.use('/api', apiRoutes);

// Auth routes - make sure this is correctly mounted
app.use('/auth', apiRoutes);

// Static files
app.use(express.static('public'));

// Add a catch-all route handler for debugging
app.use((req, res) => {
  console.log(`Unhandled request: ${req.method} ${req.url}`);
  res.status(404).json({ message: 'Not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Calendly callback URL: ${process.env.CALENDLY_REDIRECT_URI}`);
}); 