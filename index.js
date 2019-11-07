//Requires
let express = require('express')


//Initiate App
let app = express()


//Middle Ware


//Controllers
app.use('/barbers', require('./controllers/barbers'))

//Routes
app.get('*', (req,res) => {
    res.status(404).send({message: 'not found'})
})

//exports
app.listen(3000)


