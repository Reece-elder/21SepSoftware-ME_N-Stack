// Importing in the entire mongoose module
const mongoose = require('mongoose');
// Deconstructing the module, only using Schema and Model
const { Schema, model } = mongoose; 

// Creating a new schema called lizardSchema
const lizardSchema = new Schema({
    name: {
        // Name will be of type string
        type: String,
        // Is name required?
        required: true,
        // The String cant be longer than 15 chars
        maxLength: 15,
        minLength: 4
    },
    // Short hand for saying it will have a colour, and it will be of type string
    colour: {
        type: String,
        // The colour must be one of these options
        enum: ["red", "green", "brown", "yellow"]
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    isScaly: Boolean
}); 

// Create a model of our lizard using the schema 
// Create a model called lizard using the lizard name and schema
const lizard = model('lizard', lizardSchema);

// Export our lizard

module.exports = {'lizard' : lizard};

// Exercise - Creating a Schema for your project 
// Exporting the model of your schema