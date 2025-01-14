const express = require('express');

const routes = express.Router();

routes.use('/', require('./authRoutes'))
routes.use('/product', require('./productRoutes'))
routes.use('/cart', require('./cartRoutes'))

module.exports = routes;