const Flight = require('../models/flights')

module.exports = {
    create
}

function create(req, res){
    console.log(req.body)
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body)
        flight.save(function(err){
            if(err) return res.redirect(`/flights/${flight._id}`)
            res.redirect(`/flights/${flight._id}`)
        })
    })
}