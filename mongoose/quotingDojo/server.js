var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('express-flash');
var moment = require('moment');
mongoose.Promise = global.Promise;

// Config
app.use(flash());
app.use(express.static(__dirname + 'static'));
app.use(bodyParser.urlencoded({useNewUrlParser: true}));
app.use(session({
    secret: "quotes",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Sockets

// Database
mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, minlength: 3},
    }, {timestamps: true});
    mongoose.model('Quote', QuoteSchema);
    var Quote = mongoose.model('Quote');

// Routes
app.get('/', function(req,res) {
    console.log('~ROOT~');
    res.render('index');
})

app.get('/quotes', function(req,res) {
    console.log('~GET!~');
    Quote.find({}, function(err, quotes) {
        if(err) {
            console.log('~Error matching DB request!~')
        } else {
            res.render('quotes', {info: quotes, moment: moment})
        }
    }).sort({_id:-1});
})

app.post('/quotes', function(req,res) {
    console.log('~POST~', req.body);
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err) {
        if(err){
            console.log('~SOMETHING WENT WRONG TERRIBLY WRONG~~', err);
            for(var key in err.errors){
                req.flash('quoteform', err.errors[key].message);
            }
            res.redirect('/');
        } else {
            console.log("~~Succesfully added a quote!~~");
            res.redirect('/quotes');
        }
    })
})

// PORT
app.listen(1337, function(){
    console.log('Listening on port: 1337');
})