var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

// app.get('/', function (req,res) {
// 	res.send('Hello Express!');
// });


var middleware = require('./middleware.js');



app.use(middleware.logger);
// app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function (req,res) {
	res.send('About Us!');
});

 app.use(express.static(__dirname + '/public'));


app.listen(port, function () {
	console.log('Express server started on port: '+port);
});