let mongoose = require('mongoose')


let userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 1
    },
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isBarber: {
        type: Boolean,
        default: false
    }
})