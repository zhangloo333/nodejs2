/*
streams is maily 链接两个两个文件系统的管道，把要发送的文件，broke up 
成一个一个小包（chunk），被发送pipeline between communicator 之间。
stream: readable,只能读取data；writable 只能写入data,duplex 既可以写入data，
也可以读取data；tranform,主要是可以修改data。

readbale inherits from stream, stream inherits from event
*/


var fs = require('fs');


var readable = fs.createReadStream(__dirname + '/artical2.txt');//creat +e

readable.on('data',function(chunk){
	console.log(chunk);
	console.log(chunk.length);
});


/* 直接在buffer中进行转换在 createReadSream(A,B) B是一个ojbect｛｝
｛encoding:'utf8',	
highWaterMark : 1024 把文章分成好几个 chunk 打包发送。
｝
*/

var readable1 = fs.createReadStream(__dirname + '/artical2.txt', {
	encoding: 'utf8',
	highWaterMark : 1024 
}); //creat +e
//1024 是1kilobits
var writeable = fs.createWriteStream(__dirname + '/articalcopy.txt');

readable1.on('data', function(chunk) {
	// console.log(chunk);
	console.log(chunk.length);
	writeable.write(chunk);
});
