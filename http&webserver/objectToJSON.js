/*
	把object转换成json  JSON.stringify(obj)
*/





var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'application/json'});
	var object ={
		firstname : 'John',
		lastname: 'Doe'
	};
	res.end(JSON.stringify(obj));
}).listen(1227.)