/*
	相当于告诉预览器下载.pipe(res)

*/


var http = require('http');
var fs =require('fs');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'test/html'});
	fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen(1337,'127.0.0.1')