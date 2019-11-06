let mongoose = require('mongoose')
let bcrypt = require('bcryptjs')


let barberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    availability: Array,
    email: {
        type: String,
        required: true,
        unique: true
    }
})