function Person(fir, last) {
	this.firstname = fir;
	this.lastname = last;

}

Person.prototype.greet = function() {
	console.log("Hello, Thank you for reaching out us" + this.firstname + " " + this.lastname);
}

var John = new Person('lei', 'zhang');

John.greet();

var lusi = new Person('LUCUY', 'LI');

lusi.greet();

if(John.__proto__ === lusi.__proto__)
{
	console.log("type of proto tpe are same");
}
else
{
	console.log("false");
}


console.log(John.__proto__);
console.log(lusi.__proto__);