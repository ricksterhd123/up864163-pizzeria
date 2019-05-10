/*jshint esversion: 6 */
const fs = require('fs');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    fs.readFile('./models/orders.json',
    function(err, jsonData){
        let customerOrders = {};
        if (jsonData.length != 0){
            customerOrders = JSON.parse(jsonData);
        }
        console.log(customerOrders);
        res.render('orders', {orders: customerOrders});
    });
});

module.exports = router;