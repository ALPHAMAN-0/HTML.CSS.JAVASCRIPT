// when create object constructuor singleton pattern in JavaScript

// obnject literal

const mySymbol = Symbol('X');
const person = {
    name: "John",
    age: 30,
    [mySymbol]: "Symbol Value",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
}

console.log(person.name); // John
console.log(person["name"]);
console.log(person[mySymbol]); // Symbol Value

Object.freeze(person); // make object immutable
person.age = 35; // This will not change the age property
console.log(person.age); // 30

person.CreateFunction = function(){
    console.log("New Method Added");
}

console.log(person.CreateFunction()); // undefined
//string interpolation concept 