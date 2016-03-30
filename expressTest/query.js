/*
query is ? 在url之后的。
http://localhost:3000/person/sdsdsd?qstr=123

req.query 就等于 你输入的网址 url？
url？变量名＝value req.query.qstr .qstr其实就是变量名

post 的方法， 就是把post的url＋json parse分离出来 有用的json然后在对其操作；
其中用到了middleware

*/


var express = require('express');

var bodyParser = require('body-parser')



var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	res.render('person', {
		ID: req.params.id,
		Qstr: req.query.qstr
	});
	console.log(req.query);
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);