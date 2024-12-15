const express = require('express');
const passport = require('passport');

const routes = express.Router();

const { loginPage, registerPage, registerUser, loginUser, dashboardPage, logOut, getEmail, otpPage, viewProfilePage, changeProfile, cPasswordPage, changePass } = require('../controllers/authController');

routes.get('/',loginPage);
routes.get('/register', registerPage);
routes.post('/registeruser', registerUser);
routes.post('/loginuser',passport.authenticate('local', { failureRedirect : '/'}), loginUser);
routes.get('/dashboard', passport.checkUser, dashboardPage);
routes.get('/logout', logOut);


// Change Profile
routes.get('/viewprofilepage', viewProfilePage)
routes.post('/changeprofile', changeProfile)

// change Password
routes.get('/cpasswordpage', cPasswordPage)
routes.post('/changepass', changePass)

// forgot Password
routes.post('/email', getEmail)
routes.get('/otp', otpPage)

module.exports = routes;