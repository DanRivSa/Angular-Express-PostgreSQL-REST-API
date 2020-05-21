const express = require('express');
const router = express.Router();

//import controllers here

//user controller instance
const userController = require('../controllers/user.controller');

//routes

//user routes
router.get('/users',userController.getUser);
router.get('/users/:id',userController.getUserById);
router.post('/users',userController.postUser);
router.put('/users/:id',userController.putUser);
router.delete('/users/:id',userController.deleteUser);

module.exports = router;