const express = require('express');
const passport = require('passport');

const routes = express.Router();

const { loginPage, registerPage, registerUser, loginUser, dashboardPage, logOut, getEmail, otpPage, otpConfirm, newPasswordPage,newPassword, viewProfilePage, changeProfile, cPasswordPage, changePass,  } = require('../controllers/authController');

routes.get('/', loginPage);
routes.get('/register', registerPage);
routes.post('/registeruser', registerUser);
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser);
routes.get('/dashboard', passport.checkUser, dashboardPage);
routes.get('/logout', logOut);


// Change Profile
routes.get('/viewprofilepage', passport.checkUser, viewProfilePage)
routes.post('/changeprofile', changeProfile)

// change Password
routes.get('/cpasswordpage', passport.checkUser, cPasswordPage)
routes.post('/changepass', changePass)

// forgot Password
routes.post('/email', getEmail)
routes.get('/otp', otpPage)
routes.post('/otpconfirm', otpConfirm)
routes.get('/newpasswordpage', newPasswordPage)
routes.post('/forgotpass', newPassword)

module.exports = routes;