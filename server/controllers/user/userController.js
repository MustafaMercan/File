const User = require('../../models/userModel');
const jwt = require('jsonwebtoken');


const {generateUniqueKey, createToken,encrypt,decrypt} = require('../../utils/utils');



const loginController = async (req, res) => {

    const secretKey = process.env.AUTH_SECRET_KEY;
    const { credential } = req.body;

    if (credential) {

        const decode = jwt.decode(credential);

        const { given_name, family_name, email } = decode;

        let key = generateUniqueKey();

        
        const hashedToken = encrypt(key);
        console.log('hashed token - > ', hashedToken);
        console.log('encrypt token -> ', decrypt(hashedToken))

        if (given_name && family_name && email) {

            const existingUser = await User.findOne({ email: email });
            if (existingUser) {
                console.log(`User Already Registered in the system. ${existingUser}`);
                const token = createToken({token:hashedToken,id:existingUser._id})
                
                existingUser.authToken = token;
                await existingUser.save();
                existingUser.authToken = token;
                res.status(200).json({ user: existingUser, serverMessage: "ok",token});
                return;
            } else {

                
                const newUser = new User({
                    email: email,
                    name: given_name,
                    surname: family_name,
                    authToken:key
                })
                    .save()
                    .then(savedUser => {
                        const token = createToken({token:hashedToken,id:savedUser._id})
                        console.log(`New User Created: `, savedUser);
                        savedUser.authToken = token;
                        res.status(201).json({ user: savedUser, serverMessage: "ok", token});
                        return;
                    })
                    .catch(err => {
                        console.log(`New User Cannot Create ${err}`);
                        res.status(400);
                        return;
                    })
            }
        }
        res.status(400);
    }
    res.status(400);
}

module.exports = {
    loginController
}


/*
const generateUniqueKey = () => {
    return crypto.randomBytes(16).toString('hex');
}

const createToken = (data) => {
    const key = process.env.TOKEN_SECRET_KEY;
    const token = jwt.sign(data, key, { expiresIn: '3d' });
    return token;
}

const hashedToken = async(token) => {
    try{
        const saltRounds = 10;
        const hashedToken = await bcrypt.hash(token,saltRounds);
        return hashedToken;
    }catch(err){
        throw new Error(`Error hashed Token`);
    }
}*/