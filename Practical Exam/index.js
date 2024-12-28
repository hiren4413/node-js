const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db');
app.listen(port,(err)=>{  
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server start on http://localhost:${port}/`);
})