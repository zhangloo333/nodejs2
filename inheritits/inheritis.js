var util = require('util');


function Person() {
	this.firstname = "1";
	this.lastname = "2";


}

Person.prototype.speak1 =  function() {
		return "my name is " + this.firstname + " "+this.lastname;
		// console.log("my name is " + this.firstname + this.lastname);
		// return "my name is ";
	}






function Student(){
	this.study = function(){
		return "I can read" + this.firstname + this.lastname;
	}
}

util.inherits(Student, Person);


var lii = new Student();
console.log(lii.speak1());

console.log(lii.study());
lii.firstname = 'lii';
lii.lastname = 'we';
console.log(lii.speak1());
