// immediatedly invoked function expression (IIFE)
(function(){
    console.log("IIFE executed");
})();

//()(). 
// global scope pollution avoidance

//using with arrow runction.  semeclone is important for IIFE
(() => {
    console.log("IIFE with arrow function executed");
})();

