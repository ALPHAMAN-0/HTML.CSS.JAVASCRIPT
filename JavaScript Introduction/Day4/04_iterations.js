// for
for(let i = 0; i < 5; i++) {
    console.log("For Loop iteration: ", i);
}

// while
let j = 0;
while(j < 5) {
    console.log("While Loop iteration: ", j);
    j++;
}

// do...while
let k = 0;
do {
    console.log("Do...While Loop iteration: ", k);
    k++;
} while(k < 5);

// for...of (used for iterating over iterable objects like arrays)
const array = ['a', 'b', 'c', 'd'];
for(const element of array) {
    console.log("For...Of Loop element: ", element);
}

// for...in (used for iterating over object properties)
const obj = {name: 'Alice', age: 25, city: 'Wonderland'};
for(const key in obj) {
    console.log(`For...In Loop key: ${key}, value: ${obj[key]}`);
}

// break statement
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        console.log("Breaking the loop at i =", i);
        break;
    }
    console.log("Loop iteration before break: ", i);
}

// continue statement
for(let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        continue; // skip even numbers
    }
    console.log("Loop iteration with continue (odd numbers only): ", i);
}

// nested loops
for(let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 2; j++) {
        console.log(`Nested Loop - i: ${i}, j: ${j}`);
    }
}

// for of
const object = ['x', 'y', 'z'];
for(const i of object){
    console.log(i);
}

// MAP
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);

for(const [key, value] of myMap){
    console.log(`Key: ${key}, Value: ${value}`);
} 