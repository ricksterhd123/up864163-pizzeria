/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const Basket = require('../models/basket');

/* GET home page. */
router.get('/', function(req, res) {
    // initialise the basket
    if (!req.session.basket || req.session.basket.items.length == 0){
        res.redirect('/');
    }else{
        res.render('checkout', {title: 'UP864163 pizzeria', basket: req.session.basket});
    }
});

module.exports = router;