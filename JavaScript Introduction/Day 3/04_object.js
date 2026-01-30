const user = {} // non singleton object

const usr = new Object(); // non singleton object

usr.name = "John"
usr.age = 30

console.log(usr)

const regularUser = {
    age: 25,
    email: "alice@example.com",
    fullName:{
        firstName: "Alice",
        lastName: "Smith"
    }
}
console.log(regularUser)

console.log(regularUser.fullName.firstName )

const obj1 = {
    key1: "value1",
    key2: "value2"
}
const obj2 = {
    key3: "value3",
    key4: "value4"
}
 
const object3 = Object.assign({}, obj1, obj2)

// or we can use 
// const object3 = {...obj1, ...obj2}

console.log(object3) 

const Database = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 25
    }
]

console.log(Database[0].name)

console.log(Object.keys(regularUser)) // returns array of keys
console.log(Object.values(regularUser)) // returns array of values
console.log(Object.entries(regularUser)) // returns array of key value pairs as arrays

