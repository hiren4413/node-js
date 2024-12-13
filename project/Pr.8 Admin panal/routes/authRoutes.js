const express = require('express');

const routes = express.Router();

const { loginPage, registerPage, registerUser, loginUser, dashboardPage } = require('../controllers/admincontroller');

routes.get('/',loginPage);
routes.get('/register', registerPage);
routes.post('/registerUser', registerUser);
routes.post('/loginuser', loginUser)
routes.get('/dashboard', dashboardPage);

module.exports = routes;