// Import in some chai stuff

const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

// Associating this module with chai
chai.use(chaiHttp);

// We can start writing our tests

// describe() - Surrounds it tests, contains multiple tests
// it() - The individual test

describe('Basic Testing Processes', function(){

    // When creating tests we should follow a framework
    // Arrange
    // Act 
    // Assert

    it('Should return 2 when 1 + 1', function(){

        // Arrange
        let num1 = 1;
        let num2 = 1;
        let sum;

        // Act
        sum = num1 + num2;

        // Assert - uses expect which we get from chai
        expect(sum).to.equal(2);

    });

    it('Should print the word hello', function() {
        
        // Arrange
        let testString;

        // Act
        testString = "hello";

        // Assert
        expect(testString).to.equal("hello");
        expect(testString).to.be.a('STRING');
    });

    it('5 times 4 equal to 20', function() {

        // Arrange
        let num1 = 5;
        let num2 = 4;
        let sum;

        // Act
        sum = num1 * num2;

        // Assert
        expect(sum).to.equal(20);
        expect(sum).to.be.a('number');

    });

    // Test exercises

    // 'Multiplying 5 by 4 should return 20'
    // 'Should print a string saying "Hello <name>"
    // 'Should return the value of 1 + 2 + 3 + 4'
    // 'The text "hello" should be a string'
    // 'The number 12 should not be undefined' 
    // 'An object should have a property of "name"'
    // 'A text should be null'

});