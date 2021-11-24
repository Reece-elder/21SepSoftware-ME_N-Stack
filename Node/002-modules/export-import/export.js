'use strict';

// Creating a String to export
// const -- Is Constant, once declared it cannot change
// let -- Can be modified, is mutable
const testString = "Hey, im a string";

// Creating an object to export
// Creating an object for a pizza
const pizza = {
    flavour : "Pepperoni",
    size : 12
};

// Creating an arrow function to export
// Creating a function that returns 2 + 2
const addFunc = () => {
    return 2 + 2; 
}

// const addFunc2 = x => x + 2

// Export the stuff

// module.exports - telling node we want to export this thing
// .testStringExp - is the name we're calling it when it is exported
// = testString - is the variable we are exporting 
module.exports.testStringExp = testString;
module.exports.pizza = pizza; 
module.exports.addFunc = addFunc;

// console.log(testString);
// console.log(testStringExp);
