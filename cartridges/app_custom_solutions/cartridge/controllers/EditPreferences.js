'use strict';

var server = require('server');
var ISML = require('dw/template/ISML');
var URLUtils = require('dw/web/URLUtils');
var Transaction = require('dw/system/Transaction');
var preferencesForm = server.forms.getForm('preferences');
var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');


server.get('Start',
	userLoggedIn.validateLoggedIn,
	csrfProtection.generateToken,
	function (req, res, next) {
		preferencesForm.clear();		
		customer.profile.custom.interestApparel==true?preferencesForm.interestApparel.checked="checked":'';
		customer.profile.custom.interestElectronics==true?preferencesForm.interestElectronics.checked="checked":'';
		customer.profile.custom.newsletter==true?preferencesForm.newsletter.checked="checked":'';
		res.render('account/user/editpreferences.isml', {
			preferencesForm: preferencesForm
		});
		next();
	});



server.post('HandleForm',
	server.middleware.https,
	function (req, res, next) {


		Transaction.begin();
		customer.profile.custom.interestApparel=preferencesForm.interestApparel.value;
		customer.profile.custom.interestElectronics=preferencesForm.interestElectronics.value;
		customer.profile.custom.newsletter=preferencesForm.newsletter.value;

		Transaction.commit();
		res.redirect(URLUtils.url('Account-Show'));
	
		next();

	});

module.exports = server.exports();
