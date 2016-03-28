/*
怎么用 nodejs build a baic server:
1 requre module http
2. use creatServer() method to build 
3. inside creatServer(（req,res）＝> {}), there are two parametter, req, res.
	一旦server reciever 了 req请求的情况下， res做出动作。
4.定义req的参数都在.listen(端口，ip)

*/


var http = require('http');

http.createServer(function(req,res){
	// res.writeHead(200,{
	// 	'content-Type': 'text/plain'
	// });
	res.end('hello world\n');

}).listen(20001,'127.0.0.1');



// http.createServer((req,res) => {
// 	// res.writeHead(200,{
// 	// 	'content-Type': 'text/plain'
// 	// });
// 	res.end('how are you world\n');

// }).listen(20001,'127.0.0.1');