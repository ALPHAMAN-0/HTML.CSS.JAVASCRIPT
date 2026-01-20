console.log("Hello This is for Learning First to End JavaScript")

const accountId = 123;
let accountEmail = "siam.cse.aiub.learnig";
var accountPassword = "myPassword123";

// accountId = 456; we can not do this beacuse accountId is constant

// Main differecne between let and var
var x = 5;
var x = 10;

let y = 15;
// let y = 20; we can not do this beacuse y is declared with let


console.log(accountId)

console.table([accountEmail, accountPassword]);

//"use strict";  // treat all js code as newer version

//alert()

//symbol => unique

//onject

console.log(typeof null)

let num = "50"
console.log(typeof(num))

let ConvertNumber = Number(num)
console.log(typeof(ConvertNumber))


let qq = "45ac"
let ConvertqQQ = Number(qq)
console.log(typeof(ConvertqQQ))


console.log("1" + 2 + 2)
console.log( 1 + 2 + "5")

console.log(true)
console.log(+true)

console.log(+"")

let health = 100
console.log(health++)
console.log(++health)


console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

console.log("2" == 2)
console.log("2" === 2)
