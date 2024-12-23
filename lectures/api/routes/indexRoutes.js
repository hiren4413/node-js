const express = require('express');

const routes = express.Router();

routes.use('/', require('./userRoutes'));
routes.use('/auth', require('./AuthRoutes'));

module.exports = routes