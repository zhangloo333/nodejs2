/*
http req ,res
fs 把文件变成文件流，来起作用。
利用 对待 string 的查找和替换，把‘｛变量｝‘ 给替换掉。
*/


var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	var html = fs.readFileSync(__dirname + "/index1.html", 'utf8');
	var message = "hello world.....";
	html = html.replace('{{message}}', message); // replace返回一个string
	res.end(html);

}).listen(1227, '127.0.0.1');
