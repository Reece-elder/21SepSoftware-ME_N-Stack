const express = require('express');
const cors = require('cors');

const app = express();

// This is middleware
// When we send any request through the server, this middleware is 'fired' before any function
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log("First middleware has been fired");
    // next() tells express to call the next available middleware
    next();
});

// app.use((req, res, next) => {
//     console.log(new Date());
//     next();
// });

// Nested Middleware
// Common Middleware (like app.json()) should run for everything
// Nested middleware will only run for the specific endpoints you choose

const logger = ((req, res, next) => {
    console.log(new Date());
});

app.get('/hello', logger, (req, res) => {
    console.log("Site accessed");
    res.send("site accessed");
});

app.get('/test', (req, res) => {
    console.log("Site accessed");
    res.send("site accessed");
});

const server = app.listen(5015, () => {
    console.log(`Server started on ${server.address().port}`);
})