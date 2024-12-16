const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/db');

const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.set('view engine', 'ejs');

const cookieParser = require('cookie-parser');
app.use(cookieParser()) 

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
app.use(passport.setUser);     

// =================  passport Js Code  =================

app.use(express.urlencoded())
app.use('/', express.static(path.join(__dirname, '/public')));      
app.use('/',require('./routes/indexRoutes'));


app.listen(port,(err)=>{  
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server start on http://localhost:${port}/`);
})