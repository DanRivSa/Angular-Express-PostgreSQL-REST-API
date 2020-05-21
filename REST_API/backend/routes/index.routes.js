const express = require('express');
const router = express.Router();

//import controllers instance
const user_controller = require('../controllers/user.controller');

//app routes

//user routes
router.get('/users',user_controller.getUsers);
router.get('/users/:id',user_controller.getUserById);
router.post('/users',user_controller.postUser);
router.put('/users/:id',user_controller.updateUser);
router.delete('/users/:id',user_controller.deleteUser);

//export the express router
module.exports = router;