require('dotenv').config();
const express = require('express');
const apiRoutes = require('./routes/api');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS if your frontend is on a different domain
app.use(express.json()); // Middleware to parse JSON bodies

// Use routes defined in the api.js file
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 