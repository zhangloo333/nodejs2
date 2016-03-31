/*
 主要规定database 的形式 同时也把新建的内容能
 够合适的导出。

*/


var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
	username: String,
	todo: String,
	isDone: Boolean,
	hasAttachment: Boolean
});

var  Todos = mongoose.model('AAA', todoSchema);

module.exports = Todos;