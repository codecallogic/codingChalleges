const mongoose = require('mongoose')

//Shortcut Variable 
const Schema = mongoose.Schema

const destinationsSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS','DEN','DFW','LAX','SAN']
    },
    arrival: Date
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departure: {
        type: Date, 
        default: function(){
            Date.now + 1;
        },
    },
    airport: {
        type: String,
        enum: ['AUS','DEN','DFW','LAX','SAN']
    },
    destinations: [destinationsSchema]
})

let oneYear = 365 * 24 * 60 * 60 * 1000;
let myOneYearLater = new Date(Date.now() + oneYear)

flightSchema.pre('save', function(next) {
    if (this.departure === null) {
        this.departure = myOneYearLater
    }
    next();
});

module.exports = mongoose.model('Flight', flightSchema)
