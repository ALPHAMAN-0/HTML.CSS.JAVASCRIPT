
//this is global scope
let a = 100
if(true){
    let a = 10
   // const b = 20
    //var c = 30
    console.log("block scope:",a);
}

console.log("Global Scope: ", a);


function one(){
     const name = "siam"
     
     function two(){
         const status = "active"
            console.log(`${name} is ${status}`);
     }
    // console.log(status)
        two();
}
one();

// this is work on if else statement
if(true){
    const name = "Siam"
    if (name === "Siam"){
        const status = "active"
        console.log(`${name} is ${status}`);
    }
    //console.log(status);
}
//console.log(name);

//++++++++++++++++++++++++++++++++++++++++ Intersting part ++++++++++++++++++++++++++++++++++++++++
console.log(addDone(6))

function addDone(num){
    return num +1
}

// Hoisting not work here
addOne(7)
const result = function addOne(num){
    return num + 1
}



