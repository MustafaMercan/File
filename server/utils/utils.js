const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const CryptoJS = require('crypto-js');


const generateUniqueKey = () => {
    return crypto.randomBytes(16).toString('hex');
}

const createToken = (data) => {
    const key = process.env.TOKEN_SECRET_KEY;
    const token = jwt.sign(data, key, { expiresIn: '3d' });
    return token;
}

const hashToken = async (token) => {
    try {
        const saltRounds = 10;
        const hashedToken = await bcrypt.hash(token, saltRounds);
        return hashedToken;
    } catch (err) {
        throw new Error(`Error hashed Token`);
    }
}
const encrypt = (token) => {
    const key = process.env.CRYPT_SECRET_KEY
    const ciphertext = CryptoJS.AES.encrypt(token, key).toString();
    return ciphertext;
}
const decrypt = (encryptedData) => {
    const key = process.env.CRYPT_SECRET_KEY
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
}
module.exports = {
    generateUniqueKey,
    createToken,
    hashToken,
    encrypt,
    decrypt
}