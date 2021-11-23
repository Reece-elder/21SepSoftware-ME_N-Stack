// Creating a String to export 
// The setup is no different from regular JS
const greeting = "Hello everyone!";

// Creating a Function to export

// prints out the greeting
const printGreeting = () => {
    console.log(greeting);
}

// Calls the print greeting function
// printGreeting(); 

// Tell this file / module, what do we want to export
// Exporting the string "Hello Everyone!" as greetingString
module.exports.greetingString = greeting;

module.exports.printGreetingExp = printGreeting;

// Wont work, because greetingString doesnt belong to this js file, belongs
// to nodejs
// console.log(greetingString);
// console.log(printGreetingExp);
