'use strict';

var server = require('server');
var BasketMgr = require('dw/order/BasketMgr');
var CartModel = require('*/cartridge/models/cart');

server.get('Start', function (req, res, next) {

	var basket = BasketMgr.getCurrentOrNewBasket();

    res.render('showBasket', {Basket:basket});
    next();
    
});

module.exports = server.exports();