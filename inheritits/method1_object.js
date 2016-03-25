/*
two methods build the object: one is object instance, 
other is object constructor. if using the son = Object.creator(father) to
inheritis, father should be a instance/object, not a constuctor.
*/


var person ={
	firstname: '',
	lastname:'',
	greet: function(){
		return this.firstname + " " + this.lastname + "!";
	}
}

function Cat(){
	this.name = "";
	this.age ="";
	this.action1 = function(){
		return this.name + "is " + this.age;
	}
}


var john = Object.create(person);
john.firstname = 'john';
john.lastname = 'simith';
console.log(john.greet());

var jan = Object.create(person);
console.log(jan.greet());

/*
var tom = Object.create(Cat());
tom.name ='cat';
tom.age =25;
console.log(tom.action1());
*/

/*
不管怎么即成的情况下，都不回overide
*/

var cat = new Cat();
var tom = Object.create(cat);
tom.name ='cat';
tom.age =25;
console.log(tom.action1());

var tim = Object.create(cat);
console.log(tim.action1());

