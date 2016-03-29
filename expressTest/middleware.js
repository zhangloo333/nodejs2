/*
	middleware is code between two layers

	如果我不想让用户知道我引用的文件真正在哪里，的话则需要。middleware 作一个跳转。
	例如我在<link>中写 href 是在某个文件夹中的，其实不是，是在另一个地址文件当中。
	generally public 是保存静态文件的地方。

	用middleware时有两个东西
	1: .use()
	2: express.static(加上这个地址)
	use相当于电路两个层之间引线，express.static相当于引线的地址。
	middle 的相对地址和绝对地址，在href的时候必须要是相对地址，加上／href="/assets/style.css"，
	如果不加的情况下在下面的，get('/p/d')就连不上middleware了，
	只在get('/d')下起作用。

	customers 的middleware 自己做一个 use('',function(req,res,next))
	use就是route， 当req 是／的情况下之行function（）里面的东西。

	express 提供了很多别儿写好的middleware 在 主页 resources之中。
*/


var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

//build middleware
app.use('/assets', express.static(__dirname + '/public'));


//build my middleware
app.use('/', function(req,res,next){
	console.log('Request Url: ' + req.url);
	next();
});

//middleware 
app.get('/p/:id', function(req, res) {
	console.log('start');
	res.send('<html><head><link rel="stylesheet" type= text/css href="/assets/style.css"></head><body><h1>Person:' + req.params.id + '</h1></body></html>')
});

app.listen(port)