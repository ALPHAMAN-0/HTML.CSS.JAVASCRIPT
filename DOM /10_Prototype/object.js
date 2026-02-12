function multiplyByFive(num){
    this.num = num;
    return num*5;
}

multiplyByFive.power = 5;

console.log(multiplyByFive(10)); // 50
console.log(multiplyByFive.power); // 5
console.log(multiplyByFive.prototype)


function CreateUser(name,age){
    this.name = name;
    this.age = age;
}

CreateUser.prototype.increment = function(){
    this.age++;
}

CreateUser.prototype.printMe = function(){
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const a = new CreateUser("Alice", 30);
const b = new CreateUser("Bob", 25);

a.printMe(); // Name: Alice, Age: 30

