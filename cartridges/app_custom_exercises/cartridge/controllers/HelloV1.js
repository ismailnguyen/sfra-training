'use strict';

var server = require('server');

server.get('Start', function (req, res, next) {
	res.print('<h1>Hello World !</h1>');
	
	next();
});

module.exports = server.exports();