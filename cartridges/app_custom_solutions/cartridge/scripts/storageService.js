'use strict';

var CustomObjectMgr = require('dw/object/CustomObjectMgr');
function storeNewsletterObject(newsletterForm) {
     var CustomObject = CustomObjectMgr.createCustomObject('NewsletterSubscription', newsletterForm.email.value);
                	    CustomObject.custom.firstName = newsletterForm.fname.value;
                        CustomObject.custom.lastName = newsletterForm.lname.value;
                        //code to create a custom object attribute for the promo opt-in
                        CustomObject.custom.promo = newsletterForm.promo.value;
                        return CustomObject;
}

module.exports = {storeNewsletterObject: storeNewsletterObject};