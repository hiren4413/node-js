const express = require('express');
const { viewCartPage, editCart, deleteCart, updateCart } = require('../controllers/cartController');

const routes = express.Router();

routes.get('/viewcartpage', viewCartPage)
routes.get('/deletecart', deleteCart)
routes.get('/editcart', editCart)
routes.post('/updateproduct', updateCart)

module.exports = routes;