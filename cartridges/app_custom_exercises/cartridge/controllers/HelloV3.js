'use strict'

var server = require('server');

server.get('Start', function (req, res, next) {

    res.render('hello', { param1: 'Loading ...' })

    next()
})

module.exports = server.exports()