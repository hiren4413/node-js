const express = require('express');

const routes = express.Router();
const passport = require('passport');

const { CategoryPage, viewCategoryPage, addCategory, deleteCategory, editCategory, changeCategory, changeStatus } = require('../controllers/categoryController');

routes.get('/categorypage',passport.checkUser, CategoryPage)
routes.post('/addcategory', addCategory)
routes.get('/viewcategorypage',passport.checkUser, viewCategoryPage)
routes.get('/deletecategory', deleteCategory)
routes.get('/editcategory', editCategory)
routes.post('/changecategory', changeCategory)
routes.get('/changestatus',changeStatus)

module.exports = routes