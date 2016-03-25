var fs = require('fs');


var readable = fs.createReadStream(__dirname + '/artical.txt');//creat +e

readable.on('data',function(chunk){
	console.log(chunk);
});