// var Todos = require('../models/todoModel');
var Todos = require('../models/todoModel');

module.exports = function(app) {
	app.get('/api/setupTodos', function(req, res) {
		var starterTodos = [{
			username: 'test1',
			todo: 'buy milk',
			isDone: false,
			hasAttachment: false
		}, {
			username: 'test1',
			todo: 'Feed dog',
			isDone: false,
			hasAttachment: false
		}, {
			username: 'test1',
			todo: 'Learn Node',
			isDone: false,
			hasAttachment: false
		}];
		Todos.create(starterTodos, function(err,results){
			res.send(results);
		});
	});
}