var person = {
	firstname: "lei",
	lastname: "zhang",
	greeting: function() {
		console.log(this.firstname + this.lastname);
	}

}
// 注意任何属性都是 ： 而不是 ＝；

person.greeting();
console.log(person["firstname"]);