const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
      },
      name: {
        type: String,
        required: true,
        trim: true
      },
      surname: {
        type: String,
        required: true,
        trim: true
      }
})


const User = mongoose.model('User',userSchema);

module.exports = User;
