'use strict';

var server = require('server');
var ISML = require('dw/template/ISML');
var URLUtils = require('dw/web/URLUtils');
var Transaction = require('dw/system/Transaction');

var preferencesForm = // get the form 
var csrfProtection = // require the module that provides CSRF protection
var userLoggedIn = // require the module that provides user verification


server.get('Start',
	// insert specified middleware (see exercise specifications)
	function (req, res, next) {
		// clear the form  

		// Preload the form with current user selections. 		
		// The first field is done as an example. 
		customer.profile.custom.interestApparel==true?preferencesForm.interestApparel.checked="checked":'';

		
		res.render('account/user/editpreferences.isml', {
			preferencesForm: preferencesForm
		});
		next();
	});



server.post('HandleForm',
	// insert specified middleware 
	function (req, res, next) {
		// Persist the data. You will need to update the profile within a Transaction.
		//Hint:  customer.profile.custom.interestApparel=preferencesForm.interestApparel.value;
		
		//redirect user to Account-Show  (use res.redirect(...))
	
		next();

	});

module.exports = server.exports();
