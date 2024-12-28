const express = require('express');
const passport = require('passport');

const routes = express.Router();

const { loginPage, registerPage, addUser, loginUser, dashboardPage, logOut } = require('../controllers/authController');

routes.get('/', loginPage)
routes.get('/registerpage', registerPage)
routes.post('/adduser', addUser)
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser)
routes.get('/dashboard', passport.checkUser, dashboardPage)
routes.get('/logout', logOut)


module.exports = routes;