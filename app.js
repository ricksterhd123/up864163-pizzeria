/*jshint esversion: 6 */
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

// routes
const indexRoute = require('./routes/index');
const menuRoute  = require('./routes/menu');
const apiRoute   = require('./routes/api');
const basketRoute = require('./routes/basket');
const checkoutRoute = require('./routes/checkout');
const ordersRoute = require('./routes/orders');

// use express-session for storing basket items per session.
// maxAge 60seconds.
app.use(session({ secret: 'abcdefghj', cookie: { maxAge: 600000 }}));

// use template engine pug and render views from the view folder.
app.set('views', './views');
app.set('view engine', 'pug');

// allow static files in public.
app.use(express.static('public'));

// setup body-parser to accept data in x-www-form-urlencoded
app.use(bodyParser());

// bind routes
app.use('/', indexRoute);
app.use('/menu', menuRoute);
app.use('/api', apiRoute);
app.use('/basket', basketRoute);
app.use('/checkout', checkoutRoute);
app.use('/orders', ordersRoute);

// Listen to port 8080
app.listen(port, () => {
    return console.log(`Example app listening on port ${port}!`);
});
