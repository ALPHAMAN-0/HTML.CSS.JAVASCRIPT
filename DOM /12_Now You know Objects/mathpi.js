const descripterObject = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(descripterObject);


console.log(Math.PI);

const user = {
    name: 'John',
    age: 30,
    available: true
}

console.log(Object.getOwnPropertyDescriptors(user));
console.log(Object.getOwnPropertyDescriptor(user, 'name'));

Object.defineProperty(user, 'name', {
    writable: false,
    configurable: false
});

user.name = 'Bob'; // won't work
console.log(Object.getOwnPropertyDescriptor(user,'name'));
