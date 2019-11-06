let mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/barbershop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

module.exports.Barber = require('./barber')