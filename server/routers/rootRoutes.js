const router = require('express').Router();
const {userRoute} = require('./User/userRoute');



router.use('/api/user',userRoute);

module.exports.router = router