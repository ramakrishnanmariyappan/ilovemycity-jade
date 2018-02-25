var express = require('express');
var app = express();
var routes = require('./routes/routes')

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.get('/', routes.home);
app.get('/:cityName', routes.city);

var port = process.env.PORT || 4005;
app.listen(port, function(req, res) {
    console.log('server running at port ' + port);
})
