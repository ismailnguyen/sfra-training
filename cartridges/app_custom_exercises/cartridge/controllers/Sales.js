'use strict';

var server = require('server');
//define a variable named PageMgr that requires the dw.experience.PageMgr API
const PageMgr = require('dw/experience/PageMgr')

server.get('Show', function (req, res, next) {
    
    //render the page with the specific, hard-coded id
    //Hint: use PageMgr.renderPage method and res object to render the page
    var page = PageMgr.getPage('salepage')
    res.print(PageMgr.renderPage(page.ID, 'salepage'))
    next();

});

module.exports = server.exports();
