const express = require('express');

const routes = express.Router();

routes.use('/', require('./userRoutes'));
routes.use('/auth', require('./AuthRoutes'));
routes.use('/post',require('./postRoutes'))

module.exports = routes