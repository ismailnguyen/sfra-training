'use strict';

var server = require('server');
var newsletterForm = server.forms.getForm('srvnewsletter');
var Resource = require('dw/web/Resource');
var HookMgr = require('dw/system/HookMgr');
var Logger = require('dw/system/Logger');

server.get('Start', function (req, res, next) {


	newsletterForm.clear();
	res.render('newsletter/srvnewslettersignup', {
		newsletterForm: newsletterForm
	});

	next();
});

/**
 * Sample server side validation
 * @param String email 
 */
function validateEmail(email) {
	var regex = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;
	return regex.test(email);
}
server.post('HandleForm', function (req, res, next) {

	var storageService = require('~/cartridge/scripts/storageService');
	var Transaction = require('dw/system/Transaction');

	if (validateEmail(newsletterForm.email.value))
	{
		var logger = Logger.getLogger("NewsLogs", "newsletter");

		Transaction.begin();
		try
		{
			var co = storageService.storeNewsletterObject(newsletterForm);

			res.render('newsletter/srvnewslettersuccess.isml', {
				firstName: newsletterForm.fname.value,
				lastName: newsletterForm.lname.value,
				newsletterObject: co

			});
			Transaction.commit();
			HookMgr.callHook('app.email', 'send', newsletterForm.email.value);
			
			logger.debug("****signup was successful");
		}
		catch (e)
		{
			Transaction.rollback();
			logger.error("Problem with subscription: {0}", e.causeMessage);
			res.setViewData({ errormsg: Resource.msg('error.message.email.exists', 'newsletter', null) });
			res.render('newsletter/srvnewslettersignup', {
				newsletterForm: newsletterForm
			});

		} 
	} else
	{
		res.setViewData({ errormsg: Resource.msg('error.message.parse.email','forms', null) });
		res.render('newsletter/srvnewslettersignup', {
			newsletterForm: newsletterForm
		});
	}
	next();
});

module.exports = server.exports();