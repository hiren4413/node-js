const express = require('express');

const routes = express.Router();
const passport = require('passport');
const { subCategoryPage, addsubCategory, viewsubCategoryPage, deletesubCategory, changeStatus, editsubCategory, changesubCategory } = require('../controllers/sub_categoryController');

routes.get('/subcategorypage',passport.checkUser, subCategoryPage)
routes.post('/addsubcategory', addsubCategory)
routes.get('/viewsubcategorypage',passport.checkUser, viewsubCategoryPage)
routes.get('/deletesubcategory', deletesubCategory)
routes.get('/editsubcategory', editsubCategory)
routes.post('/changesubcategory', changesubCategory)
routes.get('/changestatus',changeStatus)

module.exports = routes