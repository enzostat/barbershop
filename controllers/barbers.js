//Requires
let router = require('express').Router()
let db = require('../models')



//Middleware


//Routes
router.get('/', (req,res) => {
    db.user.find({isBarber: true})
    .then(barbers => {
        res.send({barbers})
    })
})

router.get('/:id', (req,res) => {
    db.user.find({_id: req.params.id})
    .then(barber => {
        res.send({barber})
    })
    .catch(err => {
        console.log('Error occurred', err)
        res.send({message: 'Error occurred'})
    })
})


//export
module.exports = router;