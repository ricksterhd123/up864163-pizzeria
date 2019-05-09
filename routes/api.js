/*jshint esversion: 6 */

/*
    This will be the main API,
    GET /menu -> Get's all menu items in JSON
    POST /basket -> Add item to the user's basket.
    POST /auth -> Login user
    POST /
*/
const fs = require('fs');
const Basket = require('../models/basket');
const express = require('express');
const router = express.Router();

/* GET menu items */
router.get('/menu', function(req, res) {
    fs.readFile('./models/menu.json',
        function(err, jsonData){
            if (err) { throw err; }
            let data = JSON.parse(jsonData);
            res.status(200).send(data);
        }
    );
});

/* POST add item to session basket */
router.post('/basket/add', function(req, res){
    if (req.body.id){
        fs.readFile('./models/menu.json', function(err, jsonData){
            if (err){ throw err; }
            let menuItems = JSON.parse(jsonData);
            let selectedItem = menuItems[req.body.id]
            
            console.log(menuItems);
            console.log("Selected item: " + selectedItem);
            if (req.session.basket){
                req.session.basket.add(selectedItem);
                res.status(200).send(selectedItem);
            } else {
                res.status(400).send("Server says: stop it ;(");
            }
        });
    } else {
        res.status(400).send("Invalid item id");
    }
});

/* GET all items in session basket */
router.get('/basket', function(req, res){
    if (req.session.basket){
        res.status(200).send(req.session.basket);
    }else{
        res.status(400).send();
    }
});
module.exports = router;