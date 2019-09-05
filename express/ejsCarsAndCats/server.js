const express = require('express')

const app = express()
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/static'))

app.get('/cats', (req,res) => {
    var cats_array = [
        {source: '/images/cat.jpg'}
    ]
    res.render('cats', {cats: cats_array})
})

app.get('/cars', (req,res) => {
    var cars_array = [
        {source: '/images/car.jpg'},
        {source: '/images/car1.jpeg'},
        {source: '/images/car2.jpeg'},
    ]
    res.render('cars', {cars: cars_array})
})

app.get('/form', (req,res) => {
    res.render('form')
})
app.listen(1337)
console.log('listening on port 1337...')
