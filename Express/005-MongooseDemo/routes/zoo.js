// Importing in the router
const router = require('express').Router();

// Import in my lizard model
const {Lizard} = require('../persistence/lizard.js');
// const lizard = require('../persistence/lizard.js');


// Creating a function that will push data to the database

router.post('/create', (req, res) => {

    // Creating a new lizard using the schema and model and passing in the request body
    const lizard = new Lizard(req.body);
    console.log(req.body);
    console.log(lizard);

    // Save the lizard into our database
    // .save() is an inbuilt function to add the lizard to the mongodb
    lizard.save().then((result) => {
        res.status(201).send("Lizard saved to database!");
    });

});



// Export this routes file

module.exports = router;