const express = require('express');

const routes = express.Router();

routes.use('/', require('./userRoutes'));

module.exports = routes