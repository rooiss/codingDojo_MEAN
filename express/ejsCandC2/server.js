const express = require('express')

const app = express()
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static( __dirname + '/static'))

app.get('/cats', (req,res) => {
    var cats_array = [
        {source: '/images/cat.jpeg'},
        {source: '/images/cat2.jpg'}
    ];
    res.render('cats', {cats: cats_array})
})

app.get('/form', (req,res) => {
    res.render('form')
})

app.get('/cars', (req,res) => {
    var cars_array = [   
        {source: '/images/car.jpeg'},
        {source: '/images/car2.jpeg'},
        {source: '/images/car3.jpeg'}
    ];
    res.render('cars', {cars: cars_array})
})

app.listen(1337)
console.log('listening on port 1337...')