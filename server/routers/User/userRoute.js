const express = require('express');
const router = express.Router();
const {loginController} = require('../../controllers/user/userController');




 
router.post('/login',loginController); //  /api/user/login





module.exports = {
    userRoute:router   
}
