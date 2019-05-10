/*jshint esversion: 6 */
const fs = require('fs');
const Basket = require('../models/basket');
const express = require('express');
const router = express.Router();

/* GET all menu items */
router.get('/menu', function(req, res) {
    fs.readFile('./models/menu.json',
        function(err, jsonData){
            if (err) { throw err; }
            let data = JSON.parse(jsonData);
            res.status(200).send(data);
        }
    );
});

/* POST add item to user's basket */
router.post('/basket/add', function(req, res){
    if (req.body.id){
        fs.readFile('./models/menu.json', function(err, jsonData){
            if (err){ throw err; }
            let menuItems = JSON.parse(jsonData);
            let selectedItem = menuItems[req.body.id]
            // If the basket exists add item
            // otherwise, return a status 400 response.
            if (req.session.basket){
                req.session.basket = new Basket(req.session.basket);
                req.session.basket.add(selectedItem);
                res.status(200).send(req.session.basket);
            } else {
                res.status(400).send("Bad request");
            }
        });
    } else {
        res.status(400).send("Invalid item id");
    }
});

/* DELETE item from user's basket */
router.delete("/basket/delete", function(req, res){
    if (req.body.id && req.session.basket){
        console.log(req.body.id);
        req.session.basket = new Basket(req.session.basket);
        console.log(req.session.basket.items[req.body.id]);
        req.session.basket.delete(req.body.id);
        res.status(200).send(req.session.basket);
    }else{
        res.status(400).send("Bad request");
    }
});

/* GET all items in user's basket */
router.get('/basket', function(req, res){
    if (req.session.basket){
        res.status(200).send(req.session.basket);
    }else{
        res.status(400).send("Bad request");
    }
});

/* GET all customer orders */
router.get('/order', function (req, res){
    fs.readFile('./models/orders.json',
    function(err, jsonData){
        if (err) {throw err;}
        let customerOrders = [];
        if (jsonData.length != 0){
            customerOrders = JSON.parse(jsonData);
        }
        res.status(200). send(customerOrders);
    });
});

/* POST Create an order */
router.post('/order/add', function(req, res){
    if (req.session.basket && req.body.name && req.body.lName && req.body.phoneNumber){
        fs.readFile('./models/orders.json',
        function(err, jsonData){
            let customerOrders = [];
            console.log("length: " + jsonData.length);
            if (jsonData.length != 0){
                customerOrders = JSON.parse(jsonData);
            }
            customerOrders.push({"name": req.body.name, "lastName": req.body.lName, "phoneNumber": req.body.phoneNumber, "order": req.session.basket});
            fs.writeFile('./models/orders.json', JSON.stringify(customerOrders),
            function (err) {
                if (err) { throw err; }
                req.session.basket = null;
                res.status(200).send();
            });
        });
    }else{
        res.status(400).send("Bad request");
    }
});
module.exports = router;