function greet() {
    console.log('Hi');
}

greet();
/* function can be as special object
in javescript.
*/
function loggreet(fn)
{
    fn();
}

loggreet(greet());