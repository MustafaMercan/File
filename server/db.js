const mongoose = require('mongoose');
const DB_CONNECTION = process.env.DB_CONNECTION


const DB_CONNECT = async() => {

    try {
        mongoose.connect(DB_CONNECTION)
        .then(response => console.log(`Mongo Db Connection Success!`))     
    } catch (err) {
        console.log(`Db connection Error -> ${err}`);
    }
}


module.exports = DB_CONNECT;
