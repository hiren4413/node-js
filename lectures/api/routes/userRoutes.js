const express = require('express');

const routes = express.Router();

const { addUser } = require('../controller/userController');

routes.get('/adduser', addUser);

module.exports = routes