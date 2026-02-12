/*
//++++++++++++++Promise 1+++++++++++++++++++++++
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB call or API call
    setTimeout(function()  {
        console.log('Async task is completed');
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log('Promise is consumed');
});
console.log()
//++++++++++++++Promise 2+++++++++++++++++++++++

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
}).then(function() {
    console.log('Promise is consumed');
});
console.log()
// ++++++++++++++Promise 3+++++++++++++++++++++++
const promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({name: 'John', age: 30});  
    }, 1000);

});

promiseTwo.then(function(user) {
    console.log(user);
    console.log(user.name);
    console.log(user.age);
});


//+++++++++++++++Promise 4+++++++++++++++++++++++
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({name: 'John', age: 30});  
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);

});

promiseThree.then(function(user) {
    console.log(user);
}).then(function() {
    console.log('Another then');
});

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({name: 'John', age: 30});  
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
});

async function consumePromise(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}
consumePromise();
*/

// async function getALlusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch(error) {
//         console.log(error);
//     }
// }
// getALlusers();

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });