// Example of if-else statement
const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It is an apple.");
    break;
  case "banana":
    console.log("It is a banana.");
    break;
  case "orange":
    console.log("It is an orange.");
    break;
  default:
    console.log("Unknown fruit.");
}

// Example of truthy and falsy values
const value = 0;

if (value) {
  console.log("The value is truthy.");
} else {
  console.log("The value is falsy.");
}

// Example of ternary operator
const age = 18;
const canVote = age >= 18 ? "Yes, can vote." : "No, cannot vote.";
console.log(canVote);

// Example of nested if-else
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Example of using logical operators
const isMember = true;
const hasCoupon = false;

if (isMember || hasCoupon) {
  console.log("You get a discount!");
} else {
  console.log("No discount available.");
}

const isAdult = true;
const hasID = true;

if (isAdult && hasID) {
  console.log("Entry allowed.");
} else {
  console.log("Entry denied.");
}

// Example of using NOT operator
const isRaining = false;

if (!isRaining) {
  console.log("You don't need an umbrella.");
} else {
  console.log("Take an umbrella with you.");
}

// falsy values: false, 0, "", null, undefined, NaN
// truthy values: everything else
    // "0" , 'False' , [] , {} , function(){} are all truthy values

//Nullish Coalescing Operator (??) example. null and Undefined
let userInput = null;
let defaultValue = "Default Value";

let finalValue = userInput ?? defaultValue;
console.log(finalValue); // Output: Default Value

// val1 = 5 ?? 10; // val1 = 5
// val2 = null ?? 10; // val2 = 10
// val3 = undefined ?? 10; // val3 = 10

//Terniary Operator example
//condition ? true : false

