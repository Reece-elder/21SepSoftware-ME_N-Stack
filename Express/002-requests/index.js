const express = require('express');

const app = express();

// adding custom requests

// When a user goes to '/' 
// it will print to the console "site has been accessed"
app.get('/', () => {
    console.log("Site has been accessed!");
});

app.get('/hello', () => {
    console.log("hello, you've accessed the site!");
})



// Telling our app to run on a port 
const server = app.listen(5015, () => {
    console.log(`Server running on port ${server.address().port}`);
});

// npm i nodemon
// nodemon - Run your code through nodemon instead
// and it will refresh the server when save code