'use strict';

var server = require('server');
//Define a variable named userLoggedIn that requires the userLoggedIn script

var userLoggedInGuard = require('app_storefront_base/cartridge/scripts/middleware/userLoggedIn')


server.get('Start',
	userLoggedInGuard.validateLoggedIn, //Invoke the middleware step that validates login 
	function (req, res, next) {

	// res.print('<h1>You are now a logged in user!</h1>');
		res.render('hello', { param1: 'you are logged in haha !' });
	next();
	 
});

module.exports = server.exports();