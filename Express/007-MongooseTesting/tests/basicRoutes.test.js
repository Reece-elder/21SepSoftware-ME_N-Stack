const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

// Link our index file 
const server = require('../server.js');

// Told chai to use chaihttp
chai.use(chaiHttp);

describe('basic testing', function(){

    it("testing /test route", function(done){

        // Arrange
        // Telling chai to use index.js
        chai.request(server)

        // Act
        // Using index to make a get request with /test
        .get('/routes/test')

        // Because this is asynchronous (meaning the code waits for a response)
        // We need to use .end and pass in a response
        .end((err, response) => {

            // If there is an error, tell the tester
            if(err){
                console.log("Something is wrong..");
                done(err);
            }

            // Assert
            // Asserting what the response is 
            expect(response).to.have.status(202);
            expect(response).to.not.be.null;
            expect(response).to.have.property('text', "Test accessed");
            done();
        });

    });

})

