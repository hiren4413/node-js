const express = require('express');

const routes = express.Router();
const passport = require('passport');
const { exsubCategoryPage, addexsubCategory, viewexsubCategoryPage, deleteexsubCategory, editexsubCategory, changeexsubCategory, changeStatus, ajaxgetSubcategory } = require('../controllers/exsub_categoryController');


routes.get('/exsubcategorypage',passport.checkUser, exsubCategoryPage)
routes.post('/addexsubcategory', addexsubCategory)
routes.get('/viewexsubcategorypage',passport.checkUser, viewexsubCategoryPage)
routes.get('/deleteexsubcategory', deleteexsubCategory)
routes.get('/editexsubcategory', editexsubCategory)
routes.post('/changeexsubcategory', changeexsubCategory)
routes.get('/changestatus',changeStatus)
routes.get('/ajaxgetSubcategory',ajaxgetSubcategory)

module.exports = routes;