const express = require('express')

const routes = express.Router()

const { verifyToken, onlyAdmin } = require('../middleware/Auth')
const { allPost, allCommnet } = require('../controller/adminController')

routes.get('/allblog', verifyToken, onlyAdmin, allPost)
routes.get('/allcommentshow', verifyToken, onlyAdmin, allCommnet)

module.exports = routes