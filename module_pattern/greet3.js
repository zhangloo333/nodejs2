var word = "how are you";

function Greeting() {
	this.word = word;
	this.greet = function() {
		console.log(word);
	}

}

module.exports = new Greeting();