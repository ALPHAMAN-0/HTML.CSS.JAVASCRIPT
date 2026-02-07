const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB call or API call
    setTimeout(function()  {
        resolve('Promise One Resolved');
    }, 1000);
});