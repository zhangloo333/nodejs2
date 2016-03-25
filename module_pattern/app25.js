// module 直接等于函数
var output1 = require('./greet1');
output1();

// moudle。函数名
var output2 = require('./greet2').greeting;
output2();

//moudlde = new 一个object
var output3 = require('./greet3');
console.log(output3.word);
output3.greet();

// module ＝ 一个object｛｝
var output4 = require('./greet4');
output4.greeting;

// moudle = object 在require的时候才在new 一个新的对象。
var output5 = require('./greet5');
var object = new output5();
object.greeting();