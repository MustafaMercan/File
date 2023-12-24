const User = require('../../models/userModel');
const jwt = require('jsonwebtoken');

const loginController = async (req, res) => {

    const secretKey = process.env.AUTH_SECRET_KEY;
    const { credential } = req.body;

    if (credential) {

        const decode = jwt.decode(credential);

        const { given_name, family_name, email } = decode;
        //console.log(given_name, family_name, email);

        if (given_name && family_name && email) {

            const existingUser = await User.findOne({ email: email });
            if (existingUser) {
                console.log(`User Already Registered in the system.`);
                res.status(200).json({id:existingUser._id});
            } else {
                const newUser = new User({
                    email: email,
                    name: given_name,
                    surname: family_name
                })
                .save()
                .then(savedUser => {
                    console.log(`New User Created: `, savedUser);
                    res.status(201).json({id:savedUser._id});
                    return;
                })
                .catch(err => {
                    console.log(`New User Cannot Create ${err}`);
                    res.status(400)
                    return;
                })
            }
        }
        res.status(200).json({ ok: "ok" });
    }


}





module.exports = {
    loginController
}