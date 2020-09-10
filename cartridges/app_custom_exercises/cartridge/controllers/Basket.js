'use strict';

var server = require('server');
var BasketMgr = require('dw/order/BasketMgr')

server.get('Start', function (req, res, next) {
	
	var basket = BasketMgr.getCurrentOrNewBasket()// use BasketMgr to get a basket
   
    res.render('showBasket', {Basket:basket});
    next();
	
});

module.exports = server.exports();