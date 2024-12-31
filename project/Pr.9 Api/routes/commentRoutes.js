const express=require('express')

const routes=express.Router()

const { verifyToken } = require('../middleware/Auth')

const { addCommnet } = require('../controller/commentController')

routes.post('/addcomment',verifyToken,addCommnet)
module.exports=routes