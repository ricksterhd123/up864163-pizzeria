const fs = require('fs');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile('./models/menu.json',
    function(err, jsonData){
        let data = JSON.parse(jsonData);
        res.render('menu', {menu: data});
    });
});

module.exports = router;