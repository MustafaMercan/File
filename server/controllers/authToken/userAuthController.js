const User = require('../../models/userModel');
const jwt = require('jsonwebtoken')

const { decrypt } = require('../../utils/utils')

const userAuthController = async (req, res) => {

    let { token } = req.body;
    console.log('token', token);
    const hashedToken = jwt.decode(token)?.token;
    const userId = jwt.decode(token)?.id;
    if (hashedToken) {
        const authUser = await User.findOne({authToken:token});
        if(authUser){
            console.log('db id -> ',authUser._id.toString());
            console.log('client side id -> ',userId);
            if(authUser._id.toString() === userId){
                console.log('sa')
                return res.status(200).json({message:"ok",authUserId:userId});
            }  
        }
    }
    return res.status(400).json({message:"try again xd"});
}
module.exports = {
    userAuthController
}