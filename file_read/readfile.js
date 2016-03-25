/*
	fs is a v8 core module api https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback
	funcion readFileSync 主要在运行文件之前，配置文件。
	readFileSysnc 用于读文件。
	__dirname 主要指的是当前的文件夹。
	readFileSync('artical.txt') 是从buffer出来的机器码，需要用toString()转换一下；if add 'utf8'
	出来的直接就是string。
*/



var fs = require('fs');


var reader = fs.readFileSync(__dirname + '/artical.txt', 'utf8');
console.log(reader);

var reader2 = fs.readFileSync(__dirname + '/artical.txt');
console.log(reader2.toString());

var reader3 = fs.readFile(__dirname + '/artical.txt', 'utf8', function(err, data) {
	// body...
	if (err == null) {
		console.log(data);
	} else {
		console.log(err);
	}
})


