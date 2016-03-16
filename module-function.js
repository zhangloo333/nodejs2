function greet() {
    console.log('Hi');
}

greet();

function loggreet(fn)
{
    fn();
}

loggreet(greet());