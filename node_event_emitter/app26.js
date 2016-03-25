var Emitter = require('./emitter.js');
var emitter = new Emitter();


emitter.on("greeting", function() {
	// body...
	console.log('this is for test');
});

emitter.on('greeting', function(){
	console.log('this is for test 2');

}); 

emitter.on("greeting", function() {
	// body...
	console.log('this is for test 3');
});

emitter.on("greeting", function() {
	// body...
	console.log('this is for test 4');
});

emitter.emit("greeting");