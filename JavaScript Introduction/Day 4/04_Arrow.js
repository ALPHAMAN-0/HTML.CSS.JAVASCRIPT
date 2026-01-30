const user = {
    username: 'john_doe',
    greet: function (){
        console.log(`Hello, ${this.username}`);
        console.log(this)
    }
}

// user.greet();
// user.username = "siam"
// user.greet();
console.log(this)

const user2 = {
    username: 'jane_doe',
    greet: () => {
        console.log(`Hello, ${this.username}`);
        console.log(this)
    }
}
//why arrow function not work here this key word
// basic sysntax of arrow function
const example = () => {
    console.log(this)
}

console.log(addTwo(5, 3));

const addTwo = (num1, num2) => (num1 + num2);    // this is called implicit return

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }// explicit return