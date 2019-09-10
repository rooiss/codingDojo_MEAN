const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req,res) => {
    res.render('index')
})

app.post('/results', (req,res) => {
    console.log(req.body)
    res.render('results', req.body)
})

app.listen(1337)
console.log('listening on port 1337...')