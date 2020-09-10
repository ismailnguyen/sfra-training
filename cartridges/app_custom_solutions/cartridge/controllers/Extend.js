//This controller shows how to extend a route.
'use strict';

var server = require('server');
server.extend(module.superModule);

//prepends the route
server.prepend('Show', function (req, res, next) {
		res.print('<html><body><h1>This information is inserted before the original Show Route.</h1></body></html>');
    	next();
	});

//appends the route
server.append('Show', function (req, res, next) {
		res.print('<html><body><h1>This information is inserted after the original Show Route.</h1></body></html>');
		next();
	});

server.replace('Start', function (req, res, next) {
		res.print('<html><body><h1>This information replaces the original Start Route.</h1></body></html>');
		next();
	});

module.exports = server.exports();

