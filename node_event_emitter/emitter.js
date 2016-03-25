/* 
1. build a class constructor not a object class
2. add prototype with on methods with two arguments
	1>this one can add property as a array.
	2>push second arguments into this array.
3. add prototype with emit methods with on argment
	>if this argument is same with event object property,
	for loop event proerty array, and excute all function
	in this array.

*/

function Emitter(){
	this.events ={};
}

Emitter.prototype.on = function(type, listener){
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
	if(this.events[type])
	{
		this.events[type].forEach(function(listener){
			listener();
		});
	}
}

module.exports = Emitter;