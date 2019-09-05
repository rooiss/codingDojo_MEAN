const express = require('express')


const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/static'))

var cats_array = [
    {food: 'mice', age: 3, sleep1: 'bench', sleep2: 'park', img: '/images/cat.jpeg', name: 'oof'},
    {food: 'sushi', age: 5, sleep1: 'beach', sleep2: 'bed', img: '/images/cat2.jpeg', name: 'poop'},
    {food: 'tacos', age: 1, sleep1: 'lap', sleep2: 'legs', img: '/images/cat3.jpeg', name: 'poopie'}
]

app.get('/', (req,res)=> {
    res.render('cats')
})

app.get('/oof', (req,res) => {
    res.render('details', {cats: cats_array[0]})
})
app.get('/poop', (req,res) => {
    res.render('details', {cats: cats_array[1]})
})
app.get('/poopie', (req,res) => {  
    res.render('details', {cats: cats_array[2]})
})


app.listen(1337)
console.log('listening on port 1337...')