/*
最新的写法，全继承，类似于class,
最新的写法：需要一个jsconfig.json 文件。
同时在文件中需要声明：

{
    "compilerOptions": {
        "target": "ES6"
    }
}

*/
'use strict'
class Person{
	constructor(firstname, lastname){
		this.firstname = firstname;
		this.lastname = lastname;
	}
	greet()
	{
		console.log('hello,' + this.firstname+" " + this.lastname);
	}
}

var john = new Person('lei','zhang');
john.greet();

var yi = new Person('yi','zhang');
yi.greet();