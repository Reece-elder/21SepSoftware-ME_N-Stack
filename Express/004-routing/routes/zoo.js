const router = require('express').Router();

router.get('/getAll', (req,res) => {
    console.log("Zoo get all requested");
    res.status(202).send("Get all zoo accessed");
})

// Export this routes file

module.exports = router;