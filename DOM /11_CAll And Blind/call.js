//Problem: We want to create a user object with username, email and password. The username is set by a function that has complex DB calls. We want to reuse that function to set the username when creating the user object.
// function SetUserName(userName){
//     // Complex DB calls
//     this.userName = userName;
// }

// function createUserName(username, email, password){
//     SetUserName.call(username);

//     this.email = email
//     this.password = password
// }

// const user = new createUserName("John", "example@gmail.com", "password123")
// console.log(user)
//solveing the problem by using call to set the username in the createUserName function

function SetUserName(userName){
    // Complex DB calls
    this.userName = userName;
}
// want to store referance
function createUserName(username, email, password){
    SetUserName.call(this, username);

    this.email = email
    this.password = password
}
const user = new createUserName("John", "example@gmail.com", "password123")
console.log(user)