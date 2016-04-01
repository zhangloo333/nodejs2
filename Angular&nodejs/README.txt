view folder: there are index.ejs 文件, show the HTML.

clien side js folder in public folder.

一旦server运行起来，最先运行 是ejs的的html， ejs可以直接之行angular的程序。直接显示图片。

express 传递网页的情况下可以有 二外传递的参数obj{}
render('ejsHTml',{Object: 参数}), 当server运行的时候，就进入了 index 替换了 serverPeople 数据为 真实的数据流（people）。

现在要写一个script 在ejs file中当作 桥 在clien side and server side 开始连接。
	1-> take data from server and make available with clien

	2-> var clientPeople =<%- serverPeople %>
	= 和 － difference, = mean to converse what you have type in HTML.
	- means just to output to string, use JSON.stringify(object) to tranfer string to json

	3-> go back to angular js let render variable = clienside 
