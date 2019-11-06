let mongoose = require('mongoose')

appointmentSchema = new mongoose.Schema({
    dates: Array,
    barberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})