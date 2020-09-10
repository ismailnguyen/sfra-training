'use strict';

var server = require('server');
var ProductFactory = require('app_storefront_base/cartridge/scripts/factories/product');

server.get('Show', function (req, res, next) {

    var params = req.querystring

	var theProduct = ProductFactory.get(params) //get product from ProductFactory (hint study product.js)

	if (theProduct.id) {

		// render productfound, passing the product object
		res.render('productfound', {
			myProduct: theProduct
		})
	}
	else {

		// render productnotfound, passing the product ID
		res.render('productnotfound', {
			prod: params.pid
		})
	}

    next();
});

module.exports = server.exports();

