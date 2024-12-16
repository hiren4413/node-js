const express = require('express');

const routes = express.Router();

routes.use('/',require('../routes/authRoute'));
routes.use('/category', require('../routes/CategoryRoute'))
routes.use('/subcategory', require('../routes/subCategoryRoute'))
routes.use('/exsubcategory', require('../routes/exSubCategoryRoutes'))
routes.use('/product', require('../routes/productRoutes'))

module.exports = routes;