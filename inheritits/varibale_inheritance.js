/*
inheritance is prototype 的继承，主要是方法的继承
老子.call(this)在 儿子中是变量的继承。
儿子＝Object.creat(老子)； 是全继承，继承了变量，也即成了函数。
*/

// parent.call(this)

var util = require('util');

// function Person(fir,last)
// {
// 	this.firstname = fir;
// 	this.lastname = last;
// }

function Person()
{
	this.firstname = 'you ';
	this.lastname = 'are right';
}

Person.prototype.greet = function()
{
	console.log("hello"+ this.firstname + this.lastname);
}

function Policeman(){
	Person.call(this);
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person);

var office = new Policeman();
office.greet();

