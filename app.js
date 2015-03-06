var express = require('express')
	, routes = require('./routes')
	, config = require('./config');

var app = express();

// configure app
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

// setup routes
app.get('/instagram/:shortcode([A-Za-z0-9]{10})', routes.instagram.media);

app.get('*', routes.site.notfound);

app.listen(1337);