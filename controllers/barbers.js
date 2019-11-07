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

router.post('/:id', (req,res) => {
    db.appointment.findOne({barberId: req.params.id})
    .then(appointment => {
        if (appointment) {
           db.appointment.findByIdAndUpdate({_id: appointment._id})
           .then(updatedAppointment => {
               res.send({updatedAppointment})
           }) 
        } else {
            db.appointment.create(req.body)
            .then(appt => {
                res.send({appt})
            })
        }
    })
})

router.put('/:id', (req, res) => {
    db.appointment.findOneAndUpdate({barberId: req.params.id}, req.body, {new: true})
    .then(editedAppt => {
        res.send({editedAppt})
    })
    .catch(err => {
        console.log('There was an error in your put route: ', err)
        res.send({message: 'Something went wrong'})
    })
})


//export
module.exports = router;