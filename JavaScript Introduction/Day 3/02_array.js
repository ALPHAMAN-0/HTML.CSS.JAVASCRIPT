const charecter = ['A', 'B', 'C', 'D', 'E'];
const numbers = [1, 2, 3, 4, 5];

charecter.push(numbers)

console.log("Charecter array after push:", charecter); // ['A', 'B', 'C', 'D', 'E', [1, 2, 3, 4, 5]]

charecter.concat(numbers)

console.log("Charecter array after concat:", charecter); // ['A', 'B', 'C', 'D', 'E']

const mergedArray = charecter.concat(numbers);
console.log("Merged array after concat:", mergedArray); // ['A', 'B', 'C', 'D', 'E', 1, 2, 3, 4, 5]

const allCHarecterSpread = [...charecter, ...numbers];
console.log("Merged array using spread operator:", allCHarecterSpread); // ['A', 'B', 'C', 'D', 'E', 1, 2, 3, 4, 5]

const AnotherWay = [1,2,3,[5,6,7,[8,9]]];
const AnotherWayFlattened = AnotherWay.flat(Infinity);

const arrayConvert = Array.from('Hello'); // we can use of keyword also
console.log("Array from string using Array.from():", arrayConvert); // ['H', 'e', 'l', 'l', 'o']