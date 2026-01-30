const myArray = [10, 20, 30, 40, 50];

// Accessing elements
console.log("First element:", myArray[0]); // 10
console.log("Third element:", myArray[2]); // 30

// Modifying elements
myArray[1] = 25;
console.log("Modified array:", myArray); // [10, 25, 30, 40, 50]

// Adding elements
myArray.push(60);
console.log("Array after push:", myArray); // [10, 25, 30, 40, 50, 60]

// Removing elements
const removedElement = myArray.pop();
console.log("Removed element:", removedElement); // 60
console.log("Array after pop:", myArray); // [10, 25, 30, 40, 50]

// Iterating through the array
console.log("Iterating through the array:");
myArray.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
});

// Finding the length of the array
console.log("Length of the array:", myArray.length); // 5

// Using map to create a new array
const squaredArray = myArray.map(x => x * x);
console.log("Squared array:", squaredArray); // [100, 625, 900, 1600, 2500]

// Using filter to create a new array with elements greater than 20
const filteredArray = myArray.filter(x => x > 20);
console.log("Filtered array (elements > 20):", filteredArray); // [25, 30, 40, 50]

// Using reduce to sum all elements
const sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all elements:", sum); // 155

myArray.unshift(5);
console.log("Array after unshift:", myArray); // [5, 10, 25, 30, 40, 50]
console.log(myArray.indexOf(30)); // 3
console.log(myArray.includes(100)); // false
console.log(myArray.indexOf(100)); // -1


//++++++++++++++++++++++++++++++++++ ++++++++++++++++slice and splice
const newArray = myArray.slice(1, 4);
console.log("Sliced array (index 1 to 3):", newArray); // [10, 25, 30]

myArray.splice(2, 1, 27);
console.log("Array after splice (replace index 2 with 27):", myArray); // [5, 10, 27, 30, 40, 50]