/*
(参数/没有参数) ＝> {} 相当于匿名函数。 ＝> 相当于 function

*/



var fs = require('fs');


var readable = fs.createReadStream(__dirname + '/artical.txt');//creat +e

readable.on('data',function(chunk){
	console.log(chunk);
});


readable.on('data',(chunk) =>{
	console.log(chunk.toString());
});