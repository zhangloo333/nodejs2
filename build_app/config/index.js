var configValues = require('./config'); 
//要求本地的文件，不用有module.exprots

module.exports = {
	getDbConnectionString: function() {
		return 'mongodb://' + configValues.uname + ":" + configValues.pwd + '@ds011880.mlab.com:11880/todolist_z';
	}
}

//exports 不是 exprots
