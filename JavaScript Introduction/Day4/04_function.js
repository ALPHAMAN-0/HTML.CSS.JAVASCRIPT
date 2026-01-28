console.log("04_function.js file is loaded")

function sayMyName(){
    console.log("My name is John Doe")
}

sayMyName();
sayMyName();

function addTwoNumbers(num1, num2){
    const sum = num1 + num2;
    console.log("Sum is: ", sum)
    return sum
}

const result = addTwoNumbers(5, 10);
console.log(result)

function loginUserMessage(username){
    return `${username} just logged in`
}

const message = loginUserMessage("john_doe");
console.log(message)

//rest parameter
function calculatePrice(...num){
    return num
}

console.log(calculatePrice(100, 0.2)); // 120

//rest parameter using different approach
function calculatePrice(val1, val2,...num){
    return num
}

console.log(calculatePrice(100, 200, 300, 4000)); // 120

const user = {
    name: 'John',
    price: 500
}
function handleObject(anyObject){
    console.log(`User Name Is ${anyObject.name} and price is ${anyObject.price}`);
}
handleObject(user);
