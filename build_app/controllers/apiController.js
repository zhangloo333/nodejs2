var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

		app.use(bodyParser.json()); // ？？look http request, 就行解析
		app.use(bodyParser.urlencoded({
			extended: true
		}));

// special web require

	app.get('/api/todos/:uname', function(req, res) {
		Todos.find({
			username: req.params.uname
		}, function(err, todos) {
			if (err) throw err;
			res.send(todos);
		})
	});

	app.get('/api/todo/:id', function(req, res) {
		Todos.findById({
			_id: req.params.id
		}, function(err, todo) {
			if (err) throw err;
			res.send(todo);
		});
	});

	app.post('/api/todo', function(req, res) {

		if (req.body.id) {
			Todos.findByIdAndUpdate(req.body.id, {
				todo: req.body.todo,
				isDone: req.body.todo,
				hasAttachment: req.body.hasAttachment
			}, function(err, todo) {
				if (err) throw err;

				res.send('Success');
				console.log(req.body);
			});
		}// 如果发现了更新，如果没有发现的情况下，加一个新的
		else{

			 var newTodo =Todos({
			 	 username: 'test',
			 	 todo: req.body.todo,
			 	 isDone: req.body.isDone,
			 	 hasAttachment: req.body.hasAttachment
			 });

			 newTodo.save(function(err){
			 	res.send('Success');
			 })

		}

	});

	app.delete('/api/todo', function(req, res){

		Todos.findByIdAndRemove(req.body.id, function(err){
			if(err) throw err;
			res.send('Success');
		})
	});



}
