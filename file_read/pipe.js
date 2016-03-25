/*
pipe(des) 其实就是把的readable 文件打成chunk，然后，
发送到gizp的格式，然后在发送到接受端
fs 的module里面
.createReadStream方法；
.createWriteStream方法；

中间保存变凉zlib 中的creatGzip()先存成gzip然后在写入文件
*/


var fs = require('fs');


var readable = fs.createReadStream(__dirname + '/artical2.txt');

var writeable = fs.createWriteStream(__dirname + '/fileWrited.txt');

readable.pipe(writeable);


var zlib = require('zlib');

var gzip = zlib.createGzip();// 实际上是一个chunk,既可以写／读 一个 stream

var compressed = fs.createWriteStream(__dirname+'/gzip.txt.gz');

readable.pipe(gzip).pipe(compressed);

