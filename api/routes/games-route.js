const express = require("express");

const router = express.Router();

router.get('/games', (req, res)=>{
    console.log('GET request received');
    res.send('All games ...');
});

router.get('/games/:id', (req, res)=>{
    console.log('GET request by Id received')
    res.send('One game with the give id');
});

module.exports = router;