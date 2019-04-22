const express = require('express');
const knex = require('../../db');

let router = express.Router();

router.get('/:id?', async (req, res, next) => {
    let id = req.params.id;
    if (id) { 
        try {
            let [albums] = await knex.select().from('HipHop_Albums').where('id', id);
            res.send(albums);
        } catch(e) {
            console.log(e);
            res.statusCode(500);
        }
    } else {
        try {
            let albums = await knex.select().from('HipHop_Albums');
            res.send(albums);
        } catch (e) {
            console.log(e);
            res.statusCode(500);
        }
    }

});

module.exports = router;