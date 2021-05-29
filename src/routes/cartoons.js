const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/:name', (req, response) => {
    request(`https://rickandmortyapi.com/api/character/?name=${req.params.name}`, (error, res, body) => {
        if (!error) {
            response.send(JSON.stringify(body))
        }
    });
});

router.post('/test', (request, response) => {
    response.send('hello cartoons');
});

module.exports = router;
