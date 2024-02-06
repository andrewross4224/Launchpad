const { Schema, model } = require ('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    location : {
        type: String,
        required: true,
        unique: true
    }
})

const User = model('User', userSchema)

module.exports = User;