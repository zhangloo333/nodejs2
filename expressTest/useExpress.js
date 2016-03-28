var express = require('express');
var fs = require('fs');

var app = express();
var port = process.env.PORT || 3000;
app.get('/',function(req,res){

var reader = fs.readFileSync(__dirname + '/index.html', 'utf8');
res.send(reader);
});
app.get('/api',function(req,res){
	res.json({firstname:'john',lastname:'Doe'});
});

app.listen(port);