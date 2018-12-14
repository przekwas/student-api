const express = require('express');
const knex = require('../../db');

let router = express.Router();

router.get('/:id?', async (req, res, next) => {
    try {
        let albums = await knex.select().from('HipHop_Albums');
        res.send(albums);
    } catch(e) {
        console.log(e);
        res.statusCode(500);
    }
});

module.exports = router;