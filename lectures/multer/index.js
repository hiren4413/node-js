const express = require('express');

const app = express();

const port = 8000;

const db = require('./config/db');

app.set('view engine', 'ejs');

const user = require('./modules/usermodel');

app.get('/', (req,res)=>{
    return res.render('add')
})

app.post('/insertdata', (req, res)=>{
    console.log("hello");
    
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server run on :- http://localhost:${port}/`);
})