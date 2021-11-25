const express = require('express');

// Import the routes variables / object
const routes = require('./routes/routes.js');
const zoo = require('./routes/zoo.js');

// Import in Mongoose 
const mongoose = require('mongoose');


// Instantiating the app
const app = express();


// Middleware
app.use(express.json());


// Connecting our app to mongodb
// You will need to ensure that this database exists before connecting
mongoose.connect('mongodb://localhost:27017/zoo', {useNewUrlParser : true}, (error) => {
    if(error) {
        console.log(`Error, cant connect to database: ${error}`);
    } else {
        console.log("No error!");
    }
});

// Set up our app to use the new routes
app.use('/routes', routes);
app.use('/zoo', zoo);

// Tell our server to listen to port 5015
const server = app.listen(5015, () => {
    console.log("Listening on port 5015");
});