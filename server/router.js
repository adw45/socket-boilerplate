var express = require('express');
var playerRouter = require('./routes/player')
var router = express.Router();

router.use('/player', playerRouter);

router.get('/', function(req, res) {
    res.status(200).send("API is accessible");
});

module.exports = router;
