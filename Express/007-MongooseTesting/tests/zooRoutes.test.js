const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

// Link our index file 
const server = require('../server.js');

// Link my lizard model 
const {Lizard} = require('../persistence/lizard.js');

// Told chai to use chaihttp
chai.use(chaiHttp);

describe('Testing zoo routes', function(){

    // This is a test object that I can use for post / update requests
    const testLizard = {
        name : "testName",
        colour : "red"
    };

    it('Testing the /create route', function(done) {

        // Arrange
        chai.request(server)

        // Act
        .post("/zoo/create")

        // Send some data as an object
        .send(testLizard)

        // .end because it is asynchronous
        .end((err, response) => {
            if(err) {
                console.log("Something is wrong!");
                done(err);
            };

            // Assertion
            console.log("====================================");
            console.log(response.text);
            console.log("====================================");
            expect(err).to.be.null;
            expect(response).to.have.status(201);
            expect(response.text).to.be.a("string");
            expect(response.text).to.equal(`${testLizard.name} saved to database!`);
            done();
        });

    });

    // Using a demo database for this
    it('Testing the getAll Route', function(done){

        // Arrange 
        chai.request(server)

        // Act
        .get("/zoo/getAll")
        .end((err, response) => {
            if(err) {
                console.log("Something is wrong!");
                done(err);
            };

            // Assert
            const body = response.body;
            console.log("**********************");
            console.log(body);
            expect(response).to.have.status(200);
            expect(response.text).to.not.be.null;

            // Map through the body (which is just an array) and check the values
            body.map((lizard) => {
                expect(lizard).to.contain.keys("name");
                expect(lizard).to.be.a("Object");
            });

            done();

        });

    });

    // Will clear ALL OF THE DATA
    after(function(done){
        Lizard.deleteMany({}).then(() => {
            done();
        });
    });

})