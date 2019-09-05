var mongoose = require('mongoose');
    User = mongoose.model('User');

module.exports = function Routes(app) {
    app.get('/', function(req,res) { res.render('index')})
    app.post('/users/create', function(req,res) {
        var a = new User(req.body);
        a.save(function(err) {
            if(err) {
                res.send(JSON.stringify(err));
            }
            else
            {
                res.send('saved');
            }
        })
    }
}