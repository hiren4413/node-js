const express  =  require("express");

const app = express();

const port = 9000;

const db = require('./config/db.js');

app.listen(port , (err)=>{
    if(err) {
        console.log(err);
        return false;
    }
    console.log(`server start at port : ${port}`);
})