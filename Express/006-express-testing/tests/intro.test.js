// Mocha tests are designated with:
// describe() - Used for a test suite (Group of tests)
// it() - used for an actual test

// This test suite takes in a 'String' to describe the suite AND an arrow function for the tests
// describe('Testing if basic math works', function() {

//     // To make the tests more semantic, 
//     // Trying to mimic user stories
//     it('Should print the word hello', function() {
//         console.log("Hello");
//     });

//     it('Should print the number 5', function() {
//         console.log(5);
//     });

//     // Assertion libraries let you do things like 
//     // expect(outcome).to.be(5);

//     before(function() {
//         console.log("To add some dummy data to our repo in the first place");
//     });

//     after(function() {
//         console.log("Clear data from the database");
//     });

//     beforeEach(function() {
//         console.log("This will run before each test");
//     })

//     afterEach(function() {
//         console.log("This will run after each test");
//     })

// });

// Exercise - Create a test suite with 2 'tests' as well as using a before and after function 