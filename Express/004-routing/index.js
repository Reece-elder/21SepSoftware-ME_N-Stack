const express = require('express');

const app = express();

// Import the routes variables / object
const routes = require('./routes/routes.js');
const zoo = require('./routes/zoo.js');

// Middleware
app.use(express.json());

// Set up our app to use the new routes
app.use('/routes', routes);
app.use('/zoo', zoo);

// Tell our server to listen to port 5015
const server = app.listen(5015, () => {
    console.log("Listening on port 5015");
});