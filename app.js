const express = require('express')
const app = express()
const port = 3000

// routes
const indexRouter = require('./routes/index');
const menuRouter  = require('./routes/menu');
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/menu', menuRouter);

app.listen(port, () => {
    return console.log(`Example app listening on port ${port}!`);
})