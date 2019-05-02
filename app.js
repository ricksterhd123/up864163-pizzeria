const express = require('express')
const app = express()
const port = 3000

// routes
const indexRouter = require('./routes/index');

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', indexRouter);

app.listen(port, () => {
    return console.log(`Example app listening on port ${port}!`);
})