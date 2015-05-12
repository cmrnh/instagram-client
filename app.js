var express = require('express')
	, app 		= express()
	, http 		= require('http').Server(app)
	, routes 	= require('./routes')
	, api 		= require('./api')
	, config 	= require('./config');

// configure app
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

// setup api
app.get('/api/search', api.search.location);

// setup routes
app.get('/images/:shortcode([A-Za-z0-9]{10})', routes.images.media);
app.get('*', routes.site.notfound);

http.listen(1337);