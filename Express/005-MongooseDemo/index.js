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

// Custom Error Middleware
// Will never run because it hasn't been declared with app.use
// Some middleground where this runs WHENEVER we get an error
const errorLogger = (error, req, res, next) => {
    // any middlware with an 'err' will be called when Express catches an error 
    // console.log("Error!");
    console.log(err.stack);
    res.status(500).send(error.message);
}

app.use(errorLogger);


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