const express = require('express');

const routes = express.Router();

const { loginPage, registerPage, registerUser } = require('../controllers/admincontroller');

routes.get('/',loginPage);
routes.get('/register', registerPage);
routes.post('/registerUser', registerUser);

module.exports = routes;