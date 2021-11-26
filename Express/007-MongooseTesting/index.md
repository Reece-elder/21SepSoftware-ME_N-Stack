# Testing an Application

Install mocha chai chai-http
Modify the package.json -> mocha tests
create a folder called tests
export our server for the tests to run

When testing an express app, generally the only code to test is the business logic
- Only the routes you've created 
- Any custom middleware 

- Using mocha and chai we can mock functionality and any middleware, and check what the routes are actually doing

We are going to create a test database to use (through mongodb)