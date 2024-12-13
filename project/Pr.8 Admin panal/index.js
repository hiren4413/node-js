const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db');

const path = require('path');

app.set('view engine', 'ejs');


// =================  passport Js Code  =================

const passport = require('passport')
const passportlocal = require('./config/passportlocal')
const session = require('express-session')

app.use(session({
    secret : 'admin',
    resave : false, 
    saveUninitialized : true,
    cookie : { 
        maxAge : 1000*60*60*24,
    } 
}));
app.use(passport.initialize()); 
app.use(passport.session());    

app.use('/', express.static(path.join(__dirname, '/public')));  

app.use(express.urlencoded())
 
app.use('/',require('./routes/indexRoutes'));


app.listen(port,(err)=>{  
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server start on http://localhost:${port}/`);
})