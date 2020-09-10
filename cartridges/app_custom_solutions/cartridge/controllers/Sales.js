'use strict';

var server = require('server');
var PageMgr = require('dw/experience/PageMgr');

server.get('Show', function (req, res, next) {
    var page = PageMgr.getPage('sale-page');

    res.print(PageMgr.renderPage(page.ID, "sale-page"));
    next();

});

module.exports = server.exports();
