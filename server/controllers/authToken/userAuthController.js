const jwt = require('jsonwebtoken')
const { decrypt } = require('../../utils/utils')
const userAuthController = async (req, res) => {

    let { token } = req.body;
    const hashedToken = jwt.decode(token)?.token;
    if (hashedToken) {
        console.log(decrypt(hashedToken));


    }
    res.status(200);



}


module.exports = {
    userAuthController
}