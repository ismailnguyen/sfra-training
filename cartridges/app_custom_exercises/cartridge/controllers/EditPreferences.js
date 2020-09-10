'use strict';

var server = require('server');
var ISML = require('dw/template/ISML');
var URLUtils = require('dw/web/URLUtils');
var Transaction = require('dw/system/Transaction');

var preferencesForm = server.forms.getForm('preferences')// get the form 
var csrfProtection = require('*/cartridge/scripts/middleware/csrf')// require the module that provides CSRF protection
var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn')// require the module that provides user verification


server.get('Start',
	userLoggedIn.validateLoggedIn,
	csrfProtection.generateToken,
	// insert specified middleware (see exercise specifications)
	function (req, res, next) {
		// clear the form  
		preferencesForm.clear()

		// Preload the form with current user selections. 		
		// The first field is done as an example. 
		customer.profile.custom.interestApparel==true?preferencesForm.interestApparel.checked="checked":'';
		customer.profile.custom.interestElectronics==true?preferencesForm.interestElectronics.checked="checked":'';
		customer.profile.custom.newsletter==true?preferencesForm.newsletter.checked="checked":'';

		
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
	

		try {
			Transaction.begin()
			
			customer.profile.custom.interestApparel = preferencesForm.interestApparel.value
			customer.profile.custom.interestElectronics = preferencesForm.interestElectronics.value
			customer.profile.custom.newsletter = preferencesForm.newsletter.value

			Transaction.commit()

			res.redirect(URLUtils.url('Account-Show'))

		}
		catch(e) {
			Transaction.rollback()
		}

		next();

	});

module.exports = server.exports();
