//This controller shows that the value can come before (prepend) or after (append) the route runs. 
'use strict';

var server = require('server');
server.extend(module.superModule);

//prepend always happens, and it happens before the route runs. 
server.prepend('Show', function (req, res, next) {
	   var viewData = res.getViewData();
	   viewData.param1 = 'Home with Promo Details.';
       res.setViewData(viewData);
	   next();
	});

	

/*checks the query string for promo and the value after the question mark in the URL. 
If the query string does not have ?promo=1, then it appends the route with different param1 data. 
*/
server.append('Show', function (req, res, next) {
	   var viewData = res.getViewData();
	   var param1 = 'General company details.';
	   if(req.querystring.promo == 1){
		   param1 = null;   
	   }
	   res.setViewData({
		   //ternary operator. if param1 is false it gives you the end of the statement. ? is the if.
		   param1: param1 ? param1 : viewData.param1
	   });
	   next();
	});

module.exports = server.exports();

