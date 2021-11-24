// Importing the router into our routes file
const router = require('express').Router();

router.get("/getAll", (req, res) => {
    console.log("Get All accessed");
    res.status(202).send("get all accessed");
});

router.delete("/delete", (req, res) => {
    console.log("Delete all");
    res.status(202).send("delete all");
});

// Export the router as a module

module.exports = router;