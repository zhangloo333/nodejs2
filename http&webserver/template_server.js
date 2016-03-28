/*
	1 http协议，告诉header 这个文件是什么类型的。
	2 readFile把文件先变成二进制的，然后变成string投递

*/


var http = require('http');
var fs = require('fs');

http.createServer(function(requ,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var html = fs.readFileSync(__dirname + '/index.html');
	res.end(html);

}).listen(1227,'127.0.0.1');