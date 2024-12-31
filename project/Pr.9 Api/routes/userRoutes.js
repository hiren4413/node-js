const express = require('express');

const routes = express.Router();

const { addUser, viewUser, deleteUser, updateUser } = require('../controller/userController');
const { loginUser } = require('../controller/authController');
const { verifyToken, onlyAdmin } = require('../middleware/Auth');

routes.post('/registeruser', addUser);
routes.post('/loginuser',loginUser)
routes.get('/viewuser',verifyToken,onlyAdmin, viewUser);
routes.delete('/deleteuser', deleteUser);
routes.put('/updateuser', updateUser);

module.exports = routes