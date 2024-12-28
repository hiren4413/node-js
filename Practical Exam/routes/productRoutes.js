const express = require('express');
const passport = require('passport');

const routes = express.Router();

const { viewProduct, addProductPage, addProduct } = require('../controllers/productController');

routes.get('/addproductpage', addProductPage)
routes.get('/viewproduct', viewProduct)
routes.post('/addproduct', addProduct)

module.exports = routes;