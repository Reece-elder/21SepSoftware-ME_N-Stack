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

app.use((req, res, next) => {
    console.log(new Date());
    next();
});

app.get('/hello', (req, res) => {
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