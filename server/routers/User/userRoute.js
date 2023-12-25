const express = require('express');
const router = express.Router();
const {loginController} = require('../../controllers/user/userController');
const {userAuthController} = require('../../controllers/authToken/userAuthController');





 
router.post('/login',loginController); //  /api/user/login
router.post('/auth',userAuthController); //  /api/user/login






module.exports = {
    userRoute:router   
}
