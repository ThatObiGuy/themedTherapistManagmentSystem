const express = require('express'); // Import express
const cors = require('cors'); // Import the cors package
const therapistRoutes = require('./routes/therapistRoutes'); // Import therapist routes
const clientRoutes = require('./routes/clientRoutes'); // Import client routes
const sessionRoutes = require('./routes/sessionRoutes'); // Import session routes
const db = require('./db'); // Import the database connection

const app = express(); // Create an express app
const port = 5000; // Set the port for consistency

app.use(cors()); // Use the cors middleware to allow for cross-origin requests
app.use(express.json()); // Use the express.json() middleware to parse the body of the request message as json data 

app.use('/api/therapists', therapistRoutes); // Use therapist routes
app.use('/api/clients', clientRoutes); // Use client routes
app.use('/api/sessions', sessionRoutes); // Use session routes

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});