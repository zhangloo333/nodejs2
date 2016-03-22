function greet() {
    console.log('Hi');
}

greet();
/* function can be as special object
in javescript.
*/
function loggreet(ff)
{
    ff();
}



loggreet(greet);

// function expression  variable point to anoyomity fucntion

var greetMe = function(){
	console.log('Hi Tony');
}

greetMe();

// it 's first-class'
loggreet(greetMe);

// use a function expression to create a function on the fly
loggreet(function() {
	console.log('Hello Tony!');
});