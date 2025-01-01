const express = require('express');
const passport = require('passport');


const routes = express.Router();

const { viewProductpage, addProductPage, addProduct, deleteProduct, editProduct, updateProduct } = require('../controllers/productController');

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Math.floor(Math.random() * 100000)
        cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage }).single('image')

routes.get('/addproductpage', addProductPage)
routes.get('/viewproductpage', viewProductpage)
routes.post('/addproduct', upload, addProduct)
routes.get('/deleteproduct', deleteProduct)
routes.get('/editproduct', editProduct)
routes.post('/updateproduct', upload, updateProduct)


module.exports = routes;