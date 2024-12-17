const express = require('express');

const routes = express.Router();

const passport = require('passport');

// ========== multer Code ===========

const multer=require('multer');

const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random() * 100000000);
        cb(null, `${file.fieldname}-${uniq}`);
    }
})
  
const upload = multer({ storage: st }).single('image');

const { productPage, addProduct, viewproductPage, deleteProduct, editProduct, changeProduct, changeStatus, ajaxgetSubcategory, ajaxgetexSubcategory } = require('../controllers/productController');

routes.get('/productpage',passport.checkUser, productPage)
routes.post('/addproduct',upload, addProduct)
routes.get('/viewproductpage',passport.checkUser, viewproductPage)
routes.get('/deleteproduct', deleteProduct)
routes.get('/editproduct', editProduct)
routes.post('/changeproduct',upload, changeProduct)
routes.get('/changestatus',changeStatus)
routes.get('/ajaxgetSubcategory',ajaxgetSubcategory)
routes.get('/ajaxgetexSubcategory',ajaxgetexSubcategory)

module.exports = routes; 