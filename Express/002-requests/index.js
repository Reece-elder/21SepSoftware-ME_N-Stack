const express = require('express');

const app = express();

// Add Custom Middleware to convert data
app.use(express.json());

// adding custom requests

// When a user goes to '/' 
// it will print to the console "site has been accessed"
// app.get('/', () => {
//     console.log("Site has been accessed!");
// });

app.get('/hello', () => {
    console.log("hello, you've accessed the site!");
})

app.get('/getAll', () => {
    console.log("Get all request");
})

// HTTP Requests take in a REQ (Request) and a RES (Response)
// Request - ID Params, body, search terms 
// Response - What is returned from the database, backend to the front end

// To add a query param (such as id) use :variable name
app.get('/get/:id', (req, res) => {
    console.log(req);
    console.log(req.params.id);

    // This will post some data to the front end
    res.send(`Id ${req.params.id} has been passed :o`);
});

// Pass in a body as a request 
// To pass in a body you must use postman and we need some middleware
app.post('/newSnake', (req, res) => {
    const body = req.body;
    console.log(body);

    res.status(202).send(body);
    // You can specify the status code with res.status
});


// Telling our app to run on a port 
const server = app.listen(5015, () => {
    console.log(`Server running on port ${server.address().port}`);
});

// npm i nodemon
// nodemon - Run your code through nodemon instead
// and it will refresh the server when save code