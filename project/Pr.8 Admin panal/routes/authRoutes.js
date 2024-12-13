const express = require('express');
const passport = require('passport');

const routes = express.Router();

const { loginPage, registerPage, registerUser, loginUser } = require('../controllers/admincontroller');

routes.get('/',loginPage);
routes.get('/register', registerPage);
routes.post('/registerUser', registerUser);
routes.post('/loginuser',passport.authenticate('local', { failureRedirect : '/'}), loginUser)

module.exports = routes;