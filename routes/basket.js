/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const Basket = require('../models/basket');

/* GET basket page. */
router.get('/', function(req, res) {
    if (!req.session.basket){
        req.session.basket = new Basket();
    }
    res.render('basket', {title: 'UP864163 pizzeria', basket: req.session.basket});
});

module.exports = router;