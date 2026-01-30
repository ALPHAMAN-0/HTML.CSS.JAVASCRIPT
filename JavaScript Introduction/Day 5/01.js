//for of
const arr = [10, 20, 30, 40, 50];

console.log("Using for of loop:");
for (const value of arr) {
  console.log(value);
}

//for in
const obj = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log("Using for in loop:");
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}



//map
const map = new Map();
map.set("name", "Alice");
map.set("age", 25);
map.set("city", "Los Angeles");

console.log("Using for of loop with Map:");
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

const name = ['siam', 'rakib', 'sabbir'];
    
name.forEach((n) => {
    console.log(n);
})

const numbers = [1, 2, 3, 4, 5];
const newNumber = numbers.filter((n) => n > 2);
console.log(newNumber); // [3, 4, 5]