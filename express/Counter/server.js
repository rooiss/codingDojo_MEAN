const express = require('express')
const session = require('express-session')

const app = express()
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/static'))

app.use(session({
    secret: 'bangeralert',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.get('/', (req,res) => {
    if (!req.session.views) {
        req.session.views = 1
    } else {
        req.session.views++
    }
    res.render('counter', {views: req.session.views})
})

app.post('/reset', (req,res) => {
    req.session.destroy()
    res.redirect('/')
})

app.listen(1337)
console.log('listening on port 1337...')