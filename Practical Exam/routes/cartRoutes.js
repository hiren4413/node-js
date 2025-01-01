const express = require('express');
const { viewCartPage, editCart, deleteCart, updateCart, addCart } = require('../controllers/cartController');

const routes = express.Router();

routes.get('/addcart', addCart)
routes.get('/viewcartpage', viewCartPage)
routes.get('/deletecart', deleteCart)
routes.get('/editcart', editCart)
routes.post('/updatecart', updateCart)

module.exports = routes;