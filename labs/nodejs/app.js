const express = require('express')
const app = express()
const path = require('path')
const attendance = require('./data/attendance')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/attendance', (req, res) => {
    res.render('attendance/index', {
        attendance: attendance.getAll()
    })
})

app.get('/', (req, res) => {
    res.redirect('/attendance')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})