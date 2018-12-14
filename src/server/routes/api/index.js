const express = require('express');
const hipHopRouter = require('./hiphop');

let router = express.Router();

router.use('/hiphop', hipHopRouter);

module.exports = router;