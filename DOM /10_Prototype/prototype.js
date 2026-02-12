// let myName = "John Doe"

// console.log(myName.truelength) 


let myHeros = ["Batman", "Superman", "Spiderman"]

let HeroPower = {
    Batman: "Money",
    Superman: "Super Strength",
    Spiderman: "Spider Sense",

    getSpidermanPower: function(){
        console.log(`Spiderman's power is ${this.Spiderman}`)
    }
     
}

Object.prototype.siam = function(){
    console.log("I am Siam")
}

HeroPower.siam();

// inheritance
const Users={
    name: "John",
    email:"john@example.com"
}

const teacher = {
    name: "Mr. Smith",
    subject: "Mathematics",
}

const TeacheingSupport = {
    isAvailable: true,
}

const TAsupport = {
    makeAssignments: true,
    fullTime :false,
    __proto__:TeacheingSupport
}

teacher.__proto__ = Users;

//.  Modern Way to set prototype
Object.setPrototypeOf(TeacheingSupport, teacher)

let anotherUsername = "Jane Doe"

String.prototype.trueLength = function(){
    console.log(`The true length of ${this} is ${this.length}`)
}

anotherUsername.trueLength()