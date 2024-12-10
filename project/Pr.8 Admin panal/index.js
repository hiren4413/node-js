const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db');

const path = require('path');

app.use(express.urlencoded());

app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/',require('./routes/indexRoutes'));

app.set('view engine', 'ejs');

app.listen(port,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log("server is runing",port);
})