const express = require('express');

const app = express();

app.use(express.static(__dirname + '/static'));
// app.set('view engine', 'ejs');

//routes
app.get('/', function (req,res) {
    res.render('index.html')
})
app.get('/cars', function(req,res) {
    res.render('cars.html')
})
app.get('/form', function(req,res) {
    res.render('form.html')
})
app.get('/cats', function(req,res) {
    res.render('cats.html')
})

app.listen(1337)
console.log('you are now listening on 1337...')