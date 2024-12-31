const express = require('express');

const routes = express.Router();

const { addPost, viewPost, deleteBlog, updateBlog } = require('../controller/blogController');
const { verifyToken } = require('../middleware/Auth');

// ================= file upload =================
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const upload = multer({ storage: storage }).single('image')

// ================= file upload =================

// routes
routes.post('/addblog',verifyToken,upload, addPost)
routes.get('/viewblog',verifyToken,viewPost)
routes.delete('/deleteblog',verifyToken,deleteBlog)
routes.put('/updateblog',verifyToken,updateBlog)

module.exports = routes