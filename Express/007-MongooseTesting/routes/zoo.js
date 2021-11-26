// Importing in the router
const router = require('express').Router();

// Import in my lizard model
const {Lizard} = require('../persistence/lizard.js');
// const lizard = require('../persistence/lizard.js');


// Creating a function that will push data to the database

router.post('/create', (req, res, next) => {

    // Creating a new lizard using the schema and model and passing in the request body
    const lizard = new Lizard(req.body);
    console.log(req.body);
    console.log(lizard);

    // Save the lizard into our database
    // .save() is an inbuilt function to add the lizard to the mongodb
    lizard.save()
    //.then() waits for a promise to be resolved, if it is do this thing
    .then((result) => {
        res.status(201).send(`${result.name} saved to database!`);
    })
    // .catch() ONLY RUNS if the promise is rejected 
    .catch((error) => {
        // Throwing the error to our error logger
        next(error);
    });

});

// Get All Route
router.get('/getAll', (req, res) => {

    // Use the Lizard in built functions to get all the data
    Lizard.find((error, lizardList) => {
        if (error) {
            console.log(`error :( : ${error}`);
        }
        res.status(200).send(lizardList);
    })
})

// Get One (by id)
// Using Error Logger with requests
// Add next to my arrow function paramaters
router.get('/getId/:id', (req, res, next) => {
    console.log(req.params.id);
    Lizard.findById(req.params.id, (error, result) => {
        if (error) {
            // If an error is caught, throw it to the errorLogger
            next(error);
        } else {
            res.status(200).send(result);
        }
    });
});

// Get by Name
router.get('/getName/:name', (req, res) => {
    const name = req.params.name;
    console.log(name);
    Lizard.find({"name" : name}, (error, result) => {
        if (error) {
            console.log(`error :( : ${error}`);
        } 
        res.status(200).send(result);
    });
});

// Delete By ID
router.delete('/deleteId/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    Lizard.findByIdAndDelete(id, (error) => {
        if (error) {
            console.log(`error :( : ${error}`);
        } 
        res.status(202).send("Deleted!");
    });
});

// Exercise - Add all of the basic CRUD (Create, ReadAll, ReadOne, Update, Delete)
// using appropriate responses and status codes



// Export this routes file

module.exports = router;