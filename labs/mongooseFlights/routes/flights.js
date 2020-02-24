const express = require('express')
const router  = express.Router()

const flightsCtrl = require('../controllers/flights')

router.get('/index', flightsCtrl.flights)
router.get('/new', flightsCtrl.newFlight)
router.post('/', flightsCtrl.create)

module.exports = router