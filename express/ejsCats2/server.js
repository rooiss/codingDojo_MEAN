const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.set('images', __dirname + '/images')

app.use(express.static(__dirname + '/static'))

app.get('/', (req,res) => {
    cat_arr = [
        {source: '/images/cat.jpeg',name: 'psycho'},
        {source: '/images/cat2.jpeg',name: 'bigglesworth'},
        {source: '/images/cat3.jpeg',name: 'garfield'}
    ]
    res.render('cats', {cats: cat_arr})
})

app.get('/psycho', (req,res)=> {
    var psycho_info = [
        {food: 'burgers',
        age: 4,
        sleep1: 'bed',
        sleep2: 'lap',
        name: 'Psycho'}
    ]
    res.render('details', {cats: psycho_info})
})

app.get('/bigglesworth', (req,res)=> {
    var big_info = [
        {food: 'dollar bills',
        age: 12,
        sleep1: 'standing straight up',
        sleep2: 'never sleeps really',
        name: 'Bigglesworth'}
    ]
    res.render('details', {cats: big_info})
})

app.get('/garfield', (req,res)=> {
    var gar_info = [
        {food: 'birds',
        age: 2,
        sleep1: 'dog house',
        sleep2: 'desks',
        name: 'Garfield'}
    ]
    res.render('details', {cats: gar_info})
})

app.listen(1337, (req,res) => {
    console.log('listening on port 1337...')
})