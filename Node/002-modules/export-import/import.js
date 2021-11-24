// require - takes in a file path and returns objects

// Deconstruction - I am creating variables equal to what the class returns
const { testStringExp, pizza, addFunc } = require('./export.js');

console.log(testStringExp);
console.log(pizza);
console.log(addFunc);

// Exercise 
// Create one index.js file
// Create a seperate js file exporting a String and a Function
// Import those into index.js and run