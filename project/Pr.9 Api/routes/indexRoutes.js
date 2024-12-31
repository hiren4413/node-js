const express = require('express');

const routes = express.Router();

routes.use('/user', require('./userRoutes'));
routes.use('/blog',require('./blogRoutes'))
routes.use('/admin',require('./adminRoutes'))
routes.use('/comment',require('./commentRoutes'))

module.exports = routes