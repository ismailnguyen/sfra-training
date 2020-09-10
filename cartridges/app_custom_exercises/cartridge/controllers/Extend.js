'use strict';

var server = require('server');

server.extend(module.superModule)

server.prepend('Show', function(req, res, next) {
	res.print('<h1>This information is inserted before the original Show Route.</h1>');
	next();
});

server.append('Show', function (req, res, next) {
		res.print('<h1>This information is inserted after the original Show Route.</h1>');
		next();
});

server.replace('Start', function (req, res, next) {
	res.print('<h1>This information replaces the original Start Route.</h1>');
	next();
});

module.exports = server.exports();
