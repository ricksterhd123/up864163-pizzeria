/*jshint esversion: 6 */
const fs = require('fs');
const express = require('express');
const router = express.Router();
const Basket = require('../models/basket');

/* GET menu page and send menuItems */
router.get('/', function(req, res) {
    if (!req.session.basket){
        req.session.basket = new Basket();
    }
    fs.readFile('./models/menu.json',
    function(err, jsonData){
        let menuItems = JSON.parse(jsonData);
        res.render('menu', {title: 'UP864163 pizzeria', basket: req.session.basket, menu: menuItems});
    });
});

module.exports = router;