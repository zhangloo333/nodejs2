/*
fist go to express website to see Guide-> routing, 
里面很详细（http://expressjs.com/en/guide/routing.html）

rounting /person/:id (colon':' 意味着后面可能是任何的东西)；
意思是 person／后面你打上任意的东西，都会运行那个方程。
input的request都是params的object id 就可以显示。

*/


var express = require('express');
var fs = require('fs');

var app = express();

var port = process.env.PORT || 3000;


app.get('/', function(req, res) {

	var reader = fs.readFileSync(__dirname + '/index.html', 'utf8');
	res.send(reader);
});

// routing to person
app.get('/person/:id', function(req, res) {
	res.send('<html><head></head><body><h1>Person:' + req.params.id + '</h1></body></html>')
});

app.get('/api', function(req, res) {
	res.json({
		firstname: 'john',
		lastname: 'Doe'
	});
});

app.listen(port);