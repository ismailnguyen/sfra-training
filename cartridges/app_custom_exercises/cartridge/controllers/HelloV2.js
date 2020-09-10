'use strict'

var server = require('server');

server.get('Start', function (req, res, next) {

    res.render('hello', { param1: JSON.stringify(res.viewData.queryString) })

    next()
})

module.exports = server.exports()