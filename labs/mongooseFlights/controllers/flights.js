const Flight = require('../models/flights')

module.exports = {
    flights,
    newFlight,
    create
}

function flights(req, res){
    Flight.find({}, function(err, flight){
        if(err) return next(err)
        res.render('flights/index', {flight})
    })
}

function newFlight(req, res){
    res.render('flights/new')
}

function create(req, res){
        const flight = new Flight(req.body)
        flight.save(function(err){
        if(err) return res.render('flights/new')
        console.log(flight)
        res.redirect('/flights/index')
        })
}