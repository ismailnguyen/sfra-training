'use strict';

var server = require('server');
var ProductFactory = require('*/cartridge/scripts/factories/product');

server.get('Show', function (req, res, next) {
	
    var params = req.querystring;
    
	var theProduct = ProductFactory.get(params);
	
	if (theProduct.id) {
		
    	res.render('productfound', {
    		myProduct:theProduct
    	});   
	}
	else {
		
		res.render('productnotfound', {
			prod:params.pid
		});
	}    	

    next();
});

module.exports = server.exports();